import { Component, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.css']
})
export class MyResultComponent implements OnChanges, OnInit {
  //@Input indicates that the variable will get the 
  //value from the parent component
  @Input()
  num1!:number;
  @Input()
  num2!:number;

  @Output()
  resultEmit = new EventEmitter<string>();

  result = 0;

  //this hook method will be called automatically whenever the
  //value of the input property is changed
  //this is first lifecycle hook to be called
  //this method is called every time the value of input variable is changed
  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngonchange is called');
      this.result = this.num1 + this.num2;
  }

  //this method is called after ngOnChanges
  //this method is called only once when the component is created
  ngOnInit(): void {
      console.log('ngoninit is called');
      this.result = 0;
  }

  sendResult(){
    console.log("button clicked");

    //child component emit the value for the parent component
    this.resultEmit.emit("Result = " + this.result);
  }
}
