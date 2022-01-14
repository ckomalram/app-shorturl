import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  urlName: string ;
  urlShort: string;
  urlProcess: boolean;
  loading: boolean= false;
  mostrarError: boolean=false;
  textError: string = '';

  constructor( private shorturlService: ShortUrlService) {
    this.urlName='';
    this.urlShort='';
    this.urlProcess= false;
  }

  ngOnInit(): void {
  }

  procesarUrl(){

    if (this.urlName === '') {
      this.errorMessage("Favor ingresar una URL..");
      return;
    }
    this.urlProcess= false;
    this.loading=true;
    // console.log(this.urlName);

    setTimeout(() => {
      this.obtenerUrlShort();
    }, 1500);

  }

  obtenerUrlShort(){
    this.shorturlService.getUrlShort(this.urlName).subscribe(data => {
      // console.log(data);
      this.loading=false;
      this.urlShort = data.link;
      this.urlProcess = true;

    }, error => {
      // console.log(error.error.description);
      this.loading=false;

      if (error.error.description === "The value provided is invalid.") {
        this.errorMessage("La URL ingresada, no es valida...");
      }else{
        this.errorMessage(error.error.description);
      }
    })
  }

  errorMessage(valor: string){
    this.mostrarError=true;
    this.textError=valor;
    setTimeout(() => {
      this.mostrarError=false;
    }, 3000);
  }

}
