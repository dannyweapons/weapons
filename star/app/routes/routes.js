(function(){
	'use strict'

	angular
		.module('starwars')
		.config(star);

		star.$inject=['$routeProvider'];

		function star($routeProvider){
			$routeProvider
			.when('/',{
				template:`<personaje category="'people'"   id="1"></personaje>`
			})
			.when('/planetas',{
				template:`<planetas category="'planets'"   id="2"></planetas>`
			})
			.otherwise({
				redirectTo:"/"
			})
		}
})();