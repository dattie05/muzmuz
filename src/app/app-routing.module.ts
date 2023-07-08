import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/Admin/dash/dash.component';
import { LoginComponent } from './components/login/login.component';
import { MuzComponent } from './components/muz/muz.component';
import { AddoctorComponent } from './components/Admin/addoctor/addoctor.component';
import { DoctorlistComponent } from './components/Admin/doctorlist/doctorlist.component';
import { DogsComponent } from './components/Animals/dogs/dogs.component';
import { CatsComponent } from './components/Animals/cats/cats.component';
import { CowsComponent } from './components/Animals/cows/cows.component';
import { GoatsComponent } from './components/Animals/goats/goats.component';
import { RabbitsComponent } from './components/Animals/rabbits/rabbits.component';
import { ChickensComponent } from './components/Animals/chickens/chickens.component';
import { ServicesComponent } from './components/services/services.component';
import { FoodsComponent } from './components/foods/foods.component';
import { NavcComponent } from './components/navc/navc.component';
import { AboutComponent } from './components/about/about.component';
import { SuggestComponent } from './components/suggest/suggest.component';

const routes: Routes = [
  {path: '', component:MuzComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dash', component: DashComponent},
  {path: 'addoctor', component: AddoctorComponent},
  {path:'listdoctor',component:DoctorlistComponent},
  // {path: 'doctorlist', component: DoctorlistComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'cats', component: CatsComponent},
  {path: 'cows', component: CowsComponent},
  {path: 'goats', component: GoatsComponent},
  {path: 'chickens', component: ChickensComponent},
  {path: 'rabbits', component: RabbitsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'foods',component:FoodsComponent},
  {path: 'navc', component:NavcComponent},
  {path: 'about',component:AboutComponent},
  {path: 'suggest',component:SuggestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
