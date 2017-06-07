import { Injectable } from '@angular/core';
import {Http, Response, Headers, Request, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MyserviceService {

constructor(private _http:Http) { }

getJSonResponse(){
let jsonUrl = "../../assets/stubs/test.json";
return this._http.get(jsonUrl)
.map((res: Response)=> res.json());
  // return this.http.get(jsonUrl)
  //    .map((res:Response) => res.json())
}

}
