console.log('i am linked');

let objectArray = [
    {
        id: '1',
        game: 'Secrets Can Kill',
        photo: './img/sck.jpg',
        info: 'Nancy Drew takes a semester off of school to visit her Aunt Eloise in Florida. A student named Jake Rogers is murdered at the local high school, where Eloise works as a librarian. Eloise asks Nancy to investigate, so Nancy goes undercover as a new student and attempts to solve the mystery.',
        year: '1998',
        scareFactor: '1'
    },
    {
        id: '2',
        game: 'Stay Tuned for Danger',
        photo: './img/stfd.jpg',
        info: 'Nancy Drew is invited to New York City to stay with Mattie Jensen, a popular soap opera star. Mattie wants Nancy to investigate the death threats that her co-star, Rick Arlen, has been receiving.',
        year: '1999',
        scareFactor: '2'
    },
    {
        id: '3',
        game: 'Message in a Haunted Mansion',
        photo: './img/mhm.jpg',
        info: 'Nancy Drew is helping Rose Green, a friend of Nancys housekeeper Hannah Gruen, with some renovation work in an old Victorian mansion in San Francisco that she is converting into a bed and breakfast. But, there are other uninvited guests, visitors from the past—spirits who want the place all to themselves. Strange accidents are slowing down the renovation, and Nancy is trying to figure out who, or what, is trying to scare everyone away. Nancy suspects that there is another force at work: greed.',
        year: '2000',
        scareFactor: '5'
    },
    {
        id: '4',
        game: 'Treasure in the Royal Tower',
        photo: './img/trt.jpg',
        info: 'Nancy Drew is snowed-in at the Wickford Castle Ski Resort in Wisconsin. Not long after she arrived, the castles historic library was vandalized, and one of the guests was shouting that her room had been robbed. The castle was originally owned by a millionaire who had Marie Antoinette’s tower from the Château Rochemont in France taken apart and rebuilt into Wickford Castle, but the entrance is hidden and sealed off. Nancy needs to explore the castle for clues and find her way into the Queens tower.',
        year: '2001',
        scareFactor: '1'
    },
    {
        id: '5',
        game: 'The Final Scene',
        photo: './img/fin.jpeg',
        info: 'Nancy Drew and her friend Maya Nguyen are at the Royal Palladium theater in St. Louis for the premiere of a new movie Vanishing Destiny. Maya is set to interview the star of the film, Brady Armstrong, for her schools newspaper, but as Maya goes into his dressing room, she is kidnapped. Nancy has to race against time to find Maya and the kidnapper before the theater is demolished in three days.',
        year: '2001',
        scareFactor: '4'
    },
    {
        id: '6',
        game: 'Secret of the Scarlet Hand',
        photo: './img/ssh.png',
        info: 'Nancy Drew lands an internship at the Beech Hill Museum in Washington D.C., which is devoted to Mayan culture and will soon be exhibiting a newly discovered monolith to the public. However, shortly before the exhibition opens, one of the museums most treasured pieces is stolen from the museum, and the thief leaves behind a mysterious red hand print. Nancy must find the stolen jade carving of Pacal and save Beech Hill from financial ruin.',
        year: '2002',
        scareFactor: '1'
    },
    {
        id: '7',
        game: 'Ghost Dogs of Moon Lake',
        photo: './img/dog.jpeg',
        info: 'Sally McDonald, a friend of Nancy Drews father, recently purchased a house on Moon Lake in Pennsylvania. The house is the former residence of a Prohibition-era gangster named Mickey Malone. Sally fled from the house in terror on the very night Nancy arrived for a visit. According to Sally, every night a pack of ghost dogs with glowing eyes and mournful howls attack her house. The dogs are believed to be the ghosts of Malones four loyal Rottweilers. They allegedly vanished into the woods on the day of Malones arrest and were never seen alive again. Nancy seeks out the truth of Mickey Malones colorful history amid rumors of buried gold.',
        year: '2002',
        scareFactor: '5'
    },
    {
        id: '8',
        game: 'The Haunted Carousel',
        photo: './img/car.png',
        info: 'Paula Santos, the owner of Captains Cove Amusement Park in New Jersey, has asked Nancy for help because there have been mysterious things happening at the park. First, the lead horse disappeared off the carousel. After that the carousel began mysteriously starting up in the middle of the night. Then the roller coaster suddenly lost power, resulting in a serious accident. The park is shut down until the city knows what caused it. There is a rumor going around that the park is cursed. Drew must determine whether the painted ponies are searching for their missing lead horse, or whether there is another explanation for the "midnight rides."[',
        year: '2003',
        scareFactor: '4'
    },
    {
        id: '9',
        game: 'Danger on Deception Island',
        photo: './img/ddi.jpeg',
        info: 'When Katie Firestone, a friend of George Fayne, invites Nancy Drew to Deception Island in Washington state for a whale-watching excursion, the sleuth arrives to find Katies tour boat heavily vandalized. A threatening note that was left behind warns Katie to "stop meddling". Apparently, the residents of the harbor are divided over what to do with an orphaned female Orca whale that recently appeared in the channel, and Katie has ruffled a lot of feathers in the debate. Nancy must hunt down the vandal while unraveling some of Deception Islands hidden secrets.',
        year: '2003',
        scareFactor: '1'
    },
    {
        id: '10',
        game: 'The Secret of Shadow Ranch',
        photo: './img/sha.jpeg',
        info: 'Nancy Drew is invited to Shadow Ranch in Arizona for a vacation. On the first day there, Nancy discovers that the owners of the ranch, Ed and Bet Rawley, are gone. The previous evening, a glowing horse came galloping up to the ranch, causing a huge commotion, and shortly after, Mr. Rawley was bitten by a venomous snake and rushed to the hospital. Dirk Valentine, an outlaw from the 1880s, was romantically involved with the sheriffs daughter, Frances Humber, who lived at Shadow Ranch. Dirk was arrested and eventually hanged, but local legend says that Dirks horse has come back to avenge its master and that misfortune will befall whoever sets eyes on it.',
        year: '2004',
        scareFactor: '3'
    },
    {
        id: '11',
        game: 'Curse of Blackmoor Manor',
        photo: './img/cur.jpg',
        info: 'Nancy Drew travels to England to visit Linda Penvellyn, her neighbors daughter and newlywed wife of a British diplomat. Linda is currently living in Blackmoor Manor, a 14th-century mansion haunted by a tragic past. A mysterious malady keeps Linda hidden behind thick bed curtains. Is she hiding from something or someone, or is a more menacing threat stalking her? Nancy is tasked with solving this mystery by learning more about the familys history, exploring the mansion, and discovering the secrets of the family that have been hidden away for generations.',
        year: '2004',
        scareFactor: '5'
    },
    {
        id: '12',
        game: 'Secret of the Old Clock',
        photo: './img/clk.png',
        info: 'The game is set in 1930, at the beginning of the Great Depression in the small fictional town of Titusville, Illinois. Nancy Drew has been asked to come to the Lilac Inn to see Emily Crandall, whom Nancy knows only through a mutual friend. Emilys mother died a month ago, leaving her to run the inn with the help of her guardian, Jane Willoughby. Emily and her mother had been counting on the generosity of their kindly but strange neighbor, Josiah Crowley, to leave them part of his estate to support the inn they own. But in his will, everything was left to Richard Topham, his ESP teacher. When Nancy arrives at the inn, she encounters a mystery involving stolen jewels, a missing will, car chases, and plenty of adventure.',
        year: '2005',
        scareFactor: '1'
    },
    {
        id: '13',
        game: 'Last Train to Blue Moon Canyon',
        photo: './img/trn.png',
        info: 'The Hardy Boys have invited Nancy Drew to join them on a train trip hosted by Lori Girard, a wealthy, young socialite. Lori has gathered the best detectives, researchers, and investigators in the country to help her solve the mystery of what happened to Jake Hurley, the man who originally owned the train. One day in 1903, the train was found in Blue Moon Canyon, Nevada with only the dead engineer on board. Jake Hurley was never seen again. As soon as the train takes off, Lori Girard mysteriously vanishes from the train. Nancy needs to find Lori and solve the mystery of Jake Hurleys disappearance.',
        year: '2005',
        scareFactor: '1'
    },
    {
        id: '14',
        game: 'Danger by Design',
        photo: './img/dan.jpg',
        info: 'Nancy Drew travels to Paris to work undercover as an assistant to Minette, an up-and-coming couture fashion designer. Minette hasnt quite been herself lately. She is never seen without wearing a mask, and she often throws temper tantrums and irrationally fires her employees. She is running dangerously behind schedule and her financial backers are concerned about her ability to complete her work. Has the stress of fame forced her behind that mask, or is there something sinister lurking in the shadows of her studio?',
        year: '2006',
        scareFactor: '1'
    },
    {
        id: '15',
        game: 'The Creature of Kapu Cave',
        photo: './img/cre.jpeg',
        info: 'Nancy Drew goes to Hawaii to serve as a research assistant to Dr. Quigley Kim, an entomologist. A devastating scourge is destroying the local pineapple crop. Residents are whispering that a secretive research compound has awoken the legendary Kāne Ōkala, a man who was killed in a volcano centuries ago and now prowls the Big Island wreaking havoc. Upon arriving, Nancy discovers Dr. Kims camp has been ravaged, and Dr. Kim is missing. Coincidentally, the Hardy Boys are also on the island to complete a top-secret mission, so the three amateur detectives must team up to solve the mystery.',
        year: '2006',
        scareFactor: '1'
    },
    {
        id: '16',
        game: 'The White Wolf of Icicle Creek',
        photo: './img/ice.jpeg',
        info: 'Nancy Drew travels to Alberta, Canada to stay at the Icicle Creek Lodge. Chantal, the owner of the lodge, has asked her to investigate a recent string of suspicious accidents that have happened at the lodge. A white wolf appears at the scene of each accident, and mysteriously disappears when the police arrive. As Nancy makes her way to the lodge, an explosion destroys the bunkhouse and a wolf howls ominously in the distance. Nancy has barely set foot on the premises and already trouble is afoot! Its up to Nancy to solve this mystery before all the guests leave and Chantal is left out in the cold.',
        year: '2001',
        scareFactor: '1'
    },
    {
        id: '17',
        game: 'Legend of the Crystal Skull',
        photo: './img/cry.jpeg',
        info: 'Nancy Drew goes on vacation to New Orleans with her best friend, Bess Marvin. As a favor, she stops to check in on Ned Nickersons friend, Henry Bolet. Henrys last living family member, his Great Uncle Bruno, recently died and left him responsible for settling the estate. As soon as Nancy arrives, she is knocked out by someone wearing a skeleton costume, and she soon discovers that Bruno was the proud owner of the "Whisperer", a crystal skull rumored to protect its holder from almost any cause of death except murder. When Bruno died, it was not found among the clutter of the Bolet manor. Nancy teams up with Bess to find the mystical artifact before it falls into the wrong hands.',
        year: '2007',
        scareFactor: '3'
    },
    {
        id: '18',
        game: 'The Phantom of Venice',
        photo: './img/ven.png',
        info: 'The Italian secret police have called Nancy Drew in to investigate a series of art thefts happening in Venice. The thief has been dressing up in a mask and cape, and the news media have begun to call him "The Phantom" not only because of the way he dresses, but because he leaves behind so few clues. A crime syndicate is actually responsible for the thefts, using commedia dell arte characters as code names. Nancy is sent to spy on the ring and discover the ringleader of the crimes.',
        year: '2008',
        scareFactor: '2'
    },
    {
        id: '19',
        game: 'The Haunting of Castle Malloy',
        photo: './img/hau.jpg',
        info: 'Nancy Drew travels to Castle Malloy in Ireland to be the maid of honor in her friend Kyler Mallorys wedding. As Nancy drives towards the castle, a ghostly figure darts out in front of her car. The car crashes into a ditch, and Nancy is stuck at the site of a new mystery. Kylers wedding was supposed to be the biggest event in Bailor since half the castle blew up sixty years ago, but now the groom is missing. Was he snatched by the banshee rumored to haunt the castle, or is this a case of cold feet? Its up to Nancy to find the groom and save this wedding.',
        year: '2008',
        scareFactor: '2'
    },
    {
        id: '20',
        game: 'Ransom of the Seven Ships',
        photo: './img/ran.jpeg',
        info: 'Bess Marvin wins a five-day vacation in the Bahamas and has invited Nancy Drew and George Fayne to go with her. Before Nancy arrives at the resort, Bess is kidnapped, and the only way to save her is to solve a 300-year-old Bahamian mystery. Dangerous waters keep treasure hunters from exploring the reefs around Dread Isle, but this remote island might hide the riches of El Toros lost fleet of seven ships. Can Nancy track down the treasure before time runs out?',
        year: '2008',
        scareFactor: '1'
    },
    {
        id: '21',
        game: 'Warnings at Waverly Academy',
        photo: './img/wac.jpg',
        info: 'Nancy Drew goes undercover as a transfer student named "Becca Sawyer" at the Waverly Academy for Girls, an exclusive boarding school in upstate New York. The valedictorian candidates have been receiving threatening notes signed by someone called the "Black Cat". As soon as a girl receives two threats, something bad happens to her. One girl had a severe allergic reaction and had to be rushed to the hospital. Another was locked inside a pitch-black closet all night. The parents of the victims are threatening to sue the school if the perpetrator isnt identified quickly. Is there a secret someone wants to protect or are the girls playing games to scare away the competition - permanently? The headmistress is counting on Nancy to solve the mystery before the threats turn deadly.',
        year: '2009',
        scareFactor: '2'
    },
    {
        id: '22',
        game: 'Trail of the Twister',
        photo: './img/tot.jpg',
        info: 'A series of equipment meltdowns have been plaguing a prominent Oklahoma storm research team. They are in the running to win a $100 million grant in the upcoming Green Skies storm competition, when disaster strikes and an intern becomes stranded directly in the path of a storm, leaving him with a broken leg. P.G. Krolmeister, the funder of the team, sends amateur detective Nancy Drew to join the team undercover as an intern to find out who has been sabotaging them. She had better keep her wits about her, as she not only has to uncover a saboteur, but battle some of the deadliest twisters in Oklahoma!',
        year: '2010',
        scareFactor: '1'
    },
    {
        id: '23',
        game: 'Shadow at the Waters Edge',
        photo: './img/saw.jpg',
        info: 'Nancy Drew travels as an English teacher to Kyoto, Japan with friends Bess Marvin and George Fayne as a reward for solving the preceding mystery in the game series (Nancy Drew: Trail of the Twister). Once she arrives at her Ryokan, however, she discovers that not all is as it seems. Strange events, supposedly caused by a woman who died there mysteriously, are scaring away guests. One by one, the guests leave the Ryokan Hiei, until Nancy is left only with the secretive family that own the inn. Unable to resist a mystery, Nancy works to discover who, or what, is haunting the inn.',
        year: '2010',
        scareFactor: '5'
    },
    {
        id: '24',
        game: 'The Captive Curse',
        photo: './img/cap.jpeg',
        info: 'For centuries, a legendary monster has terrorized residents of a Bavarian castle, called Castle Finster, in Germany. According to the legend, the monster will vanish for years at a time until, without warning, it reappears to claim its next victim. So far every victim it has claimed has been a young woman, reputed to be wearing a peculiar jeweled necklace at the time of her disappearance. In the present day, young American detective Nancy Drew has been called in by the castles owner to discover the truth behind recent monster sightings, before the monster can strike again. As Nancy delves deeper into the case, she begins to fear that someone in the castle plans for her to be the monsters next victim.',
        year: '2011',
        scareFactor: '3'
    },
    {
        id: '25',
        game: 'Alibi in Ashes',
        photo: './img/ash.jpeg',
        info: 'Nancy Drew returns to her hometown of River Heights to compete in the towns annual Clues Challenge along with her boyfriend Ned and her friends Bess and George. However, when River Heights old town hall burns to the ground, Nancy finds herself in jail as the prime suspect in the arson case. Nancy must work with her friends to clear her name and catch the culprit.',
        year: '2011',
        scareFactor: '1'
    },
    {
        id: '26',
        game: 'Tomb of the Lost Queen',
        photo: './img/tmb.jpg',
        info: '60 years ago, a violent sandstorm uncovered an ancient tomb in the desert outside Cairo. A British expedition set off in hope of finally finding Egypts legendary Lost Queen. The expedition never returned. The explorers were lost and presumed dead. In the present day, Nancy Drew joins leading archaeologists as they unearth what they presume to be the tomb where the British explorers were lost. The site is rumored to be cursed, due to an increase in suspicious accidents. The sites lead archaeologist, Professor Jon Boyle, was attacked during a fierce sandstorm and sent to the hospital to recover. As an amateur detective, Nancy attempts to discover who attacked Professor Boyle as well as what happened to the previous expedition.',
        year: '2012',
        scareFactor: '1'
    },
    {
        id: '27',
        game: 'The Deadly Device',
        photo: './img/ded.png',
        info: 'Theoretical physicist Niko Jovic is found fatally electrocuted in a remote Colorado laboratory, Technology of Tomorrow Today, under suspicious circumstances. Relating to wireless transmission of electricity, Niko Jovics work could sell for millions on the market. With the case stuck at a dead end, the lab owner has asked Nancy Drew to go undercover to investigate this murder. Tensions rise as attempts on Nancys life start, Nancy must get to the bottom of this case before the murderer catches up with her.',
        year: '2012',
        scareFactor: '2'
    },
    {
        id: '28',
        game: 'Ghost of Thornton Hall',
        photo: './img/gth.jpg',
        info: 'Jessalyn Thornton and her best friend, Addison Hammond, visited the uninhabited Thornton Hall on an island off the coast of Georgia for a pre-wedding celebration and sleepover, but the fun ended when Jessalyn disappeared. Now Jessalyns friends, family, and coworkers search the undergrowth and abandoned spaces throughout Blackrock Island, seeking any evidence that might lead to her whereabouts. Thats why paranormal expert Savannah Woodham called in Nancy Drew to investigate potential leads. This case requires a skeptic, someone who isnt afraid of a place where stories of the supernatural hang as thick as Spanish moss from cypress trees. Did the heiress to the Thornton business empire vanish among the monuments, or is someone holding something besides family secrets?',
        year: '2013',
        scareFactor: '5'
    },
    {
        id: '29',
        game: 'The Silent Spy',
        photo: './img/spy.jpg',
        info: 'Nearly a decade ago Agent Kate Drew left home to neutralize a biochemical weapon in Scotland. While her assignment was a success, Kate died in a car accident. Or so we were told. Now the echoes of a similar plot reverberate and its up to you, as detective Nancy Drew, to thwart the sleeper cell and expose the truth about your mothers tragic demise.',
        year: '2013',
        scareFactor: '1'
    },
    {
        id: '30',
        game: 'The Shattered Medallion',
        photo: './img/med.jpg',
        info: 'Nancy Drew and her friend George Fayne end up winning a spot on a reality television show in New Zealand called Pacific Run, in which the contestants complete physical challenges to get five pieces of a medallion. The eccentric Sonny Joon has hijacked production of the show, which is spiraling out of control as certain contestants are being favored and dangerous missions are being assigned. While competing in a challenge, George is seriously injured and Nancys other friend Bess Marvin must step in to take her place. Nancy, George, and Bess must investigate the incident that caused Georges injury as well as why Sonny took charge of the show and what he really plans to do with it.',
        year: '2014',
        scareFactor: '1'
    },
    {
        id: '32',
        game: 'Labyrinth of Lies',
        photo: './img/lie.jpg',
        info: 'Melina Rosi, the curator of the Phidias Cultural Center in Greece, hires Nancy Drew to assist with the museums most anticipated event of the year. Persephone in Winter, a play about the myth of Persephone, is being performed in the amphitheater to drum up publicity for the new Life in Ancient Greece exhibit. However, artifacts from the exhibit are mysteriously disappearing. Are these mishaps connected to the amphitheaters upcoming performance, or is an unseen villain pulling strings behind the scenes?',
        year: '2014',
        scareFactor: '1'
    },
    {
        id: '32',
        game: 'Sea of Darkness',
        photo: './img/sea.jpg',
        info: 'The celebrated ship Heerlijkheid is usually the centerpiece of Skipbrot, Icelands local festival. Now that its captain has disappeared, the renovated vessel has become an eerie distraction. Did Captain Magnus sail away with a legendary treasure, or was he carried off into the night? Take the helm as detective Nancy Drew and set a course for the Sea of Darkness! ',
        year: '2015',
        scareFactor: '2'
    },
];


function objectArrayCards(){
    
    let i = 0;
    for(i = 0; i < objectArray.length; i++){
            $('#cardContent').append(
            `
            <div class="card" style="width: 18rem;">
            <img src="${objectArray[i].photo}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${objectArray[i].game}</h5>
            <p class="card-text">${objectArray[i].year}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
        );

    };
};

objectArrayCards();

function filterScare(event){
    event.preventDefault();
    $('#cardContent').empty();

    let selectedScare = [];
    console.log(selectedScare);
    $('input[name="scareFactor"]:checked').each( function(){
        selectedScare.push(this.value);
    });
    console.log(selectedScare);

    let i = 0;
    for(i = 0; i < selectedScare.length; i++){
        console.log(selectedScare[i])
        if(selectedScare[i] === '1'){
            console.log('is equal to one');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].scareFactor==='1'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                        <img src="${objectArray[i].photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${objectArray[i].game}</h5>
                        <p class="card-text">${objectArray[i].year}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        `
                    )
                }
            }
        }



        if(selectedScare[i] === '2'){
            console.log('is equal to two');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].scareFactor==='2'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                        <img src="${objectArray[i].photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${objectArray[i].game}</h5>
                        <p class="card-text">${objectArray[i].year}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        `
                    )
                }
            }
        }



        if(selectedScare[i] === '3'){
            console.log('is equal to three');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].scareFactor==='3'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                        <img src="${objectArray[i].photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${objectArray[i].game}</h5>
                        <p class="card-text">${objectArray[i].year}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        `
                    )
                }
            }
        }


        if(selectedScare[i] === '4'){
            console.log('is equal to four');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].scareFactor==='4'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                        <img src="${objectArray[i].photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${objectArray[i].game}</h5>
                        <p class="card-text">${objectArray[i].year}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        `
                    )
                }
            }
        }


        if(selectedScare[i] === '5'){
            console.log('is equal to five');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].scareFactor==='5'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                        <img src="${objectArray[i].photo}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${objectArray[i].game}</h5>
                        <p class="card-text">${objectArray[i].year}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        `
                    )
                }
            }
        }
    }
};
clickFilter.addEventListener('click', filterScare);