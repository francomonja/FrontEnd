import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencias/new-experiencia/new-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencias/editar-experiencia/editar-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { NewSkillComponent } from './components/hard-soft-skills/new-skill.component';
import { EditSkillComponent } from './components/hard-soft-skills/edit-skill.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { EditAboutComponent } from './components/acerca-de/edit-about.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto/newproyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'editabout/:id', component: EditAboutComponent},
  {path:'nuevaexperiencia', component: NewExperienciaComponent},
  {path:'editarexperiencia/:id', component: EditarExperienciaComponent},
  {path:'nuevaeducacion', component: NeweducacionComponent},
  {path:'editareducacion/:id', component: EditeducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'newproyecto', component: NewproyectoComponent},
  {path:'editproyecto/:id', component: EditproyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
