import { Component, OnInit } from '@angular/core';
import { Deporte } from '../deporte';
import { DeporteService } from '../deporte.service';

@Component({
  selector: 'app-deporte-list',
  templateUrl: './deporte-list.component.html',
  styleUrls: ['./deporte-list.component.css']
})
export class DeporteListComponent implements OnInit {

  constructor(private deporteService: DeporteService) { }

  deportes: Deporte[];

  getDeportes(): void {
    this.deporteService.getDeportes()
        .subscribe(deportes => this.deportes = deportes);
  }
  ngOnInit() {
    this.getDeportes();
  }

}
