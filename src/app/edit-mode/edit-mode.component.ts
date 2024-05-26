import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Note } from "../app.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "edit-mode",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./edit-mode.component.html",
})
export class EditModeComponent {
    @Input() selectedNote: Note;
}
