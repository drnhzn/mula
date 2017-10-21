(function(window) {
  'use strict';

  var NWModule = new app.NWModule();
  var helpers = NWModule.getModule('helpers');
  var module;
  var settings = {
  };


  function initDesktopEvents() {

  }

  function initMobileEvents() {

  }

  function initAllDevices() {


  }

  function bindUIEvents() {
    var viewport = new helpers.viewPort();
    if(viewport.width > 1000) {
      initDesktopEvents();
    } else {
      initMobileEvents();
    }

    initAllDevices();

  }

  function init() {
    console.log('Global module initiated...');
    bindUIEvents();
  }

  module =  {
    element: document.getElementById('site-body'),
    init: init
  };


  NWModule.register({
    name: 'name-of-module',
    obj: module
  });


})(window);
