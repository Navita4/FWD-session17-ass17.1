import {Component} from '@angular/core';
@Component({
    selector:'app-home',
    template:<h1> {{Welcome}} </h1>

    <table class="table">
    <tr>
    <th>#</th>
    <th>Images URL</th>
    <th>Name </th>
    <th>Description</th>
    <th>Rating</th>
    <th> Release </th>
    </tr>
    <tr *ngFor="let game of games|slice:0:5 as top games;index as i">
    <td>{{i+1}} </td>
    <td> {{topgames.length-i}}:{{game.title}}</td>
    <td>{{game.name}}</td>
    <td>{{game.platform}}</td>
    <td>{{game.release}}</td>
    </tr>
    </table>
})

export class HomeComponent{
    welcome:string;
    games:[{
        images:string;
        name:string;
        description:string;
        rating:string;
        release:string;
        platform:string;
    }]

    constructor(){
        this.welcome="Display list using ngFor in angular2"
        this.games=[{
            name:"Angry Bird",
            platform:"Android",
            release:"nov 12"
        },
        {
            name:"Pokeman Go"
            platform:"Android",
            release:"nov 13"
        },
        {
            name:"Super Mario",
            platform:"Android",
            release:"nov 14"
        },
        {
            name:"The killer",
            platform:"Android",
            release:"nov 15"
        },

        }];
    };
};