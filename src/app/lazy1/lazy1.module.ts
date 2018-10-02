import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Lazy1RoutingModule } from './lazy1-routing.module'
import { CatComponent } from './cat/cat.component'

@NgModule({
	imports: [ CommonModule, Lazy1RoutingModule ],
	declarations: [ CatComponent ]
})
export class Lazy1Module {}

console.log('***** lazy1 module loading *****')
