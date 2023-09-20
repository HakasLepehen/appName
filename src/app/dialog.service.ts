import { Injectable } from '@angular/core';
import {alert, confirm} from "devextreme/ui/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  alert(str: string) {
    return alert(str, 'Ошибка');
  }

  confirm(msg: string): Promise<boolean> {
    return confirm(msg, "Confirm changes");
  }
}
