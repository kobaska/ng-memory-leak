import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public list = Array(1000).fill(0);
  constructor() { }

  ngOnInit(): void {
  }

}
