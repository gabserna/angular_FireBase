import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from '../contact.service';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  
  public contacts$: Observable<Contact[]> | undefined;
  public companies$: Observable<Contact[]>;

  constructor(
    private contactService: ContactService,
    private companyService: CompanyService) {
      this.companies$ = this.companyService.getCompaniesObservable();
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(companyId: string | null = null) {
    this.contacts$ = this.contactService.getContactsObservable(companyId);
  }
}
