import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { forbiddenNameValidator } from '../forbidden-name.validator';
import { state } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // author = new FormControl();

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }
  
  name!: string;
  age!: number;
  day!: number;

  profileForm = this.fb.group({
    name: ['itvedant', {
      validators: [Validators.required, Validators.minLength(3), forbiddenNameValidator(new RegExp(/bob/, 'i'))]
    }],
    email: ['', {
      validators: [Validators.required, Validators.email]
    }],
      
    mobile: [],
    address: this.fb.group({
      city: [],
      state: [],
      country: []
    })
  });
  
  submitProfile(): void {
    console.log(this.profileForm.value);
  }

  get nameCtrl(): FormControl {
    return this.profileForm.get('name') as FormControl;
  }

  get emailCtrl(): FormControl {
    return this.profileForm.get('email') as FormControl;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // //console.log(params);
      // console.log('Name: ' + params['name']);
      // console.log('Age: ' + params['age']);
      this.name = params['name'];
      this.age = params['age'];
      this.day = params['day'];
    })
  }
}
