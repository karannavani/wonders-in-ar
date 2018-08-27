/*global google */


function View() {
  return {
    restrict: 'A',
    link($scope, $element) {
      console.log('Element is', $element);
      const el = $element[0];
      const p = new google.maps.StreetViewPanorama(el);
      $scope.$watch('wonder', function() {
        if($scope.wonder) {
          // console.log('wondering', $scope.wonder);
          p.setPosition({
            lat: $scope.wonder.location.lat,
            lng: $scope.wonder.location.lng
          });
          p.setPov({
            heading: 165,
            pitch: 0
          });
          p.setZoom(1);
        }
      });
    }
  };
}

export default View;
