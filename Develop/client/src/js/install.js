const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installBtn.style.visibility = 'visible';
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
if (!promptEvent) {
  return;
}
promptEvent.prompt();
window.deferredPrompt = null;
butInstall.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});