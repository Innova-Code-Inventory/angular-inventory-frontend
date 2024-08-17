import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public http = inject(HttpClient);
  private API_URL = "http://localhost:8000/api"

  constructor() { 
    this.findAll()
  }

  findAll() {
    console.log("first")
  }

  findOne() {

  }

  create(){

  }

  remove(){

  }

  update(){

  }



}
