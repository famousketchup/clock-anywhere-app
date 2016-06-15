export class LocationService {
  constructor ($http, $q) {
    'ngInject';

    this.$http = $http
    this.$q = $q
  }

  fetchTimezoneByLatLng(lat, lng) {
    const q = this.$q.defer()

    this.$http.get('http://api.geonames.org/timezone?lat='+lat+'&lng='+lng+'&username=dmitriy.korotayev&style=full')
      .success(function(response){
        q.resolve(response.geonames.timezone.dstOffset)
      })
      .error(function(response){
        q.resolve(response)
      }
    )
    return q.promise
  }
  getFlagUrlByCountryCode(countryCode) {
    return 'http://www.geonames.org/flags/x/'+countryCode.toLowerCase()+'.gif'
  }
}
