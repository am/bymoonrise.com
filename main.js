import suncalc from 'suncalc'

const times = suncalc.getMoonTimes(new Date(), 41.3851, 2.1734);
console.log(times.rise)
