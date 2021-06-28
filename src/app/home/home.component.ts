import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }
msg:"";
  users:User[]

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
      console.log("All Users : "+this.users);
      
    })
  }

}
