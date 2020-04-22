import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.productsService.getProduct(id)
      .subscribe(product=> this.form.patchValue({...product}))
    })
    this.buildForm()
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(product.id, product)
        .subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    })
  }
  get priceField() {
    return this.form.get('price')
  }

}

