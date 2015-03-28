/*jslint browser: true*/
/*global $*/
$(document).foundation();

$(function() {
    "use strict";


    /*on word click, this code replaced the word and all matching switchable words with a random word from the data-atlwords attribute. */
    $(".main, .intro").on("click", "span.switchable", function(e) {

        var replacedWord = $.trim(e.target.innerHTML),
            altWords = $(e.target).attr("data-altwords").trim(),
            wordReplacementList = $(e.target).attr("data-altwords").trim().split(" ");
        var replacedWordHyphenated = replacedWord.replace(/ /g, "-");
        if ((altWords.search(replacedWordHyphenated)) < 0) {
            altWords = altWords.concat(" " + replacedWordHyphenated);
        }

        var randomWord = wordReplacementList[Math.floor(Math.random() * wordReplacementList.length)];
        var randomWordHumanized = randomWord.replace(/-/g, " ");

        if (randomWordHumanized === replacedWord) {
            while (randomWordHumanized === replacedWord) {
                randomWordHumanized = wordReplacementList[Math.floor(Math.random() * wordReplacementList.length)].replace(/-/g, " ");
            }

        }
        var span = "<span class='word switchable' data-altWords='" + altWords + "' style='display:none;'> " + randomWordHumanized + "</span>";


        $('span:contains("' + replacedWord + '")').fadeOut('fast', function() {
            $('span:contains("' + replacedWord + '")').replaceWith(span);
            $('span:contains("' + randomWordHumanized + '")').fadeIn("fast");
        });


    }); // end on word click

    /*this code gets a random story for the get a new story button*/
    $("main").on("click", "a.randomStory", function(e) {
        e.preventDefault();
        var pages = ["princessAndThePea.html",
            "princessRobinsTravel.html",
            "princessLizasJoke.html",
            "cinderella.html", 
            "princessLunaLearns.html", 
            "princeJosephsFear.html"
        ],
            randomNumber = Math.floor((Math.random() * pages.length)),
            currentPage = $("#main").attr("data-url");
        while (pages[randomNumber] == currentPage) {
            randomNumber = Math.floor((Math.random() * pages.length));
        }
        $("#main").hide("slide", {
            "direction": "left"
        }, function() {
            //      $('.toggle-topbar').trigger('click');
            $("#main").load(pages[randomNumber] + "#story");
            $("#main").attr("data-url", pages[randomNumber]);
            $('html, body').animate({
                scrollTop: 0
            }, 0);
            $("#main").show("slide", {
                "direction": "right"
            });
        });


    }); // end random button url

    //This code controls the loading of stories from the top bar nav
    $("main, .dropdown, .topBarLink").on("click", "a.storyGetter", function(e) {
        e.preventDefault();
        if ($("nav.top-bar").hasClass("expanded")) {
            $(".toggle-topbar.menu-icon > a > span").trigger('click');

        }

        var source = $(this).attr("href");


        $("#main").hide("slide", {
            "direction": "left"
        }, function() {
            $("#main").load(source + "#story");
            $("#main").attr("data-url", source);
            $("#main").show("slide", {
                "direction": "right"
            });
            $("#main").trigger("click");
        });


        return true;
    }); //end  click
    /*this deals with success and error messages sent from send_form_email.php. 
I got this code from http://www.designchemical.com/blog/index.php/jquery/8-useful-jquery-snippets-for-urls-querystrings/ */
    var urlParams = [],
        hash;
    var q = document.URL.split('?')[1];
    if (q !== undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            urlParams.push(hash[1]);
            urlParams[hash[0]] = hash[1];
        }
    }

    if (urlParams.status === "success") {
        $("#main").load("success.html");
    } else if (urlParams.status === "error") {
        console.log("error.html");
    } else {

    }


}); // end ready