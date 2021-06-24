import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosMultislotComponent } from './todos-multislot/todos-multislot.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosMultislotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
