import { Ingredient, IRecipe } from 'src/model/interface';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { RecipeApi } from 'src/service';
import { ActivatedRoute, Params } from '@angular/router';
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
      name: [''],
      amount: [''],
    });
    this.getRecipes();
  }
  get controls() {
    // a getter!
    return (this.formValue.get('ingredient') as FormArray).controls;
  }
  onAddIngredient() {
    (this.formValue.get('ingredient') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
  addRecipeDetails() {
    this.recipeModelObj.title = this.formValue.value.title;
    this.recipeModelObj.description = this.formValue.value.description;
    this.recipeModelObj.imgUrl = this.formValue.value.imgUrl;
    this.recipeModelObj.time = this.formValue.value.time;
    this.recipeModelObj.level = this.formValue.value.level;
    this.recipeModelObj.categoryId = this.formValue.value.categoryId;
    this.recipeModelObj.ingredient = this.formValue.value.ingredient;
    console.log(this.recipeModelObj);
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
      this.datas = res.products;
    });
  }
  deleteRecipe(data: any) {
    this.recipeService.deleteRecipe(data._id).subscribe((res) => {
      console.log('Recipe deleted');
      this.getRecipes();
    });
  }
  editRecipeDetail(data: any) {
    this.recipeModelObj.id = data._id;
    this.formValue.controls.categoryId.setValue(data.categoryId);
    this.formValue.controls.title.setValue(data.title);
    this.formValue.controls.description.setValue(data.description);
    this.formValue.controls.imgUrl.setValue(data.imgUrl);
    this.formValue.controls.level.setValue(data.level);
    this.formValue.controls.time.setValue(data.time);
    this.formValue.controls.ingredient.setValue(data.ingredient);
  }
  updateRecipeDetails() {
    this.recipeModelObj.title = this.formValue.value.title;
    this.recipeModelObj.description = this.formValue.value.description;
    this.recipeModelObj.imgUrl = this.formValue.value.imgUrl;
    this.recipeModelObj.time = this.formValue.value.time;
    this.recipeModelObj.level = this.formValue.value.level;
    this.recipeModelObj.categoryId = this.formValue.value.categoryId;
    this.recipeModelObj.ingredient = this.formValue.value.ingredient;
    this.recipeService
      .updateRecipe(this.recipeModelObj, this.recipeModelObj.id)
      .subscribe((res) => {
        alert('Updated Successfully');
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getRecipes();
      });
  }
}
