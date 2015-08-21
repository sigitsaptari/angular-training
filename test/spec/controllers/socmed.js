'use strict';

describe('Controller: SocmedCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTrainingApp'));

  var SocmedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocmedCtrl = $controller('SocmedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
