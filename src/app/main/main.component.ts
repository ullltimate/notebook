import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/button/button.component'

@Component({
  selector: 'main',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent {
  @Input() notes = [];
  btnTextEdit = 'Редактировать'
  btnTextDelete = 'Удалить'
}
