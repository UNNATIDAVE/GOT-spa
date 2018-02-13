gotApp.controller("characterController", ["$http", "allService", "$routeParams", function($http, allService, $routeParams) {

    var main = this;

    this.charId = $routeParams.id2;
    this.charsData = [];
    this.seasons;
    this.knownAs;

    this.charDetails = function() {

        allService.charactersApi(main.charId)
            .then(function successCallback(response) {

                main.charsData.push(response.data);
                this.knownAs = [];

                for (var i in response.data.aliases) {
                    this.knownAs.push(response.data.aliases[i]);                    
                }

                main.knownAs = this.knownAs.toString();
                this.series = []; 


                for (var i in response.data.tvSeries) {
                    this.series.push(response.data.tvSeries[i]);
                }
                main.seasons = this.series.toString();

            }, 
            function errorCallback(reason) {
                console.log("Error Occurred");
            })
        }; // Function Ends

    this.charDetails();

}]);    // Controller Ends