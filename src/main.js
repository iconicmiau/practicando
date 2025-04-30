import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";

//theme
import Aura from '@primevue/themes/aura'

//config de primevue
import PrimeVue from 'primevue/config'

//componentes de primevue
import {Card} from "primevue";
import {Toolbar} from "primevue";
import {SelectButton} from "primevue";

const app = createApp(App)

app.use(i18n);
app.use(PrimeVue, {ripple: true, theme: { preset: Aura , options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }}});

app.component('pv-select-button', SelectButton)
app.component('pv-card', Card)
app.component('pv-toolbar', Toolbar)
app.mount('#app')
