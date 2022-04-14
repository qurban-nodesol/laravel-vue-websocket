import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import Echo from 'laravel-echo';
import pusher from 'pusher-js'
window.Pusher = pusher

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    forceTLS: false,
    disableStats: true
});

window.Echo.channel('DemoChannel')
    .listen('Message', (e) => {
    console.log(e)
})