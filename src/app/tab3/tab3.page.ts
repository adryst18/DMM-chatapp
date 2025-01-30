import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  llamadas: any[] = [
    {
      username: 'Jaimito el cartero',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      date: '13:24',
      type: 'outgoing'
    },
    {
      username: 'Ana',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      date: '14:00',
      type: 'incoming'
    },
    {
      username: 'Luis',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      date: '14:30',
      type: 'missed'
    },
    {
      username: 'Sofia',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      date: '15:45',
      type: 'outgoing'
    }
  ];

  constructor() {}

  ngOnInit() {}
}