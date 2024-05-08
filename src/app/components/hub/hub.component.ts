import { Component } from '@angular/core';
import { NavbarUniversalComponent } from '../navbar-universal/navbar-universal.component';
import { FilmePComponent } from '../filme-p/filme-p.component';
import { BtnUniversalComponent } from '../btn-universal/btn-universal.component';
import { ContinuarAssistindoComponent } from '../continuar-assistindo/continuar-assistindo.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [NavbarUniversalComponent, FilmePComponent, BtnUniversalComponent, ContinuarAssistindoComponent ],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss'
})
export class HubComponent {

}
