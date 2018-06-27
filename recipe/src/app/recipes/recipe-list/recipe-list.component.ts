import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('guacamole', 'a guacamole recipe for 4 mouth',
      'https://www.inspiredtaste.net/wp-content/uploads/2009/10/Easy-Homemade-Guacamole-Recipe-1-1200.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
