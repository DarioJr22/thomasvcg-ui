import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardContent } from 'src/app/models/cardContent';


@Component({
  selector: 'tcv-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent {

  @Input() CardContent!:CardContent

}
