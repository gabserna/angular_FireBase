import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../../environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
// import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { CompanyEditComponent } from './company/company-edit/company-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    FlexLayoutModule,
    MatCardModule, 
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    // ErrorHandlerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
