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
      this.findCaret = function(text) {
        var t = text || this.text;
        var pat = new RegExp('\n');
        if (pat.test(t)) {
          console.log('yes it has caret return');
          this.rows = t.split('\n');
        } else {
          console.log('stil nothing');
        }
      };
      this.oneSymbolHighlight = function(text) {
        var t = text || this.rows;
        if (t.length > 0) {
          var wrappedText = '';
          for (var i=0;i<t.length;i++) {
            console.log(t[i]);
            for (var j=0; j < t[i].length; i++) {
              if (t[i][j].length === 1) {
                wrappedText += '<span class="red">' + t[i][j] + '</span> ';
              } else {
                wrappedText += t[i][j] + ' ';
              }
            }
          }
          // wrappedText += '<span class="red">' + t + '</span> ';
          return wrappedText;
        } else {
          return 0;
        }
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
