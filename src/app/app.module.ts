import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { Eager1Module } from './eager1/eager1.module'
import { Eager2Module } from './eager2/eager2.module'
import { AppRoutingModule } from './app-routing.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
	declarations: [ AppComponent, PageNotFoundComponent ],
	imports: [ BrowserModule, Eager1Module, Eager2Module, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
