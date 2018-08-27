/* global Skycons */

function WondersShowCtrl($scope, $http, $state, $timeout) {

  // const wonderSources = [ 'taj', 'petra', 'china', 'christ', 'itza', 'machu', 'colosseum' ];

  $http({
    method: 'GET',
    url: `/api/wonders/${$state.params.id}`
  })
    .then(res => {
      $scope.wonder = res.data;
      // $scope.elName = $scope.wonder.name.toString().toLowerCase().split(' ');
      // $scope.checkElement();
    });

  $scope.$watch('wonder', function() {
    if($scope.wonder) {
      $http({
        method: 'GET',
        url: '/api/weather',
        params: {lat: $scope.wonder.location.lat, lon: $scope.wonder.location.lng}
      })
        .then(res => {
          $scope.weatherSummary = res.data.summary;
          $scope.icon = res.data.icon;
          $scope.temp = convertTemp(res.data.temperature);
          // loadIcon();
        });
    }
  });

  function convertTemp(temp) {
    return Math.round((temp - 32) * 0.555);
  }


  function loadIcon() {
    const icons = new Skycons({'color': 'black'});
    const list  = [ 'clear-day', 'clear-night', 'partly-cloudy-day','partly-cloudy-night', 'cloudy', 'rain', 'sleet', 'snow', 'wind', 'fog'];

    for(let i = list.length; i--; ){
      icons.set(list[i], list[i]);
    }
    icons.play();
  }

  $scope.$watch('icon', function() {
    // Need to wait for the DOM to update
    if($scope.icon) {
      $timeout(loadIcon, 0.01);
      // loadIcon();
    }
  });

//More AR stuff

//   $scope.checkElement = function() {
//     $scope.srcName;
//     $scope.elName.forEach(name => {
//       const index = wonderSources.indexOf(name);
//       if (index > -1) {
//         console.log(wonderSources[index]);
//         $scope.srcName = `models/${wonderSources[index]}/scene.gltf`;
//         console.log($scope.srcName);
//         $scope.updateSrc();
//       }
//     });
//   };
//
//   $scope.updateSrc = function() {
//     $http({
//       method: 'PUT',
//       url: 'api/wonders/5b6f7dc2e539884511a85beb',
//       data: {'model': $scope.srcName}
//     });
//   };
}
//
//

export default WondersShowCtrl;
