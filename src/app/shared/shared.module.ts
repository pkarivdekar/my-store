import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { HighlightDirective } from './highlight.directive';




@NgModule({
  declarations: [
    ConvertToSpacePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ConvertToSpacePipe,
    HighlightDirective,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
