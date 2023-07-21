import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @ViewChild('recipeSelected', { static: false }) recipeSelectedRef: ElementRef;
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
