angular.module('app').service('mainService', function ($http) {
    let urlAPI = 'https://practiceapi.devmountain.com/api/trivia/questions?page=';
    
    this.getQuestions = function () {
        return $http({
            method: "GET",
            url: (urlAPI + '0')
        });
    }

    this.changePage = function(page){
        return $http({
            method: "GET",
            url: (urlAPI + page)
        });
    }
    
})