import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private authService : AuthService) {}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable <boolean> {
   return this.authService.isAuthenticated(localStorage.getItem('token')).pipe(map((data:any)=>{
    console.log(data.isAuthenticated);
    if(data.isAuthenticated){
    

    
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

   }))
  }

}