import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  //chats: any[] = [1,2,3,4,5,6,7,8,9];
  chats: any[] = [
    {
        username: 'Jaimito el cartero',
        message: 'Bienvenido al curso',
        date: "13:24",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Jaimito',
        message: 'Bienvenido a tu casa',
        date: "13:26",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'cartero',
        message: 'curso de programacion a las 7',
        date: "13:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Ana',
        message: '¿Cómo estás?',
        date: "14:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Luis',
        message: 'Vamos al cine mañana',
        date: "14:30",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Carlos',
        message: 'Reunión a las 10',
        date: "15:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Sofia',
        message: '¿Qué tal el día?',
        date: "15:45",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Mario',
        message: 'Te mando la presentación',
        date: "16:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Rosa',
        message: 'Ya te envié el reporte',
        date: "16:15",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Marta',
        message: '¿Nos vemos a las 6?',
        date: "16:45",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Miguel',
        message: 'Listo para la conferencia',
        date: "17:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Samantha',
        message: 'En camino',
        date: "17:15",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Rafael',
        message: 'Trabajo pendiente',
        date: "17:30",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Clara',
        message: '¿Me ayudas con el proyecto?',
        date: "18:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Eva',
        message: 'Nos vemos en 10 minutos',
        date: "18:15",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Juan',
        message: 'Reunión de equipo a las 3',
        date: "18:30",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Paula',
        message: 'Te llamo en un rato',
        date: "19:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Oscar',
        message: 'Todo listo para mañana',
        date: "19:15",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Lucia',
        message: '¿Puedes revisar el documento?',
        date: "19:30",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Jose',
        message: 'Llamame cuando puedas',
        date: "19:45",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Esteban',
        message: '¿Nos reunimos en la oficina?',
        date: "20:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Carla',
        message: 'Todo está bien, gracias',
        date: "20:15",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'David',
        message: 'Te confirmo mañana',
        date: "20:30",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Veronica',
        message: '¿A qué hora el café?',
        date: "21:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Héctor',
        message: 'Ya envié el archivo',
        date: "21:15",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Raul',
        message: 'Nos vemos en 30 minutos',
        date: "21:30",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Mónica',
        message: 'Te enviaré más detalles',
        date: "21:45",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Nadia',
        message: 'Estoy en el trabajo',
        date: "22:00",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Juan Carlos',
        message: '¿Vamos a almorzar?',
        date: "22:15",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Roberto',
        message: 'Confirmado para la reunión',
        date: "22:30",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
        username: 'Silvia',
        message: 'Todo bien por mi parte',
        date: "22:45",
        avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    }
]

  constructor() {}

  ngOnInit(){

  }
}
