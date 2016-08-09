import { Injectable }    from 'angular2/core';
import { Headers, Http } from 'angular2/http';
import 'rxjs/add/operator/toPromise';
import { Ingredient } from '../types/ingredient.ts';

@Injectable()
export class IngredientService {

    private ingredientsUrl = 'api/ingredients';  // URL to web api
    constructor(private http: Http) { }

    getIngredients() {
        return this.http.get(this.ingredientsUrl)
            .toPromise()
            .then(response => response.json().data as Ingredient[])
            .catch(IngredientService.handleError);
    }

    getIngredient(id: number) {
        return this.getIngredients()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    save(hero: Ingredient): Promise<Ingredient>  {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    delete(ingredient: Ingredient) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.ingredientsUrl}/${ingredient.id}`;
        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(IngredientService.handleError);
    }

    // Add new Hero
    private post(ingredient: Ingredient): Promise<Ingredient> {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http
            .post(this.ingredientsUrl, JSON.stringify(ingredient), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(IngredientService.handleError);
    }

    // Update existing Hero
    private put(ingredient: Ingredient) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.ingredientsUrl}/${ingredient.id}`;
        return this.http
            .put(url, JSON.stringify(ingredient), {headers: headers})
            .toPromise()
            .then(() => ingredient)
            .catch(IngredientService.handleError);
    }

    private static handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}