


import { Routes } from '@angular/router';

import {VcardsComponent} from './components/vcards.component';
import { HomeComponent } from './components/home.component';
import { DetailComponent } from './components/detail.component';
import {VcardComponent} from './components/vcard.component';
import { CreateComponent } from './components/create.component';
import { SigninComponent } from './components/signin.component';
import { LoginComponent } from './components/login.component';
import { DeconnexionComponent } from './components/deconnexion.component';

export const appRoutes: Routes = [


{ path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},

{
    path:'home',
    component: HomeComponent,
    
},
{
    path:'vcards',
    component: VcardsComponent,
    
},
{
    path:'vcard',
    component: VcardComponent,
    
},
{
    path:'vcard/:id',
    component: DetailComponent,
    
},
{
    path:'createvcard',
    component: CreateComponent,
    
},
{
    path:'sign-in',
    component: SigninComponent,
    
},
{
    path:'login',
    component: LoginComponent,
    
},
{
    path:'deconnexion',
    component: DeconnexionComponent,
    
}


]





// const appRoutes: Routes = [
//     { path: 'crisis-center', component: CrisisListComponent },
//     { path: 'hero/:id',      component: HeroDetailComponent },
//     {
//       path: 'heroes',
//       component: HeroListComponent,
//       data: { title: 'Heroes List' }
//     },
//     { path: '',
//       redirectTo: '/heroes',
//       pathMatch: 'full'
//     },
//     { path: '**', component: PageNotFoundComponent }
//   ];