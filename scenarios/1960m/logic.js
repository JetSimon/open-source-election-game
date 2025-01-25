function createEnding(engine, results) {
if(engine.playerEvAtLeast(results, 350) && (engine.hasAnsweredAny([43, 45, 46]))) { //LBJ Running mate landslide.
        engine.setNewMusic([{
    displayName: "It Was A Very Good Year",
    imageUrl: "https://i.imgur.com/keIPc3u.png",
    url: "https://audio.jukehost.co.uk/5uzjENpmS8lOnefDpYCmBJlSW6nTOhuH",
  },
]);

        return {
            slides: [
                {
                    endingHeader: "In a shocking reversal of fortunes for the Democratic party, John Kennedy has won in a complete landslide.",
                    imageUrl: "https://imgur.com/XiQW8YH.png",
                    endingText: "<p>Truman needed an incompetent opponent. Stevenson made the party look foolish. But the Kennedys? They had done it. They brought Nixon and Eisenhower down. Bobby knew Roosevelt was looking down with pride at the future of liberalism - with the Democratic majority in the Houses and the Senate, coupled with such a commanding victory over Nixon, the fight against poverty Eisenhower neglected can be reignited with renewed vigor.</p><p>Bobby was surprised with a hug from a grinning Jack. The men burst into smiles, and they talked briefly about the future they had created, each saying the other was more responsible. After a few minutes, Jack left to deliver his acceptance speech. Bobby smirks, looking forward to reading Nixon’s concession speech. </p><p>Bobby breathes in the atmosphere he created. <i>He</i> did this.He had a great candidate and a lot of resources, but he was the strategist. He deserved recognition. He looked for Dad, and found him grinning and shaking hands. Marching up with a nervous smile, he asked how he did.</p><p>Dad stopped grinning, and glared at him. Bobby felt like he was 8 years old again - a loser in a house of winners. “You did your job, Robert. John was good on TV and I had enough money to keep him there. You didn’t make any errors.” Bobby nodded, and left the celebration for some air, and let Jack enjoy his victory.</p>"
                },
                {
                    endingHeader: "1972 PRESIDENTIAL DEBATE TRANSCRIPT EXTRACT",
                    imageUrl: "https://i.imgur.com/v8n6ylo.png",
                    endingText: "<p>V.P HUMPHREY: Thank you, Walter. I'd like to take a moment to stress the importance of the Great Society, as a continuation of the New Deal and New Frontier. A continuation which my opponent would endanger, and in turn, endanger the millions of Americans who benefit from public services. I don't think it's an exaggeration, no, to say that this is the most important election of our lifetimes.</p><p>GOV. REAGAN: Listening to Democratic Politicians say it, every election has been the most important of our lifetimes. This scare tactic - this casting of themselves as the arbiters of importance - is dishonest, and it's tired. Americans are billions of dollars in debt to pay for exhorbitant amounts of welfare, and exhorbitant amounts of government spending unaccounted for, and my opponent views the continua-</p><p>CRONKITE: Thank you, Governor Rea-</p><p>GOV. REAGAN: -tion - I'm going to finish my remark, Walter - Hubert Humphrey views this election as the most important of our lifetimes because he knows Americans are on the brink of rejecting big government. Thank you.</p><p>V.P HUMPHREY: Governor Reagan, when talking about the deficit, fully neglects to mention that his plan would balloon, not decrease our debt and deficit. That is what unchecked tax breaks for the wealthy, and unchecked military spending will do to a budget. I am not exaggerating when I say that this is the most important election of-</p><p>GOV. REAGAN: There you go again.</p>"
                },  
            ]
        }
    }
            else if(engine.playerEvAtLeast(results, 269) && (engine.hasAnsweredAny([43, 45, 46]))) { //LBJ Running mate narrowish
    engine.setNewMusic([{
    displayName: "My Way",
    imageUrl: "https://i.imgur.com/UuCd45A.png",
    url: "https://audio.jukehost.co.uk/XeepoBIKY7wsSpTKvDTxJ2rbAgraSHdV",
  },
]);
        return {
            slides: [
                {
                    endingHeader: "Despite a slow start, we can confirm that Senator Kennedy has triumphed over Vice-President Nixon in the closest election since 1916.",
                    imageUrl: "https://i.imgur.com/feIMHOa.png",
                    endingText: "<p>It was agony. Jack started with the lead, but Nixon kept catching up - for some terrifying hours, Nixon even held the lead. But as the states kept being called for Kennedy, it became clear Robert had pulled it off. There has been enough of a do-nothing President - now the Kennedy family will continue the Roosevelt tradition, bringing prosperity to all with malice to none. </p><p>Bobby observes the celebration, staying out of the commotion but reveling in the atmosphere he created. Shriver is over the moon, Jackie couldn’t be more proud of her husband, Ted is hugging Jack. Even Dad looks warm, patting Jack on the shoulder and telling him he’s proud of him. Jack soaks in the most atmosphere, before he leaves to deliver his acceptance speech.</p><p>Dad’s smile thins, in a motion unobserved by most. Poor Jackie joins him to stand by his side, under a lot of strain, while Shriver and Wofford talk about the progress they’re going to make. Bobby considers talking to Dad, and makes a motion to approach, before getting his sense. This was Jack’s victory, paid for by Dad. All Bobby had done was his job. He gulped, and tried to keep his smile.</p>"
                },
                {
                    endingHeader: "The United States Capitol.",
                    imageUrl: "https://i.imgur.com/U5jplUN.png",
                    endingText: "<p>THE PRESIDENT: Chief Justice Roberts, Vice President Harris, Speaker Pelosi, Leader Schumer, Leader McConnell, Vice President Pence, distinguished guests, and my fellow Americans.</p><p>This is America’s day. This is democracy's day. A day of history and hope. Of renewal and resolve. Through a crucible for the ages America has been tested anew and America has risen to the challenge.</p><p>The will of the people has been heard and the will of the people has been heeded. We have learned again that democracy is precious. Democracy is fragile. And at this hour, my friends, democracy has prevailed.</p><p>So now, on this hallowed ground where just days ago violence sought to shake this Capitol’s very foundation, we come together as one nation, under God, indivisible, to carry out the peaceful transfer of power as we have for more than two centuries.</p><p>So, with purpose and resolve we turn to the tasks of our time. Sustained by faith. Driven by conviction. And, devoted to one another and to this country we love with all our hearts. May God bless America and may God protect our troops. Thank you, America."
                },
            ]
        }
    }



        if(engine.playerEvAtLeast(results, 350) && (engine.hasAnsweredAny([44]))) { //Scoop running mate landslide
        engine.setNewMusic([
  {
    displayName: "It Was A Very Good Year",
    imageUrl: "https://i.imgur.com/keIPc3u.png",
    url: "https://audio.jukehost.co.uk/5uzjENpmS8lOnefDpYCmBJlSW6nTOhuH",
  },
]);

        return {
            slides: [
                {
                    endingHeader: "In a shocking reversal of fortunes for the Democratic party, John Kennedy has won in a complete landslide.",
                    imageUrl: "https://imgur.com/XiQW8YH.png",
                    endingText: "<p>Truman needed an incompetent opponent. Stevenson made the party look foolish. But the Kennedys? They had done it. They brought Nixon and Eisenhower down. Bobby knew Roosevelt was looking down with pride at the future of liberalism - with the Democratic majority in the Houses and the Senate, coupled with such a commanding victory over Nixon, the fight against poverty Eisenhower neglected can be reignited with renewed vigor.</p><p>Bobby was surprised with a hug from a grinning Jack. The men burst into smiles, and they talked briefly about the future they had created, each saying the other was more responsible. After a few minutes, Jack left to deliver his acceptance speech. Bobby smirks, looking forward to reading Nixon’s concession speech. </p><p>Bobby breathes in the atmosphere he created. <i>He</i> did this.He had a great candidate and a lot of resources, but he was the strategist. He deserved recognition. He looked for Dad, and found him grinning and shaking hands. Marching up with a nervous smile, he asked how he did.</p><p>Dad stopped grinning, and glared at him. Bobby felt like he was 8 years old again - a loser in a house of winners. “You did your job, Robert. John was good on TV and I had enough money to keep him there. You didn’t make any errors.” Bobby nodded, and left the celebration for some air, and let Jack enjoy his victory.</p>"
                },
                {
                    endingHeader: "Former President ''Scoop'' Jackson dead at 71.",
                    imageUrl: "https://i.imgur.com/jYhJ3SR.png",
                    endingText: "<p>''It's as if a piece of history died last night'', said one Washington resident, who had canvassed for the late President during several of his senatorial elections.</p><p>Following a heart attack at his Everett home, President Jackson was transported to the Providence Hospital whereafter he was shortly declared dead, accompanied only by physicians and his former First Lady. The death came suddenly, only a few hours following a meeting with President Kennedy. The reason for the heart attack are as of yet unknown.</p><p>Assuming the office of President after the assassination of his predecessor, President John F. Kennedy, ''Scoop'' Jackson cruised to a landslide re-election against Arizona Senator Barry Goldwater in 1964. Despite criticism levied against the President's foreign policy and perceived domestic weakness, he managed to win re-election once more against former Vice President Nixon in 1968. He is remembered for his successful intervention in Vietnam, his expansion of President John F. Kennedy's ''New Frontier'', normalisation of relations with China, but perhaps most notably his civil rights push.</p><p>He is to be laid in state next Friday, where President Robert Kennedy, former President George Romney, Vice Presidents Connally, Carter, Nixon, and Tower will be in attendance. Senator Goldwater is expected to attend, and the Republic of Vietnam has announced that government flags will fly at half mast for a period of time.</p>"
                },  
            ]
        }
    }
                else if(engine.playerEvAtLeast(results, 269) && (engine.hasAnsweredAny([44]))) { //Scoop narrowish
    engine.setNewMusic([{
    displayName: "My Way",
    imageUrl: "https://i.imgur.com/UuCd45A.png",
    url: "https://audio.jukehost.co.uk/XeepoBIKY7wsSpTKvDTxJ2rbAgraSHdV",
  },
]);
        return {
            slides: [
                {
                    endingHeader: "Despite a slow start, we can confirm that Senator Kennedy has triumphed over Vice-President Nixon in the closest election since 1916.",
                    imageUrl: "https://i.imgur.com/feIMHOa.png",
                    endingText: "<p>It was agony. Jack started with the lead, but Nixon kept catching up - for some terrifying hours, Nixon even held the lead. But as the states kept being called for Kennedy, it became clear Robert had pulled it off. There has been enough of a do-nothing President - now the Kennedy family will continue the Roosevelt tradition, bringing prosperity to all with malice to none. </p><p>Bobby observes the celebration, staying out of the commotion but reveling in the atmosphere he created. Shriver is over the moon, Jackie couldn’t be more proud of her husband, Ted is hugging Jack. Even Dad looks warm, patting Jack on the shoulder and telling him he’s proud of him. Jack soaks in the most atmosphere, before he leaves to deliver his acceptance speech.</p><p>Dad’s smile thins, in a motion unobserved by most. Poor Jackie joins him to stand by his side, under a lot of strain, while Shriver and Wofford talk about the progress they’re going to make. Bobby considers talking to Dad, and makes a motion to approach, before getting his sense. This was Jack’s victory, paid for by Dad. All Bobby had done was his job. He gulped, and tried to keep his smile.</p>"
                },
                {
                    endingHeader: "The United States Capitol.",
                    imageUrl: "https://i.imgur.com/ICNhDjX.png",
                    endingText: "<p>THE PRESIDENT: Chief Justice White, President Bush, Vice President Feinstein, Speaker Michel, Leader Cochran, Leader Byrd, Vice President Crane, and my fellow Americans.</p><p>I will take this moment to recognise and stress that there is more, and always will be more, which unites us as Americans than there is to divide us. That is a self-evident truth.</p><p>Another self-evident truth is that all men are created equal. Our great work to keep this true, and to make this truer to the experience of every American, continues. It will always continue. And it will require unity. There is no one American who has all the answers but there is no answer that cannot be found by all Americans.</p><p>So here, at our capitol, on the shoulders and in the shadows of great people, we vow never to cease. Never to cease in our strive to make a more perfect union. Never to cease in our strive to make America a more clear example to people abroad. Never to cease in our strive to wake, day by day, and make our great country greater.</p><p>So, with purpose and resolve we turn to the tasks of our time. Sustained by faith. Driven by conviction. And, devoted to one another and to this country we love with all our hearts. May God bless America and may God protect our troops. Thank you, America."
                },
            ]
        }
    }
if(engine.isDeadlock(results) && (engine.hasAnsweredAny([43, 45, 46]))) { //deadlock LBJ
        engine.setNewMusic([
  {
    displayName: "Just Walkin' In The Rain",
    imageUrl: "https://i.imgur.com/KYb9MRp.png",
    url: "https://audio.jukehost.co.uk/oCDxTFVUGHTuocyfosUPRTZSEx0QRgZ2",
  },
]);

        return {
            slides: [
                {
                    endingHeader: "Everything's Okay....",
                    imageUrl: "https://i.imgur.com/zF5YupG.png",
                    endingText: "<p>Ladner blinked his aching eyes as he jerked out of bed. It was pitch black - he had no idea what time it was. As he lurched out of bed, staggering towards to ringing phone, he was baffled. Who on earth could be calling at this hour?</p><p>''He-hello? Heber speaking. Who is this?''</p><p>''Ah, good. Barnett gave me the right number.''The voice on the other side of the line was a cheerful southern accent, sounding wide awake, unaware of the time.</p><p>''Excuse me, who is this? What's this about?''</p><p>''Oh, you've just woken up? Heber, I am <i>so</i> sorry. I had no wish to bother you this late. I'm guessing you haven't heard about the election then.''</p><p>''..No. Who is this?''</p><p>''Well, it's a bitch of a thing if you'll pardon my language. Real difficult thing - you boys pulled it off, no candidate has a majority. So it's set to go the House, with John Kennedy, Richard Nixon and whoever the Mississippi electors say will be the third man. Which, as I understand, you're running as the secretary of state. There's another month till you electors meet, ain't it?''</p><p>Ladmer stayed silent, realising exactly who this jovial strange southerner was.</p><p>''See, if only there was a nationally known Southerner that's proven he can keep Yankees happy. Perhaps these electors can meet up  and vote for him? Well, there's a month left to sort out the details, I've gabbed long enough. Speak to you soon Heber - it was nice talking to you!''</p><p>Ladner put the phone down, his hands shaking. The idea of what that man had suggested - it would be nothing less then the biggest legislative coup in history. But could it work out? Could it block Nixon and Kennedy? As he went back to bed, he struggled to sleep as his mind went through countless possibilities.</p>"
                },
                {
                    endingHeader: "...On the LBJ",
                    imageUrl: "https://i.imgur.com/0LMdg1F.png",
                    endingText: "<p>SEN. GORE: Senator Fulbright, what exactly should the state departments primary goal in dealing with Soviet Aggression?</p><p>SEN. FULBRIGHT: First and foremost, the United States as a whole must clearly still stand as a champion of democracy despite the recent domestic instability. That means, in my opinion, that the United States must respond the Soviet's iron curtain with an iron curtain of its own - one formed with fellow independent democracies that treat international law sacrosanct rather then imperialistically demanding allegiance from allies as the Soviet's do.</p><p>SEN. GORE: Do you believe the previous administration was too aggressive?</p><p>SEN. FULBRIGHT: I do. Secretary Dulles' rollback theory, while well intentioned, does not bode well for global stability. Containment is a more effective tool of preventing Soviet aggression than the kind of forceful policy that results from rolllback theory.</p><p>SEN. MORSE: Senator Gore, might I have the floor?</p><p>SEN. GORE: Of course.</p><p>SEN. MORSE: Senator Fulbright, no doubt you're aware of Soviet interreference in Africa. What kind of message would it send to our African allies, like President Tubman, if the Secretary of State is a segregationist?</p><p>SEN. FULBRIGHT: That's a fair question, but a misleading one. I am a segregationist, but I am not a white supremacist. If a man has earned his position to deal with foreign affairs, than I am more then happy to treat him with mutual respect, regardless of skin colour. I don't believe my stance on domestic issues should preclude my position for a foreign policy focused job</p>"
                },

            ]
        }
        }
else if(engine.isDeadlock(results) && (engine.hasAnsweredAny([44]))) { //deadlock Scoop
        engine.setNewMusic([
  {
    displayName: "Just Walkin' In The Rain",
    imageUrl: "https://i.imgur.com/KYb9MRp.png",
    url: "https://audio.jukehost.co.uk/oCDxTFVUGHTuocyfosUPRTZSEx0QRgZ2",
  },
]);

        return {
            slides: [
                {
                    endingHeader: "Crisis in the Campaign",
                    imageUrl: "https://i.imgur.com/HcwaSpV.png",
                    endingText: "<p>They've done it, Scoop says. The bastards - the devil Dixiecrats - they've deadlocked the election. This is a crisis, Scoop says.</p><p>Dad looks more like the devil himself. His small, beady eyes, like tiny scorching suns, locked on you. You're not sure what he's more angry at - you, Nixon, or Jack. Maybe himself.</p><p>Jack is silent. It must feel excruciating - so, so close, but so, so far.</p><p>Democrats hold the House, but will Southern delegations fall behind? After Jack's campaign? Hardly. Will the Senators fall behind Scoop? Maybe. You consider calling Johnson, but only for a moment. For some reason, you feel that he will not be of much help.</p><p>It's going to be a long, cold month.</p>"
                },
            ]
        }
        }

    
        else if(engine.playerEvAtLeast(results, 200)) { //Narrowish loss
        engine.setNewMusic([
  {
    displayName: "Heartbreak Hotel",
    imageUrl: "https://i.imgur.com/3Tl4a7r.png",
    url: "https://audio.jukehost.co.uk/Y9AamRn4PXqtnuVcSiFBuPxNAynQl6du",
  },
]);

        return {
            slides: [
                {
                    endingHeader: "Despite a significant challenge, we can confirm that Vice-President Nixon has triumphed over Senator Kennedy",
                    imageUrl: "https://i.imgur.com/z7IMAVn.png",
                    endingText: "<p>It’s a damn lie. Nixon must have stuffed some ballot boxes. With all his missteps over the campaign trail, it’s impossible to believe that he could have won. Shriver gives you commiserations as you glower in rage at Nixon’s victory. Jack is smiling, but Bobby knows his brother. This humiliation must be agonizing for him.  </p><p>Eventually Dad walks over to Jack with a thin smile. Jack’s own smile thins with him, as he nods to Dad’s animated conversation. Bobby didn’t bother pondering what Dad could be saying, he knew full well what it was. Jack was a loser, he wasted his opportunities, and he better shape up for ‘64. Jack was smiling and nodding so well, Bobby wasn’t sure if he was a master actor or if he just didn’t care anymore. After the lecture, Jack turned to look for Bobby, and his smile grew a bit more natural when he found him. </p><p>“We scared the hell out of him though, didn’t we? Nixon must have been scared.” Jack said warmly, making Bobby feel worse. He had failed his big brother, but Jack was comforting him? “Yeah. If it wasn’t for Ike, you’d have wiped the floor with him.” Bobby replied back with forced warmness. At least they had each other. </p>"
                },
                {
                    endingHeader: "WHITE HOUSE TAPES",
                    imageUrl: "https://i.imgur.com/Ji10Ukh.png",
                    endingText: "<p>THE PRESIDENT: You catch that, Bobby?</p><p>THE ATTORNEY GENERAL: Right, Jack, we'll look into them, Rockefeller, Romney...</p><p>THE PRESIDENT: Right. Thanks, Bobby. We'll catch up.</p><p>THE ATTORNEY GENERAL: Sure, Jack.</p><p>THE ATTORNEY GENERAL LEAVES.</p><p>THE PRESIDENT: Christ, Dean. God hopes Bobby can figure something out about these silly bastards. We can't - it'll look real ugly if Ron Reagan, or, er, Rockefeller, if they'll be handling America's security...</p><p>THE SECRETARY OF STATE: Right.</p><p>THE PRESIDENT: And they are dirty.</p><p>THE SECRETARY OF STATE: Right.</p><p>THE PRESIDENT: Right... By the by, did you catch that lady, the, err... Jane Fonda? The ass on her.</p><p>THE SECRETARY OF STATE: Right.</p>"
                },
            ]
        }
    }
       else { //Landslide loss
       engine.setNewMusic([
  {
    displayName: "Mister Sandman",
    imageUrl: "https://i.imgur.com/UicTsUB.png",
    url: "https://audio.jukehost.co.uk/2Jk7tWQ5r8GJBz32cSr1PXUq9z5JxQTY",
  },
]);

        return {
            slides: [
                {
                    endingHeader: "For the third time, the Republicans wallop the Democrats. This has to be very demoralizing for Kennedy.",
                    imageUrl: "https://imgur.com/zDkb3Ww.png",
                    endingText: "<p>Bobby felt empty. He was a failure. He always was, and always will be. People would continue to stave and go homeless at the hands of a do-nothing administration, and it was his fault. He was forced to focus when he got a tap on the shoulder from Ted, his face awash with anxiety. “Hey Bobby. Dad wants to see you.” Bobby forced a slight smile and nodded. “Wish me luck.”  </p><p>Bobby arrived at the room to the side, hidden from the reporters. Jack was sitting, while Dad loomed over him. When he noticed Bobby had arrived, he gestured for him to sit down. When he did so, Dad didn't didn’t look like a frail, elderly man. He looked like a giant, pondering whether or not he should spare some prey. </p><p>“Years of work. Tens of millions of dollars. I gave you every single advantage, everything your grandfather could have only dreamed of. And you humiliate him and me. You losers.” Bobby gulped, and Jack nodded. “I’m sorry dad, but Nix-”</p><p>“Nixon is a damn fool.” Dad shook his head and sighed. “Joe would have beaten him. Get up, give your concession speech and stay out of my sight.”</p><p>Jack nodded and did so, and Bobby stayed seated, unable to face his father. “Robert… just get out.” Robert imagined standing up for himself. He yelled at his father for being a cruel, callous man - no kind of Catholic. In reality, Bobby nodded and walked out, trying not to cry.</p>"
                },
                                {
                    endingHeader: "John F. Kennedy Senate Office, 1963.",
                    imageUrl: "https://i.imgur.com/jxBRcth.png",
                    endingText: "<p>Jack sits, almost completely still, in his Senate Office. It's dusty, grey, stuffy. It almost feels like it's from a different era, and with how little governing has taken place over the last few years, it might as well be the Eisenhower Oval Office. A slight smile creeps over his face at the thought.</p><p>A knock disturbs his thoughtless thoughtfulness. ''Come in'', Senator Kennedy says. Bobby enters, and Jack's happy to see him. He's one of the only people you can trust.</p><p>''Bobby, it's great to see you. How do you do?''</p><p>''I'm fine, Jack. You?''</p><p>''Oh, I'm alright, Bobby. Just been a lot on my mind.''</p><p>''Right...''</p><p>''...''</p><p>''So, how's Jackie?''</p><p>''Good, good.''</p><p>''Good.''</p><p>''Yeah.''</p><p>''Listen, er, Jack... Ted, and Dad, and I, we've been talking, and-''</p><p>Jack holds up a hand. ''I've been thinking, Bobby, and I'm not going to be running for re-election come '64. And there's no-one I trust more with the seat than you.''</p><p>Bobby's quiet for a moment. Jack thinks he can hear him swallowing a lump.</p><p>''Look, Jack, if there's- If I can do anything for you, or Jackie, ju-''</p><p>''Oh, it's okay, Bobby. We'll be fine. Thanks for stopping by, I have er, some work to get to.''</p><p>Bobby opens his mouth, but closes it before any sounds leave. After he steps out the door, Jack's alone again.</p><p>So very alone.</p>"
                },
            ]
        }
    }



}
function onCandidateSelectionStarted(engine) {
    //Fakeout code starts here
        engine.setLocalization("Choose your Candidate", "Please select the campaign you will manage")
        engine.setLocalization("Choose your Running Mate", "Please select your manager")
engine.setNewTheme(newTheme);
//Fakeout code ends here
}


function onAnswerPicked(engine, answerPicked) {
//convention counter code starts here
    const conventionCounterLookup = [
        "Good Luck!",
        "Party Bosses: Agressive & Hostile",
        "Party Bosses: Agressive & Hostile",
        "Party Bosses: Distrustful & Bitter",
        "Party Bosses: Distrustful & Bitter",
        "Party Bosses: Resigned & Cordial",
        "Party Bosses: Resigned & Cordial",
        "Party Bosses: Placated & Satisfied",
        "Party Bosses: Placated & Satisfied",
        "Primary Campaign Won",
    ];

    const ans = answerPicked.id;

    // These answers help you win the convention
    if (ans == 2 || ans == 5 || ans == 6 || ans == 10 || ans == 16 || ans == 22 || ans == 28 || ans == 20) {
        engine.addCounter("Convention", 1);
    }

     const clampedConventionLevel = Math.max(0, Math.min(9, engine.getCounter("Convention")))
    engine.setCounterDisplayName("Convention", conventionCounterLookup[clampedConventionLevel])
if(ans == 27 || ans == 28 || ans == 29 || ans == 30 )
{

  if(engine.getCounter("Convention") >= 7){
  engine.setQuestionEnabledById(457, true)
  engine.setQuestionEnabledById(489, false)
  engine.setQuestionEnabledById(456, false)
  engine.setQuestionEnabledById(454, false)
} else if (engine.getCounter("Convention") >= 5){
  engine.setQuestionEnabledById(489, true)
  engine.setQuestionEnabledById(457, false)
  engine.setQuestionEnabledById(456, false)
  engine.setQuestionEnabledById(454, false)
} else if (engine.getCounter("Convention") >= 2){
  engine.setQuestionEnabledById(456, true)
  engine.setQuestionEnabledById(457, false)
  engine.setQuestionEnabledById(489, false)
  engine.setQuestionEnabledById(454, false)
} else if (engine.getCounter("Convention") >= 0){ 
  engine.setQuestionEnabledById(454, true)
  engine.setQuestionEnabledById(457, false)
  engine.setQuestionEnabledById(489, false)
  engine.setQuestionEnabledById(456, false)
}
}
if (ans == 31 || ans == 32 || ans == 33 || ans == 34) {
        engine.setCounter("Convention", 9);
        engine.setCounterDisplayName("Convention", "Primary Campaign Won");
        engine.currentScenario.hasStateVisits = true;
}
//Convention counter code ends here
//Running mate code starts here
if (ans == 43 || ans == 45 || ans == 46) { //Lyndon Johnson
        engine.setNewPlayerCandidateName("John F.", "Kennedy");
        engine.setNewRunningMateName("Lyndon B.", "Johnson");
        engine.setNewRunningMateImage("https://i.imgur.com/N5rFDPJ.png")
        engine.setQuestionEnabledById(13547, true)
        engine.setQuestionEnabledById(13546, false)
}
if (ans == 44) { //Scoop Jackson
        engine.setNewPlayerCandidateName("John F.", "Kennedy");
        engine.setNewRunningMateName("Henry M.", "Jackson");
        engine.setNewRunningMateImage("https://i.imgur.com/tuNZeFG.png")
        engine.setQuestionEnabledById(13546, true)
        engine.setQuestionEnabledById(13547, false)
}

//Running mate code ends here
    // This is how to insert a new question
    /*
    engine.insertNewQuestionNext({
        "id": 888,
        "description": "Inserted",
        "answers": [
            {
                "id": 8888,
                "description": "Ahh " + testVar,
                "feedback": "Ahhh",
                "answerEffects": [
                ]
            }
        ],
        "keepInPlaceIfQuestionsShuffled": false
    })*/
}


function onScenarioStarted(engine) {
        engine.setCounter("Convention", 0);
        engine.setCounterDisplayName("Convention", "Good Luck!");

    //Fakeout code starts here
        engine.setNewPlayerCandidateName("John F.", "Kennedy");
        engine.setNewRunningMateName("", "For President");
        engine.setNewRunningMateImage("https://imgur.com/LsxQv69.png")
        engine.setNewPlayerCandidateImage("https://i.imgur.com/84vIdb6.png")
        engine.setNewTheme(newTheme);
        //Fakeout code ends here
        
engine.setNewMusic([
  {
    displayName: "Fly Me To The Moon",
    imageUrl: "https://i.imgur.com/LjlOm9c.png",
    url: "https://audio.jukehost.co.uk/SeHRM8MlxOYXzYAbbg0EVRNyFdWAEYLq"
  },
  {
    displayName: "Strangers In The Night",
    imageUrl: "https://i.imgur.com/CYb8E2E.png",
    url: "https://audio.jukehost.co.uk/5suoG6zNwCsNL4IDwlOfP0R0A5Z09MSZ"
  },
    {
    displayName: "That's Life",
    imageUrl: "https://i.imgur.com/PsJaN8Q.png",
    url: "https://audio.jukehost.co.uk/xqkFbMEe1QgFme0vCihRuGHAsdTN4Bup"
  },
  
]);


}

export {createEnding, onAnswerPicked, onScenarioStarted, onCandidateSelectionStarted}

    const newTheme = {
        "backgroundImageUrl": "https://i.imgur.com/Sxc49l1.jpeg",
        "backgroundColor": "",
        "headerImageUrl": "",
        "primaryGameWindowColor": "rgba(239, 230, 211, 0.8)",
        "secondaryGameWindowColor": "#05265c",
        "primaryGameWindowTextColor": "#000000",
        "secondaryGameWindowTextColor": "#efe6d3",
        "bottomBannerBackgroundColor": "#05265c",
        "bottomBannerTextColor": "#efe6d3",
        "advisorImage": "https://i.imgur.com/bkk3nzq.png",
        "quote": "We must learn how to compose differences, not with arms, but with intellect and decent purpose."
        }
