
import { DetailComponent } from './components/detail.component';
import { AppComponent } from './components/app.component';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './components/home.component';
import { VcardsComponent } from './components/vcards.component';
import { VcardComponent } from './components/vcard.component';
import { ColorComponent } from './components/color.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // Pour les requêtes ajax avec angular



import { FilterPipe } from './pipes/filter.pipe';

import { HighlightDirective } from './directives/highlight.directive';

import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    VcardsComponent,
    VcardComponent,
    ColorComponent,
    FilterPipe,
    HighlightDirective,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
