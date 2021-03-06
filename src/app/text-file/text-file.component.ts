import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-text-file',
  templateUrl: './text-file.component.html',
  styleUrls: ['./text-file.component.scss']
})
export class TextFileComponent implements OnInit {

  constructor(private _FileSaverService: FileSaverService,private router: Router) { }

  ngOnInit() {
  }
  
  downloadTxt(){
    this._FileSaverService.saveText('I understand a ship to be made for the carrying and preservation of the cargo, and so long as the ship can be saved, with the cargo, it should never be abandoned. This Union likewise should never be abandoned unless it fails and the possibility of its preservation shall cease to exist, without throwing passengers and cargo overboard. FLAG_01[ ZkxhR3tUaGlzX0lzX0x2TF8wMX0=] Labor is prior to, and independent of, capital. Capital is only the fruit of labor, and could never have existed if labor had not first existed.  Labor is the superior of capital, and deserves much the higher consideration.Life is full of beauty. Notice it. Notice the bumble bee, the small child,  and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams.', "read more.txt");
  }

  goToPage(pageNo:string){
    this.router.navigate(['/'+pageNo]);
  }
}
