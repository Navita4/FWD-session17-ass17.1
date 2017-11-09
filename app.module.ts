import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {SimpleIfElseComponent} from './simple-if-else/simple-if-else.component.ts';

@NgModule({
  declarations: [
    AppComponent,
    SimpleIfElseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent
    RouterModule.forRoot([
      {
        path:'if-else',
        component:SimpleIfElseComponent
      },
      {
        path:'if-then-else',
        component:'SimpleIfElseThenComponent'
      },
      {
        path:'non-inline-if-then-else',
        component:NonInlineIfThenElseComponent
      },
      {
        path:'**',
        component:SimpleIfElseComponent
      }
    ])
    providers:[],
    bootstrap:[AppComponent]
  })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
