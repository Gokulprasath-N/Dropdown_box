import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  public value!:string
  link?:string;

  calling(val :string)
  {
    if(val=="Apple"||val=="apple")
        this.link= "https://www.collinsdictionary.com/images/full/apple_158989157.jpg";
    if(val=="Ball"||val=="ball")
       this.link="https://m.media-amazon.com/images/I/51IM+jkaEbL._SY355_.jpg";
    if(val=="Cat"||val=="cat")
       this.link="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg";  
    if(val=="Dog"||val=="dog")
       this.link="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*";

    if(val=="Frog"||val=="frog")
        this.link="assets_frog"
}

  constructor() { 
    
    
  }

  ngOnInit(): void {
  }

}
