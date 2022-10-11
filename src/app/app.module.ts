import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from 'src/star/star.component';


import { AppComponent } from './app.component';
import { CursoListComponent } from './curso/curso-list-component';
import { ReplacePipe } from './pipe/replace.pipe';
import { MenuItensComponent } from './menu/menu-component';
import { TeacherListComponent } from './curso/teacher.list';
import { RouterModule } from '@angular/router';
import { Error404Component } from './Error 404/error404.component';
import { CursoInfoComponent } from './curso/curso.info.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    MenuItensComponent,
    StarComponent,
    TeacherListComponent,
    ReplacePipe,
    CursoInfoComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo: 'cursos', pathMatch:'full'
      },
      {
        path:'cursos', component: CursoListComponent
      },
      {
        path:'curso/info/:id', component: CursoInfoComponent
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
