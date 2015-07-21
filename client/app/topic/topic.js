'use strict';

angular.module('forumApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/topic/:id', {
        templateUrl: 'app/topic/topic.html',
        controller: 'TopicCtrl'
      });
  });
