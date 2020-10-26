import { Injectable } from '@angular/core';

import {  map } from 'rxjs/operators';

import { Http, Response} from '@angular/http';


@Injectable()
export class ProductService {
  private _albumUrl: string = "../assets/album.json";

  constructor(private _http: Http){}

  //By default, a method may return anything because it can infer that it is going to be of type Object<any>
  getAlbum(id: number)  {
    
    return this._http.get(this._albumUrl).pipe(
      map((response:Response) => response.json()) 

      )
    }


}
