function calcbmi(){
    var a = document.getElementById("bmiForm");
    var height = a.elements["height"].value;
    var weight = a.elements["weight"].value;
    height/=100;
    var bmi = weight/Math.pow(height,2);
    //height_val = bmi;
    //document.getElementById("bmiOut").innerHTML=(bmi);
    
    var underweight = "Your BMI is less than 18.5. You are considered underweight. You should consult your physician to discuss whehter you should gain weight or take other precautions. Additionally, a low body mass can decrease your body's immune system, which may lead to a variety of illnesses including bone loss and malnutrition."
    
    var normal = "Hoorah! You are of a healthy BMI. You have maintained an ideal BMI between 18.5 and 24.9. Keep it up."
    
    var overweight = "Your BMI is greater than 24.9."
    var obese = "Your BMI exceeds 30. You should seek help from your physician to "
    
    if (bmi <= 18.5){
        document.getElementById("bmiOut").innerHTML=(underweight);
    }else if (bmi <= 24.9){
        document.getElementById("bmiOut").innerHTML=(normal);
    }else if (bmi <= 29.9){
        document.getElementById("bmiOut").innerHTML=(overweight);
    }else{
        document.getElementById("bmiOut").innerHTML=(obese);
    }
}