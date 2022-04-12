import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = 'Lúcio Gentil Freitas Stedile';
  text = '';

  pessoas= [
    {
      nome: "Lúcio",
      sobrenome: "Stedile"
    },
    {
      nome: "Maria",
      sobrenome: "Silva"
    },
    {
      nome: "João",
      sobrenome: "Pereira"
    },
    {
      nome: "Marcio",
      sobrenome: "Santos"
    }
    ];

  constructor(){

  }
  ngOnInit(): void {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        
        this.count = 0;
      }
    }, 1000)
  }

  clicou(nome: string): void{
    console.log('Clicou em ', nome);
  }
}
