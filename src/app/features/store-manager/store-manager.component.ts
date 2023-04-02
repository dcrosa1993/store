import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';
import { GetAllServicesService } from 'src/app/services/store/get-all-services.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { LoadingBarComponent } from 'src/app/shared/loading-bar/loading-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { ViewServiceComponent } from './view-service/view-service.component';
@Component({
  selector: 'app-store-manager',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ErrorMsgComponent,
    LoadingBarComponent,
    MatIconModule,
    AddServiceComponent,
    MatDialogModule,
  ],
  templateUrl: './store-manager.component.html',
})
export class StoreManagerComponent {
  protected displayedColumns: string[] = [
    'name',
    'minOrder',
    'maxOrder',
    'speed',
    'price',
    'available',
    'operations',
  ];
  protected loading$!: Observable<boolean>;
  protected error$!: Observable<string | undefined>;
  protected success$!: Observable<Service[]>;

  constructor(
    private _logic: GetAllServicesService,
    protected dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.success$ = this._logic.success$;
    this.error$ = this._logic.error$;
    this.loading$ = this._logic.loading$;
    this.getPetitions();
  }

  private getPetitions() {
    this._logic.getAllServices();
  }

  addDialog() {
    const dialogRef = this.dialog.open(AddServiceComponent, {
      //height: '400px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe((_) => {
      _ && this.getPetitions();
    });
  }

  editDialog(id: string) {
    const dialogRef = this.dialog.open(EditServiceComponent, {
      //height: '400px',
      width: '800px',
      data: id,
    });

    dialogRef.afterClosed().subscribe((_) => {
      _ && this.getPetitions();
    });
  }

  viewDialog(id: string) {
    this.dialog.open(ViewServiceComponent, {
      //height: '400px',
      width: '800px',
      data: id,
    });
  }
}
