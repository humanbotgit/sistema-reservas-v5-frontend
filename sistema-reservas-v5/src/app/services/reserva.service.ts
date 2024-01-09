import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url = "https://nodeaplication.onrender.com/"
  constructor(
    private http: HttpClient
  ) { 
    
  }
  getReservasByCorreo(correo:string){
    const url = `${this.url}reserva/${correo}`;
  }
}
