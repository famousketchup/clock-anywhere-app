export class TimezoneService {
  constructor ($http, $q, $log) {
    'ngInject';

    const timezoneQuery = $http.get('timezone-csv/timezone.csv')
    const zoneQuery     = $http.get('timezone-csv/zone.csv')

    let t = this
    let timezones = {}
    let zones = {}

  }

  fetchData(callback) {
    $q.all([timezoneQuery, zoneQuery]).then(function(values){

      const timezoneData = t.csvToArray(values[0].data)
      for(let tz of timezoneData) {
        let id = parseInt(tz[0])
        let time_start = parseInt(tz[2])

        let d = new Date()
        let utcTimestamp = (d.getTime() + d.getTimezoneOffset()*60*1000)/1000

        if(time_start < utcTimestamp)
          if(!(id in timezones) || timezones[id].time_start < time_start)
            timezones[id] = {
              abbreviation: tz[1],
              time_start: time_start,
              gmt_offset: parseInt(tz[3])
            }
      }

      const zoneData = t.csvToArray(values[1].data)
      for(let z of zoneData) {
        let id = parseInt(z[0])
        let zone_name = z[2]

        zones[zone_name] = {
          country_code: z[1],
          timezone: timezones[id]
        }
      }

      t.zones = zones
    })
  } 

  get(callback, $log) {
    /*callback() {
      return '+2'
    }*/
  }
  getCountries() {

    return 'syka'
  }

  csvToArray(csv) {
    return csv.split("\n").map(function(v) {
      return v.replace(/"/g, '').split(',')
    })
  }

}
