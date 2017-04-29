angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    $scope.page = 0;
    function addDifficulty(array) {
      array.map(function (el) {
        switch (el.difficulty) {
          case 1:
            el.labelDifficulty = 'Easy';
            break;
          case 2:
            el.labelDifficulty = 'Medium';
            break;
          case 3:
            el.labelDifficulty = 'Hard';
            break;
        }
      })
    }
    $scope.question;
    $scope.animal;
    $scope.difficulty;

    $scope.getQuestions = function () {
        mainService.getQuestions().then(function (response) {
            $scope.questions = response.data;
            addDifficulty($scope.questions);
        })
    }
    $scope.getQuestions();

    
    $scope.openModal = function (question) {
      $scope.currentQuestion = question;
      if (question) {
        $scope.editing = true;
      } else {
        $scope.addingNew = true;
      }
      $scope.modalOpen = true;
    }
    
    $scope.toggleSearch = function () {
        $scope.searchOpen = !$scope.searchOpen;
        $scope.search = {};
    }
    $scope.changePage = function(page){
        mainService.changePage(page);
    }

})