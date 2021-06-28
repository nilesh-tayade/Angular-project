import { RouterModule,Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';



export const contentroutes: Routes = [
    {path:'student',loadChildren:() => import('src/app/student/student.module').then(m => m.StudentModule)},
    {path:'teacher',loadChildren:() => import('src/app/teacher/teacher.module').then(m => m.TeacherModule)},
    {path:'employee',loadChildren:() => import('src/app/employee/employee.module').then(m => m.EmployeeModule)},
  
    
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutUsComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'**',component:PageNotFoundComponent},
  
  ];