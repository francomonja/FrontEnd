import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../service/sexperiencia.service';
import { TokenService } from '../../service/token.service';
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencia: Experiencia[]= [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) {}
  
  isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken() && (this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 0 || this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 1)){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.experiencia = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();}, 
        err => {
          alert("no se pudo borrar")
        })
    }
  }
}
