import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from 'src/app/shared/product/product.component';
import { Observable } from 'rxjs';

import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';
import { LoadingBarComponent } from 'src/app/shared/loading-bar/loading-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Service } from 'src/app/models/service';
import { GetAllServicesService } from 'src/app/services/store/get-all-services.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    ErrorMsgComponent,
    LoadingBarComponent,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './store.component.html',
})
export class StoreComponent {
  protected displayedColumns: string[] = [
    'name',
    'minOrder',
    'maxOrder',
    'speed',
    'price',
    'operations',
  ];
  protected loading$!: Observable<boolean>;
  protected error$!: Observable<string | undefined>;
  protected success$!: Observable<Service[]>;

  constructor(private _logic: GetAllServicesService) {}

  ngOnInit(): void {
    this.success$ = this._logic.success$;
    this.error$ = this._logic.error$;
    this.loading$ = this._logic.loading$;
    this.getPetitions();
  }

  private getPetitions() {
    this._logic.getAllServices();
  }
}
