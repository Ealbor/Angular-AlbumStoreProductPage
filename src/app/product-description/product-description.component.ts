import { Component, OnInit } from '@angular/core';
import { Album } from 'app/album';
import { Track } from 'app/track';

import{ProductService} from '../product.service';



@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit{

  albumInfo: Album;


  constructor(private _productService:ProductService) { 
    
  }
  id: number;
  artist: string;
  album: { name: string; releaseDate: string; coverImage: string; tracks: Track[]; };

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }
    

}
