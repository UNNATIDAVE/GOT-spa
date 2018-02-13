gotApp.config(["$routeProvider", function ($routeProvider){

	$routeProvider
	 .when("/", {
	 	templateUrl: 'views/index-view.html'
	 })

	.when("/all",{
		controller: 'allController',
		controllerAs: 'mainCtrl',
		templateUrl: 'views/all-view.html'
	})

	.when("/books",{
		controller: 'allController',
		controllerAs: 'mainCtrl',
		templateUrl: 'views/all-books.html'
	})

	.when("/characters",{
		controller: 'allController',
		controllerAs: 'mainCtrl',
		templateUrl: 'views/all-chars.html'
	})

	.when("/houses",{
		controller: 'allController',
		controllerAs: 'mainCtrl',
		templateUrl: 'views/all-houses.html'
	})

	.when("/books/:id1",{
		controller: 'bookController',
	 	controllerAs: 'bookCtrl',
	 	templateUrl: 'views/single-book.html'
	})

	.when("/characters/:id2",{
	 	controller: 'characterController',
	 	controllerAs: 'charCtrl',
	 	templateUrl: 'views/single-character.html'
	})

	.when("/houses/:id3",{
		controller: 'houseController',
	 	controllerAs: 'houseCtrl',
	 	templateUrl: 'views/single-house.html'
	})

	.otherwise({
            redirectTo: '/'

        });
}]);	