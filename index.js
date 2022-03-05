let map;

// all countries
var countryArray = ["canada", "united states", "mexico", "guatemala", "belize", "el salvador", "honduras", "nicaragua", "costa rica", "panama", "bahamas", "cuba", "haiti", "dominican republic", "jamaica", "st lucia", "st kitts and nevis", "st vincent", "dominica", "grenada", "trinidad and tobago", "barbados", "antigua and barbuda", "colombia", "venezuela", "argentina", "ecuador", "brazil", "chile", "guyana", "suriname", "peru", "bolivia", "uruguay", "paraguay", "iceland", "norway", "finland", "sweden", "denmark", "czechia", "romania", "ukraine", "belarus", "bulgaria", "moldova", "croatia", "north macedonia", "bosnia and herzegovina", "luxembourg", "liechtenstein", "albania", "serbia", "kosovo", "san marino", "andorra", "united kingdom", "estonia", "latvia", "lithuania", "spain", "france", "portugal", "netherlands", "belgium", "switzerland", "hungary", "germany", "austria", "poland", "turkey", "vatican", "italy", "montenegro", "monaco", "greece", "malta", "cyprus", "slovakia", "ireland", "slovenia", "timor leste", "malaysia", "indonesia", "brunei", "singapore", "philippines", "taiwan", "china", "russia", "mongolia", "bhutan", "india", "sri lanka", "bangladesh", "pakistan", "afghanistan", "uzbekistan", "tajikistan", "turkmenistan", "kyrgyzstan", "kazakhstan", "azerbaijan", "armenia", "georgia", "jordan", "syria", "kuwait", "qatar", "united arab emirates", "yemen", "oman", "saudi arabia", "iraq", "nepal", "iran", "israel", "maldives", "lebanon", "palestine", "north korea", "south korea", "japan", "vietnam", "bahrain", "thailand", "cambodia", "myanmar", "laos", "djibouti", "eritrea", "egypt", "chad", "sudan", "south sudan", "mozambique", "malawi", "somalia", "senegal", "ghana", "guinea", "guinea bissau", "burkina faso", "democratic republic of the congo", "republic of the congo", "central african republic", "uganda", "rwanda", "burundi", "tanzania", "kenya", "zambia", "zimbabwe", "south africa", "eswatini", "lesotho", "namibia", "botswana", "ivory coast", "angola", "seychelles", "sierra leone", "morocco", "algeria", "libya", "tunisia", "sao tome and principe", "mali", "nigeria", "niger", "mauritania", "comoros", "madagascar", "gambia", "liberia", "equatorial guinea", "cape verde", "mauritius", "ethiopia", "gabon", "cameroon", "benin", "togo", "nauru", "palau", "new zealand", "australia", "solomon islands", "marshall islands", "papua new guinea", "vanuatu", "micronesia", "fiji", "samoa", "tuvalu", "kiribati", "tonga"]

// hashmap of country/continent relationshps
let countryMap = new Map([["canada", "N"], ["united states", "N"], ["mexico", "N"], ["guatemala", "N"], ["belize", "N"], ["el salvador", "N"], ["honduras", "N"], ["nicaragua", "N"], ["costa rica", "N"], ["panama", "N"], ["bahamas", "N"], ["cuba", "N"], ["haiti", "N"], ["dominican republic", "N"], ["jamaica", "N"], ["st lucia", "N"], ["st kitts and nevis", "N"], ["st vincent", "N"], ["dominica", "N"], ["grenada", "N"], ["trinidad and tobago", "N"], ["barbados", "N"], ["antigua and barbuda", "N"], ["colombia", "S"], ["venezuela", "S"], ["argentina", "S"], ["ecuador", "S"], ["brazil", "S"], ["chile", "S"], ["guyana", "S"], ["suriname", "S"], ["peru", "S"], ["bolivia", "S"], ["uruguay", "S"], ["paraguay", "S"], ["iceland", "E"], ["norway", "E"], ["sweden", "E"], ["finland", "E"], ["denmark", "E"], ["czechia", "E"], ["romania", "E"], ["ukraine", "E"], ["belarus", "E"], ["bulgaria", "E"], ["moldova", "E"], ["croatia", "E"], ["north macedonia", "E"],["bosnia and herzegovina", "E"], ["luxembourg", "E"], ["liechtenstein", "E"], ["albania", "E"], ["serbia", "E"], ["kosovo", "E"], ["san marino", "E"], ["andorra", "E"], ["united kingdom", "E"], ["estonia", "E"], ["latvia", "E"], ["lithuania", "E"], ["spain", "E"], ["france", "E"], ["portugal", "E"], ["netherlands", "E"], ["belgium", "E"], ["switzerland", "E"], ["hungary", "E"], ["germany", "E"], ["austria", "E"], ["poland", "E"], ["turkey", "E"], ["vatican", "E"], ["italy", "E"], ["montenegro", "E"], ["monaco", "E"], ["greece", "E"], ["malta", "E"], ["cyprus", "E"], ["slovakia", "E"], ["slovenia", "E"], ["ireland", "E"], ["timor leste", "A"], ["malaysia", "A"], ["indonesia", "A"], ["brunei", "A"], ["singapore", "A"], ["philippines", "A"], ["taiwan", "A"], ["china", "A"], ["russia", "A"], ["mongolia", "A"], ["bhutan", "A"], ["india", "A"], ["sri lanka", "A"], ["bangladesh", "A"], ["pakistan", "A"], ["afghanistan", "A"], ["uzbekistan", "A"], ["tajikistan", "A"], ["turkmenistan", "A"], ["kyrgyzstan", "A"], ["kazakhstan", "A"], ["azerbaijan", "A"], ["armenia", "A"], ["georgia", "A"], ["jordan", "A"], ["syria", "A"], ["kuwait", "A"], ["qatar", "A"], ["united arab emirates", "A"], ["yemen", "A"], ["oman", "A"], ["saudi arabia", "A"], ["iraq", "A"], ["nepal", "A"], ["iran", "A"], ["israel", "A"], ["maldives", "A"], ["lebanon", "A"], ["palestine", "A"], ["north korea", "A"], ["south korea", "A"], ["japan", "A"], ["vietnam", "A"], ["bahrain", "A"], ["thailand", "A"], ["cambodia", "A"], ["myanmar", "A"], ["laos", "A"], ["djibouti", "F"], ["eritrea", "F"], ["egypt", "F"], ["chad", "F"], ["sudan", "F"], ["south sudan", "F"], ["mozambique", "F"], ["malawi", "F"], ["somalia", "F"], ["senegal", "F"], ["ghana", "F"], ["guinea", "F"], ["guinea bissau", "F"], ["burkina faso", "F"], ["democratic republic of the congo", "F"], ["republic of the congo", "F"], ["central african republic", "F"], ["uganda", "F"], ["rwanda", "F"], ["burundi", "F"], ["tanzania", "F"], ["kenya", "F"], ["zambia", "F"], ["zimbabwe", "F"], ["south africa", "F"], ["eswatini", "F"], ["lesotho", "F"], ["namibia", "F"], ["botswana", "F"], ["ivory coast", "F"], ["angola", "F"], ["seychelles", "F"], ["sierra leone", "F"], ["morocco", "F"], ["algeria", "F"], ["libya", "F"], ["tunisia", "F"], ["sao tome and principe", "F"], ["mali", "F"], ["nigeria", "F"], ["niger", "F"], ["mauritania", "F"], ["comoros", "F"], ["madagascar", "F"], ["gambia", "F"], ["liberia", "F"], ["equatorial guinea", "F"], ["cape verde", "F"], ["mauritius", "F"], ["ethiopia", "F"], ["gabon", "F"], ["cameroon", "F"], ["benin", "F"], ["togo", "F"], ["nauru", "O"], ["palau", "O"], ["new zealand", "O"], ["australia", "O"], ["solomon islands", "O"], ["marshall islands", "O"], ["papua new guinea", "O"], ["vanuatu", "O"], ["micronesia", "O"], ["fiji", "O"], ["samoa", "O"], ["tuvalu", "O"], ["kiribati", "O"], ["tonga", "O"]]);

// number of countries entered
var totalNum=0;

// executes every time page reloads
function initMap() {

  // make map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 },
    zoom: 2.5,
  });

  // no labels (country names) on the map
  var customStyled = [
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
    { visibility: "off" }
    ]}];
    map.set('styles',customStyled);

}

// called onclick, starts the game 
function startGame() {
  
  // display input box
  var inputDiv = document.createElement("div");
  inputDiv.innerHTML="<input type='text' id='stuff' spellcheck='true' oninput='callCheckInputFromHTML()' >"
  inputDiv.id="inputDiv"
  document.getElementById("inputGoesHere").appendChild(inputDiv);
  console.log(document.getElementById("inputDiv"));

  // display give up button
  var giveUpButton = document.createElement("button");
  var buttonText = document.createElement("span");
  giveUpButton.innerHTML= "Give Up!"
  giveUpButton.appendChild(buttonText);
  giveUpButton.onclick = function moveWindow(){
     location.href='lose.html';
    };
  giveUpButton.id ="giveUpButton";
  document.getElementById("buttonGoesHere").appendChild(giveUpButton);
  
  // start timer
  var second = 0;
  function timer (val) { 
    return val > 9 ? val : "0" + val; 
  }
  setInterval(function(){
    document.getElementById("seconds").innerHTML=timer(++second%60);
    document.getElementById("minutes").innerHTML=timer(parseInt(second/60,10));
  }, 1000);
  
}

function callCheckInputFromHTML(){
  lowercaseWord = document.getElementById("stuff").value.toLowerCase()
  console.log("loweorcase word: " + lowercaseWord);
  countryGuessed = spellCheck(lowercaseWord);
  console.log("spellcheckedword: " + countryGuessed);
  checkInput(countryGuessed);
}

// called oninput
function checkInput(userInput){
  
  // checks if the input is correct
  for(i=0; i<countryArray.length; i++){
    if(userInput ==countryArray[i]){
      
      //clear input box
      document.getElementById("stuff").value = null;

      // remove inputted country from countryArray
      countryArray.splice(i, 1);
      console.log("countryarray: " + countryArray);

      // add geojson to the map
      map.data.loadGeoJson('countries/'+userInput+'.geojson');
        if(userInput=="ukraine"){
          map.data.setStyle({
            fillColor: "#fffb1c",
            strokeColor: "#1c7bff"
          });
        }
      

      // update counts
      $('#totalCount').text( function(i, oldval) {
        return ++oldval;
      });
      updateCountryCount(userInput);
      totalNum++;

      // display win page
      if(totalNum==197){
        alert("you win!");
        location.href='win.html';
      }

    }
  }
}

// updates the country counts based on continent
function updateCountryCount(country){
    var continent = countryMap.get(country);

    // update south america count
    if(continent=="S"){
      $('#saCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update africa count
    if(continent=="F"){
      $('#afCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update north america count
    if(continent=="N"){
      $('#naCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update oceania count
    if(continent=="O"){
      $('#ocCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update europe count
    if(continent=="E"){
      $('#euCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update asia count
    if(continent=="A"){
      $('#asCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

}

function spellCheck(word){
  if(word =="usa" || word =="the united states" || word =="america"){
    word = "united states";
  }
  if(word == "czech republic"){
    word = "czechia";
  }
  if(word == "burma"){
    word = "myanmar";
  }
  if(word == "cabo verde"){
    word = "cape verde";
  }
  if(word == "east timor"){
    word = "timor leste";
  }
  if(word == "holland"){
    word = "netherlands";
  }
  if(word == "swaziland"){
    word = "eswatini";
  }
  if(word == "drc" || word == "zaire"){
    word = "democratic republic of the congo";
  }
  if(word == "car"){
    word = "central african republic";
  }
  if(word == "rep of the congo" || word == "congo"){
    word = "republic of the congo";
  }
  if(word == "saint lucia" || word =="st. lucia"){
    word = "st lucia";
  }
  if(word == "saint kitts and nevis" ||word == "st. kitts and nevis"){
    word = "st lucia";
  }
  if(word == "saint vincent" ||word == "st. vincent"){
    word = "st vincent";
  }
  if(word == "cote d'ivoire"){
    word = "ivory coast";
  }
  if(word == "uk"){
    word = "united kingdom";
  }

  return word;
}
// improvements
      // take away geoJsons (reverse process)
      // show unentered countries after give up
      // on hover display country name
      // \\ // \\ figure out a way to accept multiple spellings (spellcheck function?)
            // ivory coast --> cote de'ivore
            // czech republic --> czechia
            // myanmar --> burma
            // cape verde --> cabo verde
            // timor leste --> east timior
            // netherlands --> holland
            // eswatini --> swaziland
            // Zaire --> Democratic republic of the congo
            // Rep of Congo --> Congo
            // Sts --> Saints
            // United States --> The United States
      // \\ // \\ add countries' territories