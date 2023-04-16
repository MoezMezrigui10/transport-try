import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporterServiceService {

  private readonly transporterAPIUrl = 'api/transporters';

  constructor(private httpClient: HttpClient) {
  }

  // get a list of the clients
  getTransporters(): Observable<Object> {

    const url = `${this.transporterAPIUrl}`;
    return this.httpClient.get(url);
  }}
