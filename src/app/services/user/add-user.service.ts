import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  exhaustMap,
  map,
  merge,
  Observable,
  partition,
  shareReplay,
  Subject,
  tap,
} from 'rxjs';
import { Service } from 'src/app/models/service';
import { ServiceInput } from 'src/app/models/service-input';
import { User } from 'src/app/models/user';
import { UserInput } from 'src/app/models/user-input';
import { SignUpCredentials } from 'src/app/shared/models/auth/sign-up-credentials';
import { Result } from 'src/app/shared/models/exports';
import { AccountService } from '../account-service/account.service';
import { LoggingService } from '../logging/loggin.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  public error$: Observable<string | undefined>;
  public success$: Observable<User | undefined>;
  public loading$: Observable<boolean>;
  public result$: Observable<Result<User>>;
  private submit$: Subject<UserInput> = new Subject();
  private email!: string;

  constructor(
    private service: UserServiceService,
    private _loggingService: LoggingService,
    private _router: Router
  ) {
    this.result$ = this.submit$.pipe(
      exhaustMap((data) => this.service.addUser(data)),
      shareReplay(1)
    );
    const [success$, error$] = partition(this.result$, (value) =>
      value.result ? true : false
    );

    this.success$ = success$.pipe(
      map((value) => value.result),
      tap((value) => {
        this._loggingService.log(value);
      }),
      shareReplay(1)
    );

    this.error$ = error$.pipe(
      map((value) => value.error),
      tap((value) => this._loggingService.log(value)),
      shareReplay(1)
    );

    const end$ = merge(this.success$, this.error$);

    this.loading$ = merge(
      this.submit$.pipe(
        map((v) => true),
        tap(() => this._loggingService.log('start'))
      ),
      end$.pipe(
        map((v) => false),
        tap(() => this._loggingService.log('end'))
      )
    ).pipe(shareReplay(1));
  }
  ngOnDestroy(): void {
    this.submit$.complete();
  }

  /** This method begins the registration process of a new committee user
  @param value: SignUpCredials type object, contains the necessary registration data to register a new committee user
  */
  addUser(value: UserInput) {
    this.submit$.next(value);
  }
}
