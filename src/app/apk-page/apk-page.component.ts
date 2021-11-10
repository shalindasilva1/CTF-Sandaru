import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apk-page',
  templateUrl: './apk-page.component.html',
  styleUrls: ['./apk-page.component.scss']
})
export class ApkPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openLink(){
    window.open('https://drive.google.com/file/d/1Q52BUKrE9V3Yq2PJdLXmF0IMNR-tgz0w/view?usp=sharing',"_blank");
  }

  goToPage(pageNo: string) {
    this.router.navigate(['/' + pageNo]);
  }
}
