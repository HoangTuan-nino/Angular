import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.module';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}
  ingredient: Ingredient;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  onAddItem(form: NgForm) {
    // const ingredientName = this.nameInput.nativeElement.value;
    // const ingredientAmount = this.amountInput.nativeElement.value;
    // this.ingredient = new Ingredient(ingredientName, ingredientAmount);
    // this.shoppingListService.addIngredient(this.ingredient);

    const value = form.value;
    this.ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        this.ingredient
      );
    } else {
      this.shoppingListService.addIngredient(this.ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
