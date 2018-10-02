import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DogComponent } from './dog/dog.component'

const routes: Routes = [
	{
		path: 'eager2',
		component: DogComponent
	}
]

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class Eager2RoutingModule {}
