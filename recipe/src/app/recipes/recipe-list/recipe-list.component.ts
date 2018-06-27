import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [new Recipe('guacamole', 'a guacamole recipe for 4 mouth', 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjF993J4PTbAhWhtlkKHYGrC1YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.simplyrecipes.com%2Frecipes%2Fperfect_guacamole%2F&psig=AOvVaw0uSSDipf10fAf0jqTjUokt&ust=1530220186687710')];
  constructor() { }

  ngOnInit() {
  }

}
