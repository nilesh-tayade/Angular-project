import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'city', 'course','edit','delete'];

  constructor(private studentService:StudentService) {
    this.getEmployees();
   }

  ngOnInit(): void {
    this.getEmployees();
  }

employees:Student[];

getEmployees()
{
this.studentService.getStudents().subscribe(data=>{
  console.log(data);
  this.employees=data;
})
}

edit(id:number)
{

}

delete(id:number)
{
this.studentService.deleteStudent(id).subscribe(data=>{
  console.log(data);
  this.getEmployees();
})
}



}
