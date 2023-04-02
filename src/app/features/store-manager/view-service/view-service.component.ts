import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { LoadingBarComponent } from 'src/app/shared/loading-bar/loading-bar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Observable, merge } from 'rxjs';
import { BasicCardComponent } from 'src/app/shared/basic-card/basic-card.component';
import { EditServiceService } from 'src/app/services/store/edit-service.service';
import { GetOneServiceService } from 'src/app/services/store/get-one-service.service';
import { Service } from 'src/app/models/service';
@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ErrorMsgComponent,
    LoadingBarComponent,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BasicCardComponent,
    MatCheckboxModule,
  ],
  templateUrl: './view-service.component.html',
})
export class ViewServiceComponent {
  protected error$!: Observable<string | undefined>;
  protected success$!: Observable<Service | undefined>;
  protected loading$!: Observable<boolean>;

  public formGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _getOneService: GetOneServiceService,
    private dialogRef: MatDialogRef<ViewServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.formGroup = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      minOrder: ['', [Validators.required]],
      maxOrder: ['', [Validators.required]],
      speed: ['', [Validators.required]],
      price: ['', [Validators.required]],
      available: [false, [Validators.required]],
    });
    this.formGroup.disable();
  }
  ngOnInit(): void {
    this.error$ = this._getOneService.error$;
    this.loading$ = this._getOneService.loading$;
    this.success$ = this._getOneService.success$;

    this._getOneService.getOneServices(this.data);
  }
}
