import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { IContact } from '../icontact';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent {

  constructor(private service: ContactService){}


public contacts :Array<IContact>=[];
public contact:IContact={} as IContact;
selectedContact: IContact | undefined;

  ngOnInit(){
    this.service.GetContacts().subscribe(data=>this.contacts=data);
    
  }


  addContact(){
    this.service.AddContact(this.contact).subscribe((data:any)=>
    this.contacts.push(data));
  }

  deleteContact(id: string) {
    this.service.DeleteContact(id).subscribe(() => {
      // Contact deleted successfully, update the list
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    });
  }

  updatetodbContact() {
    this.service.UpdateContact(this.contact.id, this.contact).subscribe(updatedContact => {
      // Update the contact in the contacts array with the updated data
      const index = this.contacts.findIndex(c => c.id === updatedContact.id);
      if (index !== -1) {
        this.contacts[index] = updatedContact;
      }
    });
  }

  updateContact(contact: IContact) {
    // Populate the input fields with the selected contact's values
    this.contact = { ...contact };
  }

  clear(){
    this.contact = { id: '',
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    phone: ''};
  }
  
  
}
