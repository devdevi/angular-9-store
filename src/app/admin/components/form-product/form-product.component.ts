import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductsService } from '@core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
        .subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }
  uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
    const name = file.name;
    const fileRef =  this.storage.ref(name);
    const task = this.storage.upload(name, file);
    /* Observable type uploadTask */
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(this.form.get('image'));

          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }
  get priceField() {
    return this.form.get('price');
  }

}
