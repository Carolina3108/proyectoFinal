import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { restaurante } from '../entidades/restaurante';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {
  rest:restaurante= {} as restaurante;
  restaurantes:any;

  constructor(private http:HttpClient) { 
    http.get('https://api-restaurantes.herokuapp.com/restaurantes')
    .subscribe(response=>{
      this.restaurantes=response;
    });
  }

  ngOnInit(): void {
  }

}
