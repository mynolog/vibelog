import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmotionFormComponent } from './components/emotion-form/emotion-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, EmotionFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'vibelog';
}
