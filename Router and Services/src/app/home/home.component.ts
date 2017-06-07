import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, Request, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {MyserviceService} from '../services/myservice.service';


@Component({

selector: 'app-home',

templateUrl: './home.component.html',

styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {

constructor(private myserviceService : MyserviceService){}

ngOnInit() {

//setTimeout(() => this.updateName(), 3000);

//setTimeout(() => this.hideChild(), 4000);

this.myserviceService.getJSonResponse().subscribe(

data =>{

alert( data.name);

},

error =>{

alert("error");



});

//alert("Testing");

}

updateName() {

// this.name = 'Bob';

}
}

