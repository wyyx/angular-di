import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'

@Component({
	selector: 'app-bird',
	templateUrl: './bird.component.html',
	styleUrls: [ './bird.component.css' ]
})
export class BirdComponent implements OnInit {
	bg: string = 'grey'

	constructor(userService: UserService) {
		this.bg = userService.bg
	}

	ngOnInit() {}
}
