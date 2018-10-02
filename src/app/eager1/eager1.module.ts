import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Eager1RoutingModule } from './eager1-routing.module'
import { BirdComponent } from './bird/bird.component'
import { UserService } from './user.service'

@NgModule({
	imports: [ CommonModule, Eager1RoutingModule ],
	providers: [ UserService ],
	declarations: [ BirdComponent ]
})
export class Eager1Module {}

console.log('***** eager1 module loading *****')
