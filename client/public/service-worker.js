self.addEventListener('push', function(event) {
  const body = event.data?.text() ?? 'Default Text';
  
  event.waitUntil(
    self.registration.showNotification('Habits', {
      body,
    })
  );
});