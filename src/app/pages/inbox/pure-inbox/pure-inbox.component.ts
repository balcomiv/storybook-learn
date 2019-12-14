import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pure-inbox',
  templateUrl: './pure-inbox.component.html',
  styleUrls: ['./pure-inbox.component.scss']
})
export class PureInboxComponent implements OnInit {
  @Input() error: any;

  constructor() { }

  ngOnInit() {
  }

}
