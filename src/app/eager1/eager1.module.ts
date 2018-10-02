import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Eager1RoutingModule } from './eager1-routing.module';
import { BirdComponent } from './bird/bird.component';

@NgModule({
  imports: [
    CommonModule,
    Eager1RoutingModule
  ],
  declarations: [BirdComponent]
})
export class Eager1Module { }
