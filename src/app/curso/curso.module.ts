import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarComponent } from 'src/star/star.component';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CursoListComponent } from './curso-list-component';
import { CursoInfoComponent } from './curso.info.component';


@NgModule({
    declarations:[
        CursoListComponent,
        CursoInfoComponent,
        ReplacePipe,
        StarComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
              path:'cursos', component: CursoListComponent
            },
            {
              path:'curso/info/:id', component: CursoInfoComponent
            },

        ])
    ]

})


export class CursoModule{

}