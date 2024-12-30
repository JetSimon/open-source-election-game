let testVar = 0;

function createEnding(engine, results) {

    if (engine.playerWonEv(results)) {
        return {
            slides: [
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "You win electorally speaking!"
                },
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 2!"
                },
                {
                    imageUrl: "https://placehold.co/250x250",
                    endingText: "Slide 3 :3"
                }
            ]
        }
    }

    return {
        slides: [
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "You lose electorally speaking!"
            },
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Slide 2!"
            },
            {
                imageUrl: "https://placehold.co/250x250",
                endingText: "Slide 3 :3"
            }
        ]
    }
}

function onAnswerPicked(engine, answerPicked) {
    const ans = answerPicked.id;

    console.log(ans)

    if ((ans == 4183 || ans == 16540 || ans == 16541 || ans == 16542)) {
        alert("Would set theme to devil georgia")
        /*
        nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#A52A2A" 
        nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#A9A9A9" 
        $(".container")[0].style.backgroundColor = "#FFBF00" 
        $("#game_window")[0].style.borderColor = "#FFBF00" 
        document.body.background = "https://a-z-animals.com/media/2023/12/tobacco.jpg"
        document.getElementById("header").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Flag_of_the_State_of_Georgia_%281956%E2%80%932001%29.svg/1280px-Flag_of_the_State_of_Georgia_%281956%E2%80%932001%29.svg.png" 
        quotes = [
            "<em><q>The problem with trying to leave politics is that once it gets in your blood, it can be like a narcotic.</q></em>"
        ]
        customquote = quotes[Math.floor((Math.random() * quotes.length))
        ]
        corrr=`\n<h2>The Devil Went Down to Georgia</h2><font id='wittyquote' size='3' color='white'><em>`+customquote+`</em></font>`
         campaignTrail_temp.running_mate_last_name = 'For ?';
         campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/r0PNzdQ.png';
         campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/cKRqhiK.jpeg";
         campaignTrail_temp.candidate_last_name = 'Talmadge';
        */
    }

    if (ans == 16563) {
        alert("Would set theme to NCPAC")
        /*document.body.background = "https://i.imgur.com/ibYjCW8.png"
        document.getElementById("header").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" 
        quotes = [
            "<em><q>From political intimidation and conspiracy trials to the Constitution and the Bill of Rights, come home, America!</q></em>"
        ]
        customquote = quotes[Math.floor((Math.random() * quotes.length))
        ]
        corrr=`\n<h2>NCPAC vs. McGovern et al.</h2><font id='wittyquote' size='3' color='white'><em>`+customquote+`</em></font>`
        document.getElementById("wittyquote").color = "white" 
        campaignTrail_temp.running_mate_image_url = "https://studentorgs.kentlaw.iit.edu/fba/wp-content/uploads/sites/7/2019/07/FBA-seal.png";
        campaignTrail_temp.running_mate_last_name = 'Esquire'; 
         campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/nzuuxkT.png';
         campaignTrail_temp.candidate_last_name = 'R. Bauer,';
         campaignTrail_temp.questions_json[campaignTrail_temp.question_number + 1] = tunnel(16569);
 */
    }

    if (ans == 4230) {
        alert("This is supposed to jump to q 18?")
    }

    if ((ans == 4224 || ans == 4225 || ans == 4226 || ans == 4227)) {
        engine.setNewPlayerCandidateImage("https://i.imgur.com/rvcKjPE.png");
    }

    /*
    engine.setNewPlayerCandidateImage("https://i.imgur.com/rvcKjPE.png");
    engine.setNewRunningMateImage("https://i.imgur.com/rvcKjPE.png");
    engine.setNewPlayerCandidateName("Test", "Test");
    engine.setNewRunningMateName("test", "test");
    */
}

export { createEnding, onAnswerPicked }