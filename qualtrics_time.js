Qualtrics.SurveyEngine.addOnload(function()
{
    /*Place your JavaScript here to run when the page is fully displayed*/
    //Retrive Qualtrics object and save in qthis
    var qthis = this;
    //hide buttons
    qthis.hideNextButton();
 
    //"https://<your-github-username>/<repositry>"
    var task_github = "https://Mizuho-Harada.github.io/2023sotsuron/"; 
 
    // the below urls must be accessible with your browser
    // for example, https://kywch.github.io/jsPsych/jspsych.js
    var requiredResources = [
        task_github + "jspsych/jspsych.js",
        task_github + "jspsych/plugins/jspsych-html-slider-response.js",
        task_github + "main_time.js"
    ];
 
    function loadScript(idx) {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if ((idx + 1) < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp();
            }
        });
    }
 
    if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
        loadScript(0);
    }
 
    //jQuery is loaded in Qualtrics by default
    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');
     
    //Wrapping jsPsych.init() in a function
    function initExp() {
        jsPsych.init({
           //questionable
            timeline: timeline,
            display_element: 'display_stage',

            //Adding the clean up and continue functions
            on_finish: function (data) {
       
                  var datajs = jsPsych.data.get().json();
                 
                Qualtrics.SurveyEngine.setEmbeddedData("datajs", datajs);
         
                // clear the stage
                jQuery('#display_stage').remove();
                jQuery('display_stage_background').remove();
         
                // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
                qthis.clickNextButton();
            }
        });
      };
});
 
Qualtrics.SurveyEngine.addOnReady(function()
{
    /*Place your JavaScript here to run when the page is fully displayed*/
 
});
 
Qualtrics.SurveyEngine.addOnUnload(function()
{
    /*Place your JavaScript here to run when the page is unloaded*/
 
});