import { Component } from '@angular/core';
import { IUser } from '../iuser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user:IUser = {} as IUser;

  constructor(private service:AuthService) {}

  RegisterUser(){
    this.service.register(this.user).subscribe((data:any)=>{
      console.log(data)
        })
  }
}
