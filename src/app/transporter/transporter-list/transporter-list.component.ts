import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transporter-list',
  templateUrl: './transporter-list.component.html',
  styleUrls: ['./transporter-list.component.scss']
})
export class TransporterListComponent implements OnInit {
  @Input()
  transporters: any;
  private readonly transporterAPIUrl = 'api/transporters';

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // get a list of the clients
  getTransporters(): Observable<Object> {

    const url = `${this.transporterAPIUrl}`;
    return this.httpClient.get('transporters/list');
  }

}
