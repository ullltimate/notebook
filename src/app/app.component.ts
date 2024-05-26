import { Component } from "@angular/core";
import { ButtonComponent } from 'src/app/button/button.component'
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

type Note = {
  id: string,
  title: string,
  text: string,
  date: number
}

enum Mode {
  view = 'view',
  edit = 'edit'
}

enum Sort {
  asc = 'ASC',
  desc = 'DESC'
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
  sort: Sort = Sort.desc;
  btnTextAdd = 'Cоздать';
  btnTextEdit = 'Редактировать';
  btnTextDelete = 'Удалить';
  btnTextSave = 'Сохранить';
  searchText = '';
  menu: boolean = false;
  openCloseMenu(menu: boolean){
    this.menu = !menu
  }
  search(){
    if(!this.searchText){
      this.notes = JSON.parse(localStorage.getItem('notes'))
    } else {
      this.notes = JSON.parse(localStorage.getItem('notes')).filter(note => note.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase().trim()))
    }
    this.selectedNote = null
  }
  onChangeSortSelect(){
    if(this.sort === Sort.asc){
      this.notes.sort((a,b) => b.date - a.date)
    } else {
      this.notes.sort((a,b) => a.date - b.date)
    }
  }
  addNote(){
    let note: Note = {
      id: (+new Date).toString(16),
      title: `Новая заметка`,
      text: 'Описание',
      date: Date.now()
    }
    this.sort === Sort.asc ? this.notes.unshift(note) : this.notes.push(note)
    this.selectedNote = note
    this.mode = Mode.edit
    localStorage.setItem('notes', JSON.stringify(this.notes))
    this.openCloseMenu(true)
  }
  selectNote(note: Note){
    this.selectedNote = note
    this.mode = Mode.view
    this.openCloseMenu(true)
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
