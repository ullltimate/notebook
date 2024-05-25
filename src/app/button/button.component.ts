import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "custom-button",
  standalone: true,
  imports: [CommonModule],
  template: `<button class="button" type="button">{{ btnText }}</button> `,
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
    @Input() btnText: string = ''
}
