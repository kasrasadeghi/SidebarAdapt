// ==UserScript==
// @name         Sidebar Adapt
// @version      1.0
// @namespace    https://github.com/kasrasadeghi/SidebarAdapt/
// @description  Toggle the reddit sidebar and resize post width for vertical monitors.
// @author       Kasra Sadeghi
// @match        http*://www.reddit.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// @copyright   2015, cameroncondry
// ==/UserScript==

$(document).ready(function() {
    $("#header").append("<button id=\"sidebar\">Toggle Sidebar</button>");
    $("button#sidebar").click(function() {
        $("div.side").toggle();
        //resize width of post after toggling sidebar
        $("#siteTable").css("width", "100vw");
    });
});
