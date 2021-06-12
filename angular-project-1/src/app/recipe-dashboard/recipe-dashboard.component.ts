import { Ingredient, IRecipe } from 'src/model/interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RecipeApi } from 'src/service';
@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
  styleUrls: ['./recipe-dashboard.component.css'],
})
export class RecipeDashboardComponent implements OnInit {
  formValue!: FormGroup;
  recipeModelObj: IRecipe = new IRecipe();
  datas!: any;
  ingredientModelObj: Ingredient = new Ingredient();

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeApi
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title: [''],
      description: [''],
      imgUrl: [''],
      time: [''],
      level: [''],
      categoryId: [''],
      ingredient: new FormArray([]),
    });
    this.getRecipes();
  }
  addRecipeDetails() {
    this.recipeModelObj.title = this.formValue.value.title;
    this.recipeModelObj.description = this.formValue.value.description;
    this.recipeModelObj.imgUrl = this.formValue.value.imgUrl;
    this.ingredientModelObj.name = this.formValue.value.name;
    this.ingredientModelObj.amount = this.formValue.value.amount;
    this.recipeModelObj.time = this.formValue.value.time;
    this.recipeModelObj.level = this.formValue.value.level;
    this.recipeModelObj.categoryId = this.formValue.value.categoryId;

    this.recipeService.createRecipe(this.recipeModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Added Success');
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getRecipes();
      },
      (err) => {
        alert('Add Failed');
      }
    );
  }
  getRecipes() {
    this.recipeService.getRecipes().subscribe((res) => {
      this.datas = res;
    });
  }
  deleteRecipe(data: any) {
    this.recipeService.deleteRecipe(data.id).subscribe((res) => {
      console.log('Recipe deleted');
      this.getRecipes();
    });
  }
}
