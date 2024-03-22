import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAcademias } from '../interfaces/academias';

@Injectable({
  providedIn: 'root',
})
export class AcademiasService {
  constructor(private httpClient: HttpClient) {}

  /**
   * getAcademias
   */
  public getAcademias(): Observable<IAcademias> {
    return this.httpClient.get<IAcademias>(
      'https://test-frontend-developer.s3.amazonaws.com/data/locations.json',
    );
  }
}
