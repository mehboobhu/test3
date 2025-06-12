let deferredPrompt;
const installContainer = document.getElementById('installContainer');
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installContainer.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted install');
    } else {
      console.log('User dismissed install');
    }
    deferredPrompt = null;
    installContainer.style.display = 'none';
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(() => {
      console.log('Service Worker registered');
    });
  });
}
