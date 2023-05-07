import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from 'src/app/shared/sign-out/sign-out.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SignOutComponent, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
