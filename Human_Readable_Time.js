/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59) */

// my solution

function humanReadable(seconds) {
  const HH = `0${parseInt(seconds / 3600)}`.slice(-2);
  const MM = `0${parseInt((seconds / 60) % 60)}`.slice(-2);
  const SS = `0${seconds % 60}`.slice(-2);
  return `${HH}:${MM}:${SS}`;
}

// Best Practices

function humanReadable(seconds) {
  const pad = function (x) {
    return x < 10 ? `0${x}` : x;
  };
  return `${pad(parseInt(seconds / (60 * 60)))}:${pad(
    parseInt((seconds / 60) % 60)
  )}:${pad(seconds % 60)}`;
}

function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function (v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? `0${v}` : v;
    })
    .join(':');
}
