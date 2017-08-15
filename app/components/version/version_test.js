'use strict';

describe('goalie.version module', function() {
  beforeEach(module('goalie.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
