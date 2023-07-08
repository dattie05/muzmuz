import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuzComponent } from './components/muz/muz.component';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/Admin/dash/dash.component';
import { SidebarComponent } from './components/Admin/sidebar/sidebar.component';
import { NavbarComponent } from './components/Admin/navbar/navbar.component';
import { AddoctorComponent } from './components/Admin/addoctor/addoctor.component';
import { DoctorlistComponent } from './components/Admin/doctorlist/doctorlist.component';
import { DogsComponent } from './components/Animals/dogs/dogs.component';
import { CatsComponent } from './components/Animals/cats/cats.component';
import { CowsComponent } from './components/Animals/cows/cows.component';
import { GoatsComponent } from './components/Animals/goats/goats.component';
import { ChickensComponent } from './components/Animals/chickens/chickens.component';
import { RabbitsComponent } from './components/Animals/rabbits/rabbits.component';
import { ServicesComponent } from './components/services/services.component';
import { FoodsComponent } from './components/foods/foods.component';
import { NavcComponent } from './components/navc/navc.component';
import { AboutComponent } from './components/about/about.component';
import { SuggestComponent } from './components/suggest/suggest.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MuzComponent,
    LoginComponent,
    DashComponent,
    SidebarComponent,
    NavbarComponent,
    AddoctorComponent,
    DoctorlistComponent,
    DogsComponent,
    CatsComponent,
    CowsComponent,
    GoatsComponent,
    ChickensComponent,
    RabbitsComponent,
    ServicesComponent,
    FoodsComponent,
    NavcComponent,
    AboutComponent,
    SuggestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
