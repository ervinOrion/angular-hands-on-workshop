import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-directive',
  templateUrl: './pipe-directive.component.html',
  styleUrls: ['./pipe-directive.component.scss']
})
export class PipeDirectiveComponent implements OnInit {

  date: Date;

  constructor() { }


  ngOnInit(): void {
    this.date = new Date();
  }

}
