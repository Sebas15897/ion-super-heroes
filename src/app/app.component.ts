import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})

export class AppComponent {
  constructor(private translate: TranslateService, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setDefaultLanguage();
    });
  }

  setDefaultLanguage() {
    const browserLang = navigator.language.split('-')[0];
    const availableLangs = ['en', 'es'];

    const selectedLang = availableLangs.includes(browserLang)
      ? browserLang
      : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(selectedLang);
  }
}
