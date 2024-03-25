import { Component, ViewEncapsulation } from '@angular/core';
import { IAcademias, ILocation } from 'src/app/shared/interfaces/academias';
import { AcademiasService } from 'src/app/shared/services/academias.service';

interface IFiltro {
  periodo: number[];
  exibeFechadas: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public locais: ILocation[] = [];
  public filtro: IFiltro = {
    periodo: [],
    exibeFechadas: false,
  };
  public data!: IAcademias;

  public periodos = [
    {
      tipo: 'Manhã',
      horario: '06:00 às 12:00',
      value: [6, 12],
    },
    {
      tipo: 'Tarde',
      horario: '12:01 às 18:00',
      value: [13, 18],
    },
    {
      tipo: 'Noite',
      horario: '18:01 às 23:00',
      value: [19, 23],
    },
  ];

  constructor(private academiasService: AcademiasService) {
    this.academiasService.getAcademias().subscribe((data) => {
      this.data = data;
    });
  }

  public buscar() {
    this.locais = [];
    this.locais = this.data.locations.filter((local) => {
      if (!this.filtro.exibeFechadas && !local.opened) {
        return false;
      }
      if (this.filtro.periodo.length === 0) {
        return true;
      } else {
        const horas = local.schedules?.filter((schedule) => {
          const a = schedule.hour.split(' às ', 2);
          if (a.length === 2) {
            a[0] = a[0].slice(0, 2);
            a[1] = a[1].slice(0, 2);
            if (a[0] === '14') {
              debugger;
            }
            return this.filtro.periodo[1] > parseInt(a[0]);
          } else {
            return false;
          }
        });
        return horas?.length ? true : false;
      }
    });
  }

  public limparBusca() {
    this.filtro = {
      periodo: [],
      exibeFechadas: false,
    };
    this.locais = [];
  }
}
