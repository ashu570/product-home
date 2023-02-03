import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AuthGuardsGuard } from './services/auth-guards.guard';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:'full'},
  {path:"products",component:HomeComponent, canActivate:[AuthGuardsGuard]},
  {path:"product/:id",component:ProductPageComponent,canActivate:[AuthGuardsGuard]},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
