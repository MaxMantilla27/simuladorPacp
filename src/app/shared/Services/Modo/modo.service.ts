import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModoService {

  public urlBase=environment.url_api+'Modo';
  constructor(private http: HttpClient) { }

}
