import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { persona } from '../../model/persona.model';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken() && (this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 0 || this.tokenService.getAuthorities().indexOf("ROLE_ADMIN") == 1)){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {
      this.persona = data;
    })
  }
}
