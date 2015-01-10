"use strict";

$(document).foundation();

$(function () {


  $(".main").append("<p>");

  $(".main, .intro").on("click", "span.switchable", function (e) {

    var replacedWord = $.trim(e.target.innerHTML),
      wordTag = e.target.attributes[1].value,
      randomWord = "";


    // this logic needs to be re-written to conform to the word object logic. 
    if (wordTag === "JJ") {
      randomWord = adjWordList[Math.floor((Math.random() * adjWordList.length))];

    } else if (wordTag === "JJR") {
      randomWord = adjCompairWordList[Math.floor((Math.random() * adjCompairWordList.length))];
    } else if (wordTag === "JJS") {
      randomWord = superlativeAdjWordList[Math.floor((Math.random() * superlativeAdjWordList.length))];
    } else if (wordTag === "NN") {
      randomWord = nounWordList[Math.floor((Math.random() * nounWordList.length))];
    } else if (wordTag === "NNP") {
      randomWord = properNounWordList[Math.floor((Math.random() * properNounWordList.length))];
    }
    /*else if (wordTag === "NNS") {
      randomWord = pluralNounWordList[Math.floor((Math.random() * pluralNounWordList.length))];
    } */
    else if (wordTag === "RB") {
      randomWord = adverbWordList[Math.floor((Math.random() * adverbWordList.length))];
    } else if (wordTag === "RBS") {
      randomWord = superlativeAdverbWordList[Math.floor((Math.random() * superlativeAdverbWordList.length))];
    } else if (wordTag === "UH") {
      randomWord = inerjectionWordList[Math.floor((Math.random() * inerjectionWordList.length))];
    } else if (wordTag === "VB") {
      randomWord = verbWordList[Math.floor((Math.random() * verbWordList.length))];
    } else if (wordTag === "VBD") {
      randomWord = pastTenseVerbWordList[Math.floor((Math.random() * pastTenseVerbWordList.length))];
    } else if (wordTag === "VBG") {
      randomWord = gerundWordList[Math.floor((Math.random() * gerundWordList.length))];
    } else if (wordTag === "VBN") {
      randomWord = pastPartVerbWordList[Math.floor((Math.random() * pastPartVerbWordList.length))];
    } else if (wordTag === "VBP") {
      randomWord = pluralPresentVerbWordList[Math.floor((Math.random() * pluralPresentVerbWordList.length))];
    } else if (wordTag === "VBZ") {
      randomWord = singlePresentVerbWordList[Math.floor((Math.random() * singlePresentVerbWordList.length))];
    } else {
      randomWord = [$.trim(replacedWord), wordTag];
    }
    var span = "<span class='word switchable' data-pos='" + randomWord[1] + "' style='display:none;'> " + randomWord[0] + "</span>";




    $('span:contains(" ' + replacedWord + '")').fadeOut('fast', function () {
      $("span:contains(' " + replacedWord + "')").replaceWith(span);
      $("span:contains(' " + randomWord[0] + "')").fadeIn("fast");
    });


  }); // end on click




  function Story(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
  }

  Story.prototype.getWords = function () {};
  Story.prototype.setWords = function (text) {
    while (text.match(/\[(.*?)\]+/) != null){
      var replacementText = ;
      text.replace(/\[(.*?)\]+/,replacementText);
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



  var storyHtmlString = $(".storyString").html().replace(/\r?\n|\r/g, "").trim(),
    userTitle = storyHtmlString.slice(storyHtmlString.indexOf("<storytitle>"), storyHtmlString.indexOf("</storytitle")).replace("<storytitle>", "").trim(),
    userAuthor = storyHtmlString.slice(storyHtmlString.indexOf("<author>"), storyHtmlString.indexOf("</author")).replace("<author>", "").trim(),
    userText = storyHtmlString.slice(storyHtmlString.indexOf("</author>")).replace("</author>", "").trim(),
    userWords = new Words(),
    userStory = new Story(userTitle, userAuthor, userText);

console.log(userStory.setWords(userStory.text));


  
  var taggedWords = [];
  for (var i in taggedWords) {
    var taggedWord = taggedWords[i];
    var nextWord = taggedWords[i + 1];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    if ((tag === ",") || (tag === ".") || (tag === ":") || (tag === "$") || (tag === "#") || (tag === '"') || (tag === "(") || (tag === ")") || (word === '”') || (tag === '!')) {
      $(".main p:last-child").append('<span class="word" data-pos="' + tag + '">' + taggedWord[0] + '</span>');
    } else if (word === "xyzzy") {
      $(".main p:last-child").append('<br>');
    } else if (word === "yxyyx") {
      $(".main").append('<p></p>');

    } else if (word === "I" || word === "are" || word === "is" || word === "aren't" || word === "be") {
      $(".main p:last-child").append('<span class="word" data-pos="' + tag + '"> ' + taggedWord[0] + '</span>')
    } else if ((tag === "JJ") || (tag === "JJR") || (tag === "JJS") || (tag === "NN") || (tag === "NNP") || (tag === "NNPS") /*|| (tag === "NNS")*/ || (tag === "RB") || (tag === "RBR") || (tag === "RBS") || (tag === "UH") || (tag === "VB") || (tag === "VBD") || (tag === "VBG") || (tag === "VBN") || (tag === "VBP") || (tag === "VBZ")) {
      $(".main p:last-child").append('<span class="word switchable" data-pos="' + tag + '"> ' + taggedWord[0] + '</span>');

    } else {
      $(".main p:last-child").append('<span class="word" data-pos="' + tag + '"> ' + taggedWord[0] + '</span>');
    }

  }

}); // end ready