import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-processes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent {
  constructor(readonly locale: LocaleService) {}
}
