gotApp.controller("bookController", ["$http", "allService", "$routeParams", function($http, allService, $routeParams){

	var main = this;

	this.bookId = $routeParams.id1;
	this.booksData = [];
	this.author;
	this.l;

	this.booksDetails = function(){

		allService.booksApi(main.bookId)
			.then(function successCallback(response){

				main.booksData.push(response.data);
				this.people = [];

				// for Authors
				for(var i in response.data.authors){
					this.people.push(response.data.authors[i]);
				}

				main.author = this.people.toString();
			},
			function errorCallback(reason){
				console.log("Error Occurred");
			})
	};	// Function Ends

	this.booksDetails();

}]);	// Controller Ends