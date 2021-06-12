import { RecipeApi } from './../../service/index';
import { RecipeService } from './../recipes/recipe.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Category } from '../recipes/category.model';
import { from, Subscription } from 'rxjs';
import { ICategory, IRecipe } from 'src/model/interface';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // animations: [
  //   // Each unique animation requires its own trigger. The first argument of the trigger function is the name
  //   trigger('rotatedState', [
  //     state('default', style({ transform: 'rotate(0)' })),
  //     state('rotated', style({ transform: 'rotate(90deg)' })),
  //     transition('rotated => default', animate('500ms ease-out')),
  //     transition('default => rotated', animate('500ms ease-in')),
  //   ]),
  // ],
})
export class HeaderComponent implements OnInit, OnChanges {
  recipes: IRecipe[] = [];
  id = 1;
  index = 1;
  routeSelected: string;
  state: any = 'default';
  animation = 'row-column-2';
  selectedRecipe: IRecipe;
  categories: ICategory[] = [];
  products: IRecipe[] = [];
  selectedCategory: any;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private appService: RecipeApi
  ) {}
  ngOnInit(): void {
    this.routeSelected = '/recipe-detail/1';
    this.initialData();
  }
  // Giong nhu routeSelected, lay bang naviagte
  navigateRecipeDetail() {
    this.router.navigate(['/recipe-detail/0']);
  }
  ngOnChanges(changes) {}

  initialData() {
    this.appService
      .getRecipes()
      .pipe(
        switchMap((data) => {
          const cateories = this.appService.getCategories();
          return cateories.pipe(
            map((dataCate) => {
              this.products = data;
              this.categories = dataCate;
              this.selectedCategory = dataCate[0];
              const recipes = this.products.filter(
                (p: IRecipe) =>
                  p.categoryId === this.selectedCategory.categoryId
              );

              this.recipes = recipes;
              this.selectedRecipe = this.recipes[0];
              this.id = this.selectedRecipe.id;
              this.index =
                this.recipes.findIndex((r) => r.id === this.selectedRecipe.id) +
                1;
              console.log(this.selectedCategory, recipes);
            })
          );
        })
      )
      .subscribe();
  }
  onNextPage() {
    this.index = this.index + 1;
    this.selectedRecipe = this.products.find((p) => p.id === this.id + 1);
    this.id = this.selectedRecipe.id;
    this.routeSelected = `/recipe-detail/${this.id}`;
    this.animation = 'row-column-2 fade';
    setTimeout(() => {
      this.animation = 'row-column-2';
    }, 1000);
  }
  onPreviousPage() {
    this.index = this.index - 1;
    this.selectedRecipe = this.products.find((p) => p.id === this.id - 1);
    this.id = this.selectedRecipe.id;
    this.routeSelected = `/recipe-detail/${this.id}`;
    this.animation = 'row-column-2 fade';
    setTimeout(() => {
      this.animation = 'row-column-2';
    }, 1000);
  }
  changeCategory(category) {
    this.selectedCategory = category;
    const recipes = this.products.filter(
      (p: IRecipe) => p.categoryId === this.selectedCategory.categoryId
    );

    this.recipes = recipes;
    this.selectedRecipe = this.recipes[0];
    this.id = this.selectedRecipe.id;
    this.routeSelected = `/recipe-detail/${this.id}`;
    this.index = 1;
  }
}
// rotate() {
//   this.state = this.state === 'default' ? 'rotated' : 'default';
// }
