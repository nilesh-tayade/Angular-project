import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private  baseUrl ="http://localhost:8080/api/v1/students/";
  constructor(private http:HttpClient) { }
  student:Student={
    id:null,
    name:"",
    city:"",
  course:""
  };

  getStudents():Observable<Student[]>
  {
    return this.http.get<Student[]>(this.baseUrl);
  }

  saveStudent(student:Student)
  {
   return this.http.post(this.baseUrl,student);
  }

  deleteStudent( id:number):Observable<Object>
  {
return this.http.delete<Object>(this.baseUrl+id);
  }

  getSingleStudents(id:number):Observable<Student>
  {
    return this.http.get<Student>(this.baseUrl+id);
  }


  updateStudent(student:Student)
  {
   return this.http.put(this.baseUrl+student.id,student);
  }


}
