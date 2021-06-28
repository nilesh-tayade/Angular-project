import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,public studentService:StudentService,public router:Router) { }

  ngOnInit(): void {
    this.createEmployeeForm();
  }

 
  employeeForm:FormGroup

  createEmployeeForm()
  {
    this.employeeForm=this.fb.group({
    name:[''],
      city:[''],
      course:['']
    })
  }

addEmployee()
{
  this.studentService.saveStudent(this.studentService.student).subscribe(data=>{
    console.log(data);
  })
}


  onSubmit()
  {
    console.log(this.employeeForm.value);
    this.studentService.student.name=this.employeeForm.controls.name.value;
    this.studentService.student.city=this.employeeForm.controls.city.value;
    this.studentService.student.course=this.employeeForm.controls.course.value;
    console.log("studentService : "+this.studentService.student.city);
    this.addEmployee();
this.router.navigate(['header/employee']);
  }


}   
