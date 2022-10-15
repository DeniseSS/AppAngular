import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/Error 404/error404.component";
import { MenuItensComponent } from "./component/menu/menu-component";

@NgModule({
    declarations:[
        MenuItensComponent,
        Error404Component

    ],
    exports:[
        MenuItensComponent,
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