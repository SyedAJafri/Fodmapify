import {Component} from 'angular2/core'

@Component({
    selector: 'home',
    templateUrl: `
    <h2>Rails Angular 2</h2>
    {{message}}
    `
})

export class HomeComponent {
    message = "hi";
    constructor(){}
}
