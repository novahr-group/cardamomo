import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-qualities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.css']
})
export class QualitiesComponent {
  constructor(readonly locale: LocaleService) {}
}
