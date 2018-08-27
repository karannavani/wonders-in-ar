/*global L */


function Map() {
  return {
    restrict: 'A',
    link($scope, $element) {
      console.log('The map element is', $element);
      const map = L.map($element[0]);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      }).addTo(map);
      $scope.$watch('wonder', function() {
        if($scope.wonder) {
          // console.log('This is wonder', $scope.wonder);
          map.setView([$scope.wonder.location.lat, $scope.wonder.location.lng], 11);
          const marker = L.marker([$scope.wonder.location.lat, $scope.wonder.location.lng]).addTo(map);
          marker.bindPopup(`<p>${$scope.wonder.name}</p><img src="${$scope.wonder.model}">`);
        }
      });
    }
  };
}

export default Map;
