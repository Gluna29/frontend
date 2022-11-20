import { Component, OnInit } from '@angular/core';
import { Proy } from 'src/app/model/proy';
import { ProyService } from 'src/app/service/proy.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proy: Proy[]= [];
  constructor(private proyS: ProyService, private tokenService: TokenService) { }
isLogged = false;

  ngOnInit(): void {
    this.cargarProy();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
cargarProy(): void{
  this.proyS.lista().subscribe(
    data =>{
      this.proy = data;
    }
  )
}
delete(id?: number){
  if (id != undefined){
    this.proyS.delete(id).subscribe(
      data => {
        this.cargarProy();
      }, err =>{
        alert("No se pudo eliminar");
      }
    )
  }
}
}