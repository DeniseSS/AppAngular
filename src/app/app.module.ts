import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuItensComponent } from './menu/menu-component';
import { TeacherListComponent } from './curso/teacher.list';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Error 404/error404.component';
import { CursoModule } from './curso/curso.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuItensComponent,
    TeacherListComponent,
  ],
  imports: [
    CursoModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo: 'cursos', pathMatch:'full'
      },
      {
        path:'curso/teacher', component: TeacherListComponent
      },
      {
        path:'**', component: Error404Component
      }
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
