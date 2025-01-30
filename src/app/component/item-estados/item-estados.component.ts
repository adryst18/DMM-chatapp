import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-estados',
  templateUrl: './item-estados.component.html',
  styleUrls: ['./item-estados.component.scss'],
})
export class ItemEstadosComponent {
  
  @Input() username: string = ''; 
  @Input() avatarUrl: string = ''; 
  @Input() time: string = ''; 
  @Input() date: string = '';

  constructor() {}
}