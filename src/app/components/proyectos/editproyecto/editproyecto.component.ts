import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  constructor(private activatedRouter: ActivatedRoute, private proyectoService: ProyectoService, private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
            alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imageService.url;
    this.proyectoService.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar el proyecto");
    })
  }
  uploadImage($event:any){
    const name = uuid.v4();
    this.imageService.uploadImage($event, name);
  }
}
