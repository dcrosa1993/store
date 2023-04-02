import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
import { StoreServiceService } from 'src/app/services/store/store-service.service';
import { Observable } from 'rxjs';
import { AddServiceService } from 'src/app/services/store/add-service.service';
import { BasicCardComponent } from 'src/app/shared/basic-card/basic-card.component';
import { ServiceInput } from 'src/app/models/service-input';
@Component({
  selector: 'app-add-service',
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
  templateUrl: './add-service.component.html',
})
export class AddServiceComponent {
  protected error$!: Observable<string | undefined>;

  protected loading$!: Observable<boolean>;

  public formGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _logic: AddServiceService,
    private dialogRef: MatDialogRef<AddServiceComponent>
  ) {
    this.formGroup = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      minOrder: ['', [Validators.required]],
      maxOrder: ['', [Validators.required]],
      speed: ['', [Validators.required]],
      price: ['', [Validators.required]],
      available: [true, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.error$ = this._logic.error$;
    this.loading$ = this._logic.loading$;
    this._logic.success$.subscribe((_) => {
      this.dialogRef.close(true);
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this._logic.addService(this.formGroup.value);
    }
  }
}
