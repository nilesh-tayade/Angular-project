import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @ViewChild(StudentListComponent) studentListComponent :StudentListComponent
  constructor(public studentService:StudentService,private router:Router) { }
msg:string=""


  ngOnInit(): void {
  }

  saveStudent()
  {
        if(this.studentService.student.id==null)
        {
          this.studentService.saveStudent(this.studentService.student).subscribe(data=>{
            console.log(data);
            this.reloadCurrentRoute();
          })
          this.msg="Student saved Successfully";
        }

        if(this.studentService.student.id!=null)
        {
          this.studentService.updateStudent(this.studentService.student).subscribe(data=>{
            console.log(data);
            this.reloadCurrentRoute();          })
          this.msg="Student Updated Successfully";

        }
    
}

reloadCurrentRoute() {
  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
  });
}


  dismiss()
  {
    this.msg="";
  }

}
