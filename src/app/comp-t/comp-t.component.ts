import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-t',
  templateUrl: './comp-t.component.html',
  styleUrls: ['./comp-t.component.css']
})
export class CompTComponent implements OnInit {
  date1=new Date().toISOString().slice(0,10);
  constructor() { }
  model: any = {};
  ngOnInit() {
  }

}
