import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-zip-file-page',
  templateUrl: './zip-file-page.component.html',
  styleUrls: ['./zip-file-page.component.scss']
})
export class ZipFilePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openLink(){
    window.open('https://drive.google.com/file/d/1-uPzZj-QFl42DBnLBaxBH4lJV-OsyLcg/view',"_blank");
  }

  goToPage(pageNo: string) {
    this.router.navigate(['/' + pageNo]);
  }
}
