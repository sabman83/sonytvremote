import { send } from './requests.js';
Vue.component("action-button", {
  template: '<a v-on:click="func" v-html="faClass"> </a>',
  props: ["action"],
  computed: {
    faClass: function () {
      return (
        '<i class="fa fa-' + this.action.icon + '" style="font-size:128px;"></i>'
      );
    },
  },
  methods: {
    func: function () {
      console.log(this.action);
      // Make a request for a user with a given ID
      send("/action?name=" + this.action.type);
    },
  }
});


Vue.component("app-button", {
  template: '<img v-on:click="func" class="appImage" :src="source"></img>',
  props: ["action"],
  computed: {
    source: function() {
      return 'img/' + this.action.appName + '.png';
    }
  },
  methods: {
    func: function () {
      console.log(this.action);
      send("app?name=" + this.action.type);
    },
  }
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello",
  },
});
