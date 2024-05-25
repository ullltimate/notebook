import { Component } from "@angular/core";
import { ButtonComponent } from 'src/app/button/button.component'
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

type Note = {
  id: number
  title: string,
  text: string,
  date: string
}

enum Mode {
  view = 'view',
  edit = 'edit'
}

@Component({
  selector: "root",
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  notes: Array<Note> = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
  selectedNote: Note;
  mode: Mode = Mode.edit;
  sort:string = 'ASC';
  btnTextAdd = 'Cоздать';
  btnTextEdit = 'Редактировать';
  btnTextDelete = 'Удалить';
  btnTextSave = 'Сохранить';
  onChange(){
    console.log(this.sort)
  }
  addNote(){
    let note: Note = {
      id: this.notes.length+1,
      title: `Заметка ${this.notes.length+1}`,
      text: 'Описание',
      date: new Date(Date.now()).toLocaleString('ru')
    }
    this.notes.push(note)
    this.selectedNote = note
    this.mode = Mode.edit
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }
  selectNote(note: Note){
    this.selectedNote = note
    this.mode = Mode.view
    console.log(this.selectedNote)
  }
  editNote(){
    this.mode = Mode.edit
  }
  saveNote(){
    this.mode = Mode.view
    this.notes.reduce((acc, note) => {
      if (note.id === this.selectedNote.id) {
        return [...acc, { ...note }];
      }
      return [...acc, note];
    }, []);
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }
  deleteNote(){
    this.notes = this.notes.filter(note => note.id !== this.selectedNote.id)
    this.selectedNote = null;
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }
}
