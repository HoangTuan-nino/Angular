import { Category } from './../category.model';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { RecipeApi } from 'src/service';
import { pipe } from 'rxjs';
import { IRecipe } from 'src/model/interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipe: IRecipe;
  recipes: IRecipe[] = [];
  categories: Category[];
  id: 1;
  categorySelected: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: RecipeApi
  ) {}

  ngOnInit(): void {
    this.initialData();
    console.log(this.recipes);
  }
  initialData() {
    this.route.params
      .pipe(
        switchMap((data) => {
          const recipes = this.appService.getRecipes();
          return recipes.pipe(
            map((productList) => {
              this.recipes = productList.filter(
                (p) => p.categoryId === Number(data.id)
              );
            })
          );
        })
      )
      .subscribe();
  }
}
