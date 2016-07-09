(function(){
	'use strict'

	var planetas={
		bindings:{
			category:"=",
			id:"="
		},
		controller:planetasCtrl,
		templateUrl:"components/planetas.html"
	}

	function planetasCtrl(starwarsApi){
		var plan=this;

		plan.characters = starwarsApi.get({
			category:plan.category,
			id:plan.id
			
		})
	}

	angular
		.module('starwars')
		.component('planetas',planetas);

		
})();