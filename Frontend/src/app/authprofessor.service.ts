import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthprofessorService {
  professor={
    email:'',
  password:''}

  server_address:string='/api';
  // server_address:string="http://localhost:3000"; for development

  constructor(private http:HttpClient) { }

  
  newUser(item:any)
  {   
    return this.http.post(`${this.server_address}/professor/signup`,{"professor":item})
   
  }

  loginUser(user:any)
  {
    this.professor=user;
    return this.http.post<any>(`${this.server_address}/professor/login`, user)
  }

  getprofile(){

    return this.http.get(`${this.server_address}/professor/profile/`+this.professor.email)
  }

 
}
