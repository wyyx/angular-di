import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CatComponent } from './cat/cat.component'

const routes: Routes = [
	{
		path: '',
		component: CatComponent
	}
]

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class Lazy1RoutingModule {}
