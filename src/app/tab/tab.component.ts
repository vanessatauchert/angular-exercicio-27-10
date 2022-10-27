import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  @Input() numero: string;
  constructor() {}

  ngOnInit() {}

  tab() {
    let div: HTMLElement = document.getElementById('container');
    for (let i = 0; i < 11; i++) {
      let resultado =
        Number(this.numero) +
        ' x ' +
        i +
        ' = ' +
        Number(this.numero) * i +
        '<br />';
      div.innerHTML += resultado;
    }
  }

  apagar() {
    let div: HTMLElement = document.getElementById('container');

    div.innerHTML = ' ';
  }
}
