import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proy } from 'src/app/model/proy';
import { ProyService } from 'src/app/service/proy.service';
import { ImageService } from 'src/app/service/image.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-newproy',
  templateUrl: './newproy.component.html',
  styleUrls: ['./newproy.component.css']
})
export class NewproyComponent implements OnInit {
nombreP: string;
descripcionP: string;
img: string = '';
  constructor(private proyS: ProyService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.clearUrl();
      }
  onCreate(): void{
        const proy = new Proy(this.nombreP, this.descripcionP, this.img);
        this.img = this.imageService.url;
        this.proyS.save(proy).subscribe(
      data =>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      },err =>{
        this.router.navigate(['']);
      }
    )
        this.imageService.clearUrl();
      }
      uploadImage($event: any) {
       
        const name = "proy_" + this.nombreP; 
        this.imageService.uploadImage($event, name);
   
      }
   }
