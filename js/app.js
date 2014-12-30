$(document).foundation();

$(function () {
  var wordList = ["showcase", "tv", "hammer", "mint", "key", "throne", "bacon", "figure"];
  var adjWordList = [["several", "JJ"], ["short", "JJ"], ["French", "JJ"], ["soft", "JJ"], ["black", "JJ"], ["yellow", "JJ"], ["large", "JJ"], ["last", "JJ"], ["single", "JJ"], ["sure", "JJ"], ["bright", "JJ"], ["little", "JJ"], ["long", "JJ"], ["happy", "JJ"], ["white", "JJ"], ["few", "JJ"], ["clear", "JJ"], ["many", "JJ"], ["able", "JJ"], ["human", "JJ"], ["correct", "JJ"], ["whole", "JJ"], ["late", "JJ"], ["red", "JJ"], ["ready", "JJ"], ["important", "JJ"], ["high", "JJ"], ["hard", "JJ"], ["new", "JJ"], ["next", "JJ"], ["good", "JJ"], ["present", "JJ"], ["great", "JJ"], ["green", "JJ"], ["top", "JJ"], ["strange", "JJ"], ["old", "JJ"], ["straight", "JJ"], ["different", "JJ"], ["famous", "JJ"], ["open", "JJ"], ["other", "JJ"], ["flat", "JJ"], ["cold", "JJ"], ["free", "JJ"], ["own", "JJ"], ["certain", "JJ"], ["modern", "JJ"], ["such", "JJ"], ["young", "JJ"], ["natural", "JJ"], ["small", "JJ"], ["necessary", "JJ"], ["same", "JJ"]];
  var adjCompairWordList = [["larger", "JJR"], ["lower", "JJR"], ["more", "JJR"], ["better", "JJR"], ["smaller", "JJR"]];
  var superlativeAdjWordList = [["best", "JJS"]];
  var nounWordList = [["plan", "NN"], ["one", "NN"], ["minute", "NN"], ["number", "NN"], ["plane", "NN"], ["milk", "NN"], ["middle", "NN"], ["product", "NN"], ["name", "NN"], ["thought", "NN"], ["three", "NN"], ["reason", "NN"], ["time", "NN"], ["measure", "NN"], ["mark", "NN"], ["machine", "NN"], ["two", "NN"], ["object", "NN"], ["air", "NN"], ["use", "NN"], ["earth", "NN"], ["lot", "NN"], ["water", "NN"], ["way", "NN"], ["length", "NN"], ["leg", "NN"], ["record", "NN"], ["you're", "NN"], ["table", "NN"], ["are", "NN"], ["iron", "NN"], ["show", "NN"], ["information", "NN"], ["inch", "NN"], ["right", "NN"], ["ocean", "NN"], ["word", "NN"], ["work", "NN"], ["world", "NN"], ["oil", "NN"], ["I've", "NN"], ["year", "NN"], ["sun", "NN"], ["history", "NN"], ["mouth", "NN"], ["man", "NN"], ["seven", "NN"], ["heat", "NN"], ["shape", "NN"], ["story", "NN"], ["space", "NN"], ["line", "NN"], ["animal", "NN"], ["answer", "NN"], ["hair", "NN"], ["grass", "NN"], ["government", "NN"], ["skin", "NN"], ["wood", "NN"], ["sound", "NN"], ["month", "NN"], ["place", "NN"], ["body", "NN"], ["book", "NN"], ["boy", "NN"], ["fun", "NN"], ["soil", "NN"], ["moment", "NN"], ["car", "NN"], ["I", "NN"], ["change", "NN"], ["tree", "NN"], ["city", "NN"], ["square", "NN"], ["house", "NN"], ["country", "NN"], ["course", "NN"], ["forest", "NN"], ["didn't", "NN"], ["dog", "NN"], ["home", "NN"], ["door", "NN"], ["figure", "NN"], ["star", "NN"], ["farm", "NN"], ["slide", "NN"], ["step", "NN"], ["store", "NN"], ["six", "NN"], ["example", "NN"], ["eye", "NN"], ["face", "NN"], ["won't", "NN"], ["energy", "NN"], ["father", "NN"], ["eight", "NN"], ["window", "NN"], ["fire", "NN"], ["fish", "NN"], ["five", "NN"], ["food", "NN"], ["form", "NN"], ["four", "NN"], ["front", "NN"], ["street", "NN"], ["egg", "NN"], ["edge", "NN"], ["subject", "NN"], ["ground", "NN"], ["group", "NN"], ["direction", "NN"], ["half", "NN"], ["hand", "NN"], ["teacher", "NN"], ["difference", "NN"], ["thousand", "NN"], ["couldn't", "NN"], ["I'll", "NN"], ["I'm", "NN"], ["idea", "NN"], ["both", "NN"], ["travel", "NN"], ["sentence", "NN"], ["first", "NN"], ["kind", "NN"], ["copy", "NN"], ["color", "NN"], ["land", "NN"], ["trip", "NN"], ["circle", "NN"], ["child", "NN"], ["letter", "NN"], ["life", "NN"], ["light", "NN"], ["case", "NN"], ["business", "NN"], ["trouble", "NN"], ["end", "NN"], ["base", "NN"], ["money", "NN"], ["baby", "NN"], ["mother", "NN"], ["move", "NN"], ["week", "NN"], ["unit", "NN"], ["don't", "NN"], ["night", "NN"], ["age", "NN"], ["village", "NN"], ["wall", "NN"], ["order", "NN"], ["page", "NN"], ["paper", "NN"], ["second", "NN"], ["war", "NN"], ["picture", "NN"], ["wind", "NN"], ["point", "NN"], ["day", "NN"], ["today", "NN"], ["wasn't", "NN"], ["rest", "NN"], ["room", "NN"], ["part", "NN"], ["school", "NN"], ["sea", "NN"]];
  var properNounWordList = [["George", "NNP"], ["York", "NNP"], ["John", "NNP"], ["Tom", "NNP"], ["Mr", "NNP"], ["Joe", "NNP"], ["England", "NNP"], ["Europe", "NNP"], ["New", "NNP"], ["Jim", "NNP"], ["Mrs", "NNP"]];
  /*var pluralNounWordList = [["sides", "NNS"], ["he's", "NNS"], ["men", "NNS"], ["children", "NNS"], ["women", "NNS"], ["feet", "NNS"], ["people", "NNS"], ["parts", "NNS"]];*/
  var adverbWordList = [["almost", "RB"], ["yet", "RB"], ["once", "RB"], ["back", "RB"], ["down", "RB"], ["later", "RB"], ["even", "RB"], ["however", "RB"], ["easily", "RB"], ["far", "RB"], ["family", "RB"], ["especially", "RB"], ["ever", "RB"], ["exactly", "RB"], ["enough", "RB"], ["early", "RB"], ["thus", "RB"], ["fly", "RB"], ["soon", "RB"], ["again", "RB"], ["sometime", "RB"], ["also", "RB"], ["away", "RB"], ["here", "RB"], ["usually", "RB"], ["south", "RB"], ["well", "RB"], ["perhaps", "RB"], ["very", "RB"], ["too", "RB"], ["together", "RB"], ["maybe", "RB"], ["rather", "RB"], ["just", "RB"], ["then", "RB"], ["still", "RB"], ["so", "RB"], ["nearly", "RB"], ["north", "RB"], ["ago", "RB"], ["only", "RB"], ["now", "RB"], ["not", "RB"], ["never", "RB"]];
  var superlativeAdverbWordList = [["most", "RBS"]];
  var inerjectionWordList = [["yes", "UH"]];
  var verbWordList = [["cut", "VB"], ["become", "VB"], ["choose", "VB"], ["learn", "VB"], ["add", "VB"], ["try", "VB"], ["write", "VB"], ["help", "VB"], ["turn", "VB"], ["keep", "VB"], ["listen", "VB"], ["speak", "VB"], ["find", "VB"], ["grow", "VB"], ["run", "VB"], ["get", "VB"], ["feel", "VB"], ["remember", "VB"], ["ask", "VB"], ["be", "VB"], ["meet", "VB"], ["mean", "VB"], ["sleep", "VB"], ["come", "VB"], ["tell", "VB"], ["take", "VB"], ["buy", "VB"], ["know", "VB"], ["explain", "VB"], ["eat", "VB"], ["see", "VB"], ["look", "VB"], ["live", "VB"], ["read", "VB"], ["put", "VB"], ["pay", "VB"], ["draw", "VB"], ["catch", "VB"], ["play", "VB"], ["let", "VB"], ["close", "VB"], ["call", "VB"], ["reach", "VB"], ["give", "VB"], ["go", "VB"], ["make", "VB"]];
  var pastTenseVerbWordList = [["told", "VBD"], ["lost", "VBD"], ["got", "VBD"], ["saw", "VBD"], ["took", "VBD"], ["said", "VBD"], ["was", "VBD"], ["wrote", "VBD"], ["did", "VBD"], ["had", "VBD"], ["came", "VBD"], ["fell", "VBD"], ["began", "VBD"], ["found", "VBD"], ["grew", "VBD"], ["became", "VBD"], ["were", "VBD"], ["went", "VBD"], ["knew", "VBD"], ["sent", "VBD"], ["gave", "VBD"]];
  var gerundWordList = [["being", "VBG"], ["using", "VBG"], ["nothing", "VBG"], ["morning", "VBG"], ["something", "VBG"], ["thing", "VBG"], ["making", "VBG"], ["living", "VBG"], ["running", "VBG"], ["spring", "VBG"], ["King", "VBG"]];
  var pastPartVerbWordList = [["known", "VBN"], ["speed", "VBN"], ["United", "VBN"], ["shown", "VBN"], ["seen", "VBN"], ["made", "VBN"], ["left", "VBN"], ["been", "VBN"], ["caught", "VBN"], ["heard", "VBN"], ["dried", "VBN"], ["given", "VBN"], ["brought", "VBN"], ["done", "VBN"]];
  var pluralPresentVerbWordList = [["say", "VBP"], ["wish", "VBP"], ["do", "VBP"], ["want", "VBP"], ["think", "VBP"], ["suppose", "VBP"], ["have", "VBP"]];
  var singlePresentVerbWordList = [["is", "VBZ"], ["does", "VBZ"], ["means", "VBZ"], ["seems", "VBZ"], ["has", "VBZ"]];

  /*  $(".main").html(function (index, oldHtml) {
    return oldHtml.replace(/\b(\w{4,}?)\b/g, "<span class='word'>$1</span>");
  }); // end html replace function*/
  $(".main").append("<p>")

  $(".main, .intro").on("click", "span.switchable", function (e) {

    var replacedWord = $.trim(e.target.innerHTML),
      wordTag = e.target.attributes[1].value,
      randomWord = "";
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

  var words = new Lexer().lex('Once upon a time, beautiful Princess Lillian lived in a castle on the tropical island of Pineapple Grove. She loved to sail and planned to marry a pirate. Her father, King Edward, who loved to talk, came into Lillian’s tower. xyzzy “Beautiful daughter, it’s time for you to choose a husband,” he said. xyzzy “Yes, loving father. I will marry a pirate since I love to sail,” she said. xyzzy “Beautiful daughter, aren’t pirates greedy and cruel, not fit to be husbands?” xyzzy “Not all pirates are the same, silly father. I will find one who is generous and kind,” Lillian replied. xyzzy King Edward knew his beautiful daughter would, because she was also very smart. yxyyx After her father left, Lillian grabbed an old trunk from her closet and filled it with her fanciest jewels. She knew that pirates loved treasure. But she added one more thing: a secret note, hidden inside a rusty can that used to hold baked beans. The note read: yxyyx Dear pirate, please come to the castle on Pineapple Grove to live with the beautiful Princess Lillian. yxyyx Any pirate who was smart enough to look beyond the rustiness of the can was certainly fit to be her husband. xyzzy Lillian put the trunk in her favorite boat, rowed across the water to Coconut Island, buried her trunk with a corner sticking out, then rowed back home and went to sleep in her tower. yxyyx That night, a pirate named Eric was sitting in the sand, looking at the stars. He wasn’t sure he wanted to be a pirate anymore. He loved to sail, but he hated being greedy. As he hung his head and sighed, moonlight caught the corner of a buried trunk. Eric started to dig, and got so excited he shouted, “Wowie!” This woke all the other pirates. yxyyx They agreed to each pick one piece of the treasure, no backsies. When it was Eric’s turn, he looked at the rubies and diamonds and couldn’t decide. He closed his eyes, stuck his hand in the trunk, and came up holding a rusty can. The other pirates laughed and laughed. “No backsies!” they shouted. yxyyx Eric felt like a terrible pirate. He sighed and threw the can on the ground. A note drifted out. Eric picked it up, read the words, and smiled. xyzzy “Goodbye, pirates,” he said. Then he got in his favorite boat, rowed to Pineapple Grove, and married Princess Lillian. They all lived happily ever after. yxyyx');
  var taggedWords = new POSTagger().tag(words);
  for (i in taggedWords) {
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
$('.main').on('click', handleClicks);