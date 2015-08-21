'use strict';

describe('Controller: BlogfazrinCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTrainingApp'));

  var BlogfazrinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogfazrinCtrl = $controller('BlogfazrinCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
