import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  moduleId:module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	profile:any;
	constructor (private auth:AuthService ){
	this.profile =JSON.parse(localStorage.getItem('profile'))
	console.log(this.profile)
	}
  ngOnInit() {
    //console.log(localStorage.getItem('id_token'))
    //console.log(localStorage.getItem('profile'))

  }

}








