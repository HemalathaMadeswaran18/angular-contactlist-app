import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  public result:number =0;

  public users: any;
  constructor(private Calcservice: CalculatorService, private dataService: DataService){
  }

  ngOnInit():void{
    console.log(this.Calcservice.add(5,6));
    console.log(this.Calcservice.sub(5,6));
    console.log(this.Calcservice.fact(5));
    this.dataService.GetUsers().subscribe(data=>this.users = data);
    this.dataService.GetUsers().subscribe(data=>console.log(data));
  }

  

  Calculate(val:string){
this.result=this.Calcservice.fact(parseInt(val));
  }
  
}


