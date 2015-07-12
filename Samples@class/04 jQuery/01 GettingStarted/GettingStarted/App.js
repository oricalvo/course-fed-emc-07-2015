/// <reference path="C:\EMC\Front End Development\Samples@class\04 jQuery\01 GettingStarted\GettingStarted\jquery.js" />

$(function () {
    console.log("DOM is ready");

    var jqWrappedSet = $("button");
    console.log(jqWrappedSet.length);
    jqWrappedSet.text("XXX");
});

//jQuery("button").text("XXX");

//var jqWrapper = jQuery(document);
//jqWrapper.ready(function () {
//    console.log("DOM is ready");
//});

//window.addEventListener("DOMContentLoaded", function () {
//    console.log("DOM is ready 2");
//});

//var element = document.getElementById("button1");
//var jqElement = jQuery("#button1");

//$(function () {
//});
