export class MainController {

  constructor ($scope, $interval, location, $log) {
    'ngInject'

    $scope.autocompleteOptions = {
      watchEnter: true
    }

    this.$scope = $scope

    this.$interval = $interval
    this.location = location
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

    this.location.fetchTimezoneByLatLng(lat,lng).then((gmt)=> {
      scope.gmt = gmt
      scope.clockGmt = // ex. 5.75 => 5.45
        Math.floor(parseFloat(gmt)) + (gmt % 1 * 3/5)
      this.resetDigitalClock(scope)
    })
  }

  resetDigitalClock(scope) {
    let now = new Date()
    let userOffset = now.getTimezoneOffset()*60*1000
    let offset = scope.gmt*60*60*1000

    function tick() {
      let now = new Date()
      scope.date = new Date(now.getTime() + offset + userOffset)
    }

    if(scope.digitalClockInterval)
      this.$interval.cancel(scope.digitalClockInterval)

    tick()
    scope.digitalClockInterval = this.$interval(tick, 1000)
  }

}
