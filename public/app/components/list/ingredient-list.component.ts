import {Component} from 'angular2/core'
import {IngredientService} from '../../services/index';

@Component({
    selector: 'ingredient-list',
    templateUrl: './ingredient-list.component.html'
})

export class IngredientList {
    constructor(ingredientService: IngredientService){}
}
