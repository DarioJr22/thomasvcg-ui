import { Component, OnInit, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'tcv-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss']
})
export class ToolkitComponent implements OnInit,AfterViewInit {


   menu = document.querySelector(".menu")
   toggle= document.querySelector(".toggle")



   @Output() emitirTookitEv:EventEmitter<any>= new EventEmitter();

   emitAddTransac(){
    this.emitirTookitEv.emit('ADDTRANSAC')
   }

   emitAddConta(){
    this.emitirTookitEv.emit('ADDCONTA')
   }

   emitIrAoTopo(){
    this.emitirTookitEv.emit('IRAOTOPO')
   }



   ngOnInit(): void {

   }

   ngAfterViewInit(): void {

    let menu = document.querySelector(".menu")
    let toggle = document.querySelector(".toggle")
    toggle!.addEventListener("click",()=>{
      menu!.classList.toggle("active");
    })
   }


}
