'use strict';

angular.module('forumApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/topics', {
        templateUrl: 'app/topics/topics.html',
        controller: 'TopicsCtrl'
      });
  });
