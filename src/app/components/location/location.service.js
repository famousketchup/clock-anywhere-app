export class LocationService {
  constructor ($http, $q) {
    'ngInject';

    this.$http = $http
    this.$q = $q
    this.username = 'dmitriy.korotayev'
  }

  fetchTimezoneByLatLng(lat, lng) {
    const q = this.$q.defer()

    this.$http.get(`http://api.geonames.org/timezone?lat=${lat}&lng=${lng}&username=${this.username}&style=full`)
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

  fetchCapitalByCountryCode(countryCode) {
    const q = this.$q.defer()

    this.$http.get(`http://api.geonames.org/countryInfo?country=${countryCode}&username=${this.username}`)
      .success(function(response){
        q.resolve(response.geonames.country.capital)
      })
      .error(function(response){
        q.resolve(response)
      }
    )
    return q.promise
  }
}
