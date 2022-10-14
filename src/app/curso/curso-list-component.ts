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
        this.retrieveAll();
       
    }
    retrieveAll(): void{
       this.CursoService.retriveAll().subscribe({
            next: cursos =>{
                this._cursos = cursos;
                this.filteredCursos=this._cursos;
            },
            error: err => console.log("Erro", err)
        });
        
    }
    deleteById(cursoId: number): void{
        this.CursoService.DeleteById(cursoId).subscribe({
            next:()=>{
                console.log("Delete with success");
                this.retrieveAll();
            },
            error: err => console.log("Erro", err)
         
        })

    }

    set filter(value:string){
        this._filterBy=value;
        this.filteredCursos=this._cursos.filter((curso: Curso)=>curso.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter(){
        return this._filterBy;
    }

    


}