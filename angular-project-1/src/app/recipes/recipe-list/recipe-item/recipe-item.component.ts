import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory, IRecipe } from 'src/model/interface';
import { RecipeApi } from 'src/service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe;
  category: ICategory;

  // tslint:disable-next-line:no-output-on-prefix
  recipes: IRecipe[] = [];
  id = 1;
  index = 1;
  routeSelected: string;
  state: any = 'default';
  animation = 'row-column-2';
  selectedRecipe: IRecipe;
  categories: ICategory[] = [];
  selectedCategory: any;
  constructor(private appService: RecipeApi) {}
  ngOnInit(): void {
    this.routeSelected = `/recipe-detail/${this.recipe.id}`;
    console.log(this.recipe.id);
  }
  // onDeleteRecipe(id: any) {
  //   console.log(id);
  //   this.appService.deleteProduct(id).subscribe(
  //     () => console.log(`Employee with Id = ${this.recipe.id}deleted`),
  //     (err) => console.log(err)
  //   );
  // }
}
