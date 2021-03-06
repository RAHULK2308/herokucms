import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class StudentService {
  server_address:string='/api';
  // server_address:string="http://localhost:3000"; for development

  constructor(private http:HttpClient) { }

  applyCourse(items:any){
    // console.log(items);
    return this.http.post(`${this.server_address}/students/register`,{"form":items})
    .subscribe(
      err=>{
        console.log(err);
      }
    )
  }

  appliedstudents(){
    return this.http.get(`${this.server_address}/students`)
  }
  accept(user:any){
   
   return this.http.put(`${this.server_address}/students/update`,user)
   
  }

  reject(user:any){
   
    return this.http.put("http://localhost:3000/students/reject",user)
    
   }

   acceptedstudentlist(){
     return this.http.get("http://localhost:3000/students/acceptedlist");
   }

   getToken(){
    return localStorage.getItem('token') 
  }
}

