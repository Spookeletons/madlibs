
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    color: generateRandomHexCode()
  });
});

/*POST form data*/
router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory,
    color: generateRandomHexCode()
  });
})

module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else if (formData.storyChoice === "random") {
    return randomStory(formData);
  } else {
    return "invalid";
  }
}

function randomStory(formData){
  var random = Math.ceil(Math.random() * 3);
  if (random === 1){
    return generateStory1(formData);
  } else if (random === 2){
    return generateStory2(formData);
  } else if (random === 3){
    return generateStory3(formData);
  }
}

function generateStory1(formData){
  //https://images.squarespace-cdn.com/content/v1/56f0887b1bbee0ad7d49d1a8/1490014586011-8A2DBQCGUQZYTH1ZIXMC/OT+Activity+of+the+Day-+Handwriting+Skills
  return `Pizza was invented by a ${formData.adjective1} ${formData.nationality1} chef named ${formData.name1}. To make a pizza, you need to take a lump of ${formData.noun1}, and make a thin, round ${formData.noun2}. Then you cover it with ${formData.adjective2} sauce, cheese, and fresh chopped ${formData.pluralNoun1}. Next you have to bake it in a very ${formData.adjective3} oven. When it is done, cut it into 8 ${formData.shape1}s. `
}
function generateStory2(formData){
  //
  return `T'was a cold and wintry ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}
function generateStory3(formData){
  //
  return `T'was a rainy and cold ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}

function generateRandomHexCode(){
  let hexCode = "#"
  while (hexCode.length < 7){
    hexCode += (Math.round(Math.random()*15)).toString(16)
  }
  return hexCode
}