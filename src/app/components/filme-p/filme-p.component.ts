import { Component } from '@angular/core';
import { BtnUniversalComponent } from '../btn-universal/btn-universal.component';

@Component({
  selector: 'app-filme-p',
  standalone: true,
  imports: [ BtnUniversalComponent],
  templateUrl: './filme-p.component.html',
  styleUrl: './filme-p.component.scss'
})
export class FilmePComponent {

}
