import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTVN';

  product: Product = new Product(0, "", "");
  list: Product [] =
    [
      {id: 1, name: "Iphone", image: "https://www.techone.vn/wp-content/uploads/2021/09/xanh-1-500x500.jpg"},
      {id: 2, name: "Bphone", image: "https://www.techone.vn/wp-content/uploads/2021/09/xanh-1-500x500.jpg"}
    ]

  create() : void{
    let check = true;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === this.product.id) {
        this.list[i].name = this.product.name;
        this.list[i].image = this.product.image;
        check = false;
      }
    }
    if (check) {
      this.list.push(new Product(this.product.id,this.product.name,this.product.image));
    }
  }

  delete(id:number) : void{
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
      }
    }
  }

  showEdit(product : Product) : void{
    this.product = new Product(product.id,product.name,product.image)
  }

}

class Product {
  id: number = 0;
  name: string = "";
  image: string = "";


  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
