gotApp.controller("houseController", ["$http", "allService", "$routeParams", function($http, allService, $routeParams) {

    var main = this;

    this.hData = [];
    this.hId = $routeParams.id3;
    this.titles;

    this.hDetails = function() {

        allService.housesApi(main.hId)
            .then(function successCallback(response) {

                main.hData.push(response.data);

                this.names = []; 

                for (var i in response.data.titles) {
                    this.names.push(response.data.titles[i]);
                }

                main.titles = this.names.toString();

            }, 
            function errorCallback(reason) {
                console.log("Error Occurred");
            })

    }; // Function Ends

    this.hDetails();
}]); // Controller Ends