function Router($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('wondersIndex', {
      templateUrl: './views/wonders/index.html',
      url: '/wonders',
      controller: 'WondersIndexCtrl'
    })
    .state('wondersShow', {
      templateUrl: './views/wonders/show.html',
      url: '/wonders/:id',
      controller: 'WondersShowCtrl'
    })
    .state('scannerIndex', {
      templateUrl: './views/scanner/index.html',
      url: '/scanner',
      controller: 'ScannerIndexCtrl'
    });
  $urlRouterProvider.otherwise('/wonders');
}

export default Router;
