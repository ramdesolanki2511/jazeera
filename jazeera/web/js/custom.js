define([
  'jquery'
], function ($) {
  'use strict';

  $('.color-slide-banner').hide();

  $('.abc').click(function() {
    $('.color-slide-banner').show();
    $('.main-slider').hide();
  })

  $('.color-slide-banner .pagebuilder-banner-button').click(function(){
    $('.color-slide-banner').hide();
    $('.main-slider').show();
  })
});