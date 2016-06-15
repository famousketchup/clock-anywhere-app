export function GmtFilter() {
  return (input)=> {
    const gmt = parseFloat(input)
    const hours = Math.floor(gmt)
    const minutes = Math.floor(Math.abs(gmt - hours) * 3/5 * 100)
    // for example: 4.75 => 4, 0.45

    let result = ''

    // Add sign, hours and, if necesary, minutes
    result += gmt >= 0 ? '+' : '-'
    result += Math.abs(hours)

    if(minutes != 0)
      result += '.'+minutes

    return result
  }
}
