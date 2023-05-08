import { Component, OnInit } from '@angular/core';
import { SEducacion} from '../../../service/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreEdu: string;
  descripcionEdu: string;
  fInicio: string;
  fFinal: string;

  constructor(private sEducacion: SEducacion, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu, this.fInicio, this.fFinal);
    this.sEducacion.save(educacion).subscribe(data => {
      alert("educacion añadida");
      this.router.navigate(['']);
    },err => {
      alert("fallo");
      this.router.navigate(['']);
    },)
  
  }

}
