import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';


@Component({
  selector: 'app-navbar-universal',
  standalone: true,
  imports: [],
  templateUrl: './navbar-universal.component.html',
  styleUrl: './navbar-universal.component.scss'
})
export class NavbarUniversalComponent {
   // troca de ativar para desativar
   isActivated: boolean = false;

  constructor(private elementRef: ElementRef) {}

  //hostilistener mapeia o cursor e verifica se o usuario apertou fora
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // apertou fora fecha o seach
      this.isActivated = false; // Desativa a classe ativa no local
    }
  }

  clickEvent() {
    this.isActivated = !this.isActivated;
  }
}
