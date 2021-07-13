import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-rated-shows',
  templateUrl: './top-rated-shows.component.html',
  styleUrls: ['./top-rated-shows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedShowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
