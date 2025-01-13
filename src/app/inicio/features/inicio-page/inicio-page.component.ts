import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/ui/footer/footer.component';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './inicio-page.component.html',
  styles: ``
})
export default class InicioPageComponent {

}
