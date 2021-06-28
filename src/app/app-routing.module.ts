import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderContentComponent } from './header/header-content/header-content.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { contentroutes } from './header/content-routing';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 // {path:'student',loadChildren:() => import('src/app/student/student.module').then(m => m.StudentModule)},
 // {path:'teacher',loadChildren:() => import('src/app/teacher/teacher.module').then(m => m.TeacherModule)},
 // {path:'employee',loadChildren:() => import('src/app/employee/employee.module').then(m => m.EmployeeModule)},

  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'header',component:HeaderContentComponent,children:contentroutes},
  
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
