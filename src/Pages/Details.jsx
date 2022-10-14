import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
    const [details, setDetails] = useState([
        {
            "id": 1,
            "title": "Shah Rukh Khan",
            "Image": "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Why-SRK%E2%80%99s-Residence%E2%80%99s-Nameplate-Was-Removed-2.jpg",
            "category": "Bollywood",
            "description": "It seems like the diamonds on the plate are to blame here. According to a close friend of the actor the nameplate was taken down for reasons of safety.“That is one expensive nameplate, probably one of its kind in the entire world, and so after it was put up, it was brought to the host’s attention that it was not safe to have precious stones studded on to the wall. Shah Rukh decided to remove the nameplate from its place of public accessibility for the time being,” the friend reveals."
        },
        {
            "id": 51,
            "title": "Amitabh Bachchanr",
            "Image": "https://media.gettyimages.com/photos/indian-actor-amitabh-bachchan-poses-on-the-red-carpet-for-the-4th-picture-id97942617?k=20&m=97942617&s=612x612&w=0&h=sjWZ5uQGKCfe3xuaEnbRluarZVhCinXidBwJjJaUtho=",
            "category": "bollywood",
            "description": "Amitabh Bachchan was born on October 11, 1942 in Allahabad, British India (present-day Prayagraj, Uttar Pradesh, India) to legendary poet Harivansh Rai Bachchan & Teji Bachchan. He also has a brother named Ajitabh. He completed his education from Uttar Pradesh and moved to Bombay to find work"
        },
        {
            "id": 2,
            "title": "Deepika Padukone EXUDES desi vibes with a modern touch in a white ruffle saree during the closing ceremony",
            "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Deepika-76.png",
            "category": "Bollywood",
            "description": "Gehraiyaan actress Deepika Padukone is among the few stars who are representing India at Cannes 2022. She is churning out some fabulous fashion stints leaving all her fans mesmerised. For the closing ceremony of the international film festival, the actress opted to go all desi. But not without a modern touch.After wearing some classic modern pieces, Deepika Padukone chose a Abu Jani-Sandeep Khosla creation to end her stint at Cannes 2022.The actress looked absolutely divine as walked the red carpet wearing this beautiful saree. The neckpiece made of pearls added much glam to the sweet saree.  The actress attended the press conference with other jury members Rebecca Hall and Jeff Nichols. Sticking to her roots, she greeted everyone with a namaste.Well, if this picture does not hypnotise you then we don't know what will. Subtle makeup, pearl earrings and more - the actress looked drop-dead gorgeous as ever."
        },
        {
            "id": 61,
            "title": "Deepika Padukone EXUDES desi vibes with a modern touch in a white ruffle saree during the closing ceremony",
            "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Deepika-76.png",
            "category": "footer1",
            "description": "Gehraiyaan actress Deepika Padukone is among the few stars who are representing India at Cannes 2022. She is churning out some fabulous fashion stints leaving all her fans mesmerised. For the closing ceremony of the international film festival, the actress opted to go all desi. But not without a modern touch.After wearing some classic modern pieces, Deepika Padukone chose a Abu Jani-Sandeep Khosla creation to end her stint at Cannes 2022.The actress looked absolutely divine as walked the red carpet wearing this beautiful saree. The neckpiece made of pearls added much glam to the sweet saree.  The actress attended the press conference with other jury members Rebecca Hall and Jeff Nichols. Sticking to her roots, she greeted everyone with a namaste.Well, if this picture does not hypnotise you then we don't know what will. Subtle makeup, pearl earrings and more - the actress looked drop-dead gorgeous as ever."
        },

        {
            "id": 3,
            "title": "SS Rajamouli's RRR hailed by Eternals star Patton Oswalt:  RRR is insane",
            "Image": "https://filmfare.wwmindia.com/content/2022/may/rrrpattonoswalt41653717404.jpg",
            "category": "Bollywood",
            "description": "Hollywood comedian and actor Patton Oswalt cannot get enough of RRR. The actor who is best known for his Marvel roles including Eternals was left impressed with director SS Rajamouli's latest magnum opus. He recently took to Twitter to recommend the movie.RR was a megahit that had a successful box office run. Apart from breaking records in Indian cinemas, the film also garnered huge praise from international critics and audiences. In a Tweet, Patton Oswalt urged people to watch RRR. He wrote, “If this ISN’T playing near you in IMAX then this is the next best way to watch it. Fucken @RRRMovie is insane.When the team of RRR responded to thank Oswalt, he replied, “You guys are out of your f**king minds, you should not be allowed to make films, and I can’t wait to see what you do next.RR is a period drama starring Ram Charan and NTR Jr and follows two revolutionaries - Alluri Sitarama Raju and Komaram Bheem as they go up against the British rule in India. The film was released on March 24 this year. Since then, it has garnered significant buzz. It also kickstarted a debate on the way pan-India films are perceived."
        },
        {
            "id": 4,
            "title": "Shah Rukh Khan, Salman Khan and Madhuri Dixit's selfie has fans recalling Hum Tumhare Hai Sanam",
            "Image": "https://filmfare.wwmindia.com/content/2022/may/shahrukhkhan41653712635.jpg",
            "category": "Bollywood",
            "description": "Karan Johar's 50th birthday bash was one big star-studded celebration. The evening saw a bevvy of Bollywood celebrities making an appearance and with so many biggies coming together, reunions were inevitable. Now, a selfie of Shah Rukh Khan, Salman Khan and Madhuri Dixit has emerged and fans are obsessed.The picture from the party sees Salman Khan flanked by Madhuri Dixit and Shah Rukh Khan. Joining them were Madhuri's husband Shriram Nene and Shah Rukh Khan's wife Gauri Khan. The Fame Game star took to Instagram to share the priceless photo in a post captioned, “So much to talk about, right? @drneneofficial @iamsrk @beingsalmankhan @gaurikhan. Fans cannot get enough of the picture. One fan commented on the sheer star power and wrote, “All Legends in one frame”. While many were thrilled to get a glimpse of Shah Rukh Khan and Salman Khan together, others recalled that the two stars appeared alongside Madhuri Dixit in Hum Tumhare Hai Sanam. The 2002 film was a romantic drama that revolved around a love triangle. Moreover, the pic also sparked nostalgia for Hum Aapke Hai Koun which saw Madhuri and Salman share screen space in an iconic pairing.Karan Johar’s birthday bash had several memorable moments. While Shah Rukh Khan did not walk the red carpet, videos of him dancing like nobody’s watching on Koi Mil Gaya from Kuch Kuch Hota Hai surfaced later. Meanwhile, Salman Khan who was one of the last guests to arrive reportedly stayed at the party till the morning."
        },
        {
            "id": 5,
            "title": "Akshay Kumar was all praise for Manushi Chillar’s sharp memory during the promotions of Prithviraj",
            "Image": "https://filmfare.wwmindia.com/content/2022/may/akshaykumarwasallpraises41653652745.jpg",
            "category": "Bollywood",
            "description": "Akshay Kumar and Manushi Chhillar have kick-started promotions for their upcoming movie Prithviraj, which will be released on June 3. In a recent appearance on a comedy reality show, Akshay was all praise for Manushi Chhillar’s sharp memory. Manushi Chhillar also reciprocated by complimenting Akshay Kumar.In the reality show, Akshay Kumar said, If I talk about Manushi, she has such a sharp memory. She used to memorise all the dialogues, hers, mine as well as those of other actors. She could remember the toughest of words. The duo were also joined by the director, Chandraprakash Dwivedi, for the promotion of the movie on the reality show. He spoke in-depth about the upcoming release. The movie also stars Sanjay Dutt, Sonu Sood, Ashutosh Rana, and Sakshi Tanwar in pivotal rolesManushi also said that even though she loves Akshay Kumar’s comedy movies, she strongly feels that Prithviraj is his best movie to date. She said, I am a big fan of sir’s comedy and the few comedy films that sir has done. But, after watching Prithviraj, I can definitely say that Prithviraj is my favourite film of sir."
        },
        {
            "id": 6,
            "title": "It's official! Hrithik Roshan introduced Saba Azad as his girlfriend at Karan Johar's bash",
            "Image": "https://filmfare.wwmindia.com/content/2022/may/hrithikroshansabaazad41653633774.jpg",
            "category": "Bollywood",
            "description": "Talks of Hrithik Roshan and Saba Azad’s rumoured relationship have been doing the rounds for a while. But now, the two have made it red carpet official by appearing together at Karan Johar's grand birthday bash. Hrithik and Saba arrived at the party on theme in their black outfits and made for a stunning pair. Turns out, after gracing the red carpet, Hrithik also introduced Saba Azad as his girlfriend to fellow attendeesAs per reports on a leading news portal, Hrithik Roshan was by Saba Azad's side the whole evening and went on to introduce her as his girlfriend to guests present at the bash. A source told the portal, Hrithik and Saba “didn’t leave each other’s side and were holding hands throughout the party.he couple (now that we can finally call them that) set the red carpet on fire as they posed for paps. Later, actress Preity Zinta also shared a picture with Hrithik and Saba. Take a look at their unmissable picFor the uninitiated, Hrithik Roshan and Saba Azad have been spending a lot of time together and needless to say, they’ve been the talk of the town. While they are yet to make an announcement to confirm their relationship, it cannot get more obvious than this.Recently, Hrithik and Saba also attended a birthday dinner together with the Roshan family. Hrithik’s father Rakesh Roshan and mother Pinkie were present at the intimate family gathering. Meanwhile, Karan Johar’s bash which took place in Mumbai on May 25 was attended by the most popular Bollywood stars including Aishwarya Rai Bachchan and Abhishek Bachchan, Katrina Kaif and Vicky Kaushal, Anushka Sharma, Ranveer Singh, Ranbir Kapoor and others."
        },
        {
            "id": 54,
            "title": "It's official! Hrithik Roshan introduced Saba Azad as his girlfriend at Karan Johar's bash",
            "Image": "https://filmfare.wwmindia.com/content/2022/may/hrithikroshansabaazad41653633774.jpg",
            "category": "mix",
            "description": "Talks of Hrithik Roshan and Saba Azad’s rumoured relationship have been doing the rounds for a while. But now, the two have made it red carpet official by appearing together at Karan Johar's grand birthday bash. Hrithik and Saba arrived at the party on theme in their black outfits and made for a stunning pair. Turns out, after gracing the red carpet, Hrithik also introduced Saba Azad as his girlfriend to fellow attendeesAs per reports on a leading news portal, Hrithik Roshan was by Saba Azad's side the whole evening and went on to introduce her as his girlfriend to guests present at the bash. A source told the portal, Hrithik and Saba “didn’t leave each other’s side and were holding hands throughout the party.he couple (now that we can finally call them that) set the red carpet on fire as they posed for paps. Later, actress Preity Zinta also shared a picture with Hrithik and Saba. Take a look at their unmissable picFor the uninitiated, Hrithik Roshan and Saba Azad have been spending a lot of time together and needless to say, they’ve been the talk of the town. While they are yet to make an announcement to confirm their relationship, it cannot get more obvious than this.Recently, Hrithik and Saba also attended a birthday dinner together with the Roshan family. Hrithik’s father Rakesh Roshan and mother Pinkie were present at the intimate family gathering. Meanwhile, Karan Johar’s bash which took place in Mumbai on May 25 was attended by the most popular Bollywood stars including Aishwarya Rai Bachchan and Abhishek Bachchan, Katrina Kaif and Vicky Kaushal, Anushka Sharma, Ranveer Singh, Ranbir Kapoor and others."
        },
        {
            "id": 7,
            "title": "Inside pictures from Karan Johar’s 50th birthday: Anushka Sharma and Ranbir Kapoor reunite",
            "Image": "https://filmfare.wwmindia.com/content/2022/may/vickykaushal41653570327.jpg",
            "category": "Bollywood",
            "description": "Karan Johar’s 50th birthday bash is the talk of B-town. The event was attended by A-listers such as Salman Khan, Aamir Khan, Kareena Kapoor Khan, Saif Ali Khan, Kajol, Rani Mukerji, Shahid Kapoor, Mira Kapoor, Anushka Sharma, Gauri Khan, Hrithik Roshan, Ranveer Singh, Ranbir Kapoor among others.After the red-carpet pictures of celebrities riled up a storm, we are now looking at the inside pictures from the event. These pictures candidly show our favourite stars having the time of their lives. As Katrina Kaif and Vicky Kaushal dish out couple goals, Ranbir Kapoor and Anushka Sharma reunite. "
        },
        {
            "id": 8,
            "title": "Bollywood Alia Bhatt finally reacts to viral video of Ranbir Kapoor cradling a baby; cries 'happy tears'",
            "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Alia-Ranbir-baby-video.jpg?impolicy=Medium_Widthonly&w=800",
            "category": "Bollywood",
            "description": "A video of Ranbir Kapoor cradling a baby had gone viral on the internet. In the video, Ranbir was seen carrying the little one in his arms, kisses on the head and continues to play with the baby. The fan shared the video on Instagram and wrote, Many social media users started tagging Alia Bhatt after watching the video. And the viral video of Ranbir's has finally got Alia's much-needed attention, and it got her happy tears."
        },
        {
            "id": 9,
            "title": "Bollywood Deepika Padukone looks jaw droppingly stunning in latest photos",
            "Image": "https://www.pinkvilla.com/imageresize/deepika_69.jpg?width=752&format=webp&t=pvorg",
            "category": "Bollywood",
            "description": "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. "
        },
        {
            "id": 10,
            "title": "Bollywood Aishwarya Rai Bachchan, Abhishek Bachchan and daughter Aaradhya return ",
            "Image": "https://www.pinkvilla.com/imageresize/abhishek%20bachchan%20aishwarya%20aaradhya%20%282%29.JPG?width=752&format=webp&t=pvorg",
            "category": "Bollywood",
            "description": "Aishwarya Rai Bachchan, Abhishek Bachchan and daughter Aaradhya returned to Mumbai today after ringing in 2019 abroad. Abhishek and Aishwarya shared photos from their New Year getaway as the family basked in the sun. At the airport, daughter Aaradhya was engaged in a conversation with her parents and looked cute as a button in a pink dress."
        },
        {
            "id": 11,
            "title": "Iron Man",
            "Image": "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
            "category": "Hollywood",
            "description": "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man."
        },
        {
            "id": 55,
            "title": "Top Gun Maverick BO: Tom Cruise film collects $51 mn in US, ₹4.75 cr in India ",
            "Image": "https://images.hindustantimes.com/img/2022/05/28/550x309/dcf35a88-dd9e-11ec-8fe2-ac5ac3115257_1653667000472_1653747840857.jpg",
            "category": "mix",
            "description": "Top Gun Maverick box office day 1 collection: Tom Cruise's film collected $51 million at the US box office on its opening day. In India, it collected ₹4.75 crore. Top Gun came out in 1986, establishing Cruise, then 24, as an action hero. He’s nearly 60 now, promoted to US Navy captain in the sequel, and working hard to recreate the magic from 36 years ago.Director Joseph Kosinski's Top Gun Maverick, which features Tom Cruise, had a contrasting opening at the box office in India and the US. In the US, the film collected $51 million on its opening day. The film is already Tom’s best opening day ever beating Mission Impossible – Fallout's first-day collection. However, the film has not been able to make a mark in India and collected ₹4.75 crore on day one. In Top Gun Maverick, Tom essays the role of Pete 'Maverick' Mitchell, who is grappling with the diminished standing of fighter pilots in a world that now wages war with drones controlled by people miles away on computers. Top Gun Maverick is produced by Jerry Bruckheimer, Tom Cruise, Christopher McQuarrie and David Ellison.As per a Deadline report, Top Gun Maverick at this Friday night hour is on its way to a $51 million opening day (which includes $19.3 million previews). It would not be shocking to wake up on Saturday morning and see that the sequel has edged out Iron Man 2 ($51.2M) to become Paramount’s top opening day ever. Already, the sequel is Tom Cruise’s best opening day ever in US/Canada besting Mission: Impossible – Fallout‘s first day of $22.8M by 124%."
        },
        {
            "id": 12,
            "title": "The Incredible Hulk",
            "Image": "https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg",
            "category": "Hollywood",
            "description": "The Incredible Hulk is a 2008 American superhero film based on the Marvel Comics character the Hulk. Produced by Marvel Studios and distributed by Universal Pictures, it is the second film in the Marvel Cinematic Universe (MCU). It was directed by Louis Leterrier from a screenplay by Zak Penn, and stars Edward Norton as Bruce Banner alongside Liv Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell, and William Hurt. In the film, Bruce Banner becomes the Hulk as an unwitting pawn in a military scheme to reinvigorate the (Super-Soldier) program through gamma radiation. Banner goes on the run from the military while attempting to cure himself of the Hulk."
        },
        {
            "id": 13,
            "title": "Thor",
            "Image": "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg",
            "category": "Hollywood",
            "description": "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fourth film in the Marvel Cinematic Universe (MCU). It was directed by Kenneth Branagh, written by the writing team of Ashley Edward Miller and Zack Stentz along with Don Payne, and stars Chris Hemsworth as the title character alongside Natalie Portman, Tom Hiddleston, Stellan Skarsgård, Colm Feore, Ray Stevenson, Idris Elba, Kat Dennings, Rene Russo, and Anthony Hopkins. After reigniting a dormant war, Thor is banished from Asgard to Earth, stripped of his powers and his hammer Mjölnir. As his brother Loki (Hiddleston) plots to take the Asgardian throne, Thor must prove himself worthy."
        },
        {
            "id": 62,
            "title": "Amber Heard says she has received threats 'every single day' during trial: 'People want to put my baby in a microwave' ",
            "Image": "https://images.hindustantimes.com/img/2022/05/27/550x309/amber_heard_1652846124301_1653656835956.JPG",
            "category": "footer2",
            "description": "In a video from the trial shared by Law & Crime Network on their YouTube channel, Amber told the jury, I am harassed, humiliated, threatened, every single day. Even just walking into this courtroom. Sitting here in front of the world, having the worst parts of my life, things that I have lived through, used to humiliate me. People want to kill me and they tell me so every day. People want to put my baby in the microwave, and they tell me that. She also said, I live my life with these sets of rules I've to follow, my friends have to follow for me not to have a panic attack or a triggering event or I relive the trauma, even from training to do. In my movie, for instance, for training for Aquaman, a combat scene and a trigger happen. I have a meltdown and have to deal with that, the crew I work with have to deal with that, because of the damage I walk around with every single day. I am not sitting in this courtroom snickering. I’m not sitting in this courtroom laughing, smiling, or making snide jokes. I’m not. This is horrible. A jury is scheduled to hear the closing arguments on Friday in Johnny's lawsuit against Amber. Each side will have two hours to summarise their case in a trial that has stretched on for six weeks. Johnny Depp is suing Amber for $50 million in Virginia's Fairfax County Circuit Court over a December 2018 op-ed she wrote in The Washington Post describing herself as “a public figure representing domestic abuse”. His lawyers say he was defamed by the article even though it never mentioned his name."
        },
        {
            "id": 14,
            "title": "Captain America",
            "Image": "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
            "category": "Hollywood",
            "description": "Captain America: The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fifth film in the Marvel Cinematic Universe (MCU). The film was directed by Joe Johnston, written by Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside Tommy Lee Jones, Hugo Weaving, Hayley Atwell, Sebastian Stan, Dominic Cooper, Neal McDonough, Derek Luke, and Stanley Tucci. During World War II, Steve Rogers, a frail man, is transformed into the super-soldier Captain America and must stop the Red Skull (Weaving) from using the Tesseract as an energy source for world domination."
        },
        {
            "id": 15,
            "title": "The Avengers",
            "Image": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
            "category": "Hollywood",
            "description": "Marvel's The Avengers[4] (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),[1][5] or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[N 1] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth."
        },
        {
            "id": 16,
            "title": "Guardians of the Galaxy",
            "Image": "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg",
            "category": "Hollywood",
            "description": "Guardians of the Galaxy (retroactively referred to as Guardians of the Galaxy Vol. 1)[4][5] is a 2014 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 10th film in the Marvel Cinematic Universe (MCU). Directed by James Gunn, who wrote the screenplay with Nicole Perlman, the film features an ensemble cast including Chris Pratt, Zoe Saldaña, Dave Bautista, Vin Diesel, and Bradley Cooper as the titular Guardians, along with Lee Pace, Michael Rooker, Karen Gillan, Djimon Hounsou, John C. Reilly, Glenn Close, and Benicio del Toro. In the film, Peter Quill and a group of extraterrestrial criminals go on the run after stealing a powerful artifact."
        },
        {
            "id": 17,
            "title": "Avengers: Age of Ultron",
            "Image": "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
            "category": "Hollywood",
            "description": "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron, an artificial intelligence with the goal of causing human extinction."
        },
        {
            "id": 18,
            "title": "Ant-Man",
            "Image": "https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg",
            "category": "Hollywood",
            "description": "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay and Paul Rudd. It stars Rudd as Scott Lang / Ant-Man alongside Evangeline Lilly, Corey Stoll, Bobby Cannavale, Michael Peña, Tip T.I. Harris, Anthony Mackie, Wood Harris, Judy Greer, David Dastmalchian, and Michael Douglas as Hank Pym. In the film, Lang must help defend Pym's Ant-Man shrinking technology and plot a heist with worldwide ramifications."
        },
        {
            "id": 19,
            "title": "Doctor Strange",
            "Image": "https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg",
            "category": "Hollywood",
            "description": "Doctor Strange is a 2016 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 14th film in the Marvel Cinematic Universe (MCU). The film was directed by Scott Derrickson from a screenplay he wrote with Jon Spaihts and C. Robert Cargill, and stars Benedict Cumberbatch as neurosurgeon Stephen Strange along with Chiwetel Ejiofor, Rachel McAdams, Benedict Wong, Michael Stuhlbarg, Benjamin Bratt, Scott Adkins, Mads Mikkelsen, and Tilda Swinton. In the film, Strange learns the mystic arts after a career-ending car crash."
        },
        {
            "id": 20,
            "title": "Black Panther",
            "Image": "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
            "category": "Hollywood",
            "description": "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther, T'Challa is crowned king of Wakanda following his father's death, but he is challenged by Killmonger (Jordan), who plans to abandon the country's isolationist policies and begin a global revolution."
        },
        {
            "id": 21,
            "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
            "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
            "category": "Technology",
            "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
        },
        {
            "id": 56,
            "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
            "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
            "category": "mix",
            "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
        },
        {
            "id": 52,
            "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
            "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
            "category": "technology",
            "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
        },
        {
            "id": 22,
            "title": "A face search engine anyone can use is alarmingly accurate ",
            "Image": "https://images.indianexpress.com/2022/05/Facial-search-engine-featured.jpg",
            "category": "Technology",
            "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
        },
        {
            "id": 63,
            "title": "A face search engine anyone can use is alarmingly accurate ",
            "Image": "https://images.indianexpress.com/2022/05/Facial-search-engine-featured.jpg",
            "category": "footer3",
            "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
        },
        {
            "id": 22,
            "title": "These are the best celestial events to look forward to in 2022 ",
            "Image": "https://images.indianexpress.com/2022/05/Celestial-calendar-2022-solar-lunar-eclipse-meteor-showers.jpg",
            "category": "Technology",
            "description": "The cosmos is as beautiful as it is mysterious. Every once in a while, the universe puts on a show for us humans here on Earth to enjoy. Sometimes, it is an eclipse, sometimes it is a meteor shower. But no matter what event, it is an occasion that you should not miss. Here, we have put together a list of celestial events that we can look forward to seeing in 2022.After the partial eclipse visible in certain parts of South America on April 30 this year, there is only one more solar eclipse left for us to witness: a partial one that will happen on October 25 and will be visible in Europe, Northeast Africa, the Middle East and parts of Asia, including India. The greatest part of the eclipse will be visible to viewers in India so save the date on your calendar.The total lunar eclipse that occurred on May 16 this year will not be the only one this year: another total lunar eclipse is predicted to happen once again on November 8 this year. However, just like the previous full lunar eclipse, it is unlikely that this one would be visible from India. But just like the one in May, the lunar eclipse in November will also presumably be live-streamed by multiple sources, allowing you to catch a glimpse."
        },
        {
            "id": 23,
            "title": "Ather responds to fire incident in Chennai showroom; blames service error ",
            "Image": "https://images.indianexpress.com/2022/05/Ather-Energy-showroom-fire-factory-hosur.jpg",
            "category": "Technology",
            "description": "Indian electric two-wheeler manufacturer Ather Energy has given an official statement about the fire that happened in one of its showrooms in Chennai on May 27. Shortly after the incident was reported, Ather’s official Twitter handle confirmed the fire while saying that no employee was harmed during the incident.According to a statement issued by the company later, the incident happened due to a vehicle that was brought into the showroom for servicing after it had an accident. Since there was a lot of dust and mud on the vehicle, the staff at the service centre reportedly used a high-pressure water wash to clean the vehicle before inspecting it.Ather says that the service team discovered some cracks in the top casing of the battery pack. But by then, water had entered the battery casing due to the high-pressure wash. The company says that letting in water into the battery is an “impossible to solve scenario,” and that the scooter was “moved to a safer area,” as soon as this was observed."
        },
        {
            "id": 24,
            "title": "Russia opens cases against Google, other foreign tech over data storage ",
            "Image": "https://images.indianexpress.com/2022/05/Google-AP.jpg",
            "category": "Technology",
            "description": "Russia’s communications regulator Roskomnadzor said on Friday it had opened administrative cases against Alphabet Inc’s Google and six other foreign technology companies for alleged violations of personal data legislation.Moscow has clashed with Big Tech over content, censorship, data and local representation in a simmering dispute that has erupted into a full-on information battle since Russia sent tens of thousands of troops into Ukraine on Feb. 24.Russia fined Google 3 million roubles ($46,540) last year for not storing the personal data of Russian users in databases on Russian territory, and on Friday said it had opened a new case over what it called Google’s repeated failure to comply with Russian legislation.The regulator also said it had opened cases against six other companies – Airbnb, Pinterest, Likeme, Twitch, Apple and United Parcel Service – for alleged first-time offences carrying a potential fine of 1-6 million roubles."
        },
        {
            "id": 25,
            "title": "Raju Narisetti interview: ‘Wikipedia is building trust with transparency’ ",
            "Image": "https://images.indianexpress.com/2022/05/raju-narisetti.jpg",
            "category": "Technology",
            "description": "Within hours of the shooting in Texas, the Wikipedia page of the Robb Elementary School in Uvalde had seen 765 edits from 154 different contributors and was overseen by 103 page-watchers who ensure only accurate information is published. This ability to offer “reliable information”, especially in critical times, is for Raju Narisetti, a member of the Board of Trustees of the Wikimedia Foundation, the “significant opportunity” for Wikipedia in countries like India."
        },
        {
            "id": 26,
            "title": "5 iPhone deals you can grab right now under Rs 60,000 ",
            "Image": "https://images.indianexpress.com/2022/05/iPhone-12-Express-Photo-1.jpg",
            "category": "Technology",
            "description": "Whether its for the seamless ecosystem or for taking a break from Android, if you’re looking to buy a new iPhone without spending too much, you still have a number of options to consider. From the compact iPhone SE Gen-3 to the iPhone 12, here are five iPhone deals you can grab right now for under Rs 60,000. Note that all the prices mentioned below and without any hidden bank offers, discounts or exchange bonuses. You can, however, use any available offers to further bring down the price of the models listed below.The third-generation iPhone SE 2022 64GB is available on Amazon for Rs 41,900. The new iPhone SE 2022 Gen-3, the latest in the series, comes with the A15 Bionic 5G chip and the rest of the phone is largely the same as the iPhone SE 2020.You get the same old design including the large top and bottom bezels, single rear camera and single front camera with TouchID for security. If you want the A15 Bionic chip without spending much, you can consider the iPhone SE 3. You can also consider the 128GB variant for Rs 46,900."
        },
        {
            "id": 27,
            "title": "Instagram launches exclusive ‘1 minute music’ tracks for Reels ",
            "Image": "https://images.indianexpress.com/2021/12/Instagram-AP-1.jpg",
            "category": "Technology",
            "description": "Instagram has launched a new exclusive ‘1 Minute Music’ track for its Reels, which is a set of music tracks and videos, exclusively available on its platform.The new 1-minute music set includes music from 200 artists across India, including the likes of Dhvani Bhanushali, Neeti Mohan, Shaan, Himanshi Khurana, Anirudh and GV Prakaash Kumar. The Meta-owned platform believes that will make your Instagram content more entertaining, and inspire other artists to release their one-minute music on the platform as well.“Music is a catalyst for trends on Instagram today. In fact, Reels is becoming the platform for people to discover music and artists too. With ‘1 Minute Music’, we’re now giving people access to an exclusive set of tracks they could use to make their reels more entertaining. We’re also hoping this platform serves as a paradigm for established and emerging artists to share their own music, and create their own videos, all on Reels,” said Paras Sharma, Director, Content & Community Partnerships, Facebook India (Meta).The music will be accompanied by music videos, which too will be available exclusively on Instagram.  Music distribution and artist services company, Believe, has worked with Instagram for this association"
        },
        {
            "id": 28,
            "title": "iQOO Z6 Pro review: What’s the X factor here? ",
            "Image": "https://images.indianexpress.com/2022/05/iQOO-Z6-Pro-review-1.jpg",
            "category": "Technology",
            "description": "The iQOO Z6 Pro is yet another performance-oriented phone for the masses. Starting at Rs 23,999, the phone comes with a Snapdragon 778G  processor, 66W fast charging, and other features, which are geared towards gaming. Now I have used a number of phones running this same processor already, and all of them seem to target a particular use case. The Xiaomi 11 Lite NE 5G for instance, is a compact phone, while the Realme 9 5G SE is a gaming phone on a budget.The iQOO Z6 Pro doesn’t seem to hit a particular string, and neither is it the most affordable phone with the chip. So should you care about this phone at all? Let’s find out.iQOO Z6 Pro specs: 6.44-inch AMOLED 90Hz screen | Snapdragon 778G chip | 64MP + 8MP + 2MP camera, 16MP front camera | 4700mAh battery with 66W fast charging One of the first things noticeable about the iQOO Z6 Pro is a unique looking rear-design, complete with two large circles holding in the three camera sensors. The phone has a plastic body but the build quality is really nice and everything feels solid to the touch when using this."
        },
        {
            "id": 29,
            "title": " Google hit with fresh UK investigation over ad tech dominance",
            "Image": "https://images.indianexpress.com/2022/05/Google-reuters-1.jpg",
            "category": "Technology",
            "description": "The UK’s antitrust watchdog started a new investigation of Alphabet Inc.’s Google, over suspicions it may have abused its dominant position across its ad tech that goes to the heart of the tech giant’s business model.The move by the Competition and Markets Authority opens a fresh front in its regulatory tussle with Google. The CMA said it was concerned Google sought to illegally favor its own ad exchange services, while taking steps to exclude the services offered by rivals.“Weakening competition in this area could reduce the ad revenues of publishers, who may be forced to compromise the quality of their content to cut costs or put their content behind pay walls,” said Andrea Coscelli, the CMA’s Chief Executive Officer.Watchdogs around the world have started to home in on the huge power that firms such as Google and Meta’s Facebook wield over ad markets — striking at the heart of the tech giants’ money making machines. Google faces a separate probe by the CMA into possible collusion over the way it operates online display advertising services.The CMA has been examining the way Google buys and sells advertising since at least 2020, saying that its advertising stack is a potential conflict of interest. It’s called for powers that would even allow for a structural changes."
        },
        {
            "id": 30,
            "title": "Realme GT Neo 3 get a special Naruto Edition: All you need to know ",
            "Image": "https://images.indianexpress.com/2022/05/Realme-Naruto-edition-1.jpg",
            "category": "Technology",
            "description": "Realme is no stranger to launching special edition devices targeted at anime fans out there. The brand’s GT Neo 2 smartphone came out with a limited Dragon Ball edition complete with the titular character Goku’s colours and more. Now, the company has revealed yet another anime-edition phone.The Realme GT Neo Naruto Edition phone is based on the Naruto-series. Taking elements from both Naruto and the sequel series Naruto: Shippuden, the phone’s design takes cues from the signature black and orange jacket worn by the show’s lead character Naruto Uzumaki, as well as the silver headband most ninja in the show wear, complete with the Konoha seal.However, that’s just the device. Realme has also thrown in other themed goodies into the package, including a neat-looking Naruto-themed case, a black and orange charging adapter and a black USB type-C to type-C cable to go with it. Additionally, there is also a Naruto-themed SIM-ejector pin and a 10,000mAh power bank.Asides from the aesthetics, the phone itself is a regular Realme GT Neo 3 (the 150W fast charging variant) and includes the same hardware as its standard counterpart. This includes a MediaTek Dimensity 8100 chip. A 6.7-inch AMOLED display with 120Hz HDR10+ and an under-display fingerprint scanner. The single storage variant will also feature 12GB RAM and 256GB UFS 3.1 storage."
        },
        {
            "id": 31,
            "title": "Tips to do a perfect headstand",
            "Image": "https://images.indianexpress.com/2020/04/headstand-1200.jpg",
            "category": "Fitness",
            "description": "Referred to as the ‘king’ of asanas, headstand is an advanced yoga inversion. For beginners, it might seem that a headstand turns the world upside down. However, Anshuka Parwani, the celebrity yoga trainer, shared an Instagram post saying, “It looks intimidating, but once you build up to it, it becomes so easy. If you have never done one before, please make sure you practice with a certified teacher first. The procedure, as laid down by the yoga trainer is as follows Start with Vajrasana (diamond pose) and grab opposite elbows.Interlock your fingers and reduce the space between your elbows.Make sure your shoulders are nice and protracted and raise your knees.Activate your core, walk in and raise one knee to your chest and then the other and hold this position.Stay for a few seconds and build your strength.Extend one leg all the way to the top.When you feel more confident, extend the other leg.”"
        },
        {
            "id": 32,
            "title": "Bhagyashree shares the many benefits of jumping on a trampoline ",
            "Image": "https://images.indianexpress.com/2022/03/bhagyashree-1200-new.jpg",
            "category": "Fitness",
            "description": "There’s no better way to keep yourself fit than to be physically active. From yoga to gym workouts — you can choose from a number of exercises to keep your body strong and agile. But, your workouts don’t always have to be boring and monotonous. A little bit of fun can make them interesting while providing you endless health and fitness benefits at the same time.As such, have you ever thought that jumping on a trampoline could be beneficial for you? Bhagyashree, who regularly shares essential health and fitness tips, recently took to Instagram to talk about her “new toy” — the trampoline.According to Bhagyashree, jumping on a trampoline is also great for pelvic strength. “As one gets older, the pelvic muscles loosen and chances of urinary incontinence increase. Jumping without shock impact on your knees will help in building up your pelvic strength too.uilding up your pelvic strength too.”If you are a beginner, start with jumping for three to four minutes. As you progress, increase by two minutes every week, she suggested"
        },
        {
            "id": 33,
            "title": " Asanas and breathing exercises to enhance mood, boost energy levels",
            "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-breathing-1200.jpg",
            "category": "Fitness",
            "description": "Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.“In yoga, we use movement and breath to release stuck energy along the spine and throughout the body. The mind-body connection created in yoga facilitates change at a cellular level. Our nervous systems can rewire by retraining psychological or emotional triggers that set off our flight-or-fight response,” she explains."
        },
        {
            "id": 34,
            "title": "Watch: Virat Kohli impresses with his powerful ‘cleans day’ workout ",
            "Image": "https://images.indianexpress.com/2022/05/virat-kohli_1200_insta.jpg",
            "category": "Fitness",
            "description": "Consistency, patience, and discipline are extremely essential to reaching one’s fitness goals. If you are willing to take on the challenge, then you might want to learn some power moves from none other than Virat Kohli.The batsman, a fitness buff, often takes to social media to share his impressive workout routines. And recently, he dropped another video showcasing a power-packed workout. He also explained that power clean helps to increase “muscular coordination, leading to better power output, and enhancing overall athletic capacity”. “Such kinds of explosive compound movements yield great results not only in power and force output but also kinesthetic awareness, and neurological adaptations, which is required by athletes to train harder and run faster,” the expert mentioned.It is best to perform the exercise under guidance, especially for beginners. Also, if one has back, shoulders, or lower body joint niggles, avoid doing the power clean. During movement, if there is any pain or discomfort, it is best to discontinue and do basic stretches."
        },
        {
            "id": 35,
            "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
            "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
            "category": "Fitness",
            "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
        },
        {
            "id": 37,
            "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
            "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
            "category": "mix",
            "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
        },
        {
            "id": 36,
            "title": " World Hypertension Day 2022: Five restorative yoga poses for high blood pressure",
            "Image": "https://images.indianexpress.com/2022/05/bloodpressureGetty_1200.jpg",
            "category": "Fitness",
            "description": "An estimated 26 per cent of the world’s population or roughly 972 million people have hypertension; and this number is set to increase to 29 per cent by 2025, according to National Center for Biotechnology Information (NCBI). Hypertension is essentially high blood pressure, and those who suffer from it may not exhibit any symptoms initially as it develops over the course of many years. This lack of symptoms makes it undetectable in time to prevent it or take remedial action, experts say.“Holistic practices like yoga, meditation, and mindfulness, help handle stress in a productive and effective manner. Devote your efforts to a regular practice of yogic techniques like asanas, pranayama, and meditation practice that will guarantee your physical, mental, emotional, and spiritual well-being,” said Grand Master Akshar, a yoga master."
        },
        {
            "id": 37,
            "title": "Celeb fitness: Sooraj Pancholi is ‘back to the game ",
            "Image": "https://images.indianexpress.com/2022/05/sooraj-pancholi_1200_insta.jpg",
            "category": "Fitness",
            "description": "Sooraj Pancholi, who loves to work out, is back to the fitness grind after long. His fitness trainer, Pawan Jatwa, recently shared a video in which the Hero actor could be seen flexing his muscles. According to Bala Krishna Reddy Dabbedi, a fitness expert, and co-founder, director at Fittr, people usually think that they can pick up from where they left and that their original strength will be the same — “but that will not be the case”. “It’s easy to compare yourself to the times when you were training regularly. But, if there has been a gap in your gymming routine, it’s reasonable to see a decline in strength, endurance, and overall muscle,” he expressed.Assess again, test your current strength levels and train accordingly, he suggested. “There is something called muscle memory which helps one get back to their previous strength levels and muscle mass, but this takes times — from a few weeks to even some months. Just be consistent and positive till you get there. On resuming, do not start with an intense program. Keep it minimal, start slow, and you may even experience muscle soreness and pain. Eventually increase the intensity with every passing week,” she said."
        },
        {
            "id": 38,
            "title": "Exercise Reduces Risk of Type 2 Diabetes, Studies Show ",
            "Image": "https://www.verywellfit.com/thmb/3MvvjaqTvCD5A7YBCj51B7KR6ec=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/exerciseCecilie_Arcurs-9b4222509db94b4ba991e86217bdc542.jpg",
            "category": "Fitness",
            "description": "Being physically active can help reduce the risk of developing type 2 diabetes. A recent study in Diabetes Care found that women who get more steps have a lower risk of developing diabetes, compared to women who are more sedentary.1And a study in the journal Metabolites found that men who are more active have a lower risk of developing type 2 diabetes compared to men who are more sedentary.2 It seems that physical activity significantly changes the body’s metabolite profile, and many of these changes are associated with a lower risk of type 2 diabetes, says Maria Lankinen, PhD, research scientist, Institute of Public Health and Clinical Nutrition at the University of Eastern Finland, and one of the researchers on the study published in Metabolites. Increased physical activity also improved insulin secretion.The study published in Diabetes Care focused on 4,838 older women (median age 78.9) without diabetes, who were followed for up to 6.9 years. Their steps were monitored by accelerometers to account for the number of steps and the intensity of steps, which were labeled as light-intensity or moderate- to vigorous-intensity.For diabetes among older adults, our findings indicate that moderate- to vigorous-intensity steps were more strongly associated with a lower risk of diabetes than light-intensity steps, adds John Bellettiere, PhD, an assistant professor of family medicine and public health at UC San Diego, and a co-author on the study."
        },
        {
            "id": 39,
            "title": "Exercise Improves Brain Fitness as You Age ",
            "Image": "https://www.verywellfit.com/thmb/GO6ZNMAt2wgFWBBrMP3sYzN8F3o=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-726775975-e35ebd2a79b34c52891e89151988aa02.jpeg",
            "category": "Fitness",
            "description": "Researchers recruited 105 men and women aged 70 to 77 and split them into three groups. The first performed supervised exercise twice a week with high-intensity interval training (HIIT) at a 90% peak heart rate. The second did moderate-intensity training at 70% peak heart rate. The third, a control group, did at least 30 minutes of daily activity, but at a low intensity and didn't have heart rate measured.There was one major aspect of improvement that wasn't related to heart rate or cortical thickness, Dr. Haberg adds—it was whether the participants felt control over their choices. For example, those who were able to choose their activity, where they exercised, and whether they exercised alone or with a training buddy tended to have more beneficial outcomes.rforming an activity chosen by the individual is key to better brain health, says Haberg. Also, diligently following physical activity guidelines provides a significant cardiorespiratory effect in healthy older adults. That type of control also can be part of maintaining a regular fitness routine, previous research suggests, because it can lead to greater enjoyment with exercise. For example, one study notes that about 50% of participants in exercise programs drop out in the first 6 months, but that those who feel positive emotions tend to have significantly higher levels of program adherence"
        },
        {
            "id": 40,
            "title": "Walking Shoe Types and Buying Tips",
            "Image": "https://www.verywellfit.com/thmb/1LJpQJpL0Ek812XT-GlNOpOjE_4=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-606353299-46be0bd52ffb43558df62348abf5fffb.jpg",
            "category": "Fitness",
            "description": "Walking shoes are your most important item of walking gear. Not only do you want to choose the best pair for your health and performance, but you also want to make sure that you are spending your money wisely.It's helpful to know what to look for in a good fitness walking shoe and how to understand that the pair you pick is the right set of shoes for your walking style.There's no one best shoe for all walkers. The best shoe for you is the one that fits you best. It should give you proper support, flexibility, and cushioning and compensate for any stride problems you may have, such as overpronation. Each person's feet are differentIt can be hard to determine all of that on your own, however. Find a shoe fitting expert to help you discover the best shoe for your walking distance, speed, style, and surface, as well as your weight and stride. The best place to find that person is at the most serious running shoe store in your area.Once you have found a shoe that fits you right, you may become more familiar with shoe lasts and shapes so that you can make your own selections in the future.Shoe manufacturers put the best design and technology into running shoe styles while walking shoe styles are designed primarily for market appeal rather than performance."
        },
        {
            "id": 41,
            "title": "Tandoori chicken",
            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/330px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
            "category": "Food",
            "description": "Tandoori chicken is a South Asian dish of chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven. The dish is now popular world-wide. The modern form of the dish was popularized by the Moti Mahal restaurant in New Delhi in the late 1940s."
        },
        {
            "id": 42,
            "title": "South Indian cuisine",
            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tamil_Nadu_Non-Vegetarian_Meals.png/330px-Tamil_Nadu_Non-Vegetarian_Meals.png",
            "category": "Food",
            "description": "South Indian cuisine includes the cuisines of the five southern states of India—Andhra Pradesh, Karnataka, Kerala, Tamil Nadu and Telangana—and the union territories of Lakshadweep, Pondicherry, and the Andaman and Nicobar Islands.There are typically vegetarian and non-vegetarian dishes for all five states. Additionally, all regions have typical main dishes, snacks, light meals, desserts, and drinks that are well known in their respective region."
        },
        {
            "id": 43,
            "title": "North Indian cuisine",
            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/288px-Vegetarian_Curry.jpeg",
            "category": "Food",
            "description": "North Indian cuisine is collectively the cuisine of Northern India, which includes the cuisines of Jammu and Kashmir, Punjab, Haryana, Himachal Pradesh, Rajasthan, Uttarakhand, Delhi, Uttar Pradesh and adjoining western Bihar."
        },
        {
            "id": 44,
            "title": "Rajasthani cuisine",
            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Royal_Rajasthani_Thali_at_Suvarna_Mahal%2C_Ram_Bagh_Hotel%2C_Jaipur.jpg/330px-Royal_Rajasthani_Thali_at_Suvarna_Mahal%2C_Ram_Bagh_Hotel%2C_Jaipur.jpg",
            "category": "Food",
            "description": "Rajasthani cuisine (Hindi: राजस्थानी व्यञ्जन) is the cuisine of the rugged Rajasthan region in North West India. It was influenced by both the warlike lifestyles of its inhabitants and the availability of ingredients in an arid region.[1] Food that could last for several days and could be eaten without heating was preferred. Scarcity of water and fresh green vegetables have all had their effect on the cooking. It is also known for its snacks like Bikaneri bhujia, Mirchi bada and Pyaaj kachori. Other famous dishes include Dal Baati, malaidar special lassi (lassi) and Lashun ki chutney (hot garlic paste), Mawa lassi from Jodhpur, Alwar ka mawa, Malpauas from Pushkar and rasgulla from Bikaner, paniya and gheriya from Mewar. Originating for the Marwar region of the state is the concept Marwari Bhojnalaya, or vegetarian restaurants, today found in many parts of India, which offer vegetarian food of the Marwari people. The history also has its effect on the diet as the Rajputs preferred majorly a non-vegetarian diet while the Brahmin, Jains, and others preferred a vegetarian diet. So, the state has a myriad of both types of delicacies.According to a 2014 survey released by the registrar general of India, Rajasthan has 74.9% vegetarians, which makes it the most vegetarian state in India."
        },
        {
            "id": 45,
            "title": "Mandi",
            "Image": "http://wirally.com/wp-content/uploads/2019/07/Untitled-design-151.png",
            "category": "Food",
            "description": "Mandi (Arabic: مندي) is a traditional dish that originated from Hadhramaut, Yemen,[2] consisting mainly of meat and rice with a special blend of spices, cooked in a pit underground. It is popular and commonly consumed in most areas of the Arabian Peninsula, and even considered a staple dish in many regions. It is also found in Egypt, India, the Levant and Turkey.Homemade mandi from Yemen In Yemen Mandi is popular among the Hadhrami people.Mandi was usually made from rice, meat(lamb, camel, goat or chicken), and a mixture of spices called hawaij.The main technique that differentiates mandi from other meat dishes is that the meat is cooked in the taboon.[3]"
        },
        {
            "id": 46,
            "title": "Biryani",
            "Image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg",
            "category": "food",
            "description": "Biryani  is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, fish) or in some cases without any meat, and sometimes, in addition, eggs and potatoes.[1]Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. Similar dishes are also prepared in other parts of the world such as in Iraq, Thailand, and Malaysia.[2] Biryani is the single most-ordered dish on Indian online food ordering and delivery services."
        },
        {
            "id": 46,
            "title": "Kebab",
            "Image": "https://static.toiimg.com/thumb/58360750.cms?imgsize=347996&width=800&height=800",
            "category": "Food",
            "description": "Kebab or kabob (North American) is a type of cooked meat dish that originates from cuisines of the Middle East. Many variants of the category are popular around the world, including the skewered shish kebab and the doner kebab with bread.Kebabs consist of cut up or ground meat, sometimes with vegetables and various other accompaniments according to the specific recipe. Although kebabs are typically cooked on a skewer over a fire, some kebab dishes are oven-baked in a pan, or prepared as a stew such as tas kebab.[1][2] The traditional meat for kebabs is most often lamb meat, but regional recipes may include beef, goat, chicken, fish, or even pork (depending on whether or not there are specific religious prohibitions)"
        },
        {
            "id": 47,
            "title": "Naga Cuisine is Just as Rich And Flavourful as its Culture",
            "Image": "https://images.news18.com/ibnlive/uploads/2021/12/nagaland-16386760023x2.jpg?impolicy=website&width=510&height=356",
            "category": "Food",
            "description": "Nagaland is known for its cultural, ethnic and linguistic diversity. The state boasts a rich socio-cultural heritage comprising several local tribes, each having their own distinct ethnic traditions. The northeastern state is also a favourite destination for nature lovers because of its diverse flora and fauna, forests, splendid valleys and waterfalls.Nagaland also has its own unique cuisines which are rich in flavour and represent the food culture of different tribal groups.Naga cuisine is based on the local produce that has been available to tribes. It mostly includes fish, meat, rice, herbs, vegetables and fermented grains. The food is definitely different than what you are used to so you may rethink trying, but there are many dishes which are delicious and worth trying at least once. To understand Naga cuisine and what a common resident consumes, you can visit the Central Market in Kohima. The market will offer you a glimpse into the exotic Naga tribal food items like mefi (wriggling hornet grubs), frogs, silkworms, snails, crabs, dried fish and pork, among others. The market also offers exotic condiments such as dried and fermented bamboo shoots, fiery king chillies and plethora of vegetables as well as a variety of leaves, which are intergral to Naga cuisine.A routine Naga meal will include rice, pork or any other meat, fish, boiled or steamed vegetables and side dishes like a variety of chutney or pickles.Axone, fermented soybean paste, is an important part of Naga cuisine. Axone, also known as Akhuni, is used in a variety of preparations like pickles, chutneys, curries and non-veg dishes"
        },
        {
            "id": 48,
            "title": "Fruits and Vegetables are Losing Their Nutrient Value, Know the Risks",
            "Image": "https://images.news18.com/ibnlive/uploads/2021/12/untitled-3-276-16409377143x2.jpg?impolicy=website&width=510&height=356",
            "category": "Food",
            "description": "Every now and then, we stress upon the fact of eating lots of fruits and vegetables as they are packed with nutrients. They are said to be the best way to provide nutrition to the body and boost immunity. Every season comes with a variety of grains, vegetables, and fruits and we can’t agree more that they are tastier than the stored ones. However, do you know with time the nutrition value of fruits and vegetables are declining? Yes, you read that right. With time, due to various reasons that nutrition in fruits and vegetables have declined tremendously leaving us with various deficiencies. According to a National Geographic report, the experts find the root of the problem in the quality of soil. In the last few decades, the soil quality has been compromised due to various reasons including excessive chemical use, fertilisers, irrigation and so on. The harvesting methods have changed from natural ways to machineries which has also taken a dig at the health of the soil. Apart from it, due to global warming and climate change, the atmospheric temperature is rising and making the soil lose its moisture even more that do not hold the crops well putting them in risk of losing nutrition.The report also states that due to carbon dioxide increase in the air, the nutrient content of the fruits, vegetables and other crops are pulling down.David R. Montgomery, a professor of geomorphology at the University of Washington in Seattle emphasis on one of the major risks of the lower nutrient value, that is making our immunity low. According to him, “Nutrient decline is going to leave our bodies with fewer of the components they need to mount defences against chronic diseases — it’s going to undercut the value of food as preventive medicine,” state National Geographic."
        },
        {
            "id": 49,
            "title": "These Harmless Summer Drinks are Perfect for Diabetic Patients",
            "Image": "https://images.news18.com/ibnlive/uploads/2022/05/summer-drink-16518193713x2.jpg?impolicy=website&width=510&height=356",
            "category": "Food",
            "description": "The summer season is here with soaring temperatures and dehydrating weather. And they call for cold and refreshing drinks. While many of these drinks are healthy and rehydrating, the sugar content in them might not be healthy for diabetic patients. This makes it difficult for people suffering from the chronic disease to stay hydrated and have all essential electrolytes up to their necessary levels. Here are 5 summer coolers that are healthy and contain zero sugar for diabetic patients to enjoy and help stay hydrated. Sattu is a special and popular food in Bihar. One of oldest drinks in India, Sattu cooler is the perfect way to stay hydrated for diabetic patients. It has no carbohydrates and can be enjoyed just by adding sattu powder to cold water along with some black salt and squeezing a few drops of lemon to give it a tangy touch. Spinach, beetroot, fruit juice of choice and some coconut water blended together can be a very beneficial smoothie for you even if you’re non-diabetic. Make sure that the fruit you choose is a low sugar content one and reap the benefits of this wonderful nutritious smoothie.Take 2 cups of chilled curd, a glass of water, some ice cubes and a teaspoon of cumin powder. Blend it all and you have this tasty sugarless drink ready. Salted lassi is a summer cooler that diabetic patients can enjoy without the worry of their disease aggravating.Bel or wood apple is a great source of natural fibre, iron, antioxidants and folates. Along with this it cools your stomach. If you suffer from diabetes, bel sherbet can prove to be very beneficial for you during the scorching summers."
        },
        {
            "id": 58,
            "title": "These Harmless Summer Drinks are Perfect for Diabetic Patients",
            "Image": "https://images.news18.com/ibnlive/uploads/2022/05/summer-drink-16518193713x2.jpg?impolicy=website&width=510&height=356",
            "category": "mix",
            "description": "The summer season is here with soaring temperatures and dehydrating weather. And they call for cold and refreshing drinks. While many of these drinks are healthy and rehydrating, the sugar content in them might not be healthy for diabetic patients. This makes it difficult for people suffering from the chronic disease to stay hydrated and have all essential electrolytes up to their necessary levels. Here are 5 summer coolers that are healthy and contain zero sugar for diabetic patients to enjoy and help stay hydrated. Sattu is a special and popular food in Bihar. One of oldest drinks in India, Sattu cooler is the perfect way to stay hydrated for diabetic patients. It has no carbohydrates and can be enjoyed just by adding sattu powder to cold water along with some black salt and squeezing a few drops of lemon to give it a tangy touch. Spinach, beetroot, fruit juice of choice and some coconut water blended together can be a very beneficial smoothie for you even if you’re non-diabetic. Make sure that the fruit you choose is a low sugar content one and reap the benefits of this wonderful nutritious smoothie.Take 2 cups of chilled curd, a glass of water, some ice cubes and a teaspoon of cumin powder. Blend it all and you have this tasty sugarless drink ready. Salted lassi is a summer cooler that diabetic patients can enjoy without the worry of their disease aggravating.Bel or wood apple is a great source of natural fibre, iron, antioxidants and folates. Along with this it cools your stomach. If you suffer from diabetes, bel sherbet can prove to be very beneficial for you during the scorching summers."
        },
        {
            "id": 50,
            "title": "Unable to Find Tofu at Local Store? Here’s an Easy Recipe to Make it at Home",
            "Image": "https://images.news18.com/ibnlive/uploads/2022/04/tofu-16510624083x2.jpg?impolicy=website&width=510&height=356",
            "category": "Food",
            "description": "If you are a fitness enthusiast and a vegan, you might be one of the people who have tofu in their meals instead of paneer. While many people find it easily in the supermarket, others may find it difficult to spot tofu at their local stores. If you are one of those people, don’t worry as this simple method can help you make protein-rich tofu at home with just two ingredients – chickpeas and water.Once the tofu is set, you can use it as and when required. It is as tasty as the tofu bought from a store and tofu is as versatile as cottage cheese. It can be used in dry and wet recipes depending on your mood and diet requirements. Chickpea is rich in protein and hence the tofu is a great source of protein to help you complete the daily protein requirement.Soak the chickpeas overnight after thoroughly washing with the help of a strainer under running water.Drain all the water and wash the chickpeas the next day. Add chickpeas with two cups of water in a blender and blend in batches until you have a smooth mixture.Strain the blended chickpeas through a muslin cloth into a bowl. Make a squeezable bag out of the muslin cloth with the mixture in it. Squeeze the blend well to strain it nicely. As the water drains slowly from the mixture, it takes some time to strain the blend.Take the strained blend and put it in a pot. Keep the pot on full flame and let the mixture boil. Once you see bubbles, lower the flame and cook the blend for another half n hour. The mixture will thicken with time. When it is thick enough, put off the flame and let the blend cool down for a while. Leave the mixture in a container for more than 2 hours idle. This will ensure that the mixture sits and the tofu sets properly"
        },

    ]);
    return (
        <div>
            <store.Provider value={[details, setDetails]}>

                {props.children}


            </store.Provider>
        </div>
    )
}

export default Details;