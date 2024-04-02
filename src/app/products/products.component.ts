import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

      <app-card class="w-full p-4 lg:w1/4 md:w-1/2"/>

    </div>
  </div>
</section>
  `,
})
export class ProductsComponent {

}