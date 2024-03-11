import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
link:string = "";
whatsapp(){
  alert(this.link)
  let text = encodeURIComponent(this.link);
  window.location.href = `https://telegram.me/share/url?url=${text}`;
}
telegram(){
  let text = encodeURIComponent(this.link);
  window.location.href = `whatsapp://send?text=${text}`;
}
}
