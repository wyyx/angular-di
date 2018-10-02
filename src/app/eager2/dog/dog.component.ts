import { Component, OnInit } from '@angular/core'
import { UserService } from '../../eager1/user.service'

@Component({
	selector: 'app-dog',
	templateUrl: './dog.component.html',
	styleUrls: [ './dog.component.css' ]
})
export class DogComponent implements OnInit {
	bg: string = 'grey'

	constructor(userService: UserService) {
		this.bg = userService.bg
	}
	ngOnInit() {}
}
