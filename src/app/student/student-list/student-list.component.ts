import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

students :Student[];
msg:string="";

  ngOnInit(): void {
    this.getStudents();
  }

getStudents()
{
this.studentService.getStudents().subscribe(data=>{
  this.students=data;
})
}

delete(id:number)
{
this.studentService.deleteStudent(id).subscribe(data=>{
 console.log(data)
 this.getStudents();
})
this.msg="Student Deleted Successfully"
}


edit(id:number)
{
this.studentService.getSingleStudents(id).subscribe(data=>{
  this.studentService.student=data
})
}

dismiss()
{
  this.msg="";
}

}
