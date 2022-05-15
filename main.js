Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
       document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
    })
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/negUbAGHS/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1="The first prediction is"+ prediction_1;
    speak_data_2="and the second prediction is"+ prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}
function gotResults(error,results){
  if (error) {
      console.error(error);
  } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(results[0].label == "Amazing")
      {
         document.getElementById("update_emoji").innerHTML = "&#128076;This is amazing";
      }
      if(results[0].label == "All the best")
      {
         document.getElementById("update_emoji").innerHTML = "&#128077;all the best";
      }
      if(results[0].label == "Cool")
      {
         document.getElementById("update_emoji").innerHTML = "&#129304;This is cool";
      }
      if(results[0].label == "Clap")
      {
         document.getElementById("update_emoji").innerHTML = "&#128079;Kudos";
      }
      if(results[0].label == "Angry")
      {
         document.getElementById("update_emoji").innerHTML = "&#9994;#**%#$*";
      }
      if(results[0].label == "Marvelous victory")
      {
         document.getElementById("update_emoji").innerHTML = "&#9996;that as a marvelous victory*";
      }

      if(results[1].label == "Amazing")
      {
         document.getElementById("update_emoji2").innerHTML = "&#128076;This is amazing";
      }
      if(results[1].label == "All the best")
      {
         document.getElementById("update_emoji2").innerHTML = "&#128077;all the best";
      }
      if(results[1].label == "Cool")
      {
         document.getElementById("update_emoji2").innerHTML = "&#129304;This is cool";
      }
      if(results[1].label == "Clap")
      {
         document.getElementById("update_emoji2").innerHTML = "&#128079;Kudos";
      }
      if(results[1].label == "Angry")
      {
         document.getElementById("update_emoji2").innerHTML = "&#9994;I am angry";
      }
      if(results[1].label == "Marvelous victory")
      {
         document.getElementById("update_emoji2").innerHTML = "&#9996;that as a marvelous victory*";
      }
  }

}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults)
}


