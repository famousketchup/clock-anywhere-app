/* global malarkey:false, moment:false */

import { config } from './index.config'
import { routerConfig } from './index.route'
import { runBlock } from './index.run'
import { MainController } from './main/main.controller'
import { TimezoneService } from './components/timezone/timezone.service'
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive'

angular.module('clock', ['ngSanitize', 'ngResource', 'ngRoute', 'mm.foundation', 'ds.clock'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('timezone', TimezoneService)
  .controller('MainController', MainController)
  .directive('acmeMalarkey', MalarkeyDirective)
