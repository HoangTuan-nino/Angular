import { RecipeDashboardComponent } from './recipe-dashboard/recipe-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  {
    path: 'products/:id',
    component: RecipesComponent,
    children: [
      { path: ':id', component: RecipeDetailComponent },
      { path: 'recipe-detail/:id', component: RecipeDetailComponent },
    ],
  },
  { path: 'new', component: RecipeEditComponent },
  { path: 'dashboard', component: RecipeDashboardComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
