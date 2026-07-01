import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';
import { SHARED_IMAGES } from '../../i18n/shared-images';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly images = SHARED_IMAGES;

  constructor(readonly locale: LocaleService) {}
}
