import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  server_address:string='/api';
  // server_address:string="http://localhost:3000"; for development

  constructor(private http:HttpClient,private router:Router) { }
  newCourse(items:any){
    // console.log(items);
    return this.http.post(`${this.server_address}/course/add`,{"course":items})
    .subscribe(
      err=>{
        console.log(err);
      }
    )
  }

  getCourse(){
    return this.http.get(`${this.server_address}/course`)
  }
  sendmailto(items:any){
    
    return this.http.post(`${this.server_address}/students/sendmail`,{"course":items})
     
  }
}
