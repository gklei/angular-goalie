'use strict';

angular.module('goalie.version', [
  'goalie.version.interpolate-filter',
  'goalie.version.version-directive'
])

.value('version', '0.1');
