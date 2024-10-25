import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  skills = [
    { name: 'HTML', progress: 0.6 },
    { name: 'CSS', progress: 0.3 },
    { name: 'JavaScript', progress: 0.6 },
    { name: 'React', progress: 0.4 },
    { name: 'Node', progress: 0.5 },
    { name: 'Express', progress: 0.5 },
    { name: 'Java', progress: 0.7 },
    { name: 'Python', progress: 0.7 }
  ];

  constructor() {}

  // Función para obtener el color de la barra de progreso
  getColor(progress: number): string {
    if (progress <= 0.4) {
      return 'danger';
    } else if (progress <= 0.6) {
      return 'warning';
    } else {
      return 'success';
    }
  }

}
