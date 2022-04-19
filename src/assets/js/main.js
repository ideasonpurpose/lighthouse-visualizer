/**
 * main.js - JS entry point
 * 
 * Ideally this file is used only for requiring 
 * the different modules that make up this application.
 * 
 * Compiles to bundle.js
 */

var Vue = require('./lib/vue.min.js');

// Vue methods
var loadFile = require('./methods/loadFile.js');

window.vm = new Vue({
  el: '#app',

  data: {
    title: 'test',
    props: ['accessibility', 'seo', 'best-practices', 'performance'],
    data: [],
  },

  methods: {
    loadFile,
    score(prop) {
      var sum = 0;
      for (var i in vm.props) sum += prop.detail[vm.props[i]];
      return (sum / vm.props.length).toFixed(2);
    }
  },
});
