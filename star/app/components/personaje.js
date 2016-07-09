(function(){
	'use strict'

	var personaje={
		bindings:{
			category:"=",
			id:"="
		},
		controller:personajeCtrl,
		templateUrl:"components/personaje.html"
	}

	function personajeCtrl(starwarsApi){
		var char=this;

		char.characters = starwarsApi.get({
			category:char.category,
			id:char.id

		})
		console.log(char.characters)
	}

	angular
		.module('starwars')
		.component('personaje',personaje);

		
})();