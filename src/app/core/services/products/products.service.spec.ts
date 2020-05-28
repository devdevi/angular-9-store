import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {
  let service: ProductsService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    /*  */
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts ', () => {
    /* arrange */
  it('should return products', () => {
    const expectData = [
      {
        id: 'unid',
        title: 'unid',
        image: 'unid',
        price: 1,
        description: 'unid',
        offer: false
      },
      {
        id: 'unid2',
        title: 'unid',
        image: 'unid',
        price: 1,
        description: 'unid',
        offer: false
      },
    ];
    let dataError;
    let dataResponse;
    /* aRRANGE, ADD, ASSERT */
    service.getAllProducts()
      .subscribe(response => {
        dataResponse = response;
      }, error => {
        dataError = error;
      });
    const req = httpTestingController.expectOne(`${environment.url_api}/products`);
    req.flush(expectData);
    expect(dataResponse.length).toEqual(2);
    expect(req.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
      /* Mejor practica */
    });
  });
 /*  it('Espera que dataResponse sea de longitud 2', () => {

      expect(dataResponse.length).toEqual(2);
    });

  it('Espera que el método de la petición sea GET', () => {
      expect(req.request.method).toEqual('GET');
    });

  it('Espera que dataError sea indefinido', () => {
      expect(dataError).toBeUndefined();
    }); */
/*   }); */
/* Coverage */
/*  ng test --watch=false --codeCoverage=true */
/* http-sever coverage/store/ */
/* prueba usar el prefijo winpty (winpty comando) */
});

