import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosMultislotComponent } from './todos-multislot/todos-multislot.component';
import { TodosConditionalContentProjectionComponent } from './todos-conditional-content-projection/todos-conditional-content-projection.component';
import { DynamicContentDirective } from './dynamic-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosMultislotComponent,
    TodosConditionalContentProjectionComponent,
    DynamicContentDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
