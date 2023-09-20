import {AfterViewInit, Component, HostBinding} from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import {DialogService} from "./dialog.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(
      private authService: AuthService,
      private screen: ScreenService,
      public appInfo: AppInfoService,
      private dialogs: DialogService
  ) { }

  isAuthenticated() {
    return this.authService.loggedIn;
  }

  showAlert(e: any) {
    this.dialogs.alert('!!!!!! asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasd asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd ')
  }

  showConfirm(e: any) {
    this.dialogs.confirm('вы уверены что вы не конченый?')
        .then(q => console.log('we have result!', q))
  }
}
