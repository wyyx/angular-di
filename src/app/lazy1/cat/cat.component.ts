import { Component, OnInit } from '@angular/core'
import { UserService } from '../../eager1/user.service'

@Component({
	selector: 'app-cat',
	templateUrl: './cat.component.html',
	styleUrls: [ './cat.component.css' ]
})
export class CatComponent implements OnInit {
	bg: string = 'grey'

	constructor(userService: UserService) {
		this.bg = userService.bg
	}

	ngOnInit() {}
}
