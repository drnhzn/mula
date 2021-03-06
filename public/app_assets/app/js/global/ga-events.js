(function(window) {
  'use strict';

  var NWModule = new app.NWModule();
  var helpers = NWModule.getModule('helpers');
  var module;
  var settings = {
    $gaTrigger: $('[data-ga-event]')
  };

  function onWindowResize() {

  }

  function bindUIEvents() {
    settings.$gaTrigger.on('click', function(e){
      var $this = $(this);
      var eventLabel = $this.attr('data-ga-event');
      var eventDelayed = $this.attr('data-ga-delayed');

      console.log(eventLabel);
      console.log(eventDelayed);

      if(eventDelayed) {
        ga('send', 'event', 'Buttons', 'click', eventLabel, {
          hitCallback: function() {
            console.log(eventLabel);
            window.location = $this.attr('href');
          }
        });
        return false;
      } else {
        ga('send', 'event', 'Buttons', 'click', eventLabel);
      }
    });
  }

  function init() {
    bindUIEvents();
  }

  module =  {
    element: document.getElementById('global-wrapper'),
    init: init
  };

  NWModule.register({
    name: 'ga-tracker',
    obj: module
  });

})(window);
