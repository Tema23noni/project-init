import { createApp } from 'vue';

import App from './App.vue';

export function bootstrap() {
    const app = createApp(App);

    app.mount('#app');
}
