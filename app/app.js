// declare a module
var app = angular.module('app', []);

app.directive('clickButton', () => {
    return {
        restrict: 'E',
        link: (scope, elem, attrs) => {
            elem.on('click', () => elem.css('background-color', 'blue'));
        },
        template: '<button id="button-to-click">Tryk på denne knap for der sker noget sjovt</button>'
    };
});

app.directive('changeTextButton', () => {
    return {
        restrict: 'E',
        template: '<button ng-click="click()" id="change-text-button">Tryk på denne knap for at skifte tekst</button>',
        controller: function($scope) {
            
            $scope.click = function() {
                $scope.currentText = "Der er trykket på knappen";
            }
        }
    };
});