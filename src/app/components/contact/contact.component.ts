import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocaleService } from '../../services/locale.service';
import { CONTACT_DATA } from '../../data/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  readonly contact = CONTACT_DATA;
  formSubmitted = false;

  formData = {
    name: '',
    company: '',
    email: '',
    country: '',
    message: '',
    product: 'grano'
  };

  constructor(readonly locale: LocaleService) {}

  get whatsappUrl(): string {
    const digits = this.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${digits}`;
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.formData);
    this.formSubmitted = true;
  }
}
