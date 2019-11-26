import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: {
        : 0
      }
    },

    mounted(){
      this.getRates();
    },

    

    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(rates => this.rates = (rates))
      }
    }





  })
})
