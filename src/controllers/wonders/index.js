function WondersIndexCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: '/api/wonders'
  })
    .then(res => {
      console.log('Wonders are', res.data);
      $scope.wonders = res.data;
    })
    .then(()=> $state.go('wondersIndex'));
}

export default WondersIndexCtrl;
