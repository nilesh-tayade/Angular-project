import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup


  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

createRegisterForm()
{
    this.registerForm=this.fb.group({
      id:[''],
      empname:[''],
      email:[''],
      mobileno:[''],
      designation:[''],
      username:[''],
      password :['']
    })
}

  onSubmit()
  {
alert("redirecting to login");
this.router.navigate(['login']);
  }

}
