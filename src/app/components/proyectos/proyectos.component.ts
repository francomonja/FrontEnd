import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(public proyectoService: ProyectoService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken() && (this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 0 || this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 1)){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarProyecto(){
    this.proyectoService.lista().subscribe(data => {
      this.proyectos = data;
    })
  }
  
  delete(id?: number){
    if (id != undefined){
      this.proyectoService.delete(id).subscribe( data => {this.cargarProyecto();},
      err => {
        alert("no se pudo borrar");
      })
    }

  }
}
