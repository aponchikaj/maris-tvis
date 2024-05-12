import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  garfieldWords:Array<string> = ['გააჯვი!','შემეშვი!','დათო მინდა','დათოო...']

  clicked:boolean = false

  word:any

  GetWord(){
    this.clicked = true
    const arr = this.garfieldWords
    this.word = arr[Math.floor(Math.random() * arr.length)]
    console.log(this.word)
  }
}
