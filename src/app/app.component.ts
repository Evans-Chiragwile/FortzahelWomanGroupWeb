import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from "./core/layout/main-layout/main-layout.component";

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MainLayoutComponent],
})
export class AppComponent {}
