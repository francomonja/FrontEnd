import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { SEducacion } from '../../service/educacion.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private sEducacion: SEducacion, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken() && (this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 0 || this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 1)){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.sEducacion.lista().subscribe(data => {this.educacion = data;});
  }

  delete(id?: number){
    if (id != undefined){
      this.sEducacion.delete(id).subscribe( data => {this.cargarEducacion();},
      err => {
        alert("no se pudo borrar");
      })
    }

  }
}
