// Was experimenting for AR stuff – not needed

// function ScannerIndexCtrl($scope, $http, $state) {
//   $http({
//     method: 'GET',
//     url: '/api/wonders/5b6f7dc2e539884511a85beb'
//   })
//     .then(res => {
//       console.log('Scanner scope is', res.data);
//       $scope.wonders = res.data;
//       console.log('wonder div is', document.querySelector('#wonder'));
//       document.querySelector('#wonder').setAttribute('src', res.data.model);
//       console.log('setting src dynamically');
//     })
//     .then(()=> $state.go('scannerIndex'));
// }
//
// export default ScannerIndexCtrl;
