import { NumberInput } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  saldoAtual: number = 0;
  
  constructor(){

  }
  //este método deve aumentar o saldo atual em um valor X
  depositar() {
    this.saldoAtual = this.saldoAtual + 2;
  }

  //este método deve diminuir o saldo atual em um valor X
  sacar() {
    this.saldoAtual = this.saldoAtual - 2;
  }
}
