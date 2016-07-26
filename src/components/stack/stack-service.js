﻿(function () {
  'use strict';

  angular.module('exceptionless.stack', [
    'restangular',

    'exceptionless.filter'
  ])
  .factory('stackService', ['filterService', 'Restangular', function (filterService, Restangular) {
    function addLink(id, url) {
      return Restangular.one('stacks', id).one('add-link').customPOST(url);
    }

    function disableNotifications(id) {
      return Restangular.one('stacks', id).one('notifications').remove();
    }

    function enableNotifications(id) {
      return Restangular.one('stacks', id).one('notifications').post();
    }

    function getAll(options) {
      return Restangular.all('stacks').getList(filterService.apply(options));
    }

    function getById(id) {
      return Restangular.one('stacks', id).get();
    }

    function getFrequent(options) {
      return Restangular.one('stacks').all('frequent').getList(filterService.apply(options));
    }

    function getUsers(options) {
      return Restangular.one('stacks').all('users').getList(filterService.apply(options));
    }

    function getNew(options) {
      return Restangular.one('stacks').all('new').getList(filterService.apply(options));
    }

    function markCritical(id) {
      return Restangular.one('stacks', id).one('mark-critical').post();
    }

    function markNotCritical(id) {
      return Restangular.one('stacks', id).one('mark-critical').remove();
    }

    function markFixed(id, version) {
      return Restangular.one('stacks', id).post('mark-fixed', null, { version: version });
    }

    function markNotFixed(id) {
      return Restangular.one('stacks', id).one('mark-fixed').remove();
    }

    function markHidden(id) {
      return Restangular.one('stacks', id).one('mark-hidden').post();
    }

    function markNotHidden(id) {
      return Restangular.one('stacks', id).one('mark-hidden').remove();
    }

    function promote(id) {
      return Restangular.one('stacks', id).one('promote').post();
    }

    function remove(id) {
      return Restangular.one('stacks', id).remove();
    }

    function removeLink(id, url) {
      return Restangular.one('stacks', id).one('remove-link').customPOST(url);
    }

    function createJira(id, model) {
      return Restangular.one('stacks', id).post('create-jira-issue', null, model);
    }

    var service = {
      addLink: addLink,
      disableNotifications: disableNotifications,
      enableNotifications: enableNotifications,
      getAll: getAll,
      getById: getById,
      getFrequent: getFrequent,
      getUsers: getUsers,
      getNew: getNew,
      markCritical: markCritical,
      markNotCritical: markNotCritical,
      markFixed: markFixed,
      markNotFixed: markNotFixed,
      markHidden: markHidden,
      markNotHidden: markNotHidden,
      promote: promote,
      remove: remove,
      removeLink: removeLink,
      createJira: createJira
    };

    return service;
  }]);
}());
