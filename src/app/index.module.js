/* global malarkey:false, moment:false */

import { config } from './index.config'
import { routerConfig } from './index.route'
import { runBlock } from './index.run'

import { MainController } from './main/main.controller'
import { LocationService } from './components/location/location.service'
import { GmtFilter } from './components/location/gmt.filter'

angular.module('clock', ['ngSanitize', 'ngResource', 'ngRoute', 'mm.foundation', 'ds.clock', 'ngAutocomplete', 'xml'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('location', LocationService)
  .controller('MainController', MainController)
  .filter('gmt', GmtFilter)
