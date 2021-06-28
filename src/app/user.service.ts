import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }

  baseUser="http://localhost:3000/user/";


  getUsers():Observable<User[]>
  {
    console.log("In Get User service ");
    
return this.http.get<User[]>(this.baseUser);
  }

  getUserById(id:number):Observable<User>
  {
return this.http.get<User>(this.baseUser+id);
  }

  saveUser(user :User)
  {
return this.http.post(this.baseUser,user);            
  }

  deleteById(id:number):Observable<Object>
  {
return this.http.delete<Object>(this.baseUser+id);
  }

}
