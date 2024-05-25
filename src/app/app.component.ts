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
  searchText = '';
  search(){
    if(!this.searchText){
      this.notes = JSON.parse(localStorage.getItem('notes'))
    } else {
      this.notes = JSON.parse(localStorage.getItem('notes')).filter(note => note.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase().trim()))
    }
    this.selectedNote = null
  }
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
    let newNotes = JSON.parse(localStorage.getItem('notes')).map(note => note.id === this.selectedNote.id ? this.selectedNote : note)
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }
  deleteNote(){
    this.notes = JSON.parse(localStorage.getItem('notes')).filter(note => note.id !== this.selectedNote.id)
    this.selectedNote = null;
    localStorage.setItem('notes', JSON.stringify(this.notes))
    this.searchText = ''
  }
}
