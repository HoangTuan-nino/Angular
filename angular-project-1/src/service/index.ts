import { Injectable, Input } from '@angular/core';
import { ICategory, IRecipe } from 'src/model/interface';
import { HttpService } from './http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class RecipeApi {
  @Input() recipe: IRecipe;
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000';
  createRecipe(data: any): Observable<any> {
    const productUrl = `${this.url}/create`;
    return this.http.post<any>(productUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getRecipes(): Observable<any> {
    const productsUrl = `${this.url}/products`;
    return this.http.get<any>(productsUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getRecipeById(id): Observable<any> {
    const productUrl = `${this.url}/products/${id}`;
    return this.http.get(productUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public updateRecipe(data: any, id: number): Observable<any> {
    const productUrl = `${this.url}/update/${id}`;
    return this.http.put<any>(productUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public deleteRecipe(id: number): Observable<any> {
    const productUrl = `${this.url}/products/${id}`;
    return this.http.delete(productUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // constructor(private httpService: HttpService) {}
  // private url = 'http://localhost:3000';
  // public getProducts(): Observable<any> {
  //   const productsUrl = `${this.url}/products`;
  //   return this.httpService.get(productsUrl);
  // }
  // public getProductById(id): Observable<any> {
  //   const productUrl = `${this.url}/products/${id}`;
  //   return this.httpService.get(productUrl);
  // }
  // public deleteProduct(id): Observable<any> {
  //   const productUrl = `${this.url}/products/id/${id}`;
  //   return this.httpService.delete(productUrl);
  // }
  // public updateProducts(data: IRecipe[]): Observable<any> {
  //   const productUrl = `${this.url}/products`;
  //   return this.httpService.post(productUrl, data);
  // }
  // public createNewProduct(data: IRecipe): Observable<any> {
  //   const productUrl = `${this.url}/products`;
  //   return this.httpService.post(productUrl, data);
  // }
  // public updateProduct(id: number, data: IRecipe): Observable<any> {
  //   const productUrl = `${this.url}/products/${id}`;
  //   return this.httpService.put(productUrl, data);
  // }
  public getCategories(): Observable<any> {
    const categoriesUrl = `${this.url}/categories`;
    return this.http.get(categoriesUrl);
  }
  public getCategoryById(id): Observable<any> {
    const categoryUrl = `${this.url}/categories/${id}`;
    return this.http.get(categoryUrl);
  }
  public deleteCategory(id): Observable<any> {
    const categoryUrl = `${this.url}/categories/${id}`;
    return this.http.delete(categoryUrl);
  }
  public createNewCategory(data: IRecipe): Observable<any> {
    const categoryUrl = `${this.url}/categories`;
    return this.http.post(categoryUrl, data);
  }
  public updateCategory(id: number, data: IRecipe): Observable<any> {
    const categoryUrl = `${this.url}/categories/${id}`;
    return this.http.put(categoryUrl, data);
  }
}
