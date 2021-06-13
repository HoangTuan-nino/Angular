export class Ingredient {
  name: string;
  amount: string;
}
export class IRecipe {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  ingredient?: Ingredient[];
  time: string;
  level: string;
  categoryId: number;
}
export class ICategory {
  categoryId: number;
  categoryIcon: string;
  categoryName: string;
}
