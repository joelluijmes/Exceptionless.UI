(function () {
  'use strict';

  angular.module('app.stack')
    .controller('CreateJiraDialog', ['$ExceptionlessClient', '$uibModalInstance', function ($ExceptionlessClient, $uibModalInstance) {
      var source = 'app.stack.CreateJiraDialog';
      var vm = this;

      function cancel() {
        $uibModalInstance.dismiss('cancel');
      }

      function save(isValid) {
        if (!isValid) {
          return;
        }

        var model = vm.data ? {assignee: vm.data.assignee || '', details: vm.data.details, title: vm.data.title} : {assignee: '', details: '', title: ''};
        $uibModalInstance.close(model);
      }

      vm.cancel = cancel;
      vm.save = save;
    }]);
}());
