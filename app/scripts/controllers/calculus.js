'use strict';

angular.module('calculonusApp').controller('CalculusCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate', 'AngularJS', 'Karma'
  ];

  $scope.formattedText = '';

  function Calculus() {
    this.text = '';
    this.rows = [];
    this.splitBy = function (text, delimiter) {
      delimiter = delimiter || ' ';
      var t = text || this.text;
      var ar = [];
      ar = t.split(delimiter);
      return ar;
    };
  }

  Calculus.prototype.prepareArguments = function () {
    var delimeters = {
      'space'   : ' ',
      'plus'    : '+',
      'minus'   : '-',
      'divide'  : '/',
      'multiply': '*',
      'percent' : '%'
    };
    var args = {};
    var _text = this.text;

    for (var key in delimeters) {
      if (delimeters.hasOwnProperty(key)) {
        args[key] = _text.split(delimeters[key]);
      }
    }

    return args;
  };

  $scope.calculus = new Calculus();

  $scope.getText = function ($event) {
    // var target = $event.currentTarget;
    var text = $event.currentTarget.innerText;
    this.calculus.text = text;
    var ar = this.calculus.prepareArguments();
    console.log(this);
    console.info(ar);
  };

});
