import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proy } from 'src/app/model/proy';
import { ProyService } from 'src/app/service/proy.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-newproy',
  templateUrl: './newproy.component.html',
  styleUrls: ['./newproy.component.css']
})
export class NewproyComponent implements OnInit {
nombreP: string;
descripcionP: string;
img: string;
  constructor(private proyS: ProyService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
      }
  onCreate(): void{
        const proy = new Proy(this.nombreP, this.descripcionP, this.img);
        this.img = this.imageService.url;
        this.proyS.save(proy).subscribe(
      data =>{
        alert("Proyeco añadido");
        this.router.navigate(['']);
      },err =>{
        this.router.navigate(['']);
      }
    )
      }
      uploadImage($event: any) {
        //const id = this.activatedRoute.snapshot.params['id'];   (ESTA LINEA SE ELIMINA)
        const name = "proy_" + this.nombreP; 
        this.imageService.uploadImage($event, name);
      }
   }
