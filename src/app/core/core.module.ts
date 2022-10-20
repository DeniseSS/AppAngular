import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/Error 404/error404.component";
import { Header } from "./component/header/header.component";
import { MenuItensComponent } from "./component/menu/menu-component";

@NgModule({
    declarations:[
        MenuItensComponent,
        Header,
        Error404Component,
      
       

    ],
    exports:[
        MenuItensComponent,
        Header,
        Error404Component,
      
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([  
          
              {   
                path:'**',  component: Error404Component
              },
           
             
        ])
    ],

})
export class CoreModule{

}