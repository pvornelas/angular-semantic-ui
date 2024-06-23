import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: "Why is the sky blue?", content: "The sky is blue because it is." },
    { title: "What does an orange taste like?", content: "An orange tastes like an orange." },
    { title: "Who was Olavo de Carvalho?", content: "He was the screwdriver in the gears of a totalitarian system." },
  ]
  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
