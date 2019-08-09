import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import router from './router';
import App from './App.vue';
import './style.css';

Vue.config.productionTip = false;
Vue.use(VueApollo);

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql',
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
