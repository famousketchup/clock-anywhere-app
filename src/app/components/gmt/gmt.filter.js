export class GmtFilter {
  filter (input) {
    gmt = parseFloat(input)
    const floor = Math.floor(gmt)

    let result = ''

    result += gmt >= 0 ? '+' : '-'
    result += floor
    result += gmt - floor > 0 ? '.'+floor : ''

    return result
  }
}
