import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'teste of the recipe description',
      'https://asset2.zankyou.com/images/wervice-card-big/362/1976/1050/800/w/601937/-/1507244848.jpg'),
      new Recipe('A test Recipe', 'teste of the recipe description',
      'https://asset2.zankyou.com/images/wervice-card-big/362/1976/1050/800/w/601937/-/1507244848.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
