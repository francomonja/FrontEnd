import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../service/skills.service';
import { ImageService } from 'src/app/service/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import * as uuid from 'uuid';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre: string;
  porcentaje: number;
  img: string;

  constructor(private skillS: SkillsService, private router: Router, private activatedRouter: ActivatedRoute, private imageService: ImageService ) {

   }

  ngOnInit(): void {
  }

  onCreate():void{
    this.img = this.imageService.url;
    const skill = new Skills(this.nombre, this.porcentaje, this.img);
    this.skillS.save(skill).subscribe(data => {
      this.router.navigate(['']);
    }, err=>{
      alert("fallo al crear la skill");
    })
  }
  uploadImage($event:any){
    const name = uuid.v4();
    this.imageService.uploadImage($event, name);
  }
}

