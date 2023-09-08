import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Company } from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyRef: AngularFirestoreDocument<any>; // Usamos 'any' para el ID dinámico

  constructor(private db: AngularFirestore) {
    // En este caso, no proporcionamos un ID específico aquí
    this.companyRef = this.db.doc<any>('companies');
  }

  getCompanyObservable(id: string): Observable<Company | any> {
    // Usamos el ID dinámico en la referencia
    this.companyRef = this.db.doc<any>(`companies/${id}`);
    return this.companyRef.valueChanges();
  }

  saveCompany(id: string, company: any): void {
    // Usamos el ID dinámico en la referencia
    this.companyRef = this.db.doc<any>(`companies/${id}`);
    this.companyRef.set(company);
  }
}
