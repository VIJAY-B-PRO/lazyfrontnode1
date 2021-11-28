import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  { path: "signup", component: SignupComponent },
  { path: "user", component: UserpageComponent },
  { path: "admin", component: AdminComponent },
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class mainRoutingModule { }
