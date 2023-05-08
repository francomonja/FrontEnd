import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from '../../service/skills.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as uuid from 'uuid';
import { ImageService } from 'src/app/service/image.service';
@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skills = null;
  constructor(private skillS: SkillsService, private activatedRouter: ActivatedRoute, private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(data => {
      this.skill = data;
    }, err =>{
      alert ("fallo la modificacion");
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    this.skill.img = this.imageService.url;
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(data => {
      this.router.navigate(['']);

    }, err =>{
      alert("fallo la modificacion");
      this.router.navigate(['']);
    })
  }
  uploadImage($event:any){
    const name = uuid.v4();
    this.imageService.uploadImage($event, name);
  }
}
