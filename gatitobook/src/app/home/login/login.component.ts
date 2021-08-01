import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) {}

  login(): void {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        void this.router.navigate(['animais']);
      },
      () => {
        alert('Usuário ou senha inválido!');
      }
    );
  }
}
