import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,  // Correct - declares the component
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule,
    // Remove NavbarComponent from here - components don't go in imports
  ],
  exports: [
    NavbarComponent,  // Correct - exports the component
    SectionHeaderComponent,
    RouterModule
  ]
})
export class CoreModule { }
