angular.module('myApp')
.controller('HeaderController', function ($scope,$location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
})
.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 400 + slides.length + 1;
    slides.push({
      image: 'images/slide-0'+(i+1)+'.jpg',
      text: ['Con la gente','Transparentes','Otra idea'][slides.length % 3] + ' ' +
        ['Estamos con la gente del pueblo', 'Transparencia total', 'Otra explicación de la idea'][slides.length % 3]
    });
  }
  for (var i=0; i<3 ;i++) {
    $scope.addSlide();
  }
});