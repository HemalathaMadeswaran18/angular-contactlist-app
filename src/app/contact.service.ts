import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from './icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient ) { }

  //define own data structure 



  GetContacts():Observable<IContact[]>{
    return this.http.get<IContact[]>('http://localhost:3000/contacts');
  }



//   //get a single contact 
//   GetContact(id:String) :Observable<IContact>{
//     return this.http.get(`http://localhost:3000/contacts/${id}`);
// }


//add a new contact 
AddContact(contact:IContact){
  return this.http.post('http://localhost:3000/contacts',contact);
}

//delet contact 
 DeleteContact(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/contacts/${id}`);
  }

  UpdateContact(id: string, updatedContact: IContact): Observable<IContact> {
    return this.http.put<IContact>(`http://localhost:3000/contacts/${id}`, updatedContact);
  }

}
