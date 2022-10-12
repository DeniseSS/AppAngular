import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Curso } from "./Curso";
import { CursoService } from "./curso.service";

@Component({
    templateUrl:'./curso.info.component.html',
})
export class CursoInfoComponent implements OnInit{


    curso!: Curso | undefined;
    
    constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService){}

    ngOnInit(): void {  
      
            this.curso =this.cursoService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
      
    }
    save(): void {
        if(this.curso !== undefined){
            this.cursoService.save(this.curso);
        }
        

    }

}