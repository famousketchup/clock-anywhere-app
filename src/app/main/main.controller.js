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
    let scope = this.$scope
    let details = scope.locationDetails

    if(!details) {
      alert('No location was selected')
      return
    }

    //if(!this.fetchedCapital && !this.addCapitalIfNecessary(scope, details))
      //return

    const lat = details.geometry.location.lat()
    const lng = details.geometry.location.lng()

    scope.locationAddress = details.formatted_address
    scope.flagUrl = this.location.getFlagUrlByCountryCode(
      details.address_components.filter((component)=> {
        return component.types[0] === 'country'
      })[0].short_name
    )

    this.location.fetchTimezoneByLatLng(lat,lng).then((gmt)=> {
      scope.gmt = gmt
      scope.clockGmt = // ex. 5.75 => 5.45
        Math.floor(parseFloat(gmt)) + (gmt % 1 * 3/5)
      this.resetDigitalClock(scope)
    })
  }
/*
  addCapitalIfNecessary(scope, details) {
    if(this.fetchingCapital) return false
    let addressInfo = details.address_components[0]

    if(addressInfo.types[0]=='country') {
      const country = addressInfo.long_name
      const countryCode = addressInfo.short_name

      this.fetchingCapital = true
      this.location.fetchCapitalByCountryCode(countryCode).then((capital)=> {
        scope.location = capital+', '+country
        scope.$apply()
        this.fetchingCapital = false
        this.fetchedCapital = true
        this.updateClock()
        this.fetchedCapital = false
      })
    }

    return true
  }
*/
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
