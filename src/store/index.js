// import { createApp } from 'vue'
// import App from '../App.vue'
import {createStore} from 'vuex';
import user from './user'
import pets from './pets'
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
    paths: ['user']
})
// const app= createApp(App)
// app.use(Vuex)

// const store = new Vuex.Store({
// plugins: [dataState],
// modules: {
//     user,
// }
// });

// export default store


export default createStore({
    plugins: [dataState],
    modules: {
        user,
        pets
    }
})
