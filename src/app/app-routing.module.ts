import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCalcComponent } from './my-calc/my-calc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, title: 'My Store | Home' },
  {path:'products', loadChildren:() => import('./product/product.module').then(m => m.ProductModule)},
  { path: 'profile', component: ProfileComponent, title: 'My Store | Profile' },
  { path: 'cal', component: MyCalcComponent, title: 'My Store | Calculator' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent},
  //{ path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
