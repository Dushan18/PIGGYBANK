import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';

@Component({
  selector: 'app-nosotros-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './nosotros-page.component.html',
  styles: ``
})
export default class NosotrosPageComponent {

}
