import { Injectable } from "@angular/core";
import { Teacher } from "./teacher";
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
    providedIn: 'root'
})

export class TeacherService{

    url = 'https://testimonialapi.toolcarton.com/api';  

    private _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers':
          'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      })
    };
    
    constructor(private http: HttpClient) { }

    getAll(): Observable<Teacher[]> {  
      return this.http.get<Teacher[]>(this.url,httpOptions);  
    }  
    getTeacherId(id: string): Observable<Teacher> {  
      const apiurl = `${this.url}/${id}`;
      return this.http.get<Teacher>(apiurl);  
    } 
    getTeacherName(name: string): Observable<Teacher> {  
        const apiurl = `${this.url}/${name}`;
        return this.http.get<Teacher>(apiurl);  
      } 
}
