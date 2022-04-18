import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
  student={
    email:'',
  password:''}
  server_address:string='/api';
  // server_address:string="http://localhost:3000"; for development

  newUser(item:any)
  {   

    return this.http.post(`${this.server_address}/users/signup`,{"student":item})
   
  }

  loginUser(user:any)
  {
    this.student=user;
    return this.http.post<any>(`${this.server_address}/users/login`, user)
  }

  getstudentprofile(){
    return this.http.get(`${this.server_address}/users/studentprofile/`+this.student.email)
  }
  StudentloggedIn(){
    return !!localStorage.getItem('token1')
  }

  ProfessorloggedIn(){
    return !!localStorage.getItem('token')
  }
}
