import { Component } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: "root",
  standalone: true,
  imports: [SidebarComponent, MainComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  notes = [];
}
