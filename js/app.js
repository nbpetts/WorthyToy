"use strict";

$(document).foundation();

$(function () {



/*on word click, this code replaced the word and all matching switchable words with a random word from the data-atlwords attribute. */
  $(".main, .intro").on("click", "span.switchable", function (e) {

    var replacedWord = $.trim(e.target.innerHTML),
      wordReplacementList = $(e.target).attr("data-altwords").trim().split(" ");
    var randomWord = wordReplacementList[Math.floor(Math.random() * wordReplacementList.length)];
    var randomWordHumanized = randomWord.replace("-", " ");

    if (randomWordHumanized == replacedWord) {
      while (randomWordHumanized == replacedWord) {
        randomWordHumanized = wordReplacementList[Math.floor(Math.random() * wordReplacementList.length)];
      }

    }
    var span = "<span class='word switchable' data-altWords='" + $(e.target).attr("data-altwords").trim() + "' style='display:none;'> " + randomWordHumanized + "</span>";


    $('span:contains("' + replacedWord + '")').fadeOut('fast', function () {
      $('span:contains("' + replacedWord + '")').replaceWith(span);
      $('span:contains("' + randomWordHumanized + '")').fadeIn("fast");
    });


  }); // end on word click

/*this code gets a random story for the get a new story button*/
$("main").on("click", "a.randomStory", function(e){
  e.preventDefault();
  var pages = ["princessAndThePea.html",
              "aladdin.html",
              "uglyDuckling.html",
               "cinderella.html"
              ],
      randomNumber = Math.floor((Math.random() * pages.length));
  console.log(randomNumber);
  window.location=pages[randomNumber];
  
}); // end random button url


  function Story(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
  }

  Story.prototype.getWords = function () {};
  Story.prototype.setWords = function (text) {
    while (text.match(/\[(.*?)\]+/) != null) {
      var replacementText = "";
      text.replace(/\[(.*?)\]+/, replacementText);
    }
    return text;
    /*for (var i in textArray) {
      var count = 1;
      var word = new Word(textArray[i]);
      userWords.addToWords(word);
      
    }*/
  };
  Story.prototype.getTitle = function () {};
  Story.prototype.setTitle = function () {};
  Story.prototype.getAuthor = function () {};
  Story.prototype.setAuthor = function () {};

  function Words() {
    this.words = new Array();
  }
  Words.prototype.addToWords = function (word) {
    this.words.push(word);
    return word;
  };
  Words.prototype.getArray = function () {
    return this.words;
  };

  function Word(text) {
    this.text = text;

    if (_.string.startsWith(text, "[")) {
      this.text = text.replace(/\[/, "");
      this.switchable = true;
    } else {
      this.switchable = false;
    }

    this.OtherWords = [];
    this.html = "";
  }
  Word.prototype.addOtherWord = function (otherWord) {
    this.OtherWords.push(otherWord);
  };
  Word.prototype.setWord = function () {};
  Word.prototype.getWordHtml = function () {
    return this.html;
  };




}); // end ready