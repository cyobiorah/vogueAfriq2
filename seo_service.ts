import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title?: any;
  description?: any;
}

@Injectable()
export class SeoService {
    // This part is happended at the end of head>title
    private siteTitle = 'The web app'
    
    constructor(private _title: Title, private _meta: Meta) {}
    
    public setHeaders(data: SeoData) {
        this._title.setTitle([data.title, this.siteTitle].join(' | '));
        this._meta.updateTag({
            content: data.description,
            name: 'description'
        },
    )}
}