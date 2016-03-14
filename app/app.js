// declare a module
var app = angular.module('app', []);

app.directive('clickButton', () => {
    return {
        restrict: 'E',
        link: (scope, elem, attrs) => {
            elem.on('click', () => elem.css('background-color', 'blue'));
        },
        template: '<button id="clickMe">Tryk på denne knap for der sker noget sjovt</button>'
    };
});