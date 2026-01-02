import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { cn } from '../../../../shared/utils/cn.util';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-add-product.page',
  imports: [FormsModule, TruncatePipe],
  templateUrl: './add-product.page.html',
  styleUrl: './add-product.page.css',
})
export class AddProductPage {

  pageName: string = "Add Product Page"

  @ViewChild("addproductform") adproductForm!: NgForm;

  buttonClasses = cn(
    "mt-2 px-8 py-2 rounded-lg font-semibold text-white transition-all duration-300",
    !this.adproductForm?.valid ? 'cursor-not-allowed bg-slate-300' : 'cursor-pointer bg-linear-65 from-blue-500 to-blue-900 hover:bg-linear-65 hover:from-blue-700 hover:to-blue-950'
  );

  onFormSubmit() {
    console.log(this.adproductForm.valid);
  }
}
