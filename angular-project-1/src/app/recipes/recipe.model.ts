import { Ingredient } from './../shared/ingredient.module';
export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public time: string;
  public level: string;
  constructor(id: number, name: string, desc: string, imagepath: string, ingredients: Ingredient[], time: string, level: string) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagepath;
    this.ingredients = ingredients;
    this.time = time;
    this.level = level;
  }
}
