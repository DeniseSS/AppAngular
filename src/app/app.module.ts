import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherListComponent } from './curso/teacher.list';
import { RouterModule } from '@angular/router';
import { CursoModule } from './curso/curso.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    
  ],
  imports: [
    CursoModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo: 'cursos', pathMatch:'full'
      },
     
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
