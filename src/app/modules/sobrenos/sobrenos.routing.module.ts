import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SobrenosComponent } from "./sobrenos.component";


const routes:Routes =[
  {
    path:'',
    component:SobrenosComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)]
})

export class SobreNosRoutingModule{}
