import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesDirective } from './directives/times.directive';
import { DividerComponent } from './components/divider/divider.component';

@NgModule({
  declarations: [
    TimesDirective,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimesDirective,
    DividerComponent
  ]
})
export class SharedModule { }
