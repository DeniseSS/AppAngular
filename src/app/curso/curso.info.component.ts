import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Curso } from "./Curso";
import { CursoService } from "./curso.service";

@Component({
    templateUrl:'./curso.info.component.html',
})
export class CursoInfoComponent implements OnInit{


    curso!: Curso ;
    
    constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService){}

     
    ngOnInit(): void { 
        this.cursoService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: curso => this.curso = curso,
            error: err => console.log('Error', err)
        });

    }
    save(): void {
        if(this.curso !== undefined){
            this.cursoService.save(this.curso).subscribe({
                next: curso => console.log("Salvo com sucesso",curso),
                error: err => console.log("erro", err)
            });
        }
        

    }

}