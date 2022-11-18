import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component ({
    selector: 'app-curso-lista',
    templateUrl: './curso-list-component.html',
    styleUrls: ['./style.page.css'],
})
export class CursoListComponent implements OnInit{
    ngOnInit(): void {   
    }

    data: any ={
        links: '',
    }
     getLink: any
    OnSubmit(){
        this.getLink = this.data.links= document.getElementById('links');
        }
  
    

}
