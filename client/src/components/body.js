import React from "react";

const Body = () => {
    
    return (
        <div class="container d-flex flex-wrap justofy-content-center">
        <h3 class="featured fs-4">Featured</h3>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Cocktail App</h5>
            <p class="card-text">As a cocktail lover, I want to be able to search the cocktail recipes based on the different alcohol ingridents and cocktail name. and see the popular cocktail recipe recommendation based on the weather of the day in Melbourne.</p>
            <a target="_blank" href="https://jamesthomasbester.github.io/CocktailApp/index.html">Check it out</a>
            <p class="card-text"><small class="text-muted">James Bester</small></p>
          </div>
          <img src="./Untitled.png" class="card-img-bottom" alt="cocktails"></img>
        </div>
      </div>
        )
}

export default Body;