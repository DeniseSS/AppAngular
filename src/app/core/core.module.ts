import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/Error 404/error404.component";
import { FooterComponent } from "./component/footer/footer.component";
import { MenuItensComponent } from "./component/menu/menu-component";

@NgModule({
    declarations:[
        MenuItensComponent,
        Error404Component,
        FooterComponent,
    ],
    exports:[
        MenuItensComponent,
        Error404Component,
        FooterComponent
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