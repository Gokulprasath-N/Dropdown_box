import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-box',
  templateUrl: './drop-down-box.component.html',
  styleUrls: ['./drop-down-box.component.css']
})
export class DropDownBoxComponent implements OnInit {


  link?:string;
  public value!:Text


  calling(val :string)
  {
    if(val=="Apple")
        this.link= "https://www.collinsdictionary.com/images/full/apple_158989157.jpg";
    if(val=="Ball")
       this.link="https://m.media-amazon.com/images/I/51IM+jkaEbL._SY355_.jpg";
    if(val=="Cat")
       this.link="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg";  
    if(val=="Dog")
       this.link="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*";

    if(val=="frog")
        this.link="assets_frog"
}

  constructor() { }

  ngOnInit(): void {
  }

}
