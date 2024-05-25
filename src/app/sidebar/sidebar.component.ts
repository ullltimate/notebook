import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/button/button.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})

export class SidebarComponent {
  btnText = '+ Заметки'
}
