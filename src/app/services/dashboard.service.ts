import { Injectable } from '@angular/core';
import { APIManager } from '../managers/api.manager';
import { LocalDataSource } from 'ng2-smart-table';

@Injectable()
export class DashboardService extends LocalDataSource {

  busy: Promise<any>;

  constructor(private api : APIManager) {
    super(null);
  }

  getElements(): Promise<any> {
    this.busy = new Promise(resolve => {});
    return this.api
      .get('estacion/datapills')
      .then(data => this.data = data);
  }
}