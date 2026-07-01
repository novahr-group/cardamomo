import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { QualitiesComponent } from './components/qualities/qualities.component';
import { ProcessesComponent } from './components/processes/processes.component';
import { LogisticsComponent } from './components/logistics/logistics.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocaleService } from './services/locale.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    QualitiesComponent,
    ProcessesComponent,
    LogisticsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Inicializa el servicio de idioma al arrancar la aplicación */
  constructor(_locale: LocaleService) {}
}
