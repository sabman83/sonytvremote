Vue.component("action-button", {
  template: '<a v-on:click="func" v-html="faClass"> </a>',
  props: ["action"],
  computed: {
    faClass: function () {
      return (
        '<i class="fa fa-' + this.action.icon + '" style="font-size:36px;"></i>'
      );
    },
  },
  methods: {
    func: function () {
      console.log(this.action);
      // Make a request for a user with a given ID
      axios
        .get("/action?name=" + this.action.type)
        .then(function (response) {
          // handle success
          console.log("success : " + response);
        })
        .catch(function (error) {
          // handle error
          console.log("error : " + error);
        })
        .then(function () {
          console.log("DONE");
        });
    },
  },
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
      // Make a request for a user with a given ID
      axios
        .get("app?name=" + this.action.type)
        .then(function (response) {
          // handle success
          console.log("success : " + response);
        })
        .catch(function (error) {
          // handle error
          console.log("error : " + error);
        })
        .then(function () {
          console.log("DONE");
        });
    },
  }
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello",
  },
});
