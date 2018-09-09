import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Deportista } from './deportista';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const deportistas = '/deportistas';

/**
 * Servicio para prporcioanr todo sobre los deportista.
 **/
@Injectable()
export class DeportistaService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) { }

    /**
     * Devuelve un objeto de tipo Observable que contiene la lista de deportistas recibidos de la API.
     * @returns Lista de deportistas en tiempo real.
     */
    getDeportistas(): Observable<Deportista[]> {
        return this.http.get<Deportista[]>(API_URL + deportistas);
    }
}
