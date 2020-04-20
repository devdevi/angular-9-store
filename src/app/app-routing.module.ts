import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
        // component: HomeComponent,
      },

      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
        /*  component: ProductsComponent, */
      },
      /*       {
              path: 'products/:id',
              component: ProductDetailComponent,
            }, */
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
        /*         component: ContactComponent, */
        canActivate: [AdminGuard]
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
