
$(document).ready(function() {
	'use strict';

  $('.form-steps .step-btn').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.form-steps').next().addClass('active');
    $(this).parents('.form-steps').removeClass('active');

  })

  /*--------------------------------------------
  Donation
  --------------------------------------------*/

  $('.amount-preset span').on('click', function() {
    $('.amount-preset span').removeClass('active');
    $(this).addClass('active');
  })

  $('.custom-donation').on('click', function() {
    $('.amount-preset span').removeClass('active');
  })

  $('.prev-page1').on('click', function() {
    $('.form-steps2').removeClass('active');
    $('.form-steps1').addClass('active');
  })

  $('.prev-page2').on('click', function() {
    $('.form-steps3').removeClass('active');
    $('.form-steps2').addClass('active');
  })

})