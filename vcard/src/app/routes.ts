import { Routes } from '@angular/router';

import {VcardsComponent} from './components/vcards.component';
import { HomeComponent } from './components/home.component';
import { DetailComponent } from './components/detail.component';



export const appRoutes: Routes = [

{
    path:'home',
    component: HomeComponent,
    
},
{
    path:'notes',
    component: VcardsComponent,
    
},
{
    path:'note/:id',
    component: DetailComponent,
    
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