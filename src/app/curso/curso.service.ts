import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Curso } from "./Curso";

@Injectable({
    providedIn: 'root'
})
export class CursoService{

    private cursoUrl="Http://localhost:3100/api/courses";
    
    constructor(private httpClient: HttpClient){}


   retriveAll(): Observable<Curso[]>{
        return this.httpClient.get<Curso[]>(this.cursoUrl);
   }
   retrieveById(id: number): Observable<Curso>{
      return this.httpClient.get<Curso>(`${this.cursoUrl}/${id}`);
   }
   save(curso: Curso ):Observable<Curso>{
        if(curso.id){
            return this.httpClient.put<Curso>(`${this.cursoUrl}/${curso.id}`,curso)
        }else{
            return this.httpClient.put<Curso>(`${this.cursoUrl}`,curso)
        }
    }
    DeleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.cursoUrl}/${id}`);
   }
}   
var COURSES: Curso[] = [
    {
        id: 1, 
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '../assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];