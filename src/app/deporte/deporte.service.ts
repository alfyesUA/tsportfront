import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Deporte } from './deporte';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const deportes = '/deportes';

/**
 * Servicio para prporcioanr todo sobre los deporrtes.
 **/
@Injectable()
export class DeporteService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) { }

    /**
     * Devuelve un objeto de tipo Observable que contiene la lista de deportes recibidos de la API.
     * @returns Lista de deportes en tiempo real.
     */
    getDeportes(): Observable<Deporte[]> {
        return this.http.get<Deporte>(API_URL + deportes);
    }
}
