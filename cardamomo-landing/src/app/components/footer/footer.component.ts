import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  constructor(readonly locale: LocaleService) {}
}
