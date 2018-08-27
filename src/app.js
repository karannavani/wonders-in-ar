import angular from 'angular';
import '@uirouter/angularjs';
import './scss/style.scss';

// Import router
import Router from './config/routes';

// Customer directives
import Map from './directives/map';
import View from './directives/streetView';

//Controllers
import WondersIndexCtrl from './controllers/wonders/index';
import WondersShowCtrl from './controllers/wonders/show';
import ScannerIndexCtrl from './controllers/scanner/index';


angular.module('Wonders', ['ui.router'])
  .directive('ngMap', Map)
  .directive('ngView', View)
  .controller('WondersIndexCtrl', WondersIndexCtrl)
  .controller('WondersShowCtrl', WondersShowCtrl)
  .controller('ScannerIndexCtrl', ScannerIndexCtrl)
  .config(Router);
