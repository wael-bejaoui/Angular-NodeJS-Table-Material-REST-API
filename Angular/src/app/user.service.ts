import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './user';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl='http://localhost:3000/node';
  constructor(private _http:HttpClient) { }
  getUsers(){
    return this._http.get<User[]>(this.apiUrl);
  }
}
