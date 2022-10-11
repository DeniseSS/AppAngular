import { Component, OnInit } from "@angular/core";
import { Curso } from "./Curso";
import { CursoService } from "./curso.service";

@Component ({
    selector: 'app-curso-lista',
    templateUrl: './curso-list-component.html',
})
export class CursoListComponent implements OnInit{
    filteredCursos: Curso[]=[];

    _cursos:  Curso[]=[]; 
    _filterBy!:string;

    constructor(private CursoService: CursoService){}


    ngOnInit(): void{
        this._cursos= this.CursoService.retriveall();
        this.filteredCursos=this._cursos;
       
    }

    set filter(value:string){
        this._filterBy=value;
        this.filteredCursos=this._cursos.filter((curso: Curso)=>curso.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter(){
        return this._filterBy;
    }

    


}