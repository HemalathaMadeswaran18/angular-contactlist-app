import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  public add(a:number, b:number): number{
    return a+b;

  }

  public sub(a:number, b:number): number{
    return a-b;

  }

  public mul(a:number, b:number): number{
    return a*b;

  }

  public fact(num:number): number{
    let fct=1;
    return fct;
  }
  
}
