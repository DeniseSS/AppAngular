import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../core/component/header/header.component';


import { StarModule } from '../shared/component/star/start.module';
import { AppPipeModule } from '../shared/pipe/pipe.module';
import { StatisticsComponent } from '../core/component/statistics/statistics.component';
import { CursoListComponent } from './curso-list-component';
import { CursoInfoComponent } from './curso.info.component';
import { TeacherListComponent } from './teacher.list';

@NgModule({
    declarations:[
        CursoListComponent,
        CursoInfoComponent,
        HeaderComponent,
        StatisticsComponent
   ],
    imports:[   
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
           
          {
            path:'cursos', component: CursoListComponent
          },
          {
            path:'curso/info/:id', component: CursoInfoComponent
          },
          {
            path:'curso/teacher', component: TeacherListComponent
          },
            

         
        ])
    ]

})


export class CursoModule{

}