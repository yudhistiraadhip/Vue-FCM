import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Initialize Firebase
import firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyB8gXJK4-2zdrsoQN-Eia3TjRRs6bUeddo",
  authDomain: "dmpapi-c28cd.firebaseapp.com",
  projectId: "dmpapi-c28cd",
  storageBucket: "dmpapi-c28cd.appspot.com",
  messagingSenderId: "655003765579",
  appId: "1:655003765579:web:18ff03b3d758de28e936ce",
  measurementId: "G-TT159G9CCP"
});

navigator.serviceWorker
  .register("firebase-messaging-sw.js", {
    scope: "firebase-cloud-messaging-push-scope",
  })
  .then((registration) => {
    const messaging = firebase.messaging();
    messaging.useServiceWorker(registration);
  })
  .catch((err) => {
    console.log(err);
  });
// fiebase configs end

// Vue Toast
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
