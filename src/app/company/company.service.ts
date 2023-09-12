import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable, throwError, catchError, from, map, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyRef: AngularFirestoreDocument<Company>;
  private companiesRef: AngularFirestoreCollection<Company>;

  constructor(private db: AngularFirestore) {
    this.companyRef = this.db.doc<Company>('companies/UIn2THTNAql5xDec9CpL');
    this.companiesRef = this.db.collection<Company>('companies');
  }

  getCompaniesObservable(): Observable<Company[]> {
    return this.companiesRef.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<Company>[]): Company[] => {
          return items.map((item: DocumentChangeAction<Company>): Company => {
            return {
              id: item.payload.doc.id,
              name: item.payload.doc.data().name,
              phone: item.payload.doc.data().phone
            };
          });
        }),                           // <-- don't forget the new comma here
        catchError(this.errorHandler) // <-- new
      );
  }

  getCompanyObservable(id: string | null): Observable<Company | undefined> {
    return this.db.doc<Company>(`companies/${id}`)
      .valueChanges()
      .pipe(                          // <-- new
        catchError(this.errorHandler) // <-- new
      );                              // <-- new
  }

  saveCompany(company: Company) {
    return from(this.companiesRef.add(company))
            .pipe(
              catchError(error => {
                console.log('set', error);
                return of('Error');
              })
            );
  }

  editCompany(company: Company) {
    console.log("Doc Id: " + company.id);
    return this.companiesRef.doc(company.id).update(company)
      .then(() => console.log('Success on update'))
      .catch(error => console.log('update', error));
  }

  deleteCompany(id: string) {
    return this.companiesRef.doc(id).delete()
      .then(_ => console.log('Success on delete'))
      .catch(error => console.log('delete', error));
  }

  private errorHandler(error: Error) {
    console.log(error);
    return throwError(error);
  }
}
