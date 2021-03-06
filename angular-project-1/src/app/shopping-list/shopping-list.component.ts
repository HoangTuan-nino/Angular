import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }
  onEditItem(index){
    this.shoppingListService.startedEditing.emit(index);
  }
}
