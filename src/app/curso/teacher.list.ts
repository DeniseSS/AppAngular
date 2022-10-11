import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';  
import { Teacher } from "./teacher";
import { TeacherService } from "./teacher.sevice";
@Component ({
    selector: 'app-teacher-lista',
    templateUrl: './teacher.list.html',
})
export class TeacherListComponent implements OnInit{

   AllTeacher!: Observable<Teacher[]>;  
    constructor(private teacherService: TeacherService){}


    ngOnInit(): void{
        this.GetAllTeacher()
       
    }
    GetAllTeacher() {
        this.AllTeacher=this.teacherService.getAll();
    }


}