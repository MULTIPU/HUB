/* MultiPU Hub service worker: shows alerts on the phone and handles server push when a backend sends it */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('push',function(e){var d={};try{d=e.data.json()}catch(x){d={body:e.data?e.data.text():''}}
 e.waitUntil(self.registration.showNotification(d.title||'MultiPU Hub',{body:d.body||'',icon:'icons/icon-192.png',badge:'icons/icon-192.png',tag:d.tag,data:{url:d.url||'./'}}))});
self.addEventListener('notificationclick',function(e){e.notification.close();var u=(e.notification.data&&e.notification.data.url)||'./';
 e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){for(var i=0;i<l.length;i++){if('focus' in l[i]){if(u.charAt(0)=='#'){l[i].postMessage({go:u.slice(1)})}return l[i].focus()}}return clients.openWindow(u)}))});
