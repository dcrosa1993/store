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
  templateUrl: './edit-service.component.html',
})
export class EditServiceComponent {
  protected error$!: Observable<string | undefined>;

  protected loading$!: Observable<boolean>;

  public formGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _logic: EditServiceService,
    private _getOneService: GetOneServiceService,
    private dialogRef: MatDialogRef<EditServiceComponent>,
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
    this.error$ = merge(this._logic.error$, this._getOneService.error$);
    this.loading$ = merge(this._logic.loading$, this._getOneService.loading$);
    this._logic.success$.subscribe((_) => {
      this.dialogRef.close(true);
    });
    this._getOneService.success$.subscribe((_) => {
      this.formGroup.setValue({
        name: _.name,
        description: _.description,
        minOrder: _.minOrder,
        maxOrder: _.maxOrder,
        speed: _.speed,
        price: _.price,
        available: _.available,
      });
      this.formGroup.enable();
    });
    this._getOneService.getOneServices(this.data);
  }

  submit() {
    if (this.formGroup.valid) {
      this._logic.editService(this.formGroup.value, this.data);
    }
  }
}
