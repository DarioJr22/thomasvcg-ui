import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmHonraComponent } from "./em-honra.component";


const routes:Routes =[
  {
    path:'',
    component:EmHonraComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)]
})

export class EmHonraRoutingModule{}
