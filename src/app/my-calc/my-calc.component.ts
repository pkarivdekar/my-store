import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calc',
  templateUrl: './my-calc.component.html',
  styleUrls: ['./my-calc.component.css']
})
export class MyCalcComponent {
  //! indicate that the value will be assigned later
  number1!:number;
  number2!:number;

  getResult(event:any){
    console.log('Message from the child: ' + event);
  }
}
