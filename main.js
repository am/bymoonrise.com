import suncalc from 'suncalc'

const { rise } = suncalc.getMoonTimes(new Date(), 41.3851, 2.1734);
const noteEl = document.querySelector('#moonrise-text')
const hour = rise.toLocaleString(
  'en-US',
  { hour: 'numeric', minute: 'numeric', hour12: true }
)
noteEl.innerText = `barcelona - moonrise at ${hour}`
