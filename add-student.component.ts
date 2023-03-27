import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  {
  addStudent: any;
  constructor(private fb:FormBuilder,
   private routes:Router ,
    private studentservice:StudentsService){
      this.addStudent = fb.group(
        {
          // id1:['',Validators.required],
            title:['',Validators.required],
            description:['',Validators.required],
            dueDate:['',Validators.required],
            
      }
        
      )
     }

 onSubmit(){
  console.log(this.addStudent.value);
  this.studentservice.addStudent(this.addStudent.value).subscribe((data:any)=>
  {
    console.log(data);
    this.routes.navigate(['/list-student'])
  })
 }
 
}
