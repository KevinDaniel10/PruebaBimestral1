import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  openLink(){
    window.open('https://github.com/KevinDaniel10/PruebaBimestral1.git','_blank');
  }

}
