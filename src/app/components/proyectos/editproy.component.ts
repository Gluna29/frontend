import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { Proy } from 'src/app/model/proy';
import { ProyService } from 'src/app/service/proy.service';

@Component({
  selector: 'app-editproy',
  templateUrl: './editproy.component.html',
  styleUrls: ['./editproy.component.css']
})
export class EditproyComponent implements OnInit {
  proy: Proy = null;

  constructor(
    private proyS: ProyService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyS.detail(id).subscribe(
      data =>{
        this.proy = data;
      }, err =>{
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate ():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyS.update(id, this.proy).subscribe(
      data =>{
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any){
    this.proy.img = this.imageService.url
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proy_" + id;
this.imageService.uploadImage($event, name)
  }

}
