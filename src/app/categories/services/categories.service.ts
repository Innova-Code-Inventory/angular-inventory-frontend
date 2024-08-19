import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from "../../../environments/environment";
import { CategoriesResponse } from '../interfaces/categories-response';
import { Category } from '../interfaces/category';


interface State {
  loading: boolean,
  categories: Category[]
}


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    categories: []
  })

  public categories = computed(() => this.#state().categories);
  public loading = computed(() => this.#state().loading);





  constructor() {
    this.findAll()
  }

  findAll() {
    this.http.get<CategoriesResponse>(environment.API_URL + '/categories')
      .subscribe(res => {

        this.#state.set({
          loading: false,
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
