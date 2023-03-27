import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  addStudent(student:any){
     return this.http.post('http://localhost:8080/student/add-student',student)
  }
 
  listStudent(){
    return this.http.get('http://localhost:8080/student/');
 }

 deleteStudent(id:any){
  return this.http.delete('http://localhost:8080/student/del-student/'+id);
}
singleStudent(id:any){
  return this.http.get('http://localhost:8080/student/edit-student/'+id);
}

updateStudent(id:any,student:any){
  return this.http.put('http://localhost:8080/student/update-student/'+id,student);
}
}
