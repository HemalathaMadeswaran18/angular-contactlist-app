import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

register(user:IUser){
  return this.http.post('http://localhost:9000/auth/register',user);
}

login(credentials:any){
  return this.http.post('http://localhost:9000/auth/login',credentials);
}

isAuthenticated(token:any){

  
  return this.http.post('http://localhost:9000/auth/isAuthenticated',{},{
    headers:{
      Authorization:`Bearer ${token}`
    }
  });
}

}
