import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public teste = '';
  public teste2 = false;

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
}
