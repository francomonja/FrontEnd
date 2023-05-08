import { Component, OnInit } from '@angular/core';
import { SEducacion } from 'src/app/service/educacion.service';
import { Educacion } from '../../../model/educacion';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  edu : Educacion = null
  constructor(private sEducacion: SEducacion, private activatedRouter: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data => {
      this.edu = data;
    }, err => {
            alert("Error al modificar la experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id'];

    this.sEducacion.update(id, this.edu).subscribe(data => {

      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la experiencia");
      this.router.navigate(['']);
    })
  }
  
}

