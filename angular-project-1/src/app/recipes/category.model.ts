import { Recipe } from './recipe.model';
export class Category {
  public id: number;
  public icon: string;
  public name: string;
  public recipes: Recipe[];
  constructor(id: number, icon: string, name: string, recipes: Recipe[]) {
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.recipes = recipes;
  }
}
