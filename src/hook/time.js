export default function (duration) {
  if (!duration) return '00:00'
  duration = duration >= 1000 ? duration : duration * 1000
  const m =
    parseInt(duration / 1000 / 60) >= 10
      ? `${parseInt(duration / 1000 / 60)}`
      : `0${parseInt(duration / 1000 / 60)}`
  const s =
    parseInt((duration / 1000) % 60) >= 10
      ? `${parseInt((duration / 1000) % 60)}`
      : `0${parseInt((duration / 1000) % 60)}`
  return m + ':' + s
}
