import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';  
import { Teacher } from "./teacher";
import { TeacherService } from "./teacher.sevice";
@Component ({
    templateUrl: './teacher.list.html',
})


export class TeacherListComponent implements OnInit{

   AllTeacher!: Observable<Teacher[]> ;
    
    constructor(private ActivatedRoute: ActivatedRoute, private teacherService: TeacherService){}


    ngOnInit(): void{
        this.GetAllTeacher()
        this.ActivatedRoute
    }
    GetAllTeacher(): void {
      this.AllTeacher= this.teacherService.getAll();
   
      
    }
    


}