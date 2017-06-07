import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
  inputs: ['parentValue',
            'parentValue1',
            'parentValue2'],
  outputs: ['childChanged',
             'childChanged1',
             'childChanged2' ]
})
export class ChildcomponentComponent {
  parentValue: string;
  parentValue1: any;
  parentValue2: string;

  childChanged = new EventEmitter<string>();
  childChanged1 = new EventEmitter();
  childChanged2 = new EventEmitter<string>();

 onChange(value: string){
   this.childChanged.emit(value);

  } 
  onChange1(value: string){
   this.childChanged1.emit(value);
      
    }
  onChange2(value: string){
   this.childChanged2.emit(value);
      
  } 
}
