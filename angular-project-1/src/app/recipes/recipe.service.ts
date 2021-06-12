import { Category } from './category.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.module';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private cakes: Recipe[] = [
    new Recipe(
      1,
      'Christmas Cookie Icing',
      'From classics like gingerbread cookies and peppermint bark to over-the-top mash-ups like our candy cane cookie sandwiches.',
      'https://pbs.twimg.com/media/EoziOlGXYAAnk7e?format=jpg&name=large',
      [
        new Ingredient('Powdered sugar', 2),
        new Ingredient('Tablespoons light corn syrup', 1 / 2),
        new Ingredient('Tablespoons milk', 2),
        new Ingredient('Teaspoon vanilla extract', 1 / 2),
      ],
      '5 minutes',
      'Beginner'
    ),
    new Recipe(
      2,
      'Christmas Fruit Cake',
      'A common Christmastime tradition is fruitcake, and there’s so many varieties to choose from.  My version is free of alcohol and loaded with both candied and dried fruit, as well as walnuts.',
      'https://hillstreetgrocer.com/application/files/7215/7360/8433/Best-ever_Christmas_fruit_cake.jpg',
      [
        new Ingredient('Well-brewed Lady Grey Tea', 500),
        new Ingredient('Mixed dried fruits', 500),
        new Ingredient('Soft unsalted butter', 200),
        new Ingredient('Dark brown soft sugar', 125),
        new Ingredient('Caster sugar', 50),
      ],
      '1h 15m',
      'Beginner'
    ),
    new Recipe(
      3,
      'Christmas Sweet Candy',
      'This brittle might be the ideal marriage between things a kid loves and things an adult love.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/candy-bars-1572544414.jpg',
      [
        new Ingredient('Powdered sugar', 2),
        new Ingredient('Tablespoons light corn syrup', 1 / 2),
        new Ingredient('Tablespoons milk', 2),
        new Ingredient('Teaspoon vanilla extract', 1 / 2),
      ],
      '20 minutes',
      'Beginner'
    ),
    new Recipe(
      4,
      'Impossible Pie Recipe',
      'Impossible Pie is the easiest pie you will ever bake, it makes its own crust and two delicious layers while baking.!',
      'https://cakescottage.com/wp-content/uploads/2019/04/impossible-pie-da.jpg',
      [
        new Ingredient('Eggs', 4),
        new Ingredient('Cup butter, melted', 1 / 4),
        new Ingredient('Cup sugar', 1),
        new Ingredient('Cup flour', 1 / 2),
        new Ingredient('Teaspoon salt', 1 / 4),
      ],
      '30 minutes',
      'Beginner'
    ),
    new Recipe(
      5,
      'Chocolate Cream Pie',
      'With a cookie crust, silky chocolate pudding center and pillowy whipped cream topping, this pie is a chocolate lover’s dream.',
      'https://www.onceuponachef.com/images/2011/06/Chocolate-Cream-Pie-3.jpg',
      [
        new Ingredient('Nabisco Chocolate Wafers', 28),
        new Ingredient('tablespoons unsalted butter, softened', 4),
        new Ingredient('Cup sugar', 1 / 3),
        new Ingredient('Cup cornstarch', 1 / 4),
      ],
      '1h 5m',
      'Beginner'
    ),
  ];
  private foods: Recipe[] = [
    new Recipe(
      1,
      'Baked BBQ Chickend',
      'This Oven Baked BBQ Chicken is easy to make and includes a homemade no-cook barbecue sauce. It’s finger licking good!',
      'https://thestayathomechef.com/wp-content/uploads/2018/06/Baked-BBQ-Chicken-1-small-1.jpg',
      [
        new Ingredient('Nabisco Chocolate Wafers', 28),
        new Ingredient('Tablespoons unsalted butter, softened', 4),
        new Ingredient('Cup sugar', 1 / 3),
        new Ingredient('Cup cornstarch', 1 / 4),
      ],
      '1h 5m',
      'Beginner'
    ),
    new Recipe(
      2,
      'Crispy Chilli Beef',
      'This easy crispy chilli beef is the ultimate take-away at-home dinner. Tender sirloin beef pan-seared until crispy, then tossed with a sweet and tangy garlic ginger sauce. ',
      'https://savvybites.co.uk/wp-content/uploads/2020/02/Crispy-Chilli-Beef-4-of-6.jpg',
      [
        new Ingredient('Beef- Sirloin preferably', 1),
        new Ingredient('Cornflour', 4),
        new Ingredient('Ginger', 3),
        new Ingredient('Chillies', 5),
        new Ingredient('Garlic', 2),
        new Ingredient('Ketchup', 2),
        new Ingredient('Soy sauce (light or dark is fine)', 1),
        new Ingredient('Cider vinegar (white wine or distilled is fine)', 1),
        new Ingredient('Honey', 1),
        new Ingredient('Cashews', 2),
        new Ingredient('Egg noodles', 10),
      ],
      '15 minutes',
      'Beginner'
    ),
    new Recipe(
      3,
      'Crispy Chilli Beef',
      'This easy crispy chilli beef is the ultimate take-away at-home dinner. Tender sirloin beef pan-seared until crispy, then tossed with a sweet and tangy garlic ginger sauce. ',
      'https://savvybites.co.uk/wp-content/uploads/2020/02/Crispy-Chilli-Beef-4-of-6.jpg',
      [
        new Ingredient('Beef- Sirloin preferably', 1),
        new Ingredient('Cornflour', 4),
        new Ingredient('Ginger', 3),
        new Ingredient('Chillies', 5),
        new Ingredient('Garlic', 2),
        new Ingredient('Ketchup', 2),
        new Ingredient('Soy sauce (light or dark is fine)', 1),
        new Ingredient('Cider vinegar (white wine or distilled is fine)', 1),
        new Ingredient('Honey', 1),
        new Ingredient('Cashews', 2),
        new Ingredient('Egg noodles', 10),
      ],
      '15 minutes',
      'Beginner'
    ),
    new Recipe(
      4,
      'Crispy Chilli Beef',
      'This easy crispy chilli beef is the ultimate take-away at-home dinner. Tender sirloin beef pan-seared until crispy, then tossed with a sweet and tangy garlic ginger sauce. ',
      'https://savvybites.co.uk/wp-content/uploads/2020/02/Crispy-Chilli-Beef-4-of-6.jpg',
      [
        new Ingredient('Beef- Sirloin preferably', 1),
        new Ingredient('Cornflour', 4),
        new Ingredient('Ginger', 3),
        new Ingredient('Chillies', 5),
        new Ingredient('Garlic', 2),
        new Ingredient('Ketchup', 2),
        new Ingredient('Soy sauce (light or dark is fine)', 1),
        new Ingredient('Cider vinegar (white wine or distilled is fine)', 1),
        new Ingredient('Honey', 1),
        new Ingredient('Cashews', 2),
        new Ingredient('Egg noodles', 10),
      ],
      '15 minutes',
      'Beginner'
    ),
    new Recipe(
      5,
      'Crispy Chilli Beef',
      'This easy crispy chilli beef is the ultimate take-away at-home dinner. Tender sirloin beef pan-seared until crispy, then tossed with a sweet and tangy garlic ginger sauce. ',
      'https://savvybites.co.uk/wp-content/uploads/2020/02/Crispy-Chilli-Beef-4-of-6.jpg',
      [
        new Ingredient('Beef- Sirloin preferably', 1),
        new Ingredient('Cornflour', 4),
        new Ingredient('Ginger', 3),
        new Ingredient('Chillies', 5),
        new Ingredient('Garlic', 2),
        new Ingredient('Ketchup', 2),
        new Ingredient('Soy sauce (light or dark is fine)', 1),
        new Ingredient('Cider vinegar (white wine or distilled is fine)', 1),
        new Ingredient('Honey', 1),
        new Ingredient('Cashews', 2),
        new Ingredient('Egg noodles', 10),
      ],
      '15 minutes',
      'Beginner'
    ),
  ];
  public categories = [
    new Category(1, 'assets/icon-cake.png', 'Cake', this.cakes),
    new Category(2, 'assets/icon-food.png', 'Food', this.foods),
  ];
  private categoryRecipeEvent = new BehaviorSubject<any>(this.categories);
  private cateSelectedEvent = new BehaviorSubject<any>(this.categories[0]);

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.cakes[index] && this.foods[index];
  }
  // getRecipes() {
  //   return this.cakes;
  // }
  addRecipe(recipe: Recipe) {
    this.cakes.push(recipe);
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.cakes[index] = newRecipe;
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  deleteRecipe(index: number, categoryId) {
    if (categoryId === 1) {
      this.cakes.splice(index, 1);
    } else {
      this.foods.splice(index, 1);
    }
  }
  getCategories() {
    return this.categoryRecipeEvent;
  }
  getCategorySelected() {
    return this.cateSelectedEvent;
  }
  changeCategorySelected(selected) {
    this.cateSelectedEvent.next(selected);
  }
}
