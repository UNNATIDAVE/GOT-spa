gotApp.controller("allController", ["allService", '$route', '$scope', function(allService, $route, $scope){

		var main = this;
		this.allData = [];
		this.allBooks = [];
		this.allChars = [];
		this.allHouses = [];
		this.all = true;
		this.books = false;
		this.chars = false;
		this.houses = false;

		$scope.reloadRoute = function(){
			$route.reload();
		}

    //to change order
    $scope.descendingButton = true;
    $scope.ascendingButton = false;
    $scope.alterOrder = 'name';

    $scope.changeOrder = function() {
    
        if ($scope.descendingButton) {
            $scope.descendingButton = false
            $scope.alterOrder = '-name';
            $scope.ascendingButton = true;
        } else if ($scope.ascendingButton) {
            //console.log("sss")
            $scope.descendingButton = true
            $scope.alterOrder = 'name';
            $scope.ascendingButton = false;
        }

    }
	
    // for Books	
    this.books = function() {       
        for (var i = 1; i <= 12; i++) { 

            allService.booksApi(i)
                .then(function successCallback(response) {

                    main.booksArray = response.data;
                    main.allBooks.push(main.booksArray);
                    main.allData.push(main.booksArray);

                }, function errorCallback(reason) {
                    console.log("Error Occurred");
                });
        }
    }
    this.books();

    // for Characters
    this.chars = function() {

        for (var i = 1; i <= 60; i++) { 
            allService.charactersApi(i)
                .then(function successCallback(response) {

                    main.charactersArray = response.data;
                    main.allChars.push(main.charactersArray);
                    main.allData.push(main.charactersArray);

                }, function errorCallback(reason) {
                    console.log("Error Occurred");
                });
        }
    }
    this.chars();

    // for Houses
    this.houses = function() {

        for (var i = 1; i <= 51; i++) { 

            allService.housesApi(i)
                .then(function successCallback(response) {

                    main.housesArray = response.data;
                    main.allHouses.push(main.housesArray);
                    main.allData.push(main.housesArray);

                }, function errorCallback(reason) {
                    console.log("Error Occurred");
                });
        }
    }

    this.houses();
    
    this.allShow = function() { //to show all
        main.all = true;
        main.books = false;
        main.chars = false;
        main.houses = false;
    }

    this.booksShow = function() { //to show books
        main.all = false;
        main.books = true;
        main.chars = false;
        main.houses = false;
    }
    this.charactersShow = function() { //to show characters
        main.all = false;
        main.books = false;
        main.chars = true;
        main.houses = false;
    }
    this.housesShow = function() { // to show houses
        main.all = false;
        main.books = false;
        main.chars = false;
        main.houses = true;
    }

    //console.log(this.all);

}]);   // Controller Ends 