import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:AuthService){}

  Login(emailaddress:string,pass:string){
    this.service.login({email:emailaddress,password:pass}).subscribe((data:any)=>{
console.log(data);
localStorage.setItem('token',data.access_token);
console.log(localStorage.getItem('token'));


    });



  }

  gettoken(){
    return this.service.isAuthenticated(localStorage.getItem('token')).pipe(map((data:any)=>{
      console.log(data.isAuthenticated);
      if(data.isAuthenticated){
        console.log("truely authenticated");
        //take to new page
      }
      else{
        console.log("could not authenticate");
      }
    }));

  

  
  }



}
