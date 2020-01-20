import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp-r',
  templateUrl: './comp-r.component.html',
  styleUrls: ['./comp-r.component.css']
})
export class CompRComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
   reactive:FormGroup;
   submitted=false;
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   mobileno="^[7-9][0-9]{9}$";
    name="^[a-zA-Z ]*$";
    date=new Date().toISOString().slice(0,10);
  ngOnInit() {
    this.reactive=this.fb.group({
      fname:['',[Validators.required,Validators.pattern(this.name)]],
      lname:['',[Validators.required,Validators.pattern(this.name)]],
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      mobile:['',[Validators.required, Validators.pattern(this.mobileno)]],
      date:['',Validators.required]
    })
  }
get f(){ return this.reactive.controls;}

onSubmit() {
  this.submitted = true;
  if (this.reactive.invalid) {
      return;
  }
}
}
