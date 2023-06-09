import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  addStudent: any;
  id: any;
  constructor(private fb:FormBuilder,
   private routes:Router ,
    private studentservice:StudentsService,
    private url:ActivatedRoute){
      this.addStudent = fb.group(
        {
          // id1:['',Validators.required],
            title:['',Validators.required],
            description:['',Validators.required],
            dueDate:['',Validators.required],
            
      }
        
      )
     }

     ngOnInit(): void{
      this.id =this.url.snapshot.params['id'];
      console.log(this.id);
      this.studentservice.singleStudent(this.id).subscribe(data=>{
        this.addStudent.patchValue(data);
      })
      
     }

 onSubmit(){
  console.log(this.addStudent.value);
  this.studentservice.updateStudent( this.id,this.addStudent.value).subscribe((data:any)=>
  {
    console.log(data);
    this.routes.navigate(['/list-student'])
  })
 }
 
}


