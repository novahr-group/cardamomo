import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-logistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent {
  constructor(readonly locale: LocaleService) {}
}
