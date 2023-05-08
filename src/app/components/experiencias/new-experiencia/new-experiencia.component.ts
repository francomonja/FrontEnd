import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../../service/sexperiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';
  fInicio: string = '';
  fFinal: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.nombreExp, this.descripcionExp, this.fInicio, this.fFinal);
    this.sExperiencia.save(experiencia).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },
      err => {
        alert("Fallo");
        this.router.navigate(['']);},)
  }

}
