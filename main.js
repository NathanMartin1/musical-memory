Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,
    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri + '"/>';

    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MhvVD1_c-/model.json', modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!");
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "My first prediction is that your hand gesture is a" + prediction_1;
    speak_data_2 = "and my second prediction is that your hand gesture is a" + prediction_2 + ".";
    speak_data_3 = "Please note that AI generated information may not be accurate.";
    var utterThis = new  SpeechSynthesisUtterance(speak_data_1+ speak_data_2+ speak_data_3);
    utterThis.rate = 1;
    synth.speak(utterThis);
}
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "&#x1F91F") {
            document.getElementById("update_g").innerHTML = "&#x1F91F;";
        }
        if(results[0].label == "&#x1F44D") {
            document.getElementById("update_g").innerHTML = "&#x1F44D;";
        }
        if(results[0].label == "&#x1F919") {
            document.getElementById("update_g").innerHTML = "&#x1F919;";
        }
        if(results[0].label == "&#x1F44A") {
            document.getElementById("update_g").innerHTML = "&#x1F44A;";
        }
        if(results[1].label == "&#x1F91F") {
            document.getElementById("update_g2").innerHTML = "&#x1F91F;";
        }
        if(results[1].label == "&#x1F44D") {
            document.getElementById("update_g2").innerHTML = "&#x1F44D;";
        }
        if(results[1].label == "&#x1F919") {
            document.getElementById("update_g2").innerHTML = "&#x1F919;";
        }
        if(results[1].label == "&#x1F44A") {
            document.getElementById("update_g2").innerHTML = "&#x1F44A;";
        }
       
        
    }
}
