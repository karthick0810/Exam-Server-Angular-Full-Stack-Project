import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

// let baseUrl= 'http://localhost:8081';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

// add user

public addUser(user:any){
return this.http.post(`${baseUrl}/user/`, user);
}

}
