'use strict';

angular.module('calculonusApp')
  .controller('CalculusCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.formattedText = '';

    function Calculus() {
      this.text = '';
      this.rows = [];
      this.splitBySpace = function(text) {
        var t = text || this.text;
        var ar = [];
        ar = t.split(' ');
        return ar;
      };
    }

    var calc1 = new Calculus();

    $scope.getText = function($event) {
      // var target = $event.currentTarget;
      var text = $event.currentTarget.innerText;
      calc1.text = text;
      console.log(calc1);
      calc1.findCaret();
      $scope.formattedText = calc1.oneSymbolHighlight();
    };


  });
