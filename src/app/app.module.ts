import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes, Router } from '@angular/router';

import {SeoService} from '../../seo_service'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { ForHerComponent } from './for-her/for-her.component';
import { ForHimComponent } from './for-him/for-him.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { RegistrationComponent } from './registration/registration.component';
import { SaleComponent } from './sale/sale.component';
import { StoreRegisterComponent } from './store-register/store-register.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'storeregister', component: StoreRegisterComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PartnersComponent,
    FooterComponent,
    ForHerComponent,
    ForHimComponent,
    NewArrivalsComponent,
    RegistrationComponent,
    SaleComponent,
    StoreRegisterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule.withServerTransition({appId: 'vogueAfriq'}),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ SeoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
