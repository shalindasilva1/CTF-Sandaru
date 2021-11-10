import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {
  ImagePath: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.ImagePath = './../../assets/f3e.png'
  }

  goToPage(pageNo:string){
    this.router.navigate(['/'+pageNo]);
  }
}
