import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { SHARED_IMAGES } from '../../i18n/shared-images';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  readonly youtubeVideoId = 'Tnb2_cgNKlE';
  readonly heroBackground = SHARED_IMAGES.heroBackground;

  constructor(readonly locale: LocaleService) {}

  get youtubeEmbedUrl(): string {
    return `https://www.youtube.com/embed/${this.youtubeVideoId}?rel=0&modestbranding=1`;
  }
}
