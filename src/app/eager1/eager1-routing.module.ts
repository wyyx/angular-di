import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BirdComponent } from './bird/bird.component'

const routes: Routes = [
	{
		path: 'eager1',
		component: BirdComponent
	}
]

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class Eager1RoutingModule {}
