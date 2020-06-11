import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  title = "Angular 5";
  myControl: FormControl = new FormControl();
  isLoading = false;
  members;

  constructor(private appService: AppService) { }

  ngOnInit() {

    this.myControl.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap((keyword) => {
        console.log(keyword);
        this.isLoading = true;
        return this.callAPI(keyword);
      })
      .subscribe((response) => {
        this.isLoading = false;
        if (response) {
          this.members = response.data.results;
        } else {
        }
      },(err)=>{
        this.isLoading = false;
      })
  }

  callAPI(keyword: string): Observable<any> {
    if(keyword){
      return this.appService.findHeroes(keyword);
    }
    return Observable.of([]);
  }




}
