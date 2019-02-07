import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"><b><a href="https://bitair.net" target="_blank">BitAir®</a></b> 2019</span>
  `,
})
export class FooterComponent {
}