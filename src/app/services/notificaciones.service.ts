import { Injectable } from '@angular/core';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';

@Injectable()
export class NotificacionesService {
  constructor(private toasterService: ToasterService) {}

  config: ToasterConfig;

  position = 'toast-top-full-width';
  animationType = 'slideUp';
  timeout = 10000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

/**Información de los diferentes Toast que se tienen */
/*'default', 'info', 'success', 'warning', 'error'*/

  showToast(type: string, title: string, body: string):  ToasterConfig{
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };

    this.toasterService.popAsync(toast);

    return new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
  }

  clearToasts() {
    this.toasterService.clear();
  }
}
