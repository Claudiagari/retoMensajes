import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { RequestsService } from './services/requests.service';

const appRoutes : Routes =[
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
