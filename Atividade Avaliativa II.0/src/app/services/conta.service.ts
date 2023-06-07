import { Injectable } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private saldo: number = 0;

  constructor(home: HomeComponent) {
    this.saldo = home.saldoAtual;
   }

  // Crie aqui um método para depositar um valor na conta



  // Crie aqui um método para sacar um valor da conta
}
