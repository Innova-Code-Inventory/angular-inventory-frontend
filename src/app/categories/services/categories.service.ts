import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from "../../../environments/environment";
import { CategoriesResponse } from '../interfaces/categories-response';
import { Category } from '../interfaces/category';


interface State {
  isLoading: boolean,
  categories: Category[]
}


@Injectable({providedIn: 'root'})
export class CategoriesService {
  
  public http = inject(HttpClient);

  constructor() {
    this.findAll()
  }


  #state = signal<State>({
    isLoading: true,
    categories: []
  })

  public categories = computed(() => this.#state().categories);
  public isLoading = computed(() => this.#state().isLoading);

  findAll() {
    this.http.get<CategoriesResponse>(environment.API_URL + '/categories')
      .subscribe(res => {
        this.#state.set({
          isLoading: false,
          categories: res.categories
        })
      })
  }
  
  findOne() {

  }

  create() {

  }

  remove() {

  }

  update() {

  }



}
