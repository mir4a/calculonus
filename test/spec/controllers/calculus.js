'use strict';

describe('Controller: CalculusCtrl', function () {

  // load the controller's module
  beforeEach(module('calculonusApp'));

  var CalculusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculusCtrl = $controller('CalculusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
