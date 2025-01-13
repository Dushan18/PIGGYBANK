import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { NavbarComponent } from '../../../shared/ui/navbar/navbar.component';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';

interface FormSignIn {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,NavbarComponent,GoogleButtonComponent],
  templateUrl: './sign-in.component.html',

})
export default class SignInComponent {

  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError() {
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormSignIn>({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;
    try {
      const { email, password } = this.form.value;

      if (!email || !password) return;

      await this._authService.signIn({ email, password });

      toast.success('Bienvenido de nuevo');
      this._router.navigateByUrl('banca/home');

    } catch (error) {
      toast.error('Ocurrio un error');

    }

  }

}
