import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  constructor(private _seo: SeoService) {
    //
  }
  ngOnInit() {
    this._seo.setHeaders({
      title: 'VogueAfriq',
      description: 'App discription'
    })
  }
}
