import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { DeporteListComponent } from './deporte-list.component';
import { DeporteService } from '../deporte.service';
import { Deporte } from '../deporte';

describe('DeporteListComponent', () => {
  let component: DeporteListComponent;
  let fixture: ComponentFixture<DeporteListComponent>;
  const deportes: Deporte[] = require('../../../assets/deporte.json');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeporteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeporteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
