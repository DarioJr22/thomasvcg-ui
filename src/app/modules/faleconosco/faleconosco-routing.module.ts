import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FaleConoscoComponent } from "./faleconosco.component";


const routes:Routes =[
  {
    path:'',
    component:FaleConoscoComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)]
})

export class FaleConoscoRoutingModule{}
