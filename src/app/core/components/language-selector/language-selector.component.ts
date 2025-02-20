import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: true,
  imports: [TranslateModule, IonicModule, FormsModule],
})

export class LanguageSelectorComponent {
  selectedLanguage!: string;

  constructor(
    private translate: TranslateService,
    private modalCtrl: ModalController
  ) {
    this.selectedLanguage = this.translate.currentLang || 'en';
  }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
  }

  saveLanguage() {
    this.translate.use(this.selectedLanguage);
    this.modalCtrl.dismiss();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
