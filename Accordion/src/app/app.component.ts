import { Component } from '@angular/core';
import {AccordionModule} from "ng2-accordion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private textValue = '';
  private log: string ='';

  private logText(value: string): void {
  this.log = `'${value}'\n`
    }


   private list = [
        {id:1, name:'select one'},
        { id: 2, name: 'Ford' },
        { id: 3, name: 'Chrysler' },
        { id: 4, name: 'Toyota' }
    ];
    private current: number = 1;
    private log1: string ='';

    private logDropdown(id: number): void {
        const NAME = this.list.find( (item: any) => item.id == id ).name;
        this.log1 = `${NAME}\n`
    } 

    private log2: string ='';

    private logCheckbox(element: HTMLInputElement): void {
        this.log2 = `${element.checked ? 'True' : 'False'}\n`
    }

     private log3: string ='';

      private logText1(value: string): void {
      this.log3 = `${value}`
        }

    footerFlag: boolean=false;
    onClick(){
      this.footerFlag = true;
    }

}
