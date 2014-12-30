$(document).foundation();
$(function () {
  var randWords = "about after again air all along also an and another any are around as at away back be because been before below between both but by came can come could day did different do does don't down each end even every few find first for found from get give go good great had has have he help her here him his home house how I if in into is it its just know large last left like line little long look made make man many may me men might more most Mr must my name never new next no not now number of off old on one only or other our out over own part people place put read right said same saw say see she should show small so some something sound still such take tell than that the them then there these they thing think this those thought three through time to together too two under up us use very want water way we well went were what when where which while who why will with word work world would write year you your was able above across add against ago almost among animal answer became become began behind being better black best body book boy brought call cannot car certain change children city close cold country course cut didn't dog done door draw during early earth eat enough ever example eye face family far father feel feet fire fish five food form four front gave given got green ground group grow half hand hard heard high himself however I'll I'm idea important inside John keep kind knew known land later learn let letter life light live living making mean means money morning mother move Mrs. near night nothing once open order page paper parts perhaps picture play point ready red remember rest room run school sea second seen sentence several short shown since six slide sometime soon space States story sun sure table though today told took top toward tree try turn United until upon using usually white whole wind without yes yet young  age ask baby base beside bright business buy case catch caught child choose circle clear color copy correct couldn't difference direction dried easily edge egg eight energy England especially Europe exactly except explain famous farm fell figure flat fly forest free French fun George government grass grew hair happy he's heat history human I've inch information iron Jim Joe King larger late leg length listen lost lot lower machine mark maybe measure meet middle milk minute modern moment month mouth natural nearly necessary New York north object ocean oil pay per plan plane present product rather reach reason record running seems sent seven shape sides single skin sleep smaller soft soil south speak speed spring square star step store straight strange street subject suppose teacher thousand thus Tom travel trip trouble unit village wall war wasn't week whose window wish women won't wood wrote yellow you're yourself ";


  var words = new Lexer().lex(randWords);
  var taggedWords = new POSTagger().tag(words);
  for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];

  }
  var sortedWords = taggedWords.sort(
    function (a, b) {
      return (a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0);
    }
  );
  document.getElementById("main").innerHTML = JSON.stringify(sortedWords);
  console.log(sortedWords);
}); // end ready