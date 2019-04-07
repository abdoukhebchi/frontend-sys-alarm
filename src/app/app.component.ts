import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent implements OnInit {

  isLinear = true ;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  forthFormGroup : FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      idCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      nomCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      prenomCtrl: ['', Validators.required]
    });
   
  }
}
    
