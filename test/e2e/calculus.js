'use strict';

describe('Integration/E2E Testing', function () {
  beforeEach(function () {
    browser().navigateTo('/');
  });

  it('ensures that homepage has calculus div', function () {
    browser().navigateTo('#/');

    expect(element('#calculonus').length).toBe(1);
  });

});
