'use strict';

describe('Controller: PicboardCtrl', function () {

  // load the controller's module
  beforeEach(module('basej5pintApp'));

  var PicboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PicboardCtrl = $controller('PicboardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
