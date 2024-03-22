import { Component, ViewEncapsulation } from '@angular/core';
import { ILocation } from 'src/app/shared/interfaces/academias';
import { AcademiasService } from 'src/app/shared/services/academias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public teste = '';
  public teste2 = false;
  public locais: ILocation[] = [];
  public periodos = [
    {
      tipo: 'Manhã',
      horario: '06:00 às 12:00',
      value: 'manha',
    },
    {
      tipo: 'Tarde',
      horario: '12:01 às 18:00',
      value: 'tarde',
    },
    {
      tipo: 'Noite',
      horario: '18:01 às 23:00',
      value: 'noite',
    },
  ];

  constructor(private academiasService: AcademiasService) {
    this.academiasService.getAcademias().subscribe((data) => {
      this.locais = data.locations;
    });
  }
}
