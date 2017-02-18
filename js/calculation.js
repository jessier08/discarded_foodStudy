var edibleNum
var inedibleNum
var weight
var weightLBS
var waterFeedbackLiter
var waterFeedbackShowerMins
var edibleNumInput
var inedibleNumInput

function getEdibleQuantity(){
    //Get a reference to the TextBox
    edibleNumInput = document.getElementById("edibleNum").value;
    edibleNum = parseFloat(edibleNumInput);
    //console.log(edibleNum+" edible");
}

function getInedibleQuantity(){
    //Get a reference to the TextBox
    inedibleNumInput = document.getElementById("inedibleNum").value;
    inedibleNum = parseFloat(inedibleNumInput);  
    //console.log(inedibleNum+" inedible");
}

function calculate(){
    //calculate weight from container dimensions
    weightInedible = ((inedibleNum*21)*0.026);
    weightEdible = ((edibleNum*21)*0.026);
    weightEdibleYear = (((edibleNum*21)*0.026))*365;
    weightCombined = weightEdible+weightInedible;
    weightCombinedYear = weightCombined*365;
    weightCombinedYearInt = Math.round(weightCombinedYear);
    
    //console.log(weightCombined+" pounds in container");
        
    //change in DOM
    weightCombinedLBS = weightCombined.toFixed(2)
    document.getElementById("weight").innerHTML=(weightCombinedLBS);
    
    document.getElementById("yearlyLBS").innerHTML=(weightCombinedYearInt+"lbs");
    
    
//    //calculate WATER feedback, change DOM
//    waterFeedbackLiter= Math.round(weightEdibleYear*1634);
//    waterAverage = Math.round(273*1634);
//    waterFeedbackShowerHoursAverage = ((waterAverage/19)/60);
//    waterFeedbackShowerDaysAverage = Math.round(waterFeedbackShowerHoursAverage/24);
//    //console.log(waterFeedbackLiter);
//    waterFeedbackShowerHours= ((waterFeedbackLiter/19)/60);
//    waterFeedbackShowerDays= Math.round(waterFeedbackShowerHours/24);
//    //console.log(waterFeedbackShowerHours + " yearly shower hours");
//    
//    if (waterFeedbackShowerHours < 24){
//        document.getElementById("waterFeedbackText")
//            .innerHTML=(waterFeedbackShowerHours+' hours');
//    } if (waterFeedbackShowerHours > 25){
//        document.getElementById("waterFeedbackText")
//            .innerHTML=(waterFeedbackShowerDays+' days');
//    } else {
//        return;
//    }
//    
//    document.getElementById("waterFeedbackText")
//        .innerHTML=(waterFeedbackShowerDays+' days');
//    //console.log(weightCombined);
//
//    
//    if (weightCombined === 0) {
//        document.getElementById("water")
//            .style.backgroundImage="url(../imgs/waterScene0.png)";
//    } if (weightCombined > 0.01 && weightCombined < 0.32){
//        document.getElementById("water")
//            .style.backgroundImage="url(../imgs/waterSceneBELOW.png)";
//    } if (weightCombined > 0.33 && weightCombined < 0.45){
//        document.getElementById("water")
//            .style.backgroundImage="url(../imgs/waterSceneAVG.png)";
//    } if (weightCombined > 0.46 && weightCombined < 0.74){
//        document.getElementById("water")
//            .style.backgroundImage="url(../imgs/waterSceneABOVE.png)";
//    } if (weightCombined > 0.75){
//        document.getElementById("water")
//            .style.backgroundImage="url(../imgs/waterSceneABOVE2.png)";
//    } else {
//        return;
//    };
    
    
//    //calculate MONEY feedback, change DOM
    moneyFeedback = Math.round(weightEdibleYear*1.43);
    
    document.getElementById("moneyFeedbackText")
            .innerHTML=("$" + moneyFeedback);
    
    if (weightCombined === 0) {
        document.getElementById("money")
            .style.backgroundImage="url(../imgs/moneyScene0.png)";
    } if (weightCombined > 0.01 && weightCombined < 0.32){
        document.getElementById("money")
            .style.backgroundImage="url(../imgs/moneySceneBELOW.png)";
    } if (weightCombined > 0.33 && weightCombined < 0.45){
        document.getElementById("money")
            .style.backgroundImage="url(../imgs/moneySceneAVG.png)";
    } if (weightCombined > 0.46 && weightCombined < 0.74){
        document.getElementById("money")
            .style.backgroundImage="url(../imgs/moneySceneABOVE.png)";
    } if (weightCombined > 0.75){
        document.getElementById("money")
            .style.backgroundImage="url(../imgs/moneySceneABOVE2.png)";
    } else {
        return;
    };
    
    
    
//    //console.log(milesFeedbackMiles+" miles of 
//    //CO2 emission equivalent to landfill emission");
//    document.getElementById("moneyFeedbackText")
//        .innerHTML=("$" + moneyFeedback);
//    
//    
//    //calculate MILES feedback, change DOM
//    milesFeedbackEmission = (weightCombinedYear*0.529).toFixed(2);
//    //console.log(milesFeedbackEmission + "kg CO2")
//    milesFeedbackMiles = Math.round((weightCombinedYear*1.28));
//    //console.log(milesFeedbackMiles+" miles driving of 
//    //CO2 emission equivalent to landfill emission");
//    document.getElementById("milesFeedbackText")
//        .innerHTML=(milesFeedbackMiles+' miles');
//    
//    
//    //calculate MEALS feedback, change DOM
//    mealsFeedbackCalories = weightEdibleYear*501;
//    mealsFeedbackMeals = Math.round(mealsFeedbackCalories/576);
//    //console.log("yearly meals wasted: " + mealsFeedbackMeals);
//    document.getElementById("mealsFeedbackText")
//        .innerHTML=(mealsFeedbackMeals+' meals');

    
} 

   

