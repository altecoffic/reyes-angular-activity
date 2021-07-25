import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
//declare reactive form
  updateForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl('')


  })

  constructor() { }

  ngOnInit(): void {
  }

  updateDevice(){
    console.log(this.updateForm.value);
  }

}
