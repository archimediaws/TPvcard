



import { AppComponent } from './components/app.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';

import { HomeComponent } from './components/home.component';
import { VcardsComponent } from './components/vcards.component';
import { VcardComponent } from './components/vcard.component';
import { CreateComponent } from './components/create.component';
import { ColorComponent } from './components/color.component';
import { DetailComponent } from './components/detail.component';
import { LoginComponent } from './components/login.component';
import { SigninComponent } from './components/signin.component';
import { DeconnexionComponent } from './components/deconnexion.component';

import { SelectImg } from './components/selectImg.component';
import { SelectCat } from './components/selectCat.component';
import { SearchFormComponent } from './components/searchform.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // Pour les requêtes ajax avec angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // animation
import { MatCardModule, MatListModule, MatGridListModule, MatMenuModule, MatIconModule, MatSelectModule, MatInputModule } from '@angular/material';

import { FilterPipe } from './pipes/filter.pipe';

import { HighlightDirective } from './directives/highlight.directive';
import { MatMenuTriggerForDirective } from './directives/matMenuTriggerFor.directive';






@NgModule({
  declarations: [
    AppComponent,
    VcardsComponent,
    VcardComponent,
    ColorComponent,
    FilterPipe,
    HighlightDirective,
    MatMenuTriggerForDirective,
    HomeComponent,
    DetailComponent,
    CreateComponent,
    LoginComponent,
    SigninComponent,
    DeconnexionComponent,
    SelectImg,
    SelectCat,
    SearchFormComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
