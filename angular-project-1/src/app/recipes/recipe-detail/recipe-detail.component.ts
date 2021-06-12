import { Recipe } from './../recipe.model';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { RecipeApi } from 'src/service';
import { map, switchMap } from 'rxjs/operators';
import { IRecipe } from 'src/model/interface';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: IRecipe;
  index: number;
  id: number;
  categorySelected: any;
  categories: any;
  routerSubscription: Subscription;
  categorySelectedSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: RecipeApi
  ) {}

  ngOnInit(): void {
    this.initialData();
  }
  initialData() {
    this.route.params
      .pipe(
        switchMap((data) => {
          const product = this.appService.getRecipeById(Number(data.id));
          return product.pipe(
            map((productSelected) => {
              this.recipe = productSelected;
              console.log(data);
            })
          );
        })
      )
      .subscribe();
  }
}
