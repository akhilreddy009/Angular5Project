import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.less']
})
export class AutoCompleteComponent implements OnInit {

  @Input()
  options = [];

  @Input()
  isLoading = false;

  @Input()
  showDropdown = false;

  constructor() { }

  ngOnInit() {
  }

}
