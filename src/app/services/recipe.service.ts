import {Recipe} from "../recipes/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import { Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "./shopping.service";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.everyday-delicious.com/wp-content/uploads/2022/08/German-pork-schnitzel-everyday-delicious-2.jpg',
      [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)]
      ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://fastfoodnutrition.org/item-photos/full/914.jpg',
      [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
      ]),
  ];
  constructor(private shoppingListService: ShoppingService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
