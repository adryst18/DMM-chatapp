import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-llamada',
  templateUrl: './item-llamadas.component.html',
  styleUrls: ['./item-llamadas.component.scss'],
  standalone: false,
})
export class ItemLlamadaComponent {
  @Input() username: string = '';
  @Input() avatarUrl: string = '';
  @Input() date: string = '';
  @Input() type: string = ''; // 'incoming', 'outgoing', 'missed'

  constructor() {}
}