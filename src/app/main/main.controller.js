export class MainController {

  constructor ($scope, $interval, timezone, $log) {
    'ngInject'

    $scope.gmt = 2
    $scope.autocompleteOptions = {
      watchEnter: true
    }

    this.$scope = $scope

    this.$interval = $interval
    this.timezone = timezone
    this.$log = $log
  }

  updateClock() {
    const details = this.$scope.locationDetails
    let scope = this.$scope

    if(!details) {
      alert('No location was selected')
      return
    }

    const lat = details.geometry.location.lat()
    const lng = details.geometry.location.lng()

    scope.locationAddress = details.formatted_address
    scope.gmt = '2' // TODO

    if(scope.tick)
      scope.tick.cancel()

    scope.tick = this.$interval(function(){
      scope.date = Date.now()
    }, 1000)
  }

}
