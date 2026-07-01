import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(readonly locale: LocaleService) {}
}
