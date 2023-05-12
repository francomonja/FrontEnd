import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import * as uuid from 'uuid';
@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  imgP: string;

  constructor(private proyectoService: ProyectoService, private router: Router, private activatedRouter: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    this.imgP = this.imageService.url;
    console.log(this.imgP);
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
    this.proyectoService.save(proyecto).subscribe(data => {
      this.router.navigate(['']);

    }, err =>{
      alert("fallo la creacion");
    })
  
  }
  uploadImage($event:any){
    const name = uuid.v4();
    this.imageService.uploadImage($event, name);
  }

}
