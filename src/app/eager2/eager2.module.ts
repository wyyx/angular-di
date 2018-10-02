import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Eager2RoutingModule } from './eager2-routing.module'
import { DogComponent } from './dog/dog.component'

@NgModule({
	imports: [ CommonModule, Eager2RoutingModule ],
	declarations: [ DogComponent ]
})
export class Eager2Module {}

console.log('***** eager2 module loading *****')
