export function GmtFilter() {
  return (input)=> {
    const gmt = parseFloat(input)
    const hours = Math.floor(gmt)
    const minutes = Math.floor(Math.abs(gmt - hours) * 3/5 * 100)

    let result = ''

    result += gmt >= 0 ? '+' : '-'
    result += Math.abs(hours)

    if(minutes != 0)
      result += '.'+minutes

    return result
  }
}
