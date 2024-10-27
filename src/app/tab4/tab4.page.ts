import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  

  ngOnInit() {
  }
  fechaInicio: string | null = null;
  fechaFin: string | null = null;
  resultado: number | null = null;

  calcularDias() {
    if (this.fechaInicio && this.fechaFin) {
      const fechaInicioDate = new Date(this.fechaInicio);
      const fechaFinDate = new Date(this.fechaFin);

      const diferenciaTiempo = fechaFinDate.getTime() - fechaInicioDate.getTime();
      this.resultado = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));
    } else {
      this.resultado = null;
    }
  }
  

}
