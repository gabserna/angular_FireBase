import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Company } from '../../models/company';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css'],
})
export class CompanyEditComponent implements OnInit {
  // company$: Observable<Company>;
  company$: Observable<Company | undefined> = new Observable<Company | undefined>();


  constructor(private db: AngularFirestore, private companyService: CompanyService) {
    this.company$ = this.db
      .doc<Company>('companies/6niW63kpjzCXdEt28JXE')
      .valueChanges();
  }
  

  ngOnInit() {}

  saveCompany(company: { name: any; }) {
    // this.companyService.saveCompany(company);
    this.companyService.saveCompany({name: company.name});
  }

  editCompany(company: { phone: string; }) {
    this.companyService.editCompany({phone: '123-456-7890'});
  }

  deleteCompany() {
    this.companyService.deleteCompany();
  }
  
}
