Portal = ['JourNey','Artery','BigMo'];
PortalColor = ['#00ffff','#ff8f8f','#b3ffb3',"#FFF"];
Gandalf = [
	[
		"#Temporary .Void",
		"Select a dimension"
	],
	[
		".BreathinFragment",
		[
		    "*Laughes*",
            "Why you keep poking me?",
            "I'm NOT clickable",
            "You ever wanted to fly?",
            "I'm just here to breath",
            "Don't mind me friend",
            "I'm just a fragment",
            "Who's your god? mine's Infa"
        ]
	],
	[
		".Portal.JourNey, .Portal.Artery, .Portal.BigMo",
		["Launch engaged!","Launch disengaged!"]
	],
	[
		"#Reach",
		["Forward launch initiated...","Select a dimension to fly","Soon!","Cancelling launch..."]
	],
    [
        "#Ditch",
        ["Reverse launch initiated...","Can't go back","Soon!","Cancelling launch..."]
    ],
    // SpaceCyclone
    [
        ".Storm .Tripwire",
        ["Entering..."]
    ],
    [
        ".Storm .Definer",
        ["Departing..."]
    ],
    // Skillometer
    [
        "#Skillometer .Core .Strikes",
        ["Mounting the core...","Replacing the core..."]
    ],
    [
        "#Skillometer .Glued",
        "Select a core to power up"
    ],
    [
        "#Skillometer .CoreSlot",
        "Unmounting the core..."
    ],
	// AntiToxins
    [
        ".ArtStar, .DevStar",
        "Select a project"
    ],
    [
        ".ArtParticle, .DevParticle",
        ["Opening...", "Cancelling..."]
    ],
    [
        "#AntiToxins .SingleParticle .PrevProject, #AntiToxins .SingleParticle .NextProject",
        "Switching..."
    ],
	// Analyzer
	[
		"#Analyzer .Crystal, .LeftWing, .RightWing",
		"Select a stone to analyze"
	],
	[
		"#PrevFace, #NextFace",
		"No stone selected"
	],
    // DeckCloud
    [
        "#DeckCloud .Sign",
        "Select a card to reveal"
    ],
    [
        "#DeckCloud .Card:not(:last-child)",
        ["Card revealed","Deck stacked!"]
    ]
];
Peek = [
	[
		".BreathinFragment",
		"The Breathing Fragment"
	],
	[
		".Portal.JourNey",
		"Sail with me on a journey"
	],
	[
		".Portal.Artery",
		"Get to know the human version"
	],
	[
		".Portal.BigMo",
		"Get to know the workaholic version"
	],
	[
		".QuickAccess .Cells",
		"Spaceship's panel"
	],
	[
		".Ped.Handle",
		"Thrust Pedal"
	],
	[
		".Rev.Handle",
		"Reverse Gear"
	],
	[
		".PathFinder",
		"Pathfinder"
	],
	[
		"#Reach",
		"Next division"
	],
	[
		"#Ditch",
		"Previous division"
	],
	// SpaceCyclone
	[
		".Download.Storm .Tripwire",
		"Downloadables"
	],
	[
		".Request.Storm .Tripwire",
		"Submit a project request"
	],
	[
		".Connect.Storm .Tripwire",
		"Contact details"
	],
	[
		".Storm .Definer .Asset",
		"Exit this cyclone"
	],
	// Skillometer
	[
		"#Skillometer > .Core .Strikes",
		"Load skill Core"
	],
	[
		"#Skillometer > .Device .Glued, #Skillometer > .Device .CoreKeepa",
		"Graphite cover"
	],
	[
		"#Skillometer > .InfoPanel .Danger",
		"Fatal degree indicator"
	],
	[
		"#Skillometer > .InfoPanel .Power",
		"Skill energy value"
	],
	[
		"#Skillometer > .InfoPanel .Measure",
		"Skill's energy unit"
	],
	[
		"#Skillometer > .InfoPanel .RawPanel",
		"Skill information panel"
	],
	[
		"#Skillometer > .InfoPanel .Laser",
		"Core's energy beam"
	],
	[
		"#Skillometer > .Device .CoreSlot",
		"Deactivate core"
	],
	[
		"#Skillometer > .Core .Waya",
		"Connector cord"
	],
	// AntiToxins
	[
		".ArtParticle, .DevParticle",
		"Open project"
	],
	[
		".DevStar .TheStar",
		"Developer star"
	],
	[
		".ArtStar .TheStar",
		"Artist star"
	],
	[
		".ArtSign, .DevSign",
		"Star's sign"
	],
	[
		".ArtSignBeam, .DevSignBeam",
		"Sign's beam"
	],
	[
		".SingleParticle .Clone",
		"Close project"
	],
	[
		"#ParticleAura",
		"Close project"
	],
	// Analyzer
/*	[
		".CrystalCover",
		"Emotion analyzer",
		"Unload emotion"
	],*/
	[
		".Crystal",
		["Emotion analyzer", "Unload emotion"]
	],
	[
		"#PrevFace",
		"Previous emotion"
	],
	[
		"#NextFace",
		"Next emotion"
	],
	[
		".LeftWing, .RightWing",
		"Thought storm"
	],
	[
		"#Analyzer .Particles .hover",
		"Glowing emotion stone"
	],
	// DeckCloud
	[
		".Work.Deck > .Sign",
		"Work deck sign"
	],
	[
		".Life.Deck > .Sign",
		"Life deck sign"
	],
	[
		".Deck .Fire",
		"Artificial fire (not real)"
	],
	[
		".Deck .Pillow",
		"Gold coated silk pillow"
	],
	[
		".Deck .Cards > .Card",
		["Select card","First card","Deselect and peek","Deselect card"]
	]
];
Projects = [
	{
		id: "DevParticle C",
		title: "FOLD (FRONT-END)",
		pages: [
			{
				title: "about",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/HajNabi/About.jpg",
				active: false
			},
			{
				title: "products",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/HajNabi/Products.jpg",
				active: true
			},
			{
				title: "receipt",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/HajNabi/Receipt.jpg",
				active: false
			}
		],
		detail: "Smooth and strong just like HajNabi's oil products, with unique motions ensuring an interactive experience along with powerful slideshows implementing both style and content within the website's core, which itself simplifies access to complex modules.<br>Superior desktop version while thoroughly Mobile-friendly and maximizing responsive design with pixel-based restructuring features.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"semantic"
		],
		state: "completed"
	},
	{
		id: "DevParticle D",
		title: "LIOLT (FRONT-END)",
		pages: [
			{
				title: "interns",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Vestaak/Interns.jpg",
				active: false
			},
			{
				title: "index",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Vestaak/HomePage.jpg",
				active: true
			},
			{
				title: "team",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Vestaak/Team.jpg",
				active: false
			}
		],
		detail: "From designing web pages, apps and automated robots to consultant and training, Vestaak does it all even more efficiently now with a landing page promoting their work; introducing a unique structure while delivering interactive animations and slideshows along with responsive design which supports the ajax implemented pages to execute the project flawlessly in one load.",
		tools: [
            "html",
            "css",
            "js",
            "jq",
            "semantic",
		],
		state: "completed",
		website: "#"
	},
	{
		id: "DevParticle F",
		title: "TIDE (FRONT-END)",
		pages: [
			{
				title: "about",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Hamyaad/About.jpg",
				active: false
			},
			{
				title: "single course",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Hamyaad/SingleCourse.jpg",
				active: true
			},
			{
				title: "buy course",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Hamyaad/BuyCourse.jpg",
				active: false
			}
		],
		detail: "Illuminate the future with Hamyaad's education system, interactive motion graphic implemented in every necessary asset to amplify user's focus on current actions while maintaining structures as uncomplicated as possible in responsive design; all to ensure access to multi-core actions within a few clicks.",
		tools: [
            "html",
            "css",
            "js",
            "jq",
            "semantic"
		],
		state: "completed"
	},

	{
		id: "ArtParticle B",
		title: "FOLD (UI/UX)",
		pages: [
			{
				title: "about",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/HajNabi/About.jpg",
				active: false
			},
			{
				title: "products",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/HajNabi/Products.jpg",
				active: true
			},
			{
				title: "receipt",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/HajNabi/Receipt.jpg",
				active: false
			}
		],
		detail: "Fold puts the dark theme to support it's golden products and feel like reading a magazine so many assets and elements implement this with their graphic-focused structures.<br> It includes a lot of organizers, filters and slideshows for the convenience of user in exploring through the products while keeping it as minimalistic as possible to access any data within a few clicks.<br> It also cuts out any old interface and interaction to grant user what they need without unnecessary redirects or prompts.",
		tools: [
			"ai",
			"ps"
		],
		state: "completed"
	},
	{
		id: "ArtParticle C",
		title: "TIDE (UI/UX)",
		pages: [
			{
				title: "about",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Hamyaad/About.jpg",
				active: false
			},
			{
				title: "single course",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Hamyaad/SingleCourse.jpg",
				active: true
			},
			{
				title: "buy course",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Hamyaad/BuyCourse.jpg",
				active: false
			}
		],
		detail: "Tide is established as simple as possible to boost user's attention towards learning with a blue over white theme and floating radiant boxes and containers magnifying important data without much effort.<br> Informative structure is a key feature here with every single asset supporting or adding insights into the main subject.<br> The design excludes too fancy graphics as it intends to keep the environment calm and harmonized with soothing gradients floating all over the project.",
		tools: [
			"ai",
			"ps"
		],
		state: "completed"
	},
	{
		id: "ArtParticle D",
		title: "GLARE (UI/UX)",
		pages: [
			{
				title: "landing",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/GlareLanding.jpg",
				active: true
			}
		],
		detail: "Glare centralizes attention towards download and usage of a mobile app with exclusive graphical design and an expressive structure letting both owners and users connect interactively.",
		tools: [
			"ai",
			"ps"
		],
		state: "completed"
	},
	{
		id: "ArtParticle E",
		title: "LIOLT (UI/UX)",
		pages: [
			{
				title: "interns",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Vestaak/Interns.jpg",
				active: false
			},
			{
				title: "index",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Vestaak/HomePage.jpg",
				active: true
			},
			{
				title: "team",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/Vestaak/Team.jpg",
				active: false
			}
		],
		detail: "Liolt showcases projects in a unique form delivering all the necessary information among with interactive modules while expanding viewer's perspective over what the owners are capable of, also it develops new ways of connecting to the user by introducing the individuals or organizations involved in creative ways.",
		tools: [
			"ai",
			"ps"
		],
		state: "completed"
	},
	{
		id: "ArtParticle F",
		title: "CRYSTAL VOID (UI/UX)",
		pages: [
			{
				title: "single business",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/InBarg/SingleBusiness.jpg",
				active: false
			},
			{
				title: "index",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/InBarg/Index.jpg",
				active: true
			},
			{
				title: "single offer",
				image: "http://localhost/~Project_END/ASSETS/AntiToxins/ProjectAssets/InBarg/SingleOffer.jpg",
				active: false
			}
		],
		detail: "Crystal Void makes the user feel lost in a well-organized universe allowing exploration among products with varies organizers, filters and slideshows while categorizing every data group in a very unique structure aiming to simplify users access to a vast majority of data.<br> It introduces new methods of interacting with the user and also allowing users to engage in conversations and topics with each other.<br> Exclusive graphics are implemented all over the project along with informative data blocks and sections ensuring working with it an extraordinary experience.",
		tools: [
			"ai",
			"ps"
		],
		state: "cancelled",
	}
];
Personalities = [
	{
		face: "PainKiller",
		particle: "Green A",
		title: "PLEASURE OF PAIN",
		content: "All the things you've been through, all the tough sacrifices you had to make, all those tears and those lonely nights... Today, you are greater because of them; so on the next adventure, recall that the pain is for you, not against you..."
	},
	{
		face: "Curious",
		particle: "Blue B",
		title: "MYSTERY OF UNKNOWN",
		content: "To wake up everyday remembering that today, you know more than you did yesterday... That feeling alone calls out to you to go explore this vast universe to uncover new possibilities and create new opportunities."
	},
	{
		face: "Cheerful",
		particle: "Green B",
		title: "TOXICITY NOT ALLOWED",
		content: "The energy you offer comes back at you immediately, you may not notice it right away but you will definitely see the effects at some point in time."
	},
	{
		face: "Angry",
		particle: "Purple A",
		title: "NO CONTROL",
		content: "I'm sure you did or said stuff without considering the consequences in the past, it has a bitter taste to it as it deprives you from control. No one likes that, yet when it comes to the root of it all, ANGER, not many try to maintain and direct it towards better purposes, ironic..."
	},
	{
		face: "Upset",
		particle: "Blue A",
		title: "SILENCE OF DARKNESS",
		content: "To go low, is to learn how to climb higher. It's okay if you have fallen and broke your wings, whatever you do, please don't stay there."
	},
	{
		face: "Confident",
		particle: "Purple B",
		title: "THE BEST",
		content: "You may thank people everyday for the tiniest amount of service, do you also thank your other-worldly beautiful handsome looking existence for working for you 24/7? If not, other chores can wait, you have a debt to pay."
	},
	{
		face: "Sarcastic",
		particle: "Yellow A",
		title: "WHY SO SERIOUS ?",
		content: "Believe when i say those particular bikers wearing leather jackets with red skulls printed on them wielding a Double-Barreled shotgun would enjoy some fun too! well perhaps they have completely different understanding of 'fun', but yeah, you get the idea."
	},
	{
		face: "Positive",
		particle: "Yellow B",
		title: "ABSOLUTE",
		content: "Never done before huh, have the courage to be the first, plan it out and fly to it; With a mindset like that, nothing could ever stop you."
	}
];
DivisionURI = [
	{
		name: "Temporary",
		pagetitle: "InfamousRocket - Front-end web developer, Digital designer",
		url: ""
	},
	{
		name: "SpaceCyclone",
		pagetitle: "SpaceCyclone: Contact information - InfamousRocket",
		url: "contact-information"
	},
	{
		name: "Skillometer",
		pagetitle: "Skillometer: Skills & experience proficiency - InfamousRocket",
		url: "skills-&-experience"
	},
	{
		name: "AntiToxins",
		pagetitle: "AntiToxins: Projects & work samples - InfamousRocket",
		url: "projects-&-work"
	},
	{
		name: "Analyzer",
		pagetitle: "Analyzer: Moral & behaviour - InfamousRocket",
		url: "moral-&-behaviour"
	},
	{
		name: "DeckCloud",
		pagetitle: "DeckCloud: Achievements & abilities - InfamousRocket",
		url: "achievements-&-abilities"
	}
];


$(document).ready(function(){Globe();Varia()});
$(window).resize(function(){Varia();});

 Global = {
 	Rotten : false ,
 	RottenStillActive : false,
    // Peek
	PeekActive: null,
    // Gandalf
	GandalfActive: null,
    RandList: {
 	    BR: []
    }
 };
 var Rain = true;
  var GapHeight = 600;
function Varia(){
	var   width = window.innerWidth, height = window.innerHeight;
	bodyw = [$(window).width()];
	    Ratio = 1920/1480;RatioB = 1920/2015;
    $("#Skillometer .Core").each(function(){
        Waya = $(this).find(".Waya");
        Target = $("#Skillometer .CoreKeepa");
        WayaOffset = Waya.offset().left;
        SP = {
            X : $(this).offset().left + ($(this).width() / 2),
            Y : $(this).offset().top + ($(this).width() / 2)
        };
        TP = {
            X : Target.offset().left + (Target.width() / 2),
            Y : Target.offset().top + (Target.width() / 2)
        };
        Width = Math.sqrt( (SP.X-TP.X)*(SP.X-TP.X) + (SP.Y-TP.Y)*(SP.Y-TP.Y) );
        Angle = Math.atan2(TP.Y - SP.Y, TP.X - SP.X) * 180 / Math.PI;
        Waya.width( Width ).css("transform","rotate("+Angle+"deg)");
    });
    $("#Analyzer .Particles > div").each(function(){
        if( Particle.isActive ){ return; }
        Target = $("#Analyzer .Core");
        SP = {
            X : $(this).offset().left + ($(this).width() / 2),
            Y : $(this).offset().top + ($(this).width() / 2)
        };
        TP = {
            X : Target.offset().left + (Target.width() / 2),
            Y : Target.offset().top + (Target.width() / 2)
        };
        Angle = Math.atan2(TP.Y - SP.Y, TP.X - SP.X) * 180 / Math.PI;
		TweenMax.set($(this).children().children(), {rotation: Angle});
    });
	$("#AntiToxins .DevParticle, #AntiToxins .ArtParticle").each(function(){
	    if( Particle.isActive ){ return; }
		Target = ( $(this).hasClass("DevParticle") ) ? $("#AntiToxins .DevStar") : $("#AntiToxins .ArtStar");
		SP = {
			X : $(this).offset().left + ($(this).width() / 2),
			Y : $(this).offset().top + ($(this).width() / 2)
		};
		TP = {
			X : Target.offset().left + (Target.width() / 2),
			Y : Target.offset().top + (Target.width() / 2)
		};
		Angle = ( $(this).hasClass("DevParticle") ) ? Math.atan2(TP.Y - SP.Y, TP.X - SP.X) * 180 / Math.PI :
			Math.atan2( SP.Y - TP.Y , SP.X - TP.X ) * 180 / Math.PI;
		TweenMax.set($(this).children(".Container").children(), {rotation: Angle});
	});
}

function Globe(){
	var   width = window.innerWidth,
		  height = window.innerHeight;
	// Resetting all forms and inputs on page load
	$("input,textarea").val("");
	// Form the panels
	Panel.setup();

// Pre Requisitions

	// Prepping The Frame
	$('body').height(height);
	$(window).scrollTop(0);

	// Animations Setup

	  // Portals Animation

	WolvenEyez = new TimelineMax({repeat: -1, yoyo: true, paused: true});
	WolvenEyez.set('#Temporary .Eyez', {scale:1, z:0.01});
	 WolvenEyez
	  .to('#Temporary .Eyez', 1, {y: '+=5',scale: 0.95,ease :   Sine. easeInOut})
	  .to('#Temporary .Eyez', 1, {y: '-=3',scale: 1,ease :   Sine. easeInOut})
	  .to('#Temporary .Eyez', 1, {y: '+=3',scale: 0.9,ease :   Sine. easeInOut});

	BrokenLaugh = new TimelineMax({repeat: -1, yoyo: true, paused: true});
	BrokenLaugh.set('#Temporary .Laugh', {scale:1, z:0.01});
	 BrokenLaugh
	  .to('#Temporary .Laugh', 1, {y: '-=2',scale: 0.95,ease :   Sine. easeInOut})
	  .to('#Temporary .Laugh', 1, {y: '+=1',scale: 1,ease :   Sine. easeInOut})
	  .to('#Temporary .Laugh', 1, {y: '+=2',scale: 0.9,ease :   Sine. easeInOut});

  Jflow = new TimelineMax({paused:true , repeat: -1});
  Jflow.set('#Temporary .JourNey .Flow', {scale:1, z:0.01});
	Jflow
	.to('#Temporary .JourNey .Flow', 0.4, {y: '-5%',scale: 1.05,ease :  Power1.easeOut})
	.to('#Temporary .JourNey .Flow', 0.4, {y: '2.5%',scale: 1,ease :  Power1.easeIn})
	.to('#Temporary .JourNey .Flow', 0.4, {y: '0%',ease :  Power1.easeInOut});

  Jstarframe = new TimelineMax({paused:true , yoyo: true, repeat: -1});
	Jstarframe
	.to('#Temporary .JourNey .StarFrame', 1, {x: '-3%',rotation: 5,transformOrigin: "50% 200%",ease :  Power1.easeInOut})
	.to('#Temporary .JourNey .StarFrame', 1, {x: '0%',rotation: -5,transformOrigin: "50% 200%",ease :  Power1.easeInOut});

  Jterrain = new TimelineMax({paused:true , repeat: -1});
	Jterrain
	.to('#Temporary .JourNey .Terrain', 0.8, {scale: 1.04,ease : Power1.easeInOut,delay: 0.2})
	.to('#Temporary .JourNey .Terrain', 0.8, {scale: 1,ease : Power1.easeInOut});

  Jdeepsea = new TimelineMax({paused:true , repeat: -1});
	Jdeepsea
	.to('#Temporary .JourNey .DeepSea', .5, {skewX: 30,transformOrigin: "top left",ease:  Power2.easeInOut })
	.to('#Temporary .JourNey .DeepSea', .5, {skewX: 0,transformOrigin: "top left",ease:  Power2.easeInOut });

  Jship = new TimelineMax({paused:true , yoyo: true , repeat: -1});
	Jship
	.to('#Temporary .JourNey .Ship', .6, {x: 20,rotation: 10,ease: Power1.easeInOut,transformOrigin: "30% 80%" })
	.to('#Temporary .JourNey .Ship', .6, {x: -5,rotation: -10,ease: Power1.easeInOut,transformOrigin: "30% 80%" })
		.to('#Temporary .JourNey .Ship', .6, {x: 20,rotation: 10,ease: Power1.easeInOut,transformOrigin: "30% 80%" });



  Hflow = new TimelineMax({paused:true , repeat: -1,repeatDelay: .5});
  Hflow.set('#Temporary .Artery .Flow', {scale:1, z:0.01});
   Hflow
	.to('#Temporary .Artery .Flow', .2, {scale: 1.1,ease: Power1.easeInOut })
	.to('#Temporary .Artery .Flow', .2, {scale: 1,ease: Power1.easeInOut })
	.to('#Temporary .Artery .Flow', .2, {scale: 1.15,ease: Power1.easeInOut })
	.to('#Temporary .Artery .Flow', .2, {scale: 1,ease: Power1.easeInOut });

  Hbloodaura = new TimelineMax({paused:true , repeat: -1});
  Hbloodaura.set('#Temporary .Artery .BloodAura', {scale:1, z:0.01});
   Hbloodaura
	.to('#Temporary .Artery .BloodAura', 2, {scale: 1.1,rotation: 360,ease:  Elastic. easeInOut.config( 1, 0.3) });

  Hscatter = new TimelineMax({paused:true , yoyo: true, repeat: -1});
	Hscatter
	.to('#Temporary .Artery .Scatter', .4, {x: '5%',y: '5%',ease: Power2.easeInOut })
	.to('#Temporary .Artery .Scatter', .4, {x: '-5%',y: '-2%',ease: Power2.easeInOut });

  Hkeymord = new TimelineMax({paused:true , yoyo: true, repeat: -1});
	Hkeymord
	.to('#Temporary .Artery .Keymord', .8, {x: '-1%',y: '-1%',rotation: 5,ease: SlowMo.ease.config( 0.7, 2, false) })
	.to('#Temporary .Artery .Keymord', .8, {x: '1%',y: '1%',rotation: -5,ease: SlowMo.ease.config( 0.7, 2, false) });

  Hdazhali = new TimelineMax({paused:true , yoyo: true, repeat: -1});
	Hdazhali
	.to('#Temporary .Artery .Infa', .15, {skewX: 6,skewY: 10,ease: Bounce. easeInOut });

  Hbarry = new TimelineMax({paused:true , yoyo: true, repeat: -1});
  Hbarry.set('#Temporary .Artery .Barry', {scale:1, z:0.01});
	Hbarry
	.to('#Temporary .Artery .Barry', .4, {x: '-5%',y: '-5%',scale: 1.4,ease: Bounce. easeInOut });



  Mflow = new TimelineMax({paused:true ,yoyo: true , repeat: -1});
  Mflow.set('#Temporary .BigMo .Flow', {scale:1, z:0.01});
   Mflow
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.03,rotation: 5 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.12,rotation: -5 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.09,rotation: 8 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.14,rotation: -8 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .2, {scale: 1.05,rotation: 12 ,ease: Power1.easeInOut });

  Walla = new TimelineMax({paused:true ,yoyo: true , repeat: -1});
  Walla.set(['#Temporary .BigMo .Behindmo','#Temporary .BigMo .Frontmo'], {scale:1, z:0.01});
   Walla
	.to(['#Temporary .BigMo .Behindmo','#Temporary .BigMo .Frontmo'], .2, {scale: 1.03,ease: Power1.easeInOut })
	.to(['#Temporary .BigMo .Behindmo','#Temporary .BigMo .Frontmo'], .2, {scale: 1.06,ease: Power1.easeInOut })
	.to(['#Temporary .BigMo .Behindmo','#Temporary .BigMo .Frontmo'], .2, {scale: 1.09,ease: Power1.easeInOut })
	.to(['#Temporary .BigMo .Behindmo','#Temporary .BigMo .Frontmo'], .2, {scale: 1.06,ease: Power1.easeInOut })
	.to(['#Temporary .BigMo .Behindmo','#Temporary .BigMo .Frontmo'], .2, {scale: 1.03,ease: Power1.easeInOut });

  Mbigmo = TweenMax.to('#Temporary .BigMo .Bigmo', .6, {repeat: -1, paused: true,y: '60%', opacity: 1,
	ease: Power1.easeInOut,
	onRepeat: REP});

  function REP(){
	TweenMax.fromTo('#Temporary .BigMo .Bigmo',0.2,{opacity: 0},{opacity: 1});
  }

  Mjaccuzi = new TimelineMax({paused:true , yoyo: true, repeat: -1});
  Mjaccuzi.set('#Temporary .BigMo .Jaccuzi', {scale:1, z:0.01});
   Mjaccuzi
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: 10,transformOrigin: '40% 60%',scale : 1.04,opacity: 1 ,ease: SlowMo.ease.config( 0.7, 0.7, false) })
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: -15,transformOrigin: '40% 60%',scale : 1.08,opacity: 1 ,ease: SlowMo.ease.config( 0.9, 0.7, false) })
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: 20,transformOrigin: '40% 60%',scale : 0.9,opacity: 1 ,ease: SlowMo.ease.config( 0.7, 0.7, false) })
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: -20,transformOrigin: '40% 60%',scale : 1.1,opacity: 1 ,ease: SlowMo.ease.config( 0.7, 0.9, false) });

	  // QuickAccess animations
  PedalAction = TweenMax.to($(".Pedal"), .5, {rotation: 360, transformOrigin: "50% 35%", ease:  Power0.easeNone, repeat: -1, paused: true});
  PedalPrevent = new TimelineMax({paused:true, repeat: 1});
  PedalPrevent
	  .to(PedalAction.target[0], .025, {x: "3%"})
	  .to(PedalAction.target[0], .05, {x: "-3%"})
	  .to(PedalAction.target[0], .025, {x: "0%"});

		// SpaceCyclone animations
	SC_DL_Stars = new TimelineMax({paused:true, repeat: -1});
	SC_DL_Stars
		.to($("#SpaceCyclone .Download.Storm .StarFlow"), .8,
			{autoAlpha: .4, rotation: 2, transformOrigin: "50% 100%", ease: Power0.easeNone}
			)
		.to($("#SpaceCyclone .Download.Storm .StarFlow"), .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "50% 100%", ease: Power0.easeNone}
			)
		.to($("#SpaceCyclone .Download.Storm .StarFlow"), .8,
			{autoAlpha: .4, rotation: -2, transformOrigin: "50% 100%", ease: Power0.easeNone}
			)
		.to($("#SpaceCyclone .Download.Storm .StarFlow"), .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "50% 100%", ease: Power0.easeNone}
			);
	SC_DL_Flow = new TimelineMax({paused:true, repeat: -1});
	SC_DL_Flow
		.to($("#SpaceCyclone .Download.Storm .Flow"), .4,
			{autoAlpha: .5, transformOrigin: "55% 100%", ease: Power0.easeNone}
			)
		.to($("#SpaceCyclone .Download.Storm .Flow"), .4,
			{autoAlpha: 1, transformOrigin: "55% 100%", ease: Power0.easeNone}
			);
	SC_DL_Download = new TimelineMax({paused:true, repeat: -1});
	SC_DL_Download
		.fromTo($("#SpaceCyclone .Download.Storm .Definer > .Asset"), .6,
			{y: "0%", autoAlpha: 1,ease: Power0.easeNone},
			{y: "40%", autoAlpha: 1,ease: Power0.easeNone}
			);
	SC_DL_Resume = new TimelineMax({paused:true, repeat: -1, yoyo: true, yoyoEase: Power1.easeInOut});
	SC_DL_Resume
	.fromTo($("#SpaceCyclone .Download.Storm .Resume > .Asset"), .8,
		{rotation: 35, y: "-10%", x: "15%", transformOrigin: "15% 35%",ease: Power1.easeInOut},
		{rotation: 70, y: "-10%", x: "15%", transformOrigin: "15% 35%",ease: Power1.easeInOut}
		, 0);
	SC_DL_CV = new TimelineMax({paused:true, repeat: -1, yoyo: true});
	SC_DL_CV
	.to($("#SpaceCyclone .Download.Storm .CV > .Asset"), .8,
		{rotation: -30, transformOrigin: "80% 0%",ease: Power1.easeInOut}
		, 0)
	.to($("#SpaceCyclone .Download.Storm .CV > .Asset"), .8,
		{rotation: 0, transformOrigin: "80% 0%",ease: Power1.easeInOut}
		);

	SC_RQ_Stars = new TimelineMax({paused:true, repeat: -1});
	SC_RQ_Stars
		.to($("#SpaceCyclone .Request.Storm .StarFlow"), .8,
			{autoAlpha: .4, rotation: 2, transformOrigin: "100% 60%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Request.Storm .StarFlow"), .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "100% 60%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Request.Storm .StarFlow"), .8,
			{autoAlpha: .4, rotation: -2, transformOrigin: "100% 60%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Request.Storm .StarFlow"), .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "100% 60%", ease: Power0.easeNone}
		);
	SC_RQ_Flow = new TimelineMax({paused:true, repeat: -1});
	SC_RQ_Flow
		.to($("#SpaceCyclone .Request.Storm .Flow"), .4,
			{autoAlpha: .5, transformOrigin: "55% 100%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Request.Storm .Flow"), .4,
			{autoAlpha: 1, transformOrigin: "55% 100%", ease: Power0.easeNone}
		);
	SC_RQ_Plus = new TimelineMax({paused:true, repeat: -1, yoyo: true, yoyoEase: Power3.easeOut});
	SC_RQ_Plus
		.to($("#SpaceCyclone .Request.Storm .Definer > .Asset"), .3,
			{scale: .5, opacity: 1,ease: Power3.easeIn}
		);
	SC_RQ_CodeProject = new TimelineMax({paused:true, repeat: -1});
	SC_RQ_CodeProject
		.to($("#SpaceCyclone .Request.Storm .CodeProject > .Title > .Asset"), .8,
			{x: -10, rotation: 10, transformOrigin: "0% 100%", ease:   RoughEase.ease.config({ template:
					Power0.easeNone,
					strength:
						1,
					points:
						20,
					taper:
						"none",
					randomize: true,
					clamp: false
				})}
		)
		.to($("#SpaceCyclone .Request.Storm .CodeProject > .Title > .Asset"), .8,
			{x: 10, rotation: -10, transformOrigin: "0% 100%", ease:   RoughEase.ease.config({ template:
					Power0.easeNone,
					strength:
						1,
					points:
						20,
					taper:
						"none",
					randomize: true,
					clamp: false
				})}
		);
	SC_RQ_DesignProject = new TimelineMax({paused:true, repeat: -1, yoyo: true, yoyoEase: Circ. easeInOut});
	SC_RQ_DesignProject
		.to($("#SpaceCyclone .Request.Storm .DesignProject > .Title > .Asset"), .8,
			{rotationY: 180, transformOrigin: "50% 50%", ease:  Circ. easeInOut}
		);

	SC_CN_Stars = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Stars
		.to($("#SpaceCyclone .Connect.Storm .StarFlow"), .8,
			{autoAlpha: .4, rotation: 2, transformOrigin: "0% 60%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .StarFlow"), .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "0% 60%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .StarFlow"), .8,
			{autoAlpha: .4, rotation: -2, transformOrigin: "0% 60%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .StarFlow"), .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "0% 60%", ease: Power0.easeNone}
		);
	SC_CN_Flow = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Flow
		.to($("#SpaceCyclone .Connect.Storm .Flow"), .4,
			{autoAlpha: .5, transformOrigin: "55% 100%", ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .Flow"), .4,
			{autoAlpha: 1, transformOrigin: "55% 100%", ease: Power0.easeNone}
		);
	SC_CN_Wifi = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Wifi
		.to($("#SpaceCyclone .Connect.Storm .Definer > .Asset"), .3,
			{rotation: 360, transformOrigin: "50% 79.5%", opacity: 1,ease: Power0.easeNone}
		);
	SC_CN_Phone = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Phone
		.to($("#SpaceCyclone .Connect.Storm .Phone > .Asset"), .13,
			{scale: 1.05, rotation: 25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .Phone > .Asset"), .13,
			{scale: 1.1, rotation: -25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .Phone > .Asset"), .13,
			{scale: 1.15, rotation: 25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .Phone > .Asset"), .13,
			{scale: 1.2, rotation: -25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to($("#SpaceCyclone .Connect.Storm .Phone > .Asset"), .2,
			{scale: 1, rotation: 0, transformOrigin: "center",ease: Power0.easeNone}
		);
	SC_CN_Envelope = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Envelope
		.to($("#SpaceCyclone .Connect.Storm .Envelope .Title > .Asset"), .6,
			{scale: 0, rotation: 90, transformOrigin: "100% 50%",ease: Power0.easeNone}
		);
	SC_Footer = new TimelineMax({paused: true});
	SC_Footer.fromTo($("#SpaceCyclone").find("#Footer > div"), .2,
		{y: 10,autoAlpha: 0},
		{y: 0,autoAlpha: 1}
	).fromTo($("#SpaceCyclone").find("#Footer > a"), .2,
		{y: 10,autoAlpha: 0},
		{y: 0,autoAlpha: 1}, "-=.1"
	);
	AntiToxins = new TimelineMax({paused: true});
	AntiToxins.add(
		TweenMax.fromTo($("#AntiToxins .DivisionExpress"), .5, {
				autoAlpha: 0,
				y: "-=100%"
			},
			{
				autoAlpha: 1,
				y: "+=100%"
			}), 0
	    ).add(
			TweenMax.fromTo($(".DevSignBeam, .ArtSignBeam, .DevSign, .ArtSign"), .5, {
				autoAlpha: 0,
				ease: RoughEase.ease.config({ template:
					Power0.easeNone,
					strength:
						1,
					points:
						20,
					taper:
						"none",
					randomize: true,
					clamp: false
				})
			}, {
				autoAlpha: 1,
				ease: RoughEase.ease.config({ template:
					Power0.easeNone,
					strength:
						1,
					points:
						20,
					taper:
						"none",
					randomize: true,
					clamp: false
				})
			}), 0
		);
	StarRotation = new TimelineMax({paused:true ,repeat: -1});
	StarRotation.to("#AntiToxins .Star > div", 20, {
		rotation: 360,
		ease: Power0.easeNone
	}, 0);
	AnalyzerFly = new TimelineMax({paused: true});
	AnalyzerFly.add(
		TweenMax.fromTo("#PrevFace", .1, {
			autoAlpha: 0,
			x: "+=100%"
		}, {
			autoAlpha: 1,
			x: "-=100%"
		}), 0
	).add(
		TweenMax.fromTo("#NextFace", .1, {
			autoAlpha: 0,
			x: "-=100%"
		}, {
			autoAlpha: 1,
			x: "+=100%"
		}), 0
	).add(
		TweenMax.fromTo("#Analyzer > .DivisionExpress", .5, {
				autoAlpha: 0,
				y: "-=100%"
			},
			{
				autoAlpha: 1,
				y: "+=100%"
			}), 0
	).add(
		TweenMax.staggerFromTo("#Analyzer .Express", .2, {
				autoAlpha: 0,
				scale: 0,
				transformOrigin: "50% 50%"
			},
			{
				autoAlpha: 1,
				scale: 1,
				transformOrigin: "50% 50%"
			}, .1), 0
	);
	AnalyzePlate = TweenMax.to( "#Analyzer .Plate", .4, {
		autoAlpha: 0,
		transformOrigin: "50% 0%"
	}, {
		paused: true,
		autoAlpha: 1,
		transformOrigin: "50% 0%"
	} );
	CrystalRotation = TweenMax.fromTo("#Analyzer .Crystal", 1, {
		paused: true,
		repeat: -1,
		rotation: 0,
		ease: Power0.easeNone
	}, {
		paused: true,
		repeat: -1,
		rotation: 360,
		ease: Power0.easeNone
	});

	// DeckCloud
	ShuffleFireFly = new TimelineMax({paused: true});
	ShuffleFireFly.add(
		TweenMax.fromTo("#DeckCloud .ShuffleFire", .35, {
			y: "+=50%",
			scale: 0,
			autoAlpha: 0
		}, {
			y: "-=50%",
			scale: 1,
			autoAlpha: 1
		}), 0
	);
	DeckCloudFly = new TimelineMax({paused: true});
	DeckCloudFly.add(
		TweenMax.fromTo("#DeckCloud .Sign, #DeckCloud .Cards, #DeckCloud .GravityForce, #DeckCloud .GravityForceX, #DeckCloud .ShuffleFire", .1, {
			autoAlpha: 0
		}, {
			autoAlpha: 1
		}), 0
	);
	Gravity = new TimelineMax({repeat: -1, paused: true});
	Gravity.add(
		TweenMax.fromTo("#DeckCloud .Deck.Work .GravityForce, #DeckCloud .Deck.Life .GravityForceX", .1, {
			y: "+=20%",
			autoAlpha: 0
		}, {
			autoAlpha: 1,
			ease: Power0.easeNone
		})
	).add(
		TweenMax.to("#DeckCloud .Deck.Work .GravityForce, #DeckCloud .Deck.Life .GravityForceX", 1, {
			y: "-=30%",
			ease: Power0.easeNone
		}), "-=.4"
	).add(
		TweenMax.to("#DeckCloud .Deck.Work .GravityForce, #DeckCloud .Deck.Life .GravityForceX", .4, {
			autoAlpha: 0,
			ease: Power0.easeNone
		}), "-=.4"
	);
	GravityX = new TimelineMax();
	GravityX.add(
		TweenMax.fromTo("#DeckCloud .Deck.Work .GravityForceX, #DeckCloud .Deck.Life .GravityForce", .4, {
			y: "+=20%",
			autoAlpha: 0
		}, {
			autoAlpha: 1,
			ease: Power0.easeNone
		})
	).add(
		TweenMax.to("#DeckCloud .Deck.Work .GravityForceX, #DeckCloud .Deck.Life .GravityForce", 1, {
			y: "-=30%",
			ease: Power0.easeNone
		}), "-=.4"
	).add(
		TweenMax.to("#DeckCloud .Deck.Work .GravityForceX, #DeckCloud .Deck.Life .GravityForce", .4, {
			autoAlpha: 0,
			ease: Power0.easeNone
		}), "-=.4"
	);
	Gravity.add( GravityX, .4 );
	PlaceDeck = new TimelineMax({paused: true});
	DeckX = -($("#DeckCloud .Work .Cards > div").length * 4);
	PlaceDeck.add(
		TweenMax.staggerFromTo("#DeckCloud .Work .Cards > div", .3, {
			cycle:{y: function(){
					return DeckX-50+"%";
				}},
			autoAlpha: 0
		}, {
			cycle:{y: function(){
					DeckX += 4;
					return DeckX+"%";
				}},
			autoAlpha: 1
		}, .1)
	).add(
		TweenMax.fromTo("#DeckCloud .Work .Sign", .3, {
			scale: 0,
		}, {
			scale: 1,
			ease: Back. easeOut.config( 1.7)
		}, .1)
	);
	DeckX = -($("#DeckCloud .Life .Cards > div").length * 4);
	PlaceDeck.add(
		TweenMax.staggerFromTo("#DeckCloud .Life .Cards > div", .3, {
			cycle:{y: function(){
					return DeckX-50+"%";
				}},
			autoAlpha: 0
		}, {
			cycle:{y: function(){
					DeckX += 4;
					return DeckX+"%";
				}},
			autoAlpha: 1
		}, .1)
	).add(
		TweenMax.fromTo("#DeckCloud .Life .Sign", .3, {
			scale: 0,
			autoAlpha: 0
		}, {
			scale: 1,
			autoAlpha: 1,
			ease: Back. easeOut.config( 1.7)
		}, .1)
	);
	ShuffleFire = new TimelineMax({paused: true, repeat: -1, yoyo: true
	});
	ShuffleFire.staggerFromTo("#DeckCloud .ShuffleFire .Fire", .5, {
		scaleY: 1,
		transformOrigin: "50% 100%"
	}, {
		cycle:{scaleY: function(){
				return (Math.random() * .3) + 1.1;
		}},
		transformOrigin: "50% 100%",
		ease: RoughEase.ease.config({ template:
			Power0.easeNone,
			strength:
				1,
			points:
				20,
			taper:
				"none",
			randomize: true,
			clamp: false
		})
	}, .02);
	UpperBeam = new TimelineMax({paused: false,repeat: -1, repeatDelay: 1});
	UpperBeam.fromTo(".DivisionExpress .SwitchBeam, .DivisionExpress .Hint", .25,{
		autoAlpha: .6,
		transformOrigin: "50% 0%"
	}, {
		autoAlpha: 1,
		transformOrigin: "50% 0%"
	}).to(".DivisionExpress .SwitchBeam, .DivisionExpress .Hint", .25,{
		autoAlpha: .6,
		transformOrigin: "50% 0%"
	}).to(".DivisionExpress .SwitchBeam, .DivisionExpress .Hint", .25,{
		autoAlpha: 1,
		transformOrigin: "50% 0%"
	}).to(".DivisionExpress .SwitchBeam, .DivisionExpress .Hint", .25,{
		autoAlpha: .6,
		transformOrigin: "50% 0%"
	});
	PedalPrism = new TimelineMax({paused: true, repeat: -1});
	PedalPrism.add(
		TweenMax.fromTo(".Pedal", 1, {
			filter: "hue-rotate(0deg)",
			ease: Power0.easeNone
		}, {
			filter: "hue-rotate(360deg)",
			ease: Power0.easeNone
		}), 0
	);
    // Fly sequence
	  // Defining sequence vars
	OnLoadActive = $("#Temporary");
	OnLoadActive.css({ zIndex : 1 });
	// Hiding the hidable xD
	$("#NOTREADY").css(
		{ display : "none" }
	);
	$("#Trilogies > div, #BigMo > div, #Artery > div, #JourNey > div").css(
		{ visibility : "hidden" , opacity : 0 , zIndex: -1 }
	);
	OnLoadActive.css(
		{ visibility : "" , opacity : "" , zIndex: 1 }
	);
	  // Active vars
	Active = {
		Dimension: "Trilogies",
		Color: PortalColor[PortalColor.length-1]
	};
	ActivePortal = [false]; Origin = [0];
	ActiveDivision = OnLoadActive; SwitchDivisionActive = [false];
	Forward = {isAvailable : false, obj: false, allowed: false, memory: null, isAllowed: function(set,memory){
		if(typeof(set) == "boolean"){
			this.allowed = set;
			if( typeof(memory) == "boolean" ){
				this.memory = memory;
			}
		}
		return this.allowed;
	}};
	NextDivisionAssociates = false;
	DirectFlyActive = [false];
	  // Reverse vars
	Reverse = {pedal: false, obj: false, allowed: false, Override: false, memory: null, isAllowed: function(set,memory){
		if(typeof(set) == "boolean"){
			this.allowed = set;
			if( typeof(memory) == "boolean" ){
				this.memory = memory;
			}
		}else{
			return this.allowed;
		}
	},
		IsOverrided: function(set,memory){
		if(typeof(set) == "boolean"){
			this.Override = set;
		}else{
			return this.Override;
		}
	}};
	  // Rotten vars
	ActiveRotten = []; DirectRotten = [false];
	  // Running onload functions
	ReverseSequence();
	  // Setting portals rotten animation
	$("#Temporary > .Portal").each(function(i){
		ActiveRotten[i] = TweenMax.to($(this).find(".Rotten"), 1, {
			paused: true,
			rotation: 360,
			repeat: -1,
			ease: Expo.easeInOut
		});
	});
	$('#Temporary > .Portal').click(function(){ ActiveSequence($(this)); });

	$('#Temporary>div').mouseenter(function(){

		T = $(this);

		if( T.hasClass(Portal[0]) ){
			if(!T.hasClass("active")){ToggleJourney();}
		}

		if( T.hasClass(Portal[1]) ){
			if(!T.hasClass("active")){ToggleArtery();}
		}

		if( T.hasClass(Portal[2]) ){
			if(!T.hasClass("active")){ToggleBigmo();}
		}

	})
		.mouseleave(function(){

			T = $(this);

			if( T.hasClass(Portal[0]) ){
				if(!T.hasClass("active")){ToggleJourney(true);}
			}

			if( T.hasClass(Portal[1]) ){
				if(!T.hasClass("active")){ToggleArtery(true);}

			}

			if( T.hasClass(Portal[2]) ){
				if(!T.hasClass("active")){ToggleBigmo(true);}
			}

		});

	// Set Gandalf reaction to BreathingFragment
    $(".BreathinFragment").click(function(){
        var BR = $(this),
            Opt = $(this),
            OptLength = 0;
        // Find this asset's row in Gandalf's array
        $.each(Gandalf,function(){
            if( $(BR[0]).filter(this[0]).length ){
                var RandList = Global.RandList.BR;
                // Get the overall option length
                OptLength = this[1].length;
                // Randomly select an option
                Opt = Math.floor(OptLength*Math.random());
                // Ensure the selection of all arrays before re-selecting the same option
                for( i = 0 ; i < RandList.length ; i++ ){
                    // Check whether the option is repetitive
                    if( RandList[i] === Opt ){
                        // Run the loop until:
                        while(
                            // The option is not repetitive
                            RandList[i] === Opt ||
                            // Or the current option isn't the same as the previous option
                            RandList[RandList.length] === Opt ){
                            // Randomly select an option
                            Opt = Math.floor(OptLength*Math.random());
                        }
                    }
                }
                // Reset picked list to allow a new loop
                if( RandList.length === OptLength ){
                    RandList = [];
                }
                // Add currently selected option to an array
                RandList.push(Opt);
                Global.RandList.BR = RandList;
            }
        });;
        // Send option change request
        $(this).data({GandalfOpt: Opt});
    });

    // Add TranslucentWave effect
	$(".QuickAccess .Cells .Cell").click(function(){
		var PrevSiblings = $(this).prevAll(),
			NextSiblings = $(this).nextAll();
		// Animate siblings placed before the clicked element
		TweenMax.staggerFromTo(PrevSiblings, .175,{
		   autoAlpha: 1,
        },{
		   autoAlpha: 0,
			delay: .1,
           onComplete: function(){
		       this.reverse();
           }
        }, .1);
		// Animate clicked asset
		TweenMax.fromTo(this, .175,{
		   autoAlpha: 1
        },{
		   autoAlpha: 0,
            onComplete: function(){
                this.reverse();
            }
        }, .1);
		// Animate siblings placed after the clicked element
		TweenMax.staggerFromTo(NextSiblings, .175,{
		   autoAlpha: 1,
        },{
		   autoAlpha: 0,
			delay: .1,
            onComplete: function(){
                this.reverse();
            }
        }, .1);
	});

  	// Defining QuickAccess controlls
    PedalTop = $(".Pedal").position().top;
    PedalBoundary = {Start : 0,
	                 Stop : PedalTop};
	Locked = [false];
    // Add pedal's prism effect
    $(".Pedal .Ped.Handle").mouseenter(function(){
    	// Deactive reverse if animation is reversed
        if( PedalPrism.reversed() ){
            PedalPrism.reversed(!PedalPrism.reversed());
        }
		// Continue the animation
        PedalPrism.resume();
    })
    .mouseleave(function(){
    	// Reverse animation to static postion
        PedalPrism.reverse(PedalPrism.time());
    });
    // Fly on drag
    Draggable.create(".Pedal" ,{
		trigger: ".Ped.Handle",
        type: "y",
		cursor: "grab",
		bounds: {minY:0, maxY:PedalBoundary.Stop},
		onPressScope: this.target,
		onDragStartScope: this.target,
		onDragScope: this.target,
		onDragStopScope: this.target,
		onPress: function(){
			if( (!Forward.isAllowed() && !Reverse.pedal) || (!Reverse.isAllowed() && Reverse.pedal) ) {
			    if( !Reverse.isAllowed() && Reverse.pedal ){
                    Glitch.on("#Gandalf", "Can't go back");
                }else{
			        if( Active.Dimension === Portal[0] ){
                        Glitch.on("#Gandalf", "Soon!");
                    }else{
                        Glitch.on("#Gandalf", "Select a dimension to fly");
                    }
                }
				PreventFly(this);
			}
		},
		onDragStart: function(){
			Locked[0] = false; // UnLocks the spaceship's movement
			PedalAction.restart().play();
			Fly();
        },
		onDrag: function(){
            CurPos = this.y;

            // Boundary Set

			if( Reverse.pedal == false ) {
			    XtoPercent = (CurPos == this.minY) ? 0 : 100;
                Glitch.on("#Gandalf", "Forward launch initiated...");
			}
			else{
			    XtoPercent = (CurPos == this.minY) ? 100 : 0;
                Glitch.on("#Gandalf", "Reverse launch initiated...");
			}
            if( CurPos < PedalBoundary.Stop && CurPos > PedalBoundary.Start ) {
                Region = Math.abs(this.maxY - this.minY);
                XtoPercent = (Reverse.pedal == false) ? ( (CurPos) * 100) / Region : ( Math.abs(CurPos-this.maxY) * 100) / Region;
            }

            Dur = ActiveFly.duration()-((ActiveFly.duration()*.9)*( XtoPercent / 100 ));
            ActiveFly.duration(Dur);
            if( (Reverse.pedal == true && ReverseFly.isActive()) || Reverse.IsOverrided() ){
				Dur = ReverseFly.duration()-((ReverseFly.duration()*.9)*( XtoPercent / 100 ));
				ReverseFly.duration(Dur);
			}else{
				if( SwitchDivisionActive[0] == false && ActiveDivision.attr("id") == "Temporary" ){
					Dur = Shrinker.duration()-((Shrinker.duration()*.9)*( XtoPercent / 100 ));
					Shrinker.duration(Dur);
				}
			}

        },
        onDragEnd: function(){
			DivisionSequence();
			PedalAction.pause();
			TweenMax.to(PedalAction.target[0], PedalAction.time(), {rotation: 0});
            CurPos = this.y;
            Top = (Reverse.pedal == true) ? this.maxY : this.minY;
            // Defining how the pedal's getting re-set
			if( ActivePortal[0] == false ){
				TweenMax.to(this.target, .2, { y:Top , ease: Power3. easeOut});
			}else{
				TweenMax.to(this.target, .2, { y:Top , ease: Power3. easeOut, onComplete: CheckForToggle, onCompleteParams: [ActivePortal[0]]});
			}
            if( Locked[0] == true ){ return; }
            Forward.isAllowed(true);
            ActiveFly.duration(ActiveFly.duration()-ActiveFly.duration()*.9).reverse().eventCallback("onReverseComplete",KillActiveFly);
            if( (Reverse.pedal == true && ReverseFly.isActive()) || Reverse.IsOverrided() ){
				Reverse.isAllowed(true);
				if( !Reverse.IsOverrided() ){
					Forward.isAllowed(false);
				}
				else{
					Reverse.isAllowed(false);
				}
				ReverseFly.duration(ReverseFly.duration()-ReverseFly.duration()*.9).reverse().eventCallback("onReverseComplete",KillReverseFly);
			}else{
            	if( ActiveDivision.attr("id") == "Temporary" || ( typeof(Shrinker) !== "undefined" && Shrinker.isActive() ) ){
				Shrinker.duration(Shrinker.duration()-Shrinker.duration()*.9).reverse();
				}
            }
            Glitch.on("#Gandalf", "Cancelling launch...");
        },
		zIndexBoost: false
    });

    // Set hover reaction
	$(".Reverse > .Handle").mouseenter(function(){
		// Allow hover
		$(this).parent().addClass("hover");
	})
	.mouseleave(function(){
		// Forbid hover
		$(this).parent().removeClass("hover");
	});
	// Reverse sequence
	$(".Reverse > .Handle").click(function(){
		if( (typeof (ReverseFly) == "undefined" || !ReverseFly.isActive()) &&
			(typeof (ActiveFly) == "undefined" || !ActiveFly.isActive()) ){
			ReverseHandle($(this));
		}
	});
	// Apply handle effect
	$("#Reach, #Ditch").mousedown(function(){
		// Differentiate buttons attributes.
		var to = ( $(this).attr("id") === "Reach" ) ? "0% 0%" : "100% 0%",
			r = ( $(this).attr("id") === "Reach" ) ? 5 : -5,
			t = $(this);
		// Apply the animation
		TweenMax.to( $(this), .1, {transformOrigin: to, rotation: r} );
	})
    .on("mouseup mouseout", function(){
		// Reverse to normal
		TweenMax.to( this, .1, {rotation: 0});
	});
	// Fly alternatives
	$("#Reach").click(function(){
		if( DirectFlyActive[0] ){ return; }
		if (Reverse.pedal == true){
			if (typeof (ReverseFly) == "undefined" || !ReverseFly.isActive()) {
				ReverseHandle();
			} else {
				ReverseHandle(false);
			}
		}
		if( Forward.isAllowed() ) {
		    $("#Reach").data({GandalfOpt: 0});
			Fly(true);
		}
		else{
			PreventFly();
		}
	} );
	$("#Ditch").click(function() {
		if (Reverse.pedal == false){
			if (typeof (ActiveFly) == "undefined" || !ActiveFly.isActive()) {
				ReverseHandle();
			} else {
				ReverseHandle(false);
			}
		}
		if( Reverse.isAllowed() ) {
            $("#Ditch").data({GandalfOpt: 0});
			Fly(true);
		}
		else{
			PreventFly();
		}
	} );

	// Set hover reaction
    $(".PathFinder .Pocket").mousedown(function(){
        // Forbid hover animations
        if( typeof(IdlePath) !== "undefined" ){
            IdlePath.pause();
        }
    });
    $(".PathFinder .Pocket").mouseenter(function(){
        var pathfinder = $(".PathFinder"),
            path = pathfinder.find("#Path");
        // Forbid hover reaction when user is dragging
        if( typeof(Draggable.get(path)) !== "undefined" && Draggable.get(path).isDragging ){ return; }
        // Check whether #Path overflows it's content
        if( ( path.innerWidth() - pathfinder.innerWidth() ) > 0 ){
            // Create animation Timeline
            IdlePath = new TimelineMax();
            var x = {
                from: "-=20",
                to: "+=20"
            };
            // Check Paths position to set animation accordingly
            if( path.position().left < 0 ){
                // Reverse motion attributes when Path is far to the left
                x = {
                    from: "+=20",
                    to: "-=20"
                };
            }
            // Set animations
            IdlePath.add(
                TweenMax.to("#Path", .5, {
                    x: x.from,
                })
            )
            .add(
                TweenMax.to("#Path", .5, {
                    x: x.to,
                })
            );
        }
    });

	// DivisionReactor
		// SpaceCyclone
	Cyclone = {isActive : false};
	$('#SpaceCyclone > .Storm .Tripwire').mouseenter(function(){
	    // Prohibit hover reactions when entering the storm
        if(Cyclone.isActive){return;}

		T = $(this).parent().parent();

		if( T.hasClass("Download") ){
			ToggleDownload();
		}

		if( T.hasClass("Request") ){
			ToggleRequest();
		}

		if( T.hasClass("Connect") ){
			ToggleConnect();
		}

	})
		.mouseleave(function(){
			if(Cyclone.isActive){return;}

			T = $(this).parent().parent();

			if( T.hasClass("Download") ){
				ToggleDownload(true);
			}

			if( T.hasClass("Request") ){
				ToggleRequest(true);
			}

			if( T.hasClass("Connect") ){
				ToggleConnect(true);
			}

		});

	$('#SpaceCyclone > .Storm .AlphaAsset .Title:not(.active),#SpaceCyclone > .Storm .BetaAsset:not(.Phone) .Title:not(.active)').mouseenter(function(){
		AssetHover($(this).parent());
	})
		.mouseleave(function(){
			AssetHover($(this).parent(),true);
	});
	$('#SpaceCyclone > .Download.Storm .AlphaAsset, #SpaceCyclone > .Download.Storm .BetaAsset').mouseenter(function(){
		AssetHover($(this));
	})
		.mouseleave(function(){
			AssetHover($(this),true);
	});
	$('#SpaceCyclone > .Storm .Tripwire').click(function(){
	    // Check if method is in the middle of entering/exiting
		if( typeof(EnterStorm) !== "undefined" && EnterStorm.isActive() ){
		    // Run when entering the storm
		    if( !EnterStorm.reversed() ){
                EnterStorm.reverse().eventCallback("onReverseComplete", function(){
                    // Deactivate cyclone activation indicator
                    Cyclone.isActive = false;
                    // Reappear footer
                    SC_Footer.reversed(!SC_Footer.reversed());
                    // Run hover reactions if a storm is hovered after the storm
                    if( $(".Storm.Download .Tripwire").is(":hover") ){
                        ToggleDownload();
                    }
                    if( $(".Storm.Request .Tripwire").is(":hover") ){
                        ToggleRequest();
                    }
                    if( $(".Storm.Connect .Tripwire").is(":hover") ){
                        ToggleConnect();
                    }
                });
                CutTripwire.reverse();
                Ritual.reverse();
                PostRitual.reverse();
            }
		    // Run when exiting the storm
		    else{
                EnterStorm.reversed(!EnterStorm.reversed());
                CutTripwire.reversed(!CutTripwire.reversed());
                Ritual.reversed(!Ritual.reversed());
                PostRitual.reversed(!PostRitual.reversed());
            }
		    // Prohibit method to rerun mid-fly
		    return;
        }
        Storm = $(this).parent().parent();
        Cyclone.isActive = Storm;
        SC_Footer.reverse();

		// Setting fly attributes
		SC_scale = 3;
		SC_HoldMyState = {
			ot : Storm.offset().top,
			ol : Storm.offset().left,
			w : Storm.innerWidth(),
			h : Storm.innerHeight()
		};
		EnterStorm = new TimelineMax();
		CutTripwire = new TimelineMax();
		Ritual = new TimelineMax();
		PostRitual = new TimelineMax();
		// Applying the curtain
		CurClass = ( Storm.hasClass("Request") ) ? "Req" :
			( Storm.hasClass("Download") ) ? "DL" :
				( Storm.hasClass("Connect") ) ? "Con" : "BOZ";
		Storm.siblings(".Curtain").addClass(CurClass);
		Ritual.add(
			TweenMax.to(Storm.siblings(".Curtain"), 1, {autoAlpha: .7}), 0
		);
		// Cut the tripwire
		CutTripwire
			.add(
			TweenMax.to(Storm.find(".Flow"), 1, {autoAlpha: 0, rotation: 360, scale: 0, transformOrigin: "center"}),0
		);
		// Pausing current running animations
		ToggleConnect(false);
		ToggleDownload(false);
		ToggleRequest(false);
		// Applying storm entrance effects
			// siblings storms
		Storm.siblings(".Storm").each(function(){
			Asc = $(this).children();
			AddFly.StormEntrance();
		});
			// BreathingFragment
		Asc = Storm.siblings(".BreathinFragment").children();
		AddFly.StormEntrance();
			// Current storms
		Asc = Storm.find(".StarFlow");
		AddFly.StormEntrance(true);
		EnterStorm.set(Storm, {zIndex: 2});
		// Apply storm ritual
		Asc = Storm.find(".Definer");
		StormRitual.Definer();
		Asc = Storm.find(".AlphaAsset");
		StormRitual.AlphaAsset();
		Asc = Storm.find(".BetaAsset");
		StormRitual.BetaAsset();

		// Finalize the Ritual
		Ritual.eventCallback("onComplete", function(){
            PostRitual.fromTo(Storm.find(".Definer > .Sub"), .4, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0}, 0)
            .fromTo([Storm.not(".Download").find(".AlphaAsset .Sub"), Storm.find(".BetaAsset .Sub")], .4, {y: -20}, {autoAlpha: 1, y: 0}, 0)
            .to(Storm.not(".Download").find(".Divider"), 1, {autoAlpha: 1}, 0);
            // Disable Definer hover/enter/close asset after enter
            TweenMax.set(Storm.find(".Tripwire"), {autoAlpha: 0}, 0);
			if (Storm.find(".AlphaAsset:hover").length != 0) {
				AssetHover(Storm.find(".AlphaAsset"));
			}
			if (Storm.find(".BetaAsset:hover").length != 0) {
				AssetHover(Storm.find(".BetaAsset"));
			}
			Glitch.on("#Gandalf", null);
			// Enable Definer asset hover reactions
			Area69.enabled();
			// Perform hover reactions if Definer asset is hovered after entrance
			if( Storm.find(".Area69").is(":hover") ){
				Area69.set(Storm.find(".Area69"));
			}
		});
	});
	StormForm = [];
	$("#SpaceCyclone > .Storm .Title").click(function (){
		AssetForm($(this));
	});

	$('#SpaceCyclone .Attach').click(function(){
		input = $(this).siblings('input');
		if( input.val() !== "" ){
			input.val("");
			$(this).html("Attach a file");
			return;
		};
		input.click();
		input.change(function(e){
			fileName = e.target.files[0].name;
			$(this).siblings('.Attach').html(fileName);
		});
	});
	$("#SpaceCyclone > .Storm form input[type='text']").focusin(function(){
		FormEffects.fadeout($(this));
	});
	$("#SpaceCyclone > .Storm form textarea").focusin(function(){
		FormEffects.fadeout($(this));
	});
	$("#SpaceCyclone > .Storm form input, #SpaceCyclone > .Storm form textarea").focusout(function(){
		FormEffects.reverse($(this));
	});
	$("#SpaceCyclone > .Storm form").submit(function(e){
	    // Refuse to redirect
	    e.preventDefault();
	    // Collect form's inputs
        var inputs = $(this).find("input:not([type='file']), .TextArea > textarea"),
            regx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            error = 0,
            file = $(this).find("[type='file']"),
            err_container = "#"+$(this).attr("id")+" .Error",
            form = $(this);
        $.each(inputs, function(){
            var efilter = $(this).filter("[name='email']");
           if(
               ( !efilter.length && !$(this).val() ) ||
               ( efilter.length && !efilter.val().match(regx) )
           ){
               // Addup the error count
               error++;
               // Indicate error on inputs
               TweenMax.to( $(this), .1, {border: "1px solid red"} );
           }else{
               TweenMax.to( $(this), .1, {border: "0"} );
           }
        });
        // Check for errors
        if( error ){
            // Print the error message
            error = "Please review the highlighted fields";
            Glitch.on(err_container, error);
            // End the request due to errors
            return false;
        }
        // Build the data object
        var data = {
            name: $(inputs[0]).val(),
            email: $(inputs[1]).val(),
            subject: $(inputs[2]).val(),
            context: $(inputs[3]).val()
        };
        // Include the file if provided
        if( file.prop("files").length ){
            data.file = file.prop("files")[0].name;
        }
        // Finalize and clear form of previous error remains
        if( $(err_container).text() ){
            Glitch.on(err_container, null);
        }
        // Update send status
        Glitch.on("#Gandalf", "Sending...");
        $.ajax(
            {
                type: "POST",
                url: "http://localhost/~Projecat_END/",
                data: data,
                success: function(response){
                    if( response === "sent" ){
                    // Request asset reset and send a function to run after the reset animation
                        AssetForm(form.siblings(".Title"), function(){
                            // Reset the form
                            form[0].reset();
                            // Bring back the place holders
                            form.find("input:not([type='file']), textarea").each(function(){
                                FormEffects.reverse($(this));
                            });
                            // Update send status
                            Glitch.on("#Gandalf", "Message sent!");
                        });
                    }
                },
                error: function(){
                    // Print error message
                    Glitch.on(err_container, "Hmm... Something's not right...");
                    // Update send status
                    Glitch.on("#Gandalf", "Send unsuccessful!");
                }
            }
        )
    });
	$("#SpaceCyclone > .Storm .Definer").click(function(){
        // Check if method is in the middle of entering/exiting
        if( typeof(EnterStorm) !== "undefined" && EnterStorm.isActive() ){
            // Run when entering
            if( !EnterStorm.reversed() ){
                EnterStorm.reverse();
                CutTripwire.reverse();
                // Cancel reverse on the renewed Ritual
                Ritual.reversed(!Ritual.reversed());
            }
            // Run when exiting
            else{
                EnterStorm.reversed(!EnterStorm.reversed());
                CutTripwire.reversed(!CutTripwire.reversed());
                // Since Ritual is renewed in ExitStorm() method is not reversed yet
                Ritual.reverse().eventCallback("onReverseComplete", function(){
                    // Run post ritual sequences after resettling
                    PostRitual.reversed(!PostRitual.reversed());
                });
            }
            // Prohibit calling ExitStorm() method mid-fly
            return;
        }
		ExitStorm($(this).parent().parent());
	});
	// Add hover reactions
    $("#SpaceCyclone > .Storm .Definer .Area69").mouseenter(function(){
		Area69.set($(this));
    }).mouseleave(function(){
    	Area69.reset($(this));
    });
	$("#Footer > a").mouseenter(function(){
	    TweenMax.to($(this).find("img"), .15, {
	        scale: 1.3,
	        transformOrigin: "50% 100%",
            ease: Power1.easeOut
        });
	    TweenMax.to($(this).find(".Line"), .15, {
	        scaleY: 1,
	        transformOrigin: "50% 100%",
            ease: Power1.easeOut
        });
    })
        .mouseleave(function(){
        TweenMax.to($(this).find("img"), .15, {
            scale: 1,
            ease: Power1.easeOut
        });
        TweenMax.to($(this).find(".Line"), .15, {
            scaleY: 0,
            ease: Power1.easeOut
        });
    });

		// Skillometer
	CoreClick = false; AffectedCores = {Core: [], Waya: []};
	CoreKeepa = $(".CoreKeepa");
	SkiloBrrr = new TimelineMax({repeat: -1,paused: true,yoyo: true});
	SkiloBrrr
		.to("#Skillometer .Device", .04, {x: 2})
		.to("#Skillometer .Device", .04, {x: -2});
    Dangerous = new TimelineMax({repeat: -1,paused: true,yoyo: true});
	Dangerous.fromTo(".InfoPanel .Danger", .4,{
        autoAlpha: .3, ease:  Power0.easeNone
    },{
        autoAlpha: 1, ease:  Power0.easeNone
    },0);
	DeviceEmpty = new TimelineMax({paused: true});
    DeviceEmpty
        .to("#Skillometer .Device", .08, {x: 4})
        .to("#Skillometer .Device", .08, {x: -4})
        .to("#Skillometer .Device", .08, {x: 4})
        .to("#Skillometer .Device", .08, {x: 0})
        .staggerTo("#Skillometer .Waya", .5, {backgroundPositionX: function(i,asset){
            var width = $(asset).innerWidth();
            // Animate 20% of the background relative to it's container
            return width * .2 + "%"
            }}, .15,0)
        .staggerTo("#Skillometer .Core", .24, {autoAlpha: .3}, 0,0)
        .staggerTo("#Skillometer .Core", .24, {autoAlpha: 1}, .15,.1);
    DeviceEmpty.eventCallback("onComplete", function(){
        // Reverse Waya elements to their default position
        TweenMax.to( "#Skillometer .Waya", .5, {backgroundPositionX: 0} )
    });

	Laser = {
		make : function(){
			$("#Skillometer .Laser > div").each(function(i){
				total = $(this).parent().children().length;
				TempLog = TweenMax.fromTo($(this), .5*(total), {y: "100%"}, {paused: true,y: "-100%", ease: Power0.easeNone, onComplete: LogEffect,onCompleteParams: ["{self}",i,total]});
				TempLog.seek(.5*i);
			});
			TweenMax.set($("#Skillometer .Laser"), {scaleY: 0,transformOrigin: "bottom"});
		},
		play : function(){
			$(TweenMax.getTweensOf("#Skillometer .Laser > div")).each(function(){
				this.resume();
			});
			TweenMax.to($("#Skillometer .Laser"), .2, {scaleY: 1, onComplete: function(){
			    // Check if the device is currently loaded
			    if( LoadedCore ){
                    InfoPanel.on($(CoreMove._first.target[0]).parent());
                }
				}});
		},
		pause : function(){
			$(TweenMax.getTweensOf("#Skillometer .Laser > div")).each(function(){
				this.pause();
			});
			TweenMax.to($("#Skillometer .Laser"), .2, {scaleY: 0});
		}
	};
	Laser.make();
	function LogEffect(Log){Log.seek(0);}

	InfoBase = [
		{core: "Core A", power: 91.27991752315},
		{core: "Core B", power: 87.62110928734},
		{core: "Core C", power: 84.12501984725},
		{core: "Core D", power: 95.62610923857},
		{core: "Core E", power: 64.95250198237},
		{core: "Core F", power: 93.47753219876},
		{core: "Core G", power: 90.64215230958},
		{core: "Core H", power: 33.97610259817}
	];
	InfoPanelState = [false];
	InfoPanel = {
		on : function (Core){
			L = $("#Skillometer .Power span:first-child").html().length;
			MaxPower = 2*Math.pow(10,L);
			CorePower = 0;
			ToughEase = RoughEase.ease.config({ template:
				Power0.easeNone,
				strength:
					1,
				points:
					20,
				taper:
					"none",
				randomize: true,
				clamp: false
			});

			$(InfoBase).each(function(){
				if( Core.hasClass(this.core) ){
					CorePower = (MaxPower*this.power)/100;
					SupPower = 12+Math.round((12*this.power)/100);
					Decimal = (Math.round(CorePower)/Math.pow(10,L)).toFixed(L-5);
					CorePower = Decimal+"×"+10;
					$("#Skillometer .Power sup").html(SupPower);

					TweenMax.to($("#Skillometer #Info"), .2, {scaleX: 1});
					TweenMax.to($("#Skillometer #Thunder"), .5, {scaleX: this.power/100});
					// Check if the core's power is dangerous
					if( this.power > 70 ){
					    if( Dangerous.reversed() ){
					        Dangerous.reversed(!Dangerous.reversed());
                        }
					    // Run danger sign blink animation
                        Dangerous.resume();
					}
					LitteralPower = ( SupPower < 15 ) ? 0 :
							( SupPower < 18 ) ? 1 :
							( SupPower < 21 ) ? 2 :  3;
                    LP = TweenMax.to($("#Skillometer .Measure").children().eq(LitteralPower), .5, {autoAlpha: 1, ease: ToughEase});
					Glitch.on("#Skillometer .Power span:first-child", CorePower);
				}
			});
			InfoPanel.active(true);
		},
		off : function (){
		    // Abort method when InfoPanel is already off
			if( !InfoPanel.active() ){ return; }
			TweenMax.to($("#Skillometer #Info"), .1, {scaleX: 0});
			TweenMax.to($("#Skillometer #Thunder"), .2, {scaleX: 0});
			// Stop danger sign's animation
			if( Dangerous.time() !== 0 ){
                Dangerous.reverse(Dangerous.time());
			}else{
                Dangerous.reverse();
            }
			// Fade measure labels
            LP.reverse();
			$("#Skillometer .Power sup").html("");
			Glitch.on("#Skillometer .Power span:first-child", "----------");
			InfoPanel.active(false);
		},
		active : function(state){
			if(typeof(state) == "boolean"){
				InfoPanelState[0] = state;
			}else{
				return InfoPanelState[0];
			}
		}
	};
	// Variable indicating whether the device is loaded
    LoadedCore = false;

    $("#Skillometer .Glued").click(function(){
        if( !DeviceEmpty.isActive() ){
            DeviceEmpty.restart();
        }
    });
	$("#Skillometer .Core .Strikes").mouseenter(function(){
		CoreElement = $(this).parent().parent().parent();
		if( CoreClick == CoreElement.attr("class") ){return;}
		OBJ = $(this).siblings(".Title").find(">span");
		Core = CoreElement.find(".Extender");
		Dur = ((OBJ.width()*100)/OBJ.parent().innerWidth())/125;
		if( typeof(TitleSlider) !== "undefined" && TitleSlider.isActive() ){
			ReverseCore();
		}
		TitleSlider = new TimelineMax({yoyo: true,repeat: -1, paused: true});
		Flicker = new TimelineMax({yoyo: true,repeat: -1, paused: true});
		Brrr = new TimelineMax({yoyo: true,repeat: -1, paused: true});
		TitleSlider
			.to(OBJ, Dur,  {x: "-100%", ease:  SlowMo.ease.config( 0.2, 0.2, false)}, 0);
		Flicker
			.fromTo(Core.children(), .4, {autoAlpha: 1, ease:  SlowMo.ease.config( 0.2, 0.2, false)}, {autoAlpha: .3, ease:  SlowMo.ease.config( 0.2, 0.2, false)});
		Brrr
			.fromTo(Core.children(), .06, {x: 0}, {x: 2})
			.to(Core.children(), .06, {x: -2});
		TweenMax.to(OBJ, Dur/2, {x: "0%", ease:  SlowMo.ease.config( 0.2, 0.2, false), onComplete: ApplySlider, onCompleteParams: [OBJ]});
	})
		.mouseleave(function(){
		if( CoreClick !== $(this).parent().attr("class") ){ReverseCore();}
	});
	$("#Skillometer .Core .Strikes").click(function(){
		CoreElement = $(this).parent().parent().parent();
		// Cancell load when same element is requested
		if( CoreClick == CoreElement.attr("class") ){
			ReverseCore(true);
			CoreClick = false;
			SkiloBrrr.kill();
			RemoveCore();
            LoadedCore = false;
			return;
		}
		ReverseCore(true);
		// Check if any other element is engaging with the device
		if( typeof(CoreSlot) !== "undefined" && CoreSlot.children().length > 0 ){
		    // Cancel load of the last unplaced element
			Emginashun.duration(Emginashun.duration()/14.4).reverse().eventCallback("onReverseComplete",DelCore,[Emginashun._first.target[0]]);
			Laser.pause();
			if( LoadedCore ){ InfoPanel.off(); }
			// Update status on Gandalf when a core is requested while another core is placed
            $(this).data({GandalfOpt: 1});
            LoadedCore = false;
		}else{
            // Update status on Gandalf for a new core request
            $(this).data({GandalfOpt: 0});
        }
        $("#Skillometer .Glued").data({GandalfActive: false});
		CoreClick = CoreElement.attr("class");
		Core = CoreElement.find(".Extender");
		Dur = .5;
		MiddleX = ((CoreElement.parent().find(".CoreKeepa").offset().left+CoreElement.parent().find(".CoreKeepa").innerWidth()/2)-(CoreElement.offset().left+CoreElement.innerWidth()/2));
		MiddleY = ((CoreElement.parent().find(".CoreKeepa").offset().top+CoreElement.parent().find(".CoreKeepa").innerWidth()/2)-(CoreElement.offset().top+CoreElement.innerHeight()/2));
		CoreMove = new TimelineMax({paused: true});
		CoreMove
			.to(Core, Dur, {
				x: MiddleX,
				y: MiddleY,
				ease:  Back.easeIn.config(2)
			}, 0)
			.to(Core.find(".Waya"), Dur, {
				scaleX: 0,
				ease:  Back.easeIn.config(2)
			}, 0);
		CoreMove.play().eventCallback("onComplete",CoreArrived);
		AffectedCores.Core.push(Core);AffectedCores.Waya.push(Core.find(".Waya"));

		CoreSlot = $(".CoreSlot");
		CoreClone = Core.find(".Strikes,.Title").clone();
		CoreClone.find("*").css("transform","");

		CoreSlot.append("<div class=\"Core\"></div>");
		var ActiveCore = CoreSlot.children(":last-child");
		ActiveCore.append(Core.find(".Board").clone());
		ActiveCore.append("<div class='ForReactor'></div>");
		ActiveCore.find(".ForReactor").html(CoreClone);

		GlowOnEnter = new TimelineMax({paused: true});
		GlowOnEnter.to($("#Skillometer .GeloV>div"), Dur/2,{
			opacity: .6,
			ease:  Power1. easeOut
		}).to($("#Skillometer .GeloV>div"), Dur/2,{
			opacity: 0,
			ease: Expo.easeIn
		});
		Emginashun = new TimelineMax({paused: true});
		ToughEase = RoughEase.ease.config({ template:
			Power0.easeNone,
			strength:
				1,
			points:
				20,
			taper:
				"none",
			randomize: true,
			clamp: false
		});
		Emginashun.to([ActiveCore.find(".ForReactor"),$("#Skillometer .GeloV>div")], .15, {
			autoAlpha: 1,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),$("#Skillometer .GeloV>div")], .15, {
			autoAlpha: 0,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),$("#Skillometer .GeloV>div")], .15, {
			autoAlpha: 1,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),$("#Skillometer .GeloV>div")], .15, {
			autoAlpha: 0,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),$("#Skillometer .GeloV>div")], .4, {
			autoAlpha: 1,
			scale: 1,
			ease:   ToughEase,
			onComplete: function(){
                CoreGlow.play(); SkiloBrrr.play(); Laser.play();
                TweenMax.set(CoreSlot, {zIndex: 2});
                TweenMax.set(CoreKeepa, {zIndex: 2,autoAlpha: 0});
                // Update status on Gandalf after core is placed
                Glitch.on("#Gandalf", "Core analysis completed");
                LoadedCore = CoreElement;
            }
		});
		CoreGlow = new TimelineMax({repeat: -1,paused: true,yoyo: true});
		CoreGlow.to(CoreKeepa, .4,{
			autoAlpha: 1, ease:  SlowMo.ease.config( 0.2, 0.2, false)
		},0).to(ActiveCore.find(".Strikes"), .4, {
			autoAlpha: 1, ease:  SlowMo.ease.config( 0.2, 0.2, false)
		},0);
		Slider = ActiveCore.find(".Title>span");
		CoreSliderDur = ((Slider.width()*100)/Slider.parent().innerWidth())/125;
		CoreSlider = new TimelineMax({yoyo: true,repeat: -1, paused: true});
		CoreSlider
			.to(Slider, CoreSliderDur,  {x: "-100%", ease:  SlowMo.ease.config( 0.2, 0.2, false)}, 0);

		TweenMax.to(Slider, CoreSliderDur/2, {x: "0%", ease:  SlowMo.ease.config( 0.2, 0.2, false), onComplete: ApplyCoreSlide, onCompleteParams: [Slider]});
		TweenMax.set(CoreSlot, {zIndex: 0});
		TweenMax.set(CoreKeepa, {zIndex: 0,autoAlpha: 1});
		TweenMax.set(ActiveCore.find(".ForReactor"), {autoAlpha: 0});
		Emginashun.delay(GlowOnEnter.duration()).play();
	});
	$(".CoreSlot").click(function(){
		if( Emginashun.reversed() ){ return; }
		if( typeof(CoreSlot) !== "undefined" && CoreSlot.children().length > 0 ){
			Laser.pause();
            if( LoadedCore ){ InfoPanel.off(); }
			RemoveCore();
			CoreClick = false;
            LoadedCore = false;
			AffectedCores = {Core: [], Waya: []};
		}
	});

	// AntiToxins
	NameTag = {
		play: function(t){
			var Name = t.find(".Name"),
				NameT = t.find(".NameTag"),
				Divider = t.find(".Divider"),
				Cont = t.find(".Container"),
				Diaml = t.find(".Diamond").offset().left,
				PageW = window.innerWidth;
			// Whether current Particle is far to the left half of the page
			if( Diaml < PageW / 2 ){
				var DX = -40, // Divider X
					NTX = -20; // NameTag X
				TweenMax.set( NameT, {left: Cont.width()} );
				TweenMax.set( Divider, {left: 0} );
			}
			// Or it's far to the right half of teh page
			else{
				var DX = 40, // Divider X
					NTX = 20; // NameTag X
				TweenMax.set( NameT, {right: Cont.width()} );
				TweenMax.set( Divider, {right: 0} );
			}
			DeployNameTag = new TimelineMax();
			DeployNameTag.fromTo(Divider, .35,{
				autoAlpha: 0,
				x: DX
			},{
				autoAlpha: 1,
				x: 0
			}).fromTo(Name, .35,{
				autoAlpha: 0,
				x: NTX
			},{
				autoAlpha: 1,
				x: -NTX
			}, "-=.2");
		},
		reverse: function(duration){
			var dur = ( typeof(duration) === "number" ) ? duration : null ;
			// Reverse TagName deployment if already not reversed
			if( !DeployNameTag.reversed() ){
				if( dur !== null ){ DeployNameTag.duration(dur); }
				DeployNameTag.reverse();
			}
		}
	}
	$("#AntiToxins .DevParticle, #AntiToxins .ArtParticle").mouseenter(function(){
		// Abort reaction if SingleParticle is open or when entering particle
		if( Particle.isActive || ( typeof(EnterParticle) !== "undefined" && EnterParticle.isActive() ) ){ return; }
		// Get and fade the stars and all other particles but the current one
		var FadeAssets = ( $(this).hasClass("DevParticle") ) ? $(this).siblings(".DevParticle, .ArtStar, .ArtParticle") : $(this).siblings(".DevStar, .DevParticle, .ArtParticle");
		TweenMax.to(FadeAssets, .5, {opacity: .2});
		NameTag.play($(this));
	})
	.mouseleave(function(){
		// Abort reaction if SingleParticle is open or when entering particle
		if( Particle.isActive || ( typeof(EnterParticle) !== "undefined" && EnterParticle.isActive() ) ){ return; }
		// Resetting blurred assets on mouseleave
		var FadeAssets = $(this).siblings(".DevStar, .DevParticle, .ArtStar, .ArtParticle");
		TweenMax.to(FadeAssets, .5, {opacity: 1});
		// Remove NameTag
		NameTag.reverse();
	});
	Particle = {isActive : false, activeObj: null, Navigated: false};
	$("#AntiToxins .DevParticle, #AntiToxins .ArtParticle").click(function(e){
		ParticleActivation($(this), e);
		// Remove NameTag
		NameTag.reverse(.2);
	});
	TrackLines = {
		obj: [],
        isActive : {},
		disabled : false,
        fade: function(){
            // Check to see which TrackLine group is active and save it's assets
            $.each(this.isActive, function(k,v){
                // Find the active group
                if( v === true ){
                    TweenMax.to(TrackLines.obj[k], .2, {autoAlpha: 0});
                }
            });
        }
	};

	$(".ArtStar, .DevStar").click(function(){
		var Particles = ( $(this).hasClass("DevStar") ) ? $("#AntiToxins .DevParticle:not(.CLONED)") : $("#AntiToxins .ArtParticle:not(.CLONED)"),
			Star = $(this),
			Class = $(this).attr("class");
		if( TrackLines.disabled === true || TrackLines.isActive[Class] ){
			$(this).data({GandalfActive: false});
			return;
		}
		$(this).data({GandalfActive: true});
		TrackLines.isActive[Class] = true;

		if( typeof(TrackLines.obj[Class]) === "undefined" ){
			TrackLines.obj[Class] = [];
			$( Particles ).each(function(){
				var Line = Star.append("<div class='Line'></div>").children(".Line").last();
				TrackLines.obj[Class].push(Line);
			});
		}
		$( Particles ).each(function(i){
			var Particle = $(this).children(".Container").children();
			var Origin = "right" ,
				SP = {
				X : Particle.offset().left + ( $(this).width() / 2 ),
				Y : Particle.offset().top + ( $(this).width() / 2 )
			},
			TP = {
				X : Star.offset().left + ( Star.width() / 2 ),
				Y : Star.offset().top + ( Star.width() / 2 )
			},
			Width = Math.sqrt( (SP.X-TP.X)*(SP.X-TP.X) + (SP.Y-TP.Y)*(SP.Y-TP.Y) ),
			Angle = Math.atan2(TP.Y - SP.Y, TP.X - SP.X) * 180 / Math.PI;

			var NonAlteredH = TrackLines.obj[Class][i].innerHeight();
			TweenMax.set(TrackLines.obj[Class][i], {
				top: "50%",
				right: "50%",
				width: 1,
				rotation: 0
			});
			var NonAlteredOT = TrackLines.obj[Class][i].offset().top;
			TweenMax.set(TrackLines.obj[Class][i], {
				width: Width,
				rotation: Angle
			});

			TweenMax.fromTo(TrackLines.obj[Class][i], .4, {
			    autoAlpha: 1,
				scaleX: 0,
				transformOrigin: Origin
			},{
				scaleX: 1,
				delay: i*.05,
				transformOrigin: Origin,
				onCompleteParams: ["{self}"],
				ease: Sine. easeOut,
				onComplete: function(tween){
					var obj = TrackLines.obj[Class][i];
					TweenMax.set(obj, {
						width: Width,
						rotation: 180+Angle,
						top: "+="+( ( SP.Y ) - TP.Y ),
						right: "+="+((window.innerWidth - SP.X) - ( window.innerWidth - TP.X ))
					});
                    tween.reverse();
                    if( i+1 === Particles.length ){
                        tween.eventCallback("onReverseComplete", function(){
                            TrackLines.isActive[Class] = false;
                        });
                    }
					TweenMax.fromTo(Particle, .2,{
						scale: 1
					},{
						scale: 1.1,
						repeat: 1,
						yoyo: true,
						ease:  Sine. easeOut
					});
				}
			})
		});
	});
	$("#AntiToxins .ArtSign, #AntiToxins .DevSign").click(function(){
	    if( typeof(SignGlitch) !== "undefined" && ( typeof(EnterParticle) !== "undefined" && EnterParticle.isActive() ) ){
            SignGlitch.invalidate().pause();
        }
		var beam = ( $(this).hasClass("ArtSign") ) ? $(this).siblings(".ArtSignBeam") : $(this).siblings(".DevSignBeam");
		SignGlitch = new TimelineMax();
		SignGlitch
			.fromTo( [ beam, $(this) ], .5, {
				autoAlpha: 0
			}, {
				autoAlpha: 1,
				ease: RoughEase.ease.config({ template:
					Power0. easeOut,
					strength:
						1,
					points:
						10,
					taper:
						"none",
					randomize: false,
					clamp: false
				})
			}, 0);
	});

	// Analyzer

	Analyzer = { isActive: false, object: false,
		Sequence: function(T){
			// Toggle hover ability for crystal
			$(".Crystal").toggleClass("active")
			// Change Peek's content
			.data({PeekOption: 1});
			// Indicate reverse request
			if( Analyzer.isActive ){
				Analyzer.Reverse(T);
			}
			// Set & replace new data
			Analyzer.isActive = T.parent().attr("class");
			Analyzer.object = T.parent();
			TweenMax.set(T, {autoAlpha: 0});
			DimeEntrance = new TimelineMax();
			FaceAppear = new TimelineMax({paused: true});
			DimeRotate = new TimelineMax({paused : true});
			var Particle = T.parent(),
				MovingPart = T.siblings(".dime"),
				AnalyzerCore = $(".Analyzer > .Core"),
				TargetX = ( AnalyzerCore.offset().left + AnalyzerCore.innerWidth() / 2 ) - ( MovingPart.offset().left + MovingPart.innerWidth() / 2 ),
				TargetY = ( AnalyzerCore.offset().top + AnalyzerCore.innerHeight() / 2 ) - ( MovingPart.offset().top + MovingPart.innerHeight() / 2 ),
				NegOrPos = (Math.floor(Math.random() * 2));
			// Creating a random rotation for each particle
			if (NegOrPos) {
				var Rotation = - 270 - Math.floor(Math.random() * 360) + 1;
			} else {
				var Rotation = 270 + Math.floor(Math.random() * 360) + 1;
			}
			// Particle faded rotation animation
			DimeRotate.add(
				TweenMax.to( MovingPart, 1, {
					rotation: 2160,
					autoAlpha: 0,
					scale: 3
				}), 0
			);
			// Particle entrance animation
			DimeEntrance.to( MovingPart, .5, {
				x: TargetX,
				y: TargetY,
				ease: Expo.easeIn,
				rotation: Rotation,
				// Turning the Analyzer on after the particle reached the core
				onComplete: function(){
					DimeRotate.resume();
					// Searching and matching for the current particle in the database
					$(Personalities).each(function(){
						if( Particle.hasClass(this.particle) ) {
							var TheFace = $("#" + this.face);
							FaceAppear.to([ TheFace, "#Analyzer .CloudGlow" ], .5, {
								autoAlpha: 1,
								ease: RoughEase.ease.config({
									template:
									Power0.easeNone,
									strength:
										1,
									points:
										20,
									taper:
										"none",
									randomize: true,
									clamp: false
								})
							});
							// Update status on Gandalf
							Glitch.on("#Gandalf", "Stone analyzed");
							// Deactive stone select notice
							$("#PrevFace, #NextFace").data({GandalfActive: false});

							var CurrentActive = $(".Analyzer .Faces > div.active");
							// Making sure of the existence of the current active particle
							if( CurrentActive ){
								FaceAppear.resume();
								// Checking if the power rotate isn't finished yet
								if( !CrystalRotation.isActive() ){
									CrystalPowerRotation = TweenMax.to( "#Analyzer .Crystal", 1.2,{
										rotation: 360,
										ease: Expo.easeIn,
										onComplete: function(){
											if(CrystalRotation.reversed()){
												CrystalRotation.reversed( !CrystalRotation.reversed() );
											}
											CrystalRotation.resume();
										}
									});
								}
								// If it is still running we wont re-create the PowerRotation
								else{
									if(CrystalRotation.reversed()){
										CrystalRotation.reversed( !CrystalRotation.reversed() );
									}
									CrystalRotation.resume();
								}
								// Toggle active clasees
								CurrentActive.removeClass("active");
								TheFace.addClass("active");
								// Placing the content
								$("#Analyzer .Plate .Content > div").html(this.content);
								AnalyzePlate.reverse();
								Glitch.on("#Analyzer .Core .Cloud", this.title);


                                var plate = $("#Analyzer .Plate .Content"),
                                    content = plate.find("> div"),
                                    formula = content.innerHeight() - plate.innerHeight();
                                TweenMax.set(plate, {overflow: "hidden"});
                                // Move the content to the first line
                                TweenMax.set(content, {y: 0});
                                // Check if the content overflows it's container
                                if( formula > 0 ){
                                    // Enable dragging feature
                                    Draggable.create(content,{
                                        type: "y",
                                        bounds: {y: 10},
                                        dragResistance: .5,
                                        onPress: function(){
                                            // Kill the running hover indicator
                                            TweenMax.getTweensOf(content, true)[0].kill();
                                        },
                                        onDragEnd: function(){
                                            var yvalue = null;
                                            // Reverse the path to the top side if user is far up
                                            if( this.y < -formula ){
                                                yvalue = -formula;
                                            }
                                            // Do the same above to lower side
                                            if( this.y > 0 ){
                                                yvalue = 0;
                                            }
                                            TweenMax.to(content, .25,
                                                {
                                                    y: yvalue
                                                });
                                        }
                                    });
                                }
                                else{
                                    if( Draggable.get(content) ){
                                        // Remove drag feature when path doesn't overflow it's container
                                        Draggable.get(content).kill();
                                    }
                                    // Move1 the path back to it's original position if it was altered
                                    TweenMax.to(content, .25, {
                                        y: 0,
                                        ease: Back. easeInOut
                                    });
                                }



                                content.mouseenter(function(){
                                    var plate = $("#Analyzer .Plate .Content"),
                                        content = plate.find("> div");
                                    // Forbid hover reaction when user is dragging
                                    if( typeof(Draggable.get(content)) !== "undefined" && Draggable.get(content).isDragging ){ return; }
                                    // Check whether #content overflows it's content
                                    if( ( content.innerHeight() - plate.innerHeight() ) > 0 ){
                                        var y = {
                                            from: "-=20",
                                            to: "+=20"
                                        };
                                        // Check if the content is not near the top
                                        if( content.position().top+20 < 0 ){
                                            // Reverse animation's direction
                                            var y = {
                                                from: "+=20",
                                                to: "-=20"
                                            };
                                        }
                                        // Set animations
                                        var PlatePasser = new TimelineMax();
                                        PlatePasser.to(content, .25, {
                                            y: y.from,
                                        }).to(content, .25, {
                                            y: y.to,
                                        });
                                    }
                                });


                            }
						}
					});
				}
			})
		},
		Reverse: function(T, FullReset){
			// Toggling hover ability for crystal
			$(".Crystal").toggleClass("active")
			// Change Peek's content
			.data({PeekOption: 0});
			Peeker.set($(".Crystal"));

			// Not allowing the same reversing particle to reverse
			if( T.parent().hasClass(Analyzer.isActive) && DimeEntrance.isActive() ){
				return;
			}
			// Reversing particle when it's in the active stage
			if( !CrystalRotation.reversed() ){
				if( CrystalRotation.time() !== 0 ){ CrystalRotation.reverse(CrystalRotation.time()) }
				else{ CrystalRotation.reverse() }
			}
			// Reversing particle when it's activating in the PowerRotate stage
			if( CrystalPowerRotation.isActive() ){
				if( CrystalPowerRotation.time() !== 0 ){ CrystalPowerRotation.reverse(CrystalPowerRotation.time()) }
				else{ CrystalPowerRotation.reverse() }
			}
			// Reversing the DimeRotate animation effects
			TweenMax.to(DimeRotate._first.target[0], .2, {
				autoAlpha: 1,
				rotation: 0,
				scale: 1
			});
			// Reversing other animation groups
			FaceAppear.reverse();
			DimeEntrance.reverse();
			if( AnalyzePlate.reversed() ){
				AnalyzePlate.reversed( !AnalyzePlate.reversed() ).resume();
			}
			// Re-activating active particle's click & hover ability
			TweenMax.set(Analyzer.object.children(".hover"), {autoAlpha: 1});
			// Resetting variables
			Analyzer.object = false;
			Analyzer.isActive = false;
			if( FullReset ){
				Glitch.on("#Analyzer .Core .Cloud", "SELECT A STONE");
				// Reactivate stone select notice
				$("#PrevFace, #NextFace").data({GandalfActive: true});
			}
		}
	};

	$("#Analyzer .Particles > div > .hover").click(function(){
		Analyzer.Sequence($(this));
	});
	$("#PrevFace, #NextFace").click(function(){
		var Prevent = false;
		if( Analyzer.isActive ){
			var NavTo = ( $(this).attr("id") == "PrevFace" ) ? Analyzer.object.prev()  :
				Analyzer.object.next();
			if( NavTo.length !== 0 ){
				Analyzer.Sequence(NavTo.children(".hover"));
			}else{
				Prevent = true;
			}
		}else{
			Prevent = true;
		}
		if( Prevent ){
			PedalPrevent = new TimelineMax({repeat: 1});
			PedalPrevent
				.to($(this), .025, {y: "5%"})
				.to($(this), .05, {y: "-5%"})
				.to($(this), .025, {y: "0%"});
		}
	});
	$(".Analyzer .Crystal").click(function(){
		if( Analyzer.isActive ){
			Analyzer.Reverse(Analyzer.object, true);
		}else{
			EmptyAnalyzer = new TimelineMax();
			EmptyAnalyzer.to(".Analyzer .Crystal", 1, {
				rotation: "+=360",
				ease: Power3. easeOut
			}, 0);
			EmptyAnalyzer.fromTo(".LeftWing, .RightWing", .4, {
				autoAlpha: 1
			}, {
				autoAlpha: .5
			}, 0);
			TweenMax.staggerFromTo(".TheStorm .Particles > *", .2, {autoAlpha: 1, scale: 1}, {
				autoAlpha: 0,
				scale: 1.5,
				onComplete: function(t){
					// Reverse each tween individually after their done
					t.reverse();
					// Reverse Analyzer and WindStorm effects after the last tween is done
					if( $(t.target).is(":last-child") ){
						EmptyAnalyzer.reverse();
					}
				}, onCompleteParams: ["{self}"]}, .1, 0);
		}
	});

	// DeckCloud
	CardHover = { isActive: [], append: [], AlreadyActive: [], HoverReveal: [] };
	CardSelect = { isActive: [], object: [], mdReset: [], validator: [] };
	$(".Cards > div").mouseenter(function(){
		CardHoverIn( $(this) );
	})
		.mouseleave(function(e){
			var T = $(this).parent().parent().attr("class");
		if( ( typeof(CardSelect.isActive[T]) !== "undefined" && CardSelect.isActive[T] ) || CardSelect.validator[T] ){
			// if( CardSelect.validator[T] && !$(this).parent().children().filter(function() { return $(this).is(":hover"); }).length ){
			if( CardSelect.validator[T] && !$(this).parent().children().filter(function() { return $(this).is(":hover"); }).length ){
				// Hover is enabled when when mousedown is triggered and cursor leaves the cards area
				// Resetting mousedown variables
				CardSelect.validator[T] = 0; CardSelect.mdReset[T] = false;
			}else{
				// Hover is disabled when a card is selected and when mousedown is triggered
				return;
			}
		}
		var nextsiblings = $(this).nextAll(),
			ActiveHover = $(nextsiblings).filter(function() { return $(this).is(":hover"); }),
			prevsiblings = ActiveHover.prevAll().toArray().reverse();
		// Resetting the hovered element back to it's original state
		TweenMax.to( ActiveHover.children(), .1, {
			scaleY: 1,
			transformOrigin: "50% 100%"
		} );
		// Checking to see if any of the the next ( active ) siblings are hovered
		if( ActiveHover.length && typeof(CardHover.HoverReveal[T]) !== "undefined" && prevsiblings.length ){
			// var Hm = CardHover.HoverReveal[T].getTweensOf(ActiveHover.children());
			// Removing the targeted tween from the main timeline
			// CardHover.HoverReveal[T].remove( Hm );
			// Removing the targeted element from active elements lists as well
			ii = 0;
			function ResetCard(hit){
				var Hm = CardHover.HoverReveal[T].getTweensOf(hit.children());
				TweenMax.to( hit.children(), .1, {
					scaleY: 1,
					transformOrigin: "50% 100%"
				} );
				// Removing the targeted tween from the main timeline
				CardHover.HoverReveal[T].remove( Hm );
			}
			$(CardHover.AlreadyActive[T]).each(function(){
				var Target = $(this),
					rem = false;
				if( ActiveHover.hasClass(Target.attr("class")) ){
					rem = true;
					ResetCard($(this));
				}
				$(prevsiblings).each(function(){
					if( Target.hasClass($(this).attr("class")) ){
						ResetCard($(this));
					}
				});
				if( rem ){
					CardHover.AlreadyActive[T].splice(ii, 1);
				}else{
					ii++;
				}
			});
		}
		// Setting a variable that indicates if other cards are hovered
		var OtherCardsHovered = (CardHover.isActive[T] && CardHover.isActive[T].parent().find(">div:hover").length === 1);
		// Aborting reverse sequence when :
		// There's no timeline to reverse yet
		// Decks are currently placing and haven't finished
		// Any other cards are hovered
		if(
			typeof(CardHover.HoverReveal[T]) == "undefined" ||
			PlaceDeck.isActive() ||
			OtherCardsHovered
		){
			// If any other card is hovered we activate appending sequence in mouseenter
			if( OtherCardsHovered ){
				CardHover.append[T] = true;
			}
			return;
		}
		// Resetting variables
		CardHover.append[T] = false;
		CardHover.isActive[T] = false;
		CardHover.AlreadyActive[T] = [];
		CardHover.HoverReveal[T].reverse();
	});
	$(".Cards > div").mousedown(function(e){
		var T = $(this).parent().parent().attr("class"),
			siblings = $(this).nextAll();
		CardSelect.validator[T] = 1;
		// Making sure a card is selected to run the de-select process
		if( typeof(CardSelect.isActive[T]) !== "undefined" && CardSelect.isActive[T] ) {
			// Prepping the handlers so we can read what mouse is hovering on after de-select
			TweenMax.set(siblings, {autoAlpha: 1});
		}
		CardSelect.mdReset[T] = $(this);
	});
	$(".Cards > div").mouseup(function(e){
		var T = $(this).parent().parent().attr("class");
		CardSelect.validator[T] = 0;
		// Declaring account state only when not declared
		if( typeof(CardSelect.isActive[T]) === "undefined" ){
			CardSelect.isActive[T] = false;
		}
		if( typeof(CardSelect.mdReset[T]) == "undefined" || CardSelect.mdReset[T] === false ){
			return;
		}
		var siblings = CardSelect.mdReset[T].nextAll();
		// De-selecting
		if( CardSelect.isActive[T] || !$(this).hasClass(CardSelect.mdReset[T].attr("class")) || !$(this).hasClass(CardSelect.mdReset[T].attr("class")) ){
			if( CardSelect.mdReset[T] ){
				siblings = CardSelect.mdReset[T].nextAll();
			}
			CardDeSelect( T, $(this), siblings );
			// Exclusive commands for Peek
			CardSelect.mdReset[T].data({PeekOption: 0});
			CardSelect.mdReset[T].siblings().data({PeekOption: 0});
			CardSelect.mdReset[T].siblings(":last-child").data({PeekOption: 1});
			Peeker.set(CardSelect.mdReset[T]);
            // Exclusive commands for Gandalf
            $("#DeckCloud .Card").data({GandalfOpt: 1});

			CardSelect.mdReset[T] = false;
			return;
		}
		// Aborting select when :
		// There are no siblings after the current element (The front card)
		else if( !siblings.length ){
			CardSelect.mdReset[T] = false;
			return;
		}
		CardSelect.isActive[T] = true;
		CardSelect.object[T] = $(this);
		// Pausing any kind of hover related animations to be able to fully hide sibiling cards
		if( typeof(CardHover.HoverReveal[T]) !== "undefined" ){
			CardHover.HoverReveal[T].pause();
		}
		// Hiding siblings's direct children
		siblings = siblings.children().toArray().reverse();
		TweenMax.staggerTo( siblings, .15, {
			scaleY: 0
		}, .075, function(){
			// Hiding the direct siblings after the animations
			TweenMax.set( $(siblings).parent(), {autoAlpha: 0});

		});
		// Exclusive commands for Peek
		$(this).siblings().data({PeekOption: 2});
        $(this).data({PeekOption: 3});
		Peeker.set($(this));
        // Exclusive commands for Gandalf
        $("#DeckCloud .Card").data({GandalfOpt: 0});
	});

	// DivisionExpress
	$(".DivisionExpress .Content").each(function(){
		TweenMax.set($(this), {
			y: -$(this).innerHeight(),
			autoAlpha: 0,
			transformOrigin: "50% 0%"
		});
	});

	$(".DivisionExpress").click(function(){
		ExpressTheDivision($(this));
	});

	// Gandalf Markers
	$.each(Gandalf, function() {
		var PeekRow = this;

		// Enabling the option to choose between multiple content for one asset in case the second array contains other than text
		if( typeof(this[1]) === "object" ){
			// Default option is the first asset
			$(this[0]).data({GandalfOpt: 0});
		}
		if (
			// Checking whether this asset contains multiple elements
			$(this[0]).length > 1){
			if (
				// Identifying whether this asset group needs to be deactive
				PeekRow.length > 2 &&
				typeof (PeekRow[2]) === "object" &&
				PeekRow[2].active === false
			) {
				// Setting a deactive indicator for each individual asset in the group
				$(this[0]).each(function () {
					$(this).data({GandalfActive: false});
				})
			}
		}
		Gandalfer.setup(this);
	});

	// Peek Markers
	$.each(Peek, function() {
		var PeekRow = this;

		// Enabling the option to choose between multiple content for one asset in case the second array contains other than text
		if( typeof(this[1]) === "object" ){
			// Default option is the first asset
			$(this[0]).data({PeekOption: 0});
		}
		if (
			// Checking whether this asset contains multiple elements
			$(this[0]).length > 1){
			if (
				// Identifying whether this asset group needs to be deactive
				PeekRow.length > 2 &&
				typeof (PeekRow[2]) === "object" &&
				PeekRow[2].active === false
			) {
				// Setting a deactive indicator for each individual asset in the group
				$(this[0]).each(function () {
					$(this).data({PeekActive: false});
				})
			}
			// Exclusive commands for DeckCloud Cards
			$(this[0]).filter(".Card:last-child").data({PeekOption: 1});
		}
		Peeker.setup(this);
	});
	Pathfinder();
	URI();
	DivisionSequence(true);
	if( ActiveDivision.attr("id") === "Temporary" ){
		$("#Reach").data({GandalfOpt: 1});
	}
}

function URI(ForceSet){
	// Obtain the current URL path's name
	var currenturl = (ForceSet) ? ActiveDivision.attr("id") : (document.location.pathname).replace(/\/~Project_END\//, ""),
		url = null;

	// Locate the page's URI information if available
	$.each(DivisionURI, function(i){
		if( this.name.toLowerCase() === currenturl.toLowerCase() || this.url.toLowerCase() === currenturl.toLowerCase() ){
			url = ( this.name.toLowerCase() == "temporary" ) ? "./" : this.url ;
			window.history.pushState({
				id: this.name
			}, this.pagetitle, url);
			document.title = this.pagetitle;
		}
	});
	if( currenturl !== "" && url == null ){
		var msg ="404 - Page not found";
		window.history.pushState({id : "404"}, msg, "404");
		document.title = msg;
	}
}

// QuickAccess
PanelSwitch = {
	obj : [],
	Harmonizer: false
};
Panel = {
	setup: function(){
		this.set();
		this.set(true);
	},
	set: function(NEW){
		var Class = ( NEW === true ) ? "Frame"
			: $(".QuickAccess > .Cells.active").attr("class"),
			CellGroup = ( NEW === true ) ? $(".QuickAccess > .Cells.Frame")
			: $(".QuickAccess > .Cells.active");
		// Deprioritize inactive Cells
		TweenMax.set(".QuickAccess > .Cells:not(.active)", {zIndex: -1});
		// Checking to make sure the current panel doesn't have it's exclusive animation already set
		if( typeof(PanelSwitch.obj[Class]) === "undefined" || NEW ) {
			// Creating the animation set
			PanelSwitch.obj[Class] = new TimelineMax();
			PanelSwitch.obj[Class].add(
				TweenMax.set(CellGroup, {
					zIndex: 0
				}), 0
			).add(
				TweenMax.to(CellGroup.children(".E"), .4, {
					scale: 1,
					rotation: -38.23,
					ease:  Circ. easeOut
				})
			).add(
				TweenMax.staggerTo(CellGroup.children(".F, .D"), .3, {
					cycle: {
						rotation: [17.94, -17.94]
					},
					ease:  Circ. easeOut
				}), "-=.2"
			).add(
				TweenMax.staggerTo(CellGroup.children(".G, .C"), .3, {
					cycle: {
						rotation: [-3.71, 2.65]
					},
					ease:  Circ. easeOut
				}), "-=.2"
			).add(
				TweenMax.staggerTo(CellGroup.children(".H, .B"), .3, {
					cycle: {
						rotation: [23.66, -23.66]
					},
					ease:  Circ. easeOut
				}), "-=.2"
			).add(
				TweenMax.staggerTo(CellGroup.children(".I, .A"), .3, {
					cycle: {
						rotation: [58, -61.31]
					},
					ease:  Circ. easeOut
				}), "-=.2"
			);
			if( NEW ){ return; }
		}
		// We proceed knowing the animation is already set
		if( !PanelSwitch.obj[Class].isActive() ){
			// Restart the animation Only when the panel isn't already active
			PanelSwitch.obj[Class].restart();
			PanelSwitch.obj[Class].eventCallback("onComplete", function(){
				// Prioritize current Active Cell group
				TweenMax.set(".QuickAccess > .Cells.active", {zIndex: 0});
				// Deprioritize inactive Cells after active Cells finish animating
				TweenMax.set(".QuickAccess > .Cells:not(.active)", {zIndex: -1});
			});
		}
		// Reverse the animation when the same running animation is requested
		else if( PanelSwitch.obj[Class].isActive() && PanelSwitch.obj[Class].reversed() ){
			// Cancel animation reverse
			PanelSwitch.obj[Class].reversed( !PanelSwitch.obj[Class].reversed() );
		}
		// Check for the last Cell group animation
		if( PanelSwitch.Harmonizer ){
			// Reverse last Cell group animation
			PanelSwitch.Harmonizer.reverse();
			// Remove Cell group animation from the variable
			PanelSwitch.Harmonizer = false;
		}
		// Save current active Cell group animation to a variable
		PanelSwitch.Harmonizer = PanelSwitch.obj[Class];
	}
};

// Fly sequence
  // Portals activation procedure

function ActiveSequence(t){
	// Forbid Portal activation when Fly animation is running
	if( typeof(ActiveFly) !== "undefined" && ActiveFly.isActive() ){
	    return;
	}

	for( X = 0 ; X < Portal.length ; X++ ){
		if( t.hasClass(Portal[X]) ){
			Active.Dimension = Portal[X];
			Active.Color = PortalColor[X];
			var ShalliDefine = true;
			// QuickAccess
			$(".QuickAccess > .Cells.active").toggleClass("active");
			$(".QuickAccess").find("."+Portal[X]).toggleClass("active");
			// Peek , Gandalf , Portalian
			if( !t.hasClass("active") ){
				$(".Portalian,#Gandalf,#Peek").css("color",Active.Color);
			}else{
				$(".Portalian,#Gandalf,#Peek").css("color","");
			}

			// ReSet fly clearance
			if( Global.Rotten ){
				for( XX = 0 ; XX < Portal.length ; XX++ ){
					if( typeof(ActiveRotten[XX]) != "undefined" &&
						$(ActiveRotten[XX].target[0]).parent().parent().hasClass("active") ){

						CheckForToggle($(ActiveRotten[XX].target[0]).parent().parent(),true);

						$('#Temporary > .active').toggleClass("active");
						Global.Rotten = DirectRotten[0] = ActivePortal[0] = false;
						Forward.isAvailable = false;
						Forward.isAllowed(false,false);
						$("#Reach").data({GandalfOpt: 1})

						ActiveRotten[XX].eventCallback("onRepeat",null).eventCallback("onRepeat", KillRot , [XX,t]);
						if( $(ActiveRotten[XX].target[0]).parent().parent().hasClass(Portal[X]) ){
							$(".QuickAccess > .Cells.active").toggleClass("active");
							$(".QuickAccess").find(".Default").toggleClass("active");
							ShalliDefine = false;
							// Changing Gandalf's content
							$("#Temporary .Void").data({GandalfActive: true});
						}
					}
				}
			}

			// Form the panels
			Panel.set();

			if( ShalliDefine == true ) {
				// Set fly clearance
				ActivePortal[0] = t;
				ActiveRotten[X].resume();
				DirectRotten[0] = ActiveRotten[X];
				Global.Rotten = true;
				t.toggleClass("active");
				CheckForToggle(t);
				// Fly Config
				Subject = ActivePortal[0];
				Parent = Subject.parent();
				if( Active.Dimension === Portal[0] ){
					Forward.isAvailable = false;
					Forward.isAllowed(false,false);
					$("#Reach").data({GandalfOpt: 2});
				}else {
					Forward.isAvailable = true;
					Forward.isAllowed(true, true);
                    $("#Reach").data({GandalfOpt: 0});
				}
				// Changing Gandalf's content
				t.data({GandalfOpt: 0, PostClickOpt: 1});
				$("#Temporary .Void").data({GandalfActive: false});
			}
		}
		if( !Global.Rotten && X+1 === Portal.length ){
			Active.Dimension = "Trilogies";
			Active.Color = PortalColor[PortalColor.length-1];
		}
		// Setting oolor and other properties for pathfinder values
		PathCallTo();
	}

}
  // Switch division
function SwitchDivision(target,Manual){
	Section = false; SwitchDivisionActive[0] = true;
	Forward.obj = false;
	Dur = 2;

	for (X = 0; X < Portal.length; X++) {
		if (target.hasClass(Portal[X])) {
			// Setting .Flow's background color
			TweenMax.to(target.find(".Flow"),.5,{background: Active.Color,autoAlpha: 0});
			// Activating the new section
				Section = $("#" + Portal[X]).children().first();
			if( ActiveDivision.attr("id") == "Temporary" ){target = $("#Temporary");}
			// Switching
			ActiveDivision = Section;

			Dimension = $("#" + Portal[X]);
			ChildrenLen = Dimension.children("div").length;
			if ((Reverse.pedal == false &&
				(ChildrenLen > 1 && ActiveDivision.index() + 1 < ChildrenLen))) {
				Forward.obj = Dimension.children().eq(ActiveDivision.index() + 1);
			}
			Forward.isAvailable = true;
			Forward.isAllowed(true);
			Glitch.on("#Gandalf", null);
		}
	}
	// Boosting active fly's speed to wrap up faster
	if( typeof(Shrinker) !== "undefined" && Shrinker.isActive() ) {
		Shrinker.duration(2);
		Shrinker.eventCallback("onComplete",LoadSection,[FlyAssociates]);
	}else{
		// Hiding the current section
		TweenMax.to(ActiveDivision, .5, {autoAlpha: 0,onComplete: LoadSection,onCompleteParams: [FlyAssociates]});
	}
	Locked[0] = true;
	ActivePortal[0] = false;
	// Prepping the spaceship for the next section
	if( Section == false || Manual ){
		Dimension = ActiveDivision.parent();
		ChildrenLen = Dimension.children("div").length;

		Forward.isAvailable = true;
		Forward.isAllowed(true);
        Glitch.on("#Gandalf", null);
		if( !Manual ) {
			// Keeping the current division in target variable
			target = ActiveDivision;
			if ((Reverse.pedal == false &&
				(ChildrenLen > 1 && ActiveDivision.index() + 1 < ChildrenLen))) {
				ActiveDivision = Dimension.children().eq(ActiveDivision.index() + 1);
				if ( ActiveDivision.index() + 1 < ChildrenLen ) {
					Forward.obj = Dimension.children().eq(ActiveDivision.index() + 1);
				}else{
					Forward.obj = $("#Temporary");
				}
			} else if ((ActivePortal[0] == false && Reverse.pedal == false)) {
				ActiveDivision = Subject = $("#Temporary");
				Forward.isAvailable = false;
				// Resetting portals affected assets
				if (DirectRotten[0] !== false) {
					DirectRotten[0].play();
					GetPortal = $(DirectRotten[0].target[0]).parent().parent();
					CheckForToggle(GetPortal);
					// Fly Config
					ActivePortal[0] = Subject = GetPortal;
					Parent = Subject.parent();
					Forward.isAvailable = true;
				}else{
				    $("#Reach").data({GandalfOpt: 1});
					Forward.isAllowed(false);
				}
			} else if (Reverse.pedal == true) {
				ActiveDivision = Reverse.obj;
				Subject = ActiveDivision.find(".Entry");
				Parent = ActiveDivision;
				// Resetting portals affected assets
				if (DirectRotten[0] !== false && ActiveDivision.attr("id") == "Temporary") {
					DirectRotten[0].play();
					GetPortal = $(DirectRotten[0].target[0]).parent().parent();
					CheckForToggle(GetPortal);
					// Fly Config
					ActivePortal[0] = GetPortal;
					if (ActiveDivision.attr("id") == "Temporary") {
						Subject = GetPortal;
					}
				}
			}
			if ( Forward.obj == false && (ChildrenLen > 1 && ActiveDivision.index() + 1 <= ChildrenLen) ) {
				Forward.obj = Dimension.children().eq(ActiveDivision.index() + 1);
			}
		}
		else{
			Section = ActiveDivision;
			ActiveDivision = target;
			target = Section;
			DirectFlyActive[0] = false;

			// Resetting portals affected assets
			if ( DirectRotten[0] !== false && ActiveDivision.attr("id") == "Temporary") {
				DirectRotten[0].play();
				GetPortal = $(DirectRotten[0].target[0]).parent().parent();
				CheckForToggle(GetPortal);
				// Fly Config
				ActivePortal[0] = Subject = GetPortal;
				Parent = Subject.parent();
				Forward.isAvailable = true;
				Forward.obj = Parent;
				Forward.isAllowed(true);
			}
		}
		if( !Forward.obj.length && Active.Dimension == Portal[0] ){
		    $("#Reach").data({GandalfOpt: 2});
			Forward.isAvailable = false;
			Forward.isAllowed(false);
		}
			Section = ActiveDivision;
	}

	Section.css({visibility: "", opacity: "", transform : "", transformOrigin: ""});

	function LoadSection(Flyascs){
		// Actions that should be done only when shrinker is available
		$(".Flow ,.Shrinker").css({transform: "", visibility: "", opacity: "", background: ""});
		// Resetting fly associates
		$(target).css({opacity: 0, visibility: "hidden",zIndex: -1,transform : "", transformOrigin: ""});
		TweenMax.set(Flyascs.toString(), {y: 0, x: 0, scale: 1, rotation: 0, z: 0.01});
		Section.css({zIndex: 1});
		SwitchDivisionActive[0] = false;
	}

	Draggable.get(".Pedal").endDrag();
	ReverseSequence();
	DivisionSequence(true,target);
	Pathfinder();
	URI(true);
}
  // Division sequences
Order = {ID: null, Definitive: false};

function DivisionSequence(reset,undone){
	DiviSection = ActiveDivision.attr("id");
	PreFlyIsSet = false; Reactive = false;
	if( reset && Reverse.obj ){
        PreDivision = Reverse.obj.attr("id");
    }else{
		PreDivision = false;
	}
		NextDivision = ( Forward.obj !== false ) ? Forward.obj.attr("id") : null;
	if( typeof(ActiveFly) !== "undefined" && ActiveFly.isActive() && !ActiveFly.reversed() ){
		Reactive = true;
	}

	// Trial Start
	Ascs = [".Portal.JourNey",".Portal.BigMo",".Portal.Artery",".BreathinFragment"];
	if( DiviSection == "Temporary" ){
		if( Reactive || reset ){
			// DO on entrance or RESTART
			WolvenEyez.play();
			BrokenLaugh.play();
			if( reset ){
                TweenMax.to($(".Portalian"), .2, {autoAlpha: 1});
            }else{
                Order.ID = DiviSection;
            }
		}else{
			// DO when about to leave
			WolvenEyez.pause();
			BrokenLaugh.pause();
            TweenMax.to($(".Portalian"), .2, {autoAlpha: 0});
		}
		FlyAssociates = Ascs;
	}else if( typeof(undone) !== "undefined" && undone.attr("id") == "Temporary" ){
		// DO after left the current dimension
		WolvenEyez.restart().pause();
		BrokenLaugh.restart().pause();
		TweenMax.to($(".Portalian"), .2, {autoAlpha: 0});
	}
	if( PreDivision == "Temporary" && !PreFlyIsSet ){
        PreFlyAssociates = Ascs;
        PreFlyIsSet = true;
    }
	if( NextDivision == "Temporary" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".Entry",".Request",".Download",".Connect"];
	if( DiviSection == "SpaceCyclone" ){
		if( Reactive || reset ){
			// DO on entrance or RESTART
            if( reset ) {
                if( SC_Footer.reversed() ){ SC_Footer.reversed(!SC_Footer.reversed()) }
                SC_Footer.resume();
            }else{
                Order.ID = DiviSection;
            }
		}else{
			// DO when about to leave
			SC_Footer.reverse();
			if( Cyclone.isActive ){
				ExitStorm(Cyclone.isActive);
			}
		}
		FlyAssociates =  Ascs;
	}else if( typeof(undone) !== "undefined" && undone.attr("id") == "SpaceCyclone" ){
		// DO after left the current dimension
	}
	if( PreDivision == "SpaceCyclone" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision == "SpaceCyclone" ){NextDivisionAssociates = Ascs;}
	// Trial Start
    Ascs = [".Entry",".InfoPanel",[".Core"]];
	if( DiviSection == "Skillometer" ){
		FlyAssociates =  Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
		}else{
			// DO when about to leave
			if( typeof(CoreSlot) !== "undefined" && CoreSlot.children().length > 0 ){
				Laser.pause();
				if( LoadedCore ){ InfoPanel.off(); }
				RemoveCore(.2);
				CoreClick = false;
                LoadedCore = false;
				AffectedCores = {Core: [], Waya: []};
			}
		}
	}else if( typeof(undone) !== "undefined" && undone.attr("id") == "Skillometer" ){
		// DO after left the current dimension
	}
    if( PreDivision == "Skillometer" && !PreFlyIsSet ){
        PreFlyAssociates = Ascs;
        PreFlyIsSet = true;
    }
	if( NextDivision == "Skillometer" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".Entry",".DevStar .Star",".ArtStar .Star",[".DevParticle, .ArtParticle"]];
	if( DiviSection == "AntiToxins" ){
		FlyAssociates =  Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
			if( reset ){
				StarRotation.restart();
				AntiToxins.duration(.5).restart().resume();
			}else{
				Order.ID = DiviSection;
			}
		}else{
			// DO when about to leave
			if( !AntiToxins.reversed() ){
                // When Sign is glitching
                if( typeof(SignGlitch) !== "undefined" ){
                    // Stop the glitch
                    SignGlitch.kill();
                }
				AntiToxins.invalidate().pause();
			}
			StarRotation.pause();
			TrackLines.fade();
		}
	}else if( typeof(undone) !== "undefined" && undone.attr("id") == "AntiToxins" ){
		// DO after left the current dimension
		if( !AntiToxins.reversed() ){
			AntiToxins.reversed( !AntiToxins.reversed() );
		}
		AntiToxins.invalidate().pause();
	}
	if( PreDivision == "AntiToxins" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision == "AntiToxins" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".TheStorm .RightWing",".TheStorm .LeftWing",".Analyzer > .Core",[".TheStorm > .Particles > div"]];
	if( DiviSection == "Analyzer" ){
		FlyAssociates =  Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
			if( reset ){
				AnalyzerFly.restart().resume();
			}else{
				Order.ID = DiviSection;
			}
		}else{
			// DO when about to leave
			AnalyzerFly.reverse();
			if( Analyzer.isActive ){
				Analyzer.Reverse(Analyzer.object, true);
			}
		}
	}else if( typeof(undone) !== "undefined" && undone.attr("id") == "Analyzer" ){
		// DO after left the current dimension
		AnalyzerFly.restart();
	}
	if( PreDivision == "Analyzer" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision == "Analyzer" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".Entry",".RoyalPillow > div"];
	if( DiviSection == "DeckCloud" ){
		FlyAssociates =  Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
			if( reset ){
				DeckCloudFly.restart().resume();
				ShuffleFireFly.restart().resume();
				Gravity.restart().resume();
				PlaceDeck.restart().resume();
				ShuffleFire.restart().resume();
			}else{
				Order.ID = DiviSection;
			}
		}else{
			// DO when about to leave
			var KeyName = Object.keys(CardSelect.isActive);
			// Checking for active cards
				$(Object.values(CardSelect.isActive)).each(function(i){
					if( this == true ){
						CardSelect.mdReset[KeyName[i]] = false;
						CardSelect.validator[KeyName[i]] = 0;
						TweenMax.set(CardSelect.object[KeyName[i]].nextAll(), {autoAlpha: 1});
						CardDeSelect( CardSelect.object[KeyName[i]].parent().parent().attr("class"), CardSelect.object[KeyName[i]], CardSelect.object[KeyName[i]].nextAll() );
					}
				});
			if( PlaceDeck.isActive() ){
				PlaceDeck.pause();
			}
			DeckCloudFly.reverse();
			Gravity.pause();
		}
	}else if( typeof(undone) !== "undefined" && undone.attr("id") == "DeckCloud" ){
		// DO after left the current dimension
		DeckCloudFly.reversed( !DeckCloudFly.reverse() )
		DeckCloudFly.restart().pause();
		ShuffleFireFly.restart().pause();
		PlaceDeck.restart().pause();
		ShuffleFire.restart().pause();
		Gravity.restart().pause();
	}
	if( PreDivision == "DeckCloud" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision == "DeckCloud" ){NextDivisionAssociates = Ascs;}

	if( Reactive ){
		Order.Definitive= true;
	}else if( reset ){
		TweenMax.to(".DivisionExpress", .2, {
			y: "0%",
			autoAlpha: 1
		});
	}else{
		if( typeof(ExpressSequence) !== "undefined" && ExpressSequence.progress() === 1 ){
			ExpressTheDivision($(ExpressSequence._first._targets[0]).parent());
		}
		TweenMax.to(".DivisionExpress", .2, {
			y: "-200%",
			autoAlpha: 1
		});
	}
}
  // Fly action
function Fly(Reach,Manual){
	DivisionSequence();
	// Restart fly associates while shrinker is still running
	if( (typeof(Shrinker) !== "undefined" && Shrinker.isActive()) && (typeof(ActiveFly) !== "undefined" && !ActiveFly.isActive()) ){
		Shrinker.duration(.1); KillActiveFly();
		TweenMax.to($(DirectRotten[0].target[0]).parent().parent().find(".Flow"),.5,{background: "",autoAlpha: 1});
	}
	// Or just restart active fly associates while reversing to the same division
	if( (Reverse.pedal == true && (typeof(ActiveFly) !== "undefined" && !ActiveFly.isActive())) || (typeof(ReverseFly) !== "undefined" && !ReverseFly.isActive()) ){
		ResetVars = PreFlyAssociates.toString()+","+FlyAssociates.toString();
		if( NextDivisionAssociates ){ ResetVars += ","+NextDivisionAssociates.toString(); }
		TweenMax.set(ResetVars, {y: 0, x: 0, scale: 1, rotation: 0, z: 0.01});
	}
	// Return on reverse fly
	if( Reverse.pedal === false && ( (typeof(ReverseFly) !== "undefined" && ReverseFly.isActive()) ||
		( typeof(ActiveFly) !== "undefined" && ActiveFly.isActive() ) ) ){
		// Return on reverse fly
		if( typeof(ReverseFly) !== "undefined" && ReverseFly.isActive() ){
			if( ActiveFly.reversed() ){
				ActiveFly.reversed(!ActiveFly.reversed());
				ReverseFly.reversed(!ReverseFly.reversed());
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
			}else {
				ActiveFly.reverse().eventCallback("onReverseComplete", function(){
                    if( !Forward.obj.length && Active.Dimension == Portal[0] ){
                        $("#Reach").data({GandalfOpt: 2});
                    }else{
                        $("#Reach").data({GandalfOpt: 1});
                    }
				    Glitch.on("#Gandalf", null);
                });
				ReverseFly.reverse().eventCallback("onReverseComplete", BackToBus);
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
				$("#Reach").data({GandalfOpt: 3});
			}
			function BackToBus(){
				Forward.isAllowed(Forward.memory);
				Reverse.isAllowed(Reverse.memory);
				// Setting the active portal to stop shrinking
				if( ActivePortal[0] !== false && DirectRotten[0] !== false ){
					DirectRotten[0].play();
					CheckForToggle(ActivePortal[0]);
				}
				Reverse.obj.css({zIndex: -1}); ActiveDivision.css({zIndex: 1});
				ResetVars = PreFlyAssociates.toString()+","+FlyAssociates.toString();
				if( NextDivisionAssociates ){ ResetVars += ","+NextDivisionAssociates.toString(); }
				TweenMax.set(ResetVars, {y: 0, x: 0, scale: 1, rotation: 0, z: 0.01});
                // By order of the fookin DivisionSequence
				DiviOrders();
			}
		}
		// Return on forward fly while reversed
		else if( ActiveFly.reversed() ){
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
                $("#Reach").data({GandalfOpt: 0});
				ActiveFly.reversed( !ActiveFly.reversed() );
				// Setting the active portal to shrink
				if( ActivePortal[0] !== false && DirectRotten[0] !== false && (typeof(Shrinker) !== "undefined" && Shrinker.reversed()) ) {
					Shrinker.reversed(!Shrinker.reversed());
					DirectRotten[0].reverse();
					CheckForToggle(ActivePortal[0], true);
				}
		}
		return;
	}
    // Return on forward fly
	if( Reverse.pedal === true && typeof(ActiveFly) !== "undefined" && ActiveFly.isActive() ||
		( typeof(ReverseFly) !== "undefined" && ReverseFly.isActive() ) ){
	    // Reverse forwarded reverse fly
		if( typeof(ReverseFly) !== "undefined" && ReverseFly.isActive() ){
		    // Return on Forward fly
            if( ActiveFly.isActive() && !ReverseFly.reversed() ){
                $("#Ditch").data({GandalfOpt: 3});
            }
            Forward.isAllowed(true);
            Reverse.isAllowed(false);
            ActiveFly.reversed(!ActiveFly.reversed());
            ReverseFly.reversed(!ReverseFly.reversed()).eventCallback("onReverseComplete", BackToBus);
			function BackToBus(){
				Forward.isAllowed(Forward.memory);
				Reverse.isAllowed(Reverse.memory);
                if( !Reverse.obj ){
                    $("#Ditch").data({GandalfOpt: 1});
                }else{
                    $("#Ditch").data({GandalfOpt: 0});
                }
                Glitch.on("#Gandalf", null);
				// Reactivating the portal
				if( ActivePortal[0] !== false && DirectRotten[0] !== false && typeof(Shrinker) !== "undefined" ) {
					DirectRotten[0].play();
					CheckForToggle(ActivePortal[0]);
				}
                // By order of the fookin DivisionSequence
                DiviOrders();
			}
		}
		// Return on forward fly
		else{
				Forward.isAllowed(true);
				Reverse.isAllowed(false);
				$("#Ditch").data({GandalfOpt: 3});
				ActiveFly.reverse().eventCallback("onReverseComplete",BackToBus);
				function BackToBus(){
					Forward.isAllowed(Forward.memory);
					Reverse.isAllowed(Reverse.memory);
					Glitch.on("#Gandalf", null);
                    $("#Ditch").data({GandalfOpt: 0});
					// Reactivating the portal
					if( ActivePortal[0] !== false && DirectRotten[0] !== false && typeof(Shrinker) !== "undefined" ) {
						DirectRotten[0].play();
						CheckForToggle(ActivePortal[0]);
					}
					// Reset all attributes of active associates (Important to prevent calculating errors caused by next division's animations being set but never performed)
					KillActiveFly();
				}
		}
		// Preventing the active portal to shrink & reactivating the portal
		if( ActivePortal[0] !== false && DirectRotten[0] !== false && typeof(Shrinker) !== "undefined" && Shrinker.isActive() ) {
			Shrinker.reverse();
			if(!ActiveFly.reversed()){
				DirectRotten[0].play();
				CheckForToggle(ActivePortal[0]);
			}
		}
		return;
	}
	// Creating fly animations
		// Defining rotation's direction
		NegOrPos = (Math.floor(Math.random() * 2));
		if (NegOrPos) {
			Rotation = (-45 - Math.floor(Math.random() * 45) + 1);
		} else {
			Rotation = (45 + Math.floor(Math.random() * 45) + 1);
		}
		// Setting the active section to fly
		  // Rerouting the fly path when the spaceship's already in a dimension
		if( Reverse.pedal == true ){
			Parent = Reverse.obj;
		}else{
			Parent = ActiveDivision;
		}
		if( Manual ){ Parent = ActiveDivision; }
		if( ActivePortal[0] === false ){
			if( Reverse.pedal == true && Reverse.obj.attr("id") == "Temporary" ){
				Subject = $(DirectRotten[0].target).parent().parent();
			}else{
				Subject = Parent.find(".Entry");
			}
		}else if(Reverse.pedal == true ){
			Subject = Reverse.obj.find(".Entry");
		}else{
			Subject = $(DirectRotten[0].target).parent().parent();
		}
		SubjectScale = {y: Subject.offset().top + (Subject.innerHeight()/2),
			x: Subject.offset().left + (Subject.width()/2)
		};
		SubjectCenter = {top: ( ( Parent.height() - Subject.innerHeight() )/2 ) - Subject.offset().top,
			left: ( ( Parent.width() - Subject.width() )/2 ) - Subject.offset().left
		};
		Origin[0] = SubjectScale.x+"px "+SubjectScale.y+"px";
		if( SubjectScale.x === 0 && SubjectScale.y === 0 ){ Origin[0] = "center"}
		  // Defining the fly & reverse fly animations
		ActiveFly = new TimelineMax({paused: true});
		ActiveFly.eventCallback("onReverseComplete",KillActiveFly);
        Scale = (window.innerWidth / Subject.width()) * 2;
        AnimDur = 15;

        // Get the spaceship ready for reverse fly
		if( Reverse.pedal === true ){
			Forward.isAllowed(true,Forward.isAllowed());
			Reverse.isAllowed(false,Reverse.isAllowed());
			Reverse.IsOverrided(false);
			TweenMax.set(Reverse.obj,{autoAlpha: 1});
			Reverse.obj.css({zIndex: 1}); ActiveDivision.css({zIndex: -1});
			ReverseFly = new TimelineMax({paused: true});
			ReverseFly.eventCallback("onReverseComplete",KillReverseFly);
			if( PreFlyAssociates.length > 1 ){
				if( ActiveDivision.attr("id") !== "Temporary" ){
					HoldMyState = RevHoldMyState = {
						ot : Subject.offset().top,
						ol : Subject.offset().left,
						w : Subject.innerWidth(),
						h : Subject.innerHeight()
					};
				}else{
					HoldMyState = RevHoldMyState = {
						ot : $(".QuickAccess").offset().top+200,
						ol : $(".QuickAccess").offset().left,
						w : $(".QuickAccess").innerWidth(),
						h : $(".QuickAccess").innerHeight()
					};
				}
				X = 1; AutoNode = [];
				$(PreFlyAssociates).each(function(i){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length == 1 && Parent.find(this.toString()).length > 1 ){
						AutoNode.push(this);
					}else{
						Asc = Parent.find(this.toString());
						if( ActiveDivision.attr("id") !== "Temporary" ) {
							AddFly.Switch(true);
						}else{
							AddFly.Spin(true);
						}
						X++;
					}
				});
				if( AutoNode.length > 0 ) {
				X = 1;
					Parent.find(AutoNode.toString()).each(function () {
						Asc = Parent.find(this);
						if( ActiveDivision.attr("id") !== "Temporary" ) {
							AddFly.Switch(true);
						}else{
							AddFly.Spin(true);
						}
						X++;
					});
				}
			}
			if( FlyAssociates.length > 1 ){
				X = 1; AutoNode = [];
				$(FlyAssociates).each(function(i){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length == 1 && ActiveDivision.find(this.toString()).length > 1 ){
						AutoNode.push(this);
					}else{
						Asc = ActiveDivision.find(this.toString());
						if( ActiveDivision.attr("id") !== "Temporary" ) {
							AddFly.Switch("ffs");
						}else{
							AddFly.Spin("ffs");
						}
						X++;
					}
				});
				if( AutoNode.length > 0 ) {
				X = 1;
					ActiveDivision.find(AutoNode.toString()).each(function () {
						Asc = ActiveDivision.find(this);
						if( ActiveDivision.attr("id") !== "Temporary" ) {
							AddFly.Switch("ffs");
						}else{
							AddFly.Spin("ffs");
						}
						X++;
					});
				}
			}
			if( ActiveDivision.attr("id") !== "Temporary" ){ TheDelay = TheDelayNum = 0; }else{ TheDelay = "-=9"; TheDelayNum = 9; }
			ActiveFly
				.fromTo(Reverse.obj, AnimDur-TheDelayNum, {
					autoAlpha: 0,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, {
					autoAlpha: 1,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, TheDelay);
			ReverseFly
				.fromTo(ActiveDivision, AnimDur-TheDelayNum, {
					autoAlpha: 1,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, {
					autoAlpha: 0,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, TheDelay);
		}
		// Get the spaceship ready for forward fly
		else {
			Forward.isAllowed(false,Forward.isAllowed());
			Reverse.isAllowed(true,Reverse.isAllowed());
			Reverse.IsOverrided(false);
			if( ActiveDivision.attr("id") == "SpaceCyclone" && NextDivisionAssociates.length > 1 ){
				HoldMyState = RevHoldMyState = {
					ot : $(".QuickAccess").offset().top+200,
					ol : $(".QuickAccess").offset().left,
					w : $(".QuickAccess").innerWidth(),
					h : $(".QuickAccess").innerHeight()
				};
				ReverseFly = new TimelineMax({paused: true});
				ActiveFly = new TimelineMax({paused: true});
				X = 1; AutoNode = [];
				$(NextDivisionAssociates).each(function(i){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length == 1 && Forward.obj.find(this.toString()).length > 1 ){
						AutoNode.push(this);
					}else{
						Asc = Forward.obj.find(this.toString());
						if( ActiveDivision.attr("id") !== "SpaceCyclone" ) {
							AddFly.Switch();
						}else{
							AddFly.Spin(false);
						}
						X++;
					}
				});
				if( AutoNode.length > 0 ) {
					X = 1;
					Forward.obj.find(AutoNode.toString()).each(function () {
						Asc = Forward.obj.find(this);
						if( ActiveDivision.attr("id") !== "SpaceCyclone" ) {
							AddFly.Switch();
						}else{
							AddFly.Spin(false);
						}
						X++;
					});
				}
			}else{
				if( Forward.obj !== false && Forward.obj.attr("id") == "Temporary" ){
					KeepThatShit = $(DirectRotten[0].target[0]).parent().parent();
					HoldMyState = RevHoldMyState = {
						ot : KeepThatShit.offset().top,
						ol : KeepThatShit.offset().left,
						w : KeepThatShit.innerWidth(),
						h : KeepThatShit.innerHeight()
					};
				}else{
					HoldMyState = RevHoldMyState = {
						ot : Subject.offset().top,
						ol : Subject.offset().left,
						w : Subject.innerWidth(),
						h : Subject.innerHeight()
					};
				}
				if( NextDivisionAssociates.length > 1 && Forward.obj !== false ){
					// ReArrange associates based on the focused subject
					Associates = NextDivisionAssociates;
					if( Forward.obj.attr("id") == "Temporary" ){
						ThePortal = $(DirectRotten[0].target[0]).parent().parent();
						Associates = NextDivisionAssociates;
						for( var i = 0; i < Associates.length; i++){
							if ( $(Associates[i]).hasClass(ThePortal.attr("class")) ) {
								SubjArr = Associates.splice(i, 1);
							}
						}
						Associates.unshift(SubjArr);
					}
					X = 1; AutoNode = [];
					$(Associates).each(function(i){
						// Creating an array consisting of multiple nodes (if there are any)
						if( this.length == 1 && Forward.obj.find(this.toString()).length > 1 ){
							AutoNode.push(this);
						}else{
							Asc = Forward.obj.find(this.toString());
							AddFly.Switch("next");
							X++;
						}
					});
					if( AutoNode.length > 0 ) {
						X = 1;
						Forward.obj.find(AutoNode.toString()).each(function () {
							Asc = Forward.obj.find(this);
							AddFly.Switch("next");
							X++;
						});
					}
				}
			}
			if( FlyAssociates.length > 1 ){
				X = 1; AutoNode = [];
				$(FlyAssociates).each(function(i){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length == 1 && Parent.find(this.toString()).length > 1 ){
						AutoNode.push(this);
					}else{
						Asc = Parent.find(this.toString());
						if( ActiveDivision.attr("id") !== "SpaceCyclone" ) {
							AddFly.Switch();
						}else{
							AddFly.Spin();
						}
							X++;
					}
				});
				if( AutoNode.length > 0 ) {
					X = 1;
					Parent.find(AutoNode.toString()).each(function () {
						Asc = Parent.find(this);
						if( ActiveDivision.attr("id") !== "SpaceCyclone" ) {
							AddFly.Switch();
						}else{
							AddFly.Spin();
						}
						X++;
					});
				}
			}

			// Setting the active portal to shrink

			if( ActiveDivision.attr("id") === "Temporary" ) {
				Shrinker = new TimelineMax({paused: true});
				Shrinker.set(Subject.find(".Shrinker"), {scale: 1, rotation: 0, z: 0.01});
				Scale = (window.innerWidth / Subject.width()) * 2;
				if (Math.abs(Rotation) !== Rotation) {
					Rotation = -360;
				} else {
					Rotation = 360;
				}
				Shrinker
					.fromTo(Subject.find(".Shrinker"), AnimDur*1.4, {
						rotation: 0,
						scale: 1,
						ease: CustomEase.create("custom", "M0,0 C0.003,0 0.369,0.028 0.49,0.046 0.806,0.091 0.948,0.246 0.999,0.999 0.999,0.999 1,1 1,1")
					}, {
						rotation: Rotation,
						scale: 0,
						ease: CustomEase.create("custom", "M0,0 C0.003,0 0.369,0.028 0.49,0.046 0.806,0.091 0.948,0.246 0.999,0.999 0.999,0.999 1,1 1,1")
					},0)
					.fromTo(Parent, .2, {
						autoAlpha: 1,
						ease: CustomEase.create("custom", "M0,0 C0.003,0 0.369,0.028 0.49,0.046 0.806,0.091 0.948,0.246 0.999,0.999 0.999,0.999 1,1 1,1")
					}, {
						autoAlpha: 0,
						ease: CustomEase.create("custom", "M0,0 C0.003,0 0.369,0.028 0.49,0.046 0.806,0.091 0.948,0.246 0.999,0.999 0.999,0.999 1,1 1,1")
					},(AnimDur*1.4)-.5);
			}else{

				if( ActiveDivision.attr("id") !== "SpaceCyclone" ){
					TheDelay = "-=10";
					TheDelayNum = AnimDur - 3;
					ActiveFly
						.fromTo(ActiveDivision, AnimDur - TheDelayNum, {
							autoAlpha: 1
						}, {
							autoAlpha: 0
						}, TheDelayNum)
						.fromTo(Forward.obj, AnimDur - TheDelayNum, {
							autoAlpha: 0
						}, {
							autoAlpha: 1
						}, TheDelayNum)
				}else {
					TheDelay = "-=9";
					TheDelayNum = 9;
					ActiveFly
						.fromTo(ActiveDivision, AnimDur - TheDelayNum, {
							autoAlpha: 1,
							ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
						}, {
							autoAlpha: 0,
							ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
						}, TheDelay);
					ReverseFly
						.fromTo(Forward.obj, AnimDur - TheDelayNum, {
							autoAlpha: 0,
							ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
						}, {
							autoAlpha: 1,
							ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
						}, TheDelay);
					Reverse.IsOverrided(true);
				}
			}
		}
	// Portals Animations
	if( DirectRotten[0] !== false ){
		if( DirectRotten[0].time() !== 0 ){ DirectRotten[0].reverse(DirectRotten[0].time()) }
		else{ DirectRotten[0].reverse() }
	}
	if( ActivePortal[0] !== false ){
		CheckForToggle(ActivePortal[0], true);
	}
	// Defining what division to switch to
	if( Reverse.pedal == true ){
		ActiveFly.eventCallback("onComplete",SwitchDivision,[Reverse.obj]);
	}else{
		if( Manual ){
			ActiveFly.eventCallback("onComplete",SwitchDivision,[Manual,true]);
		}else{
			ActiveFly.eventCallback("onComplete",SwitchDivision,[Subject]);
		}
	}

	if( ActiveFly.reversed() ){
		ActiveFly.reversed( !ActiveFly.reversed() );
	}
	Dur = ActiveFly.duration();
	if( Reach ){ Dur = AnimDur-AnimDur*.9; } // Reach Button : Duration decreased
	ActiveFly.duration(Dur).resume();

	if( ActiveDivision.attr("id") === "Temporary" && Reverse.pedal === false ) {
		if( Shrinker.reversed() ){Shrinker.reversed( !Shrinker.reversed() );}
		Dur = Shrinker.duration();
		if( Reach ){ Dur -= Dur*.9; } // Reach Button : Duration decreased
		Shrinker.duration(Dur).resume();
	}

	if( Reverse.pedal === true || Reverse.IsOverrided() ){
		if( ReverseFly.reversed() ){ReverseFly.reversed( !ReverseFly.reversed() );}
		Dur = ReverseFly.duration();
		if( Reach ){ Dur = AnimDur-AnimDur*.9; } // Reach Button : Duration decreased
		ReverseFly.duration(Dur).resume();
	}
}
  // Prevent fly
function PreventFly(t){
	if( !Reverse.isAllowed() || !Forward.isAllowed() ){
		if(t){ t.endDrag(); }
		PedalPrevent.restart().play();

	}
}
  // Reverse Handle
function ReverseHandle(NoChange){
	$(".Reverse").toggleClass("active");
	// Prohibit hover interference
	$(".Reverse").removeClass("hover");
	if( $(".Reverse").hasClass("active") ) {
		Reverse.pedal = true;
		if( NoChange !== false ){ReverseSequence();}
		// Setting the pedal to reverse mode
		TweenMax.to(".Pedal", .2, {y:PedalBoundary.Stop});
		if( typeof(NoChange) === "object" && NoChange.hasClass("Rev Handle") ){
            Glitch.on("#Gandalf", "Reverse activated");
        }
	}else{
		Reverse.pedal = false;
		// Resetting the pedal
		TweenMax.to(".Pedal", .2, {y:PedalBoundary.Start});
        if( typeof(NoChange) === "object" && NoChange.hasClass("Rev Handle") ){
            Glitch.on("#Gandalf", "Reverse deactiveated");
        }
	}
}
  // Reverse sequence
function ReverseSequence(){
	var revallowed = false ;
	Dimension = ActiveDivision.parent();
	ChildrenLen = Dimension.children("div").length;
	StartFromZero = ActiveDivision.index() - (Dimension.children().length - ChildrenLen);
	Reverse.isAllowed(true);
	if (ChildrenLen > 1 &&
		StartFromZero - 1 >= 0) {
		Reverse.obj = Dimension.children().eq(ActiveDivision.index() - 1);
	} else if ( Active.Dimension !== "Trilogies" ) {
		if (Active.Dimension === Dimension.attr("id")) {
			Reverse.obj = $("#Trilogies > #Temporary");
		} else {
			Reverse.obj = $("#" + Active.Dimension).children("div").last();
		}
        $("#Ditch").data({GandalfOpt: 0});
		Reverse.obj.parent().css({visibility: "", opacity: ""});
	}else{
		revallowed = true;
	}
	if( !Reverse.obj.length || revallowed ){
		Reverse.obj = false; Reverse.isAllowed(false);
		$("#Ditch").data({GandalfOpt: 1});
	}
}
// DivisionSequence orders
function DiviOrders(){
    if( Order.ID === "Temporary" ){
        TweenMax.to($(".Portalian"), .2, {autoAlpha: 1});
    }
    if( Order.ID === "SpaceCyclone" ){
        if( SC_Footer.reversed() ){ SC_Footer.reversed(!SC_Footer.reversed()) }
        SC_Footer.resume();
    }
	if( Order.ID === "AntiToxins" ){
		AntiToxins.duration(.5).restart().resume();
		StarRotation.resume();
	}
	if( Order.ID === "Analyzer" ){
		AnalyzerFly.restart().resume();
	}
	if( Order.ID === "DeckCloud" ){
		if( PlaceDeck.time() <= PlaceDeck.duration() ){
			PlaceDeck.resume();
		}
		if( PlaceDeck.time() <= PlaceDeck.duration() ){
			PlaceDeck.resume();
		}
		DeckCloudFly.restart().resume();
		ShuffleFireFly.restart().resume();
		TweenMax.set("#DeckCloud .GravityForce, #DeckCloud .GravityForceX", {
			autoAlpha: 0
		});
		Gravity.restart().resume();
	}
	if( Order.Definitive === true ){
		Order.Definitive = false;
		TweenMax.to(".DivisionExpress", .2, {
			y: "0%",
			autoAlpha: 1
		});
	}
}

// Kill functions
function KillRot(XX,T){
	ActiveRotten[XX].pause().eventCallback("onRepeat",null);
}
function KillActiveFly(){
	Forward.isAllowed(Forward.memory);
	if( Reverse.obj !== false ){Reverse.obj.css({zIndex: -1});}
	ActiveDivision.css({zIndex: 1});
	ResetVars = PreFlyAssociates.toString()+","+FlyAssociates.toString();
	if( NextDivisionAssociates ){ ResetVars += ","+NextDivisionAssociates.toString(); }
	TweenMax.set(ResetVars, {y: 0, x: 0, scale: 1, rotation: 0, z: 0.01});
	// Disabling some animations
	if( ActivePortal[0] !== false && DirectRotten[0] !== false ){
		DirectRotten[0].reversed( !DirectRotten[0].reversed() ).resume();
	}

	if( !ActiveFly.isActive() ){
		ActiveFly.kill();
		delete ActiveFly;
	}
	if( typeof(ReverseFly) !== "undefined" && !ReverseFly.isActive() ){
		ReverseFly.kill();
		delete ReverseFly;
	}
	// By order of the fookin DivisionSequence
	DiviOrders();
    // Resetting Gandalf on launch cancellation
    Glitch.on("#Gandalf", null);
}
function KillReverseFly(){
	Reverse.isAllowed(Reverse.memory);
	ResetVars = PreFlyAssociates.toString()+","+FlyAssociates.toString();
	if( NextDivisionAssociates ){ ResetVars += ","+NextDivisionAssociates.toString(); }
	TweenMax.set(ResetVars, {y: 0, x: 0, scale: 1, rotation: 0, z: 0.01});
	if( !ActiveFly.isActive() ){
		ActiveFly.kill();
		delete ActiveFly;
	}
	if( !ReverseFly.isActive() ){
		ReverseFly.kill();
		delete ReverseFly;
	}
	if( Order.ID == 1 ){ Order.ID = 0;
		TweenMax.to($(".DevAura, .DevAuraZ,.ArtAura, .ArtAuraZ"), .2, {autoAlpha: 1});
	}
	// Resetting Gandalf on launch cancellation
    Glitch.on("#Gandalf", null);
    // By order of the fookin DivisionSequence
	DiviOrders();
}
// Adds fly animations
AddFly = {
	Switch : function(isReversed){
		SubjectIsSacred = (Asc.attr("class") == Subject.attr("class") && Asc.parent().attr("id") == Subject.parent().attr("id")) ? true : false
		ReverseSeq = ( typeof(isReversed) !== "undefined" && typeof(isReversed) !== "boolean" && isReversed !== "next" ) ? true : false;
		NextActive = ( isReversed == "next" ) ? true : false ;

		Afrom_y = (isReversed == true) ? ((Reverse.obj.height()/2-HoldMyState.ot)-HoldMyState.h/2) : 0;
		Afrom_x = (isReversed == true) ? ((Reverse.obj.width()/2-HoldMyState.ol)-HoldMyState.w/2) : 0;
		Afrom_scale = (SubjectIsSacred && isReversed == true) ? Scale : ( NextActive ) ? 0 : (isReversed == true) ? Scale/(1+((X+1)*.5)) : 1;
		Afrom_rotation = (isReversed == true || NextActive) ? Rotation : 0;
		Ato_y = (isReversed == true || ReverseSeq || NextActive) ? 0 : ((Parent.height()/2-HoldMyState.ot)-HoldMyState.h/2);
		Ato_x = (isReversed == true || ReverseSeq || NextActive) ? 0 : ((Parent.width()/2-HoldMyState.ol)-HoldMyState.w/2);
		Ato_scale = (SubjectIsSacred && isReversed !== true) ? Scale : (isReversed == true || NextActive) ? 1 : (ReverseSeq) ? 0 : Scale/(1+((X+1)*.5));
		Ato_rotation = (isReversed == true || NextActive) ? 0 : Rotation;
		AscOrigin = (ReverseSeq) ? ((RevHoldMyState.ol+RevHoldMyState.w/2)-Asc.offset().left)+"px " : ((HoldMyState.ol+HoldMyState.w/2)-Asc.offset().left)+"px ";
		AscOrigin += (ReverseSeq) ? ((RevHoldMyState.ot+RevHoldMyState.h/2)-Asc.offset().top)+"px" : ((HoldMyState.ot+HoldMyState.h/2)-Asc.offset().top)+"px";
		A_ease = (isReversed == true || ReverseSeq || NextActive ) ? CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1") : CustomEase.create("custom", "M0,0 C0.003,0 0.369,0.028 0.49,0.046 0.806,0.091 0.948,0.246 0.999,0.999 0.999,0.999 1,1 1,1");
		TheFly = (ReverseSeq) ? ReverseFly : ActiveFly;
		TheDELAY = ( NextActive ) ? AnimDur - 3 : 0 ;
		TheDURATION = ( NextActive && !$(AutoNode.toString()).length ) ? AnimDur / (1+((Associates.length+$(AutoNode.toString()).length)-X+1)*.5) :
			( NextActive && $(AutoNode.toString()).length) ? AnimDur / (1+((Associates.length+$(AutoNode.toString()).length)-X+1)*.1) : AnimDur ;

		TheFly.add(
			TweenMax.fromTo(Asc, TheDURATION, {
				y: Afrom_y,
				x: Afrom_x,
				scale: Afrom_scale,
				rotation: Afrom_rotation,
                transformOrigin: AscOrigin,
                ease: A_ease
			}, {
				y: Ato_y,
				x: Ato_x,
				scale: Ato_scale,
				rotation: Ato_rotation,
                transformOrigin: AscOrigin,
                ease: A_ease
			}), TheDELAY
		);
	},
	Spin : function(Reverse){
		ReverseSeq = ( typeof(Reverse) !== "undefined" && typeof(Reverse) !== "boolean" ) ? true : false;

		Afrom_rotation = (Reverse == true) ? -180 : (Reverse == false) ? -180 : 0;
		Ato_rotation = (Reverse == true) ? 0 : (Reverse == false) ? 0 : 180;
		Afrom_scale = (Reverse == true) ? 1 : 1;
		Ato_scale = (Reverse == true) ? 1 : 1;
		AscOrigin = ((HoldMyState.ol+HoldMyState.w/2)-Asc.offset().left)+"px ";
		AscOrigin +=  ((HoldMyState.ot+HoldMyState.h/2)-Asc.offset().top)+"px";
		A_ease = Back.easeInOut.config(2);
		TheFly = (ReverseSeq || Reverse == false) ? ReverseFly : ActiveFly;
		TheParent = (ReverseSeq) ? ActiveDivision.find(Asc) : (Reverse !== false) ? Parent.find(Asc) : Forward.obj.find(Asc);
		TheFly.add(
			TweenMax.fromTo(TheParent, AnimDur, {
				rotation: Afrom_rotation,
				scale: Afrom_scale,
				transformOrigin: AscOrigin,
				ease: A_ease
			}, {
				rotation: Ato_rotation,
				scale: Ato_scale,
				transformOrigin: AscOrigin,
				ease: A_ease
			},1), 0
		);
	},
	StormEntrance : function(type1,type2){
		Afrom_y = 0;
		Afrom_x = 0;
		Afrom_scale = 1;
		Afrom_autoAlpha = 1;
        // Add exceptions for one section storms
		Ato_y = ( type2 ) ? ((ActiveDivision.height()-SC_HoldMyState.ot)-SC_HoldMyState.h/2) : ((ActiveDivision.height()/2-SC_HoldMyState.ot)-SC_HoldMyState.h/2);
		Ato_x = ( type2 ) ? ((ActiveDivision.width()-SC_HoldMyState.ol)-SC_HoldMyState.w/2) : ((ActiveDivision.width()/2-SC_HoldMyState.ol)-SC_HoldMyState.w/2);
		Ato_scale = SC_scale;
		Ato_autoAlpha = ( type1 ) ? .3 : 0;
		AscOrigin = ((SC_HoldMyState.ol+SC_HoldMyState.w/2)-Asc.offset().left)+"px ";
		AscOrigin += ((SC_HoldMyState.ot+SC_HoldMyState.h/2)-Asc.offset().top)+"px";
		A_ease = Sine. easeOut;
		TheFly = EnterStorm;
		TheFly.add(
			TweenMax.fromTo(Asc, 1, {
				y: Afrom_y,
				x: Afrom_x,
				scale: Afrom_scale,
				autoAlpha: Afrom_autoAlpha,
				transformOrigin: AscOrigin,
				ease: A_ease
			}, {
				y: Ato_y,
				x: Ato_x,
				scale: Ato_scale,
				autoAlpha: Ato_autoAlpha,
				transformOrigin: AscOrigin,
				ease: A_ease
			}), 0
		);
		if( type1 ){
			TheFly.add(
				TweenMax.from(Asc, 1, {
					rotation: TheFly._first.target[0]._gsTransform.rotation,
					ease: A_ease
				}), 0
			);
		}
	},
	ParticleEntrance : function(type1,type2,type3){
		A_ease = Sine.easeOut;
		TheFly = EnterParticle;
		if( type2 ){
			TheFly = ParticleRotation;
			TheFly.add(
				TweenMax.to(Asc, 1, {
					rotation: 0,
					ease: A_ease
				}), 0
			);
			return;
		}
		if( type3 ){
			TheFly = EnterParticle;
			AscOrigin = ( ( AT_HoldMyState.ol + AT_HoldMyState.w / 2 ) - Asc.parent().offset().left ) + "px ";
			AscOrigin += ( ( AT_HoldMyState.ot + AT_HoldMyState.h / 2 ) - Asc.parent().offset().top ) + "px";
			TheFly.add(
				TweenMax.to(Asc, 1, {
					y: 0,
					x: 0,
					scale: 1,
					autoAlpha: 1,
					transformOrigin: AscOrigin,
					ease: A_ease
				}), 0
			);
			return;
		}

		Afrom_y = 0;
		Afrom_x = 0;
		Afrom_scale = 1;
		Afrom_autoAlpha = 1;
		Ato_y = ( ( ActiveDivision.height()*.14 - AT_HoldMyState.ot ) - AT_HoldMyState.h / 2 );
		Ato_x = ( ( ActiveDivision.width()/2 - AT_HoldMyState.ol ) - AT_HoldMyState.w / 2 );
		Ato_scale = ( type1 ) ? DefaultScale(AT_HoldMyState.w) : AT_scale;
		Ato_autoAlpha = ( type1 ) ? 1 : .2;
		AscOrigin = ( ( AT_HoldMyState.ol + AT_HoldMyState.w / 2 ) - Asc.offset().left ) + "px ";
		AscOrigin += ( ( AT_HoldMyState.ot + AT_HoldMyState.h / 2 ) - Asc.offset().top ) + "px";
		TheFly.add(
			TweenMax.fromTo(Asc, 1, {
				y: Afrom_y,
				x: Afrom_x,
				scale: Afrom_scale,
				autoAlpha: Afrom_autoAlpha,
				transformOrigin: AscOrigin,
				ease: A_ease
			}, {
				y: Ato_y,
				x: Ato_x,
				scale: Ato_scale,
				autoAlpha: Ato_autoAlpha,
				transformOrigin: AscOrigin,
				ease: A_ease
			}), 0
		);
		if( type1 ){
			TheFly.add(
				TweenMax.to(Asc, 1, {
					rotation: 0,
					ease: A_ease
				}), 0
			);
		}
	},
	ParticleNavigate : function(type1, type2){
		AnimDur = .75;
		Ato_y = (( ActiveDivision.height() * .14 - NAV_HoldMyState.ot ) - NAV_HoldMyState.h / 2 );
		Ato_x = (( ActiveDivision.width() / 2 - NAV_HoldMyState.ol ) - NAV_HoldMyState.w / 2 );
		Ato_autoAlpha = ( type1 ) ? 1 : .2;
		AscOrigin = ( ( NAV_HoldMyState.ol + NAV_HoldMyState.w / 2 ) - Asc.parent().offset().left ) + "px ";
		AscOrigin += ( ( NAV_HoldMyState.ot + NAV_HoldMyState.h / 2 ) - Asc.parent().offset().top ) + "px";
		A_ease = Sine.easeOut;
		TheFly = ParticleNavigation;
		TheFly.add(
			TweenMax.to(Asc, AnimDur, {
				y: Ato_y,
				x: Ato_x,
				autoAlpha: Ato_autoAlpha,
				transformOrigin: AscOrigin,
				ease: A_ease
			}), 0
		);
		if( type1 ){
			TheFly.add(
				TweenMax.to(Asc, AnimDur, {
					scale: DefaultScale(Asc.parent()),
					ease: A_ease
				}), 0
			);
			TheFly = NavRotation;
			TheFly.add(
				TweenMax.to(Asc.children(), AnimDur, {
					rotation: 0,
					ease: A_ease
				}), 0
			);
		}
		if( type2 ){
			TheFly.add(
				TweenMax.to(Asc, AnimDur, {
					scale: AT_scale,
					ease: A_ease
				}), 0
			);
		}
	}

};
// Plans SpaceCyclone's post storm entrance sequences
StormRitual = {
	Ritual : function(){
		// Container animation
		A_ease = Sine. easeOut;
		TheFly = Ritual;
		Origin = "";
		TheFly.add(
			TweenMax.to(Asc, 1, {
				y: Ato_y+"%",
				x: Ato_x+"%",
				ease: A_ease
			}), 0
		);
		// Containing asset animation
		if( Asc.hasClass("CV") ){
			Origin = "80% 0%";
		}
		TheFly.add(
			TweenMax.to(Asc.find(".Asset"), 1, {
				y: AssetY,
				x: AssetX,
				scale: 1,
				autoAlpha: 1,
				rotation: AssetRotation,
				rotationY: -360,
				transformOrigin: Origin,
				ease: A_ease
			}), 0
		);
	},
	Definer : function(){
		Ato_y = ( ( ( ( ( ActiveDivision.height() * 8 ) / 100 ) - Asc.offset().top ) ) * 100 ) / Asc.innerHeight();
		Ato_x = ( ( ( ( ActiveDivision.width() / 2 ) - ( Asc.offset().left + Asc.innerWidth()/2 ) ) ) * 100 ) / Asc.innerWidth();
		AssetRotation = 0;
		AssetX = "0%";
		AssetY = "0%";
		this.Ritual();
	},
	AlphaAsset : function(){
	    // Add exceptions for one section storm
	    var nthofpagew = ( Asc.hasClass("Resume") ) ? .5 : .75,
            nthofpageh = ( Asc.hasClass("Resume") ) ? 1.85 : 2;
		Ato_y = ( ( ( ( ActiveDivision.height() / nthofpageh ) - ( Asc.offset().top + Asc.innerHeight()/2 ) ) ) * 100 ) / Asc.innerHeight();
		Ato_x = ( ( ( ( ActiveDivision.width() * nthofpagew ) - ( Asc.offset().left + Asc.innerWidth()/2 ) ) ) * 100 ) / Asc.innerWidth();
		AssetRotation = ( Asc.hasClass("Resume") ) ? 0 : ( Asc.hasClass("CodeProject") ) ? 9 : ( Asc.hasClass("Envelope") ) ? 12 : 0;
		AssetX = ( Asc.hasClass("Resume") ) ? "5%" : ( Asc.hasClass("Envelope") ) ? "-3%" : "0%";
		AssetY = ( Asc.hasClass("Resume") ) ? "-8%" : ( Asc.hasClass("Envelope") ) ? "25%" : "0%";
		this.Ritual();
	},
	BetaAsset : function(){
        // Add exceptions for one section storm
	    var nthofpagew = ( Asc.hasClass("CV") ) ? .5 : .25,
            nthofpageh = ( Asc.hasClass("CV") ) ? 1.85 : 2;
		Ato_y = ( ( ( ( ActiveDivision.height() / nthofpageh ) - ( Asc.offset().top + Asc.innerHeight()/2 ) ) ) * 100 ) / Asc.innerHeight();
		Ato_x = ( ( ( ( ActiveDivision.width() * nthofpagew ) - ( Asc.offset().left + Asc.innerWidth()/2 ) ) ) * 100 ) / Asc.innerWidth();
		AssetRotation = ( Asc.hasClass("CV") ) ? 40 : ( Asc.hasClass("DesignProject") ) ? -20 : 0;
		AssetX = ( Asc.hasClass("CV") ) ? "15%" : "0%";
		AssetY = ( Asc.hasClass("CV") ) ? "12%" : "0%";
		this.Ritual();
	}
};
// Portals animation control
function ToggleJourney(Rev){
	if( Rev ){
		if( Jflow.time() !== 0 ){ Jflow.reverse(Jflow.time()) }
		else{ Jflow.reverse() }
		if( Jstarframe.time() !== 0 ){ Jstarframe.reverse(Jstarframe.time()) }
		else{ Jstarframe.reverse() }
		if( Jterrain.time() !== 0 ){ Jterrain.reverse(Jterrain.time()) }
		else{ Jterrain.reverse() }
		if( Jdeepsea.time() !== 0 ){ Jdeepsea.reverse(Jdeepsea.time()) }
		else{ Jdeepsea.reverse() }
		if( Jship.time() !== 0 ){ Jship.reverse(Jship.time()) }
		else{ Jship.reverse() }
		return;
	}
	Jflow.play();
	Jstarframe.play();
	Jterrain.play();
	Jdeepsea.play();
	Jship.play();
}
function ToggleArtery(Rev){
	if( Rev ){
		if( Hflow.time() !== 0 ){ Hflow.reverse(Hflow.time()) }
		else{ Hflow.reverse() }
		if( Hbloodaura.time() !== 0 ){ Hbloodaura.reverse(Hbloodaura.time()) }
		else{ Hbloodaura.reverse() }
		if( Hscatter.time() !== 0 ){ Hscatter.reverse(Hscatter.time()) }
		else{ Hscatter.reverse() }
		if( Hkeymord.time() !== 0 ){ Hkeymord.reverse(Hkeymord.time()) }
		else{ Hkeymord.reverse() }
		if( Hdazhali.time() !== 0 ){ Hdazhali.reverse(Hdazhali.time()) }
		else{ Hdazhali.reverse() }
		if( Hbarry.time() !== 0 ){ Hbarry.reverse(Hbarry.time()) }
		else{ Hbarry.reverse() }
		return;
	}
	Hflow.play();
	Hbloodaura.play();
	Hscatter.play();
	Hkeymord.play();
	Hdazhali.play();
	Hbarry.play();
}
function ToggleBigmo(Rev){
	if( Rev ){
		if( Mflow.time() !== 0 ){ Mflow.reverse(Mflow.time()) }
		else{ Mflow.reverse() }
		if( Walla.time() !== 0 ){ Walla.reverse(Walla.time()) }
		else{ Walla.reverse() }
		if( Mbigmo.time() !== 0 ){ Mbigmo.reverse(Mbigmo.time()) }
		else{ Mbigmo.reverse() }
		if( Mjaccuzi.time() !== 0 ){ Mjaccuzi.reverse(Mjaccuzi.time()) }
		else{ Mjaccuzi.reverse() }
		return;
	}
	Mflow.play();
	Walla.play();
	Mbigmo.play();
	Mjaccuzi.play();
}
function CheckForToggle(Target,Rev){
	if( Rev ){
		if( Target.hasClass(Portal[0]) ){
			ToggleJourney(true);
		}

		if( Target.hasClass(Portal[1]) ){
			ToggleArtery(true);
		}

		if( Target.hasClass(Portal[2]) ){
			ToggleBigmo(true);
		}
		return;
	}
	if( Target.hasClass(Portal[0]) ){
		ToggleJourney();
	}

	if( Target.hasClass(Portal[1]) ){
		ToggleArtery();
	}
	if( Target.hasClass(Portal[2]) ){
		ToggleBigmo();
	}
}

function ToggleDownload(Rev){
	if( Rev == true ){
		if( SC_DL_Stars.time() !== 0 ){ SC_DL_Stars.reverse(SC_DL_Stars.time()) }
		else{ SC_DL_Stars.reverse() }
		if( SC_DL_Flow.time() !== 0 ){ SC_DL_Flow.reverse(SC_DL_Flow.time()) }
		else{ SC_DL_Flow.reverse() }
		if( SC_DL_Download.time() !== 0 ){ SC_DL_Download.reverse(SC_DL_Download.time()) }
		else{ SC_DL_Download.reverse() }
		if( SC_DL_Resume.time() !== 0 ){ SC_DL_Resume.reverse(SC_DL_Resume.time()) }
		else{ SC_DL_Resume.reverse() }
		if( SC_DL_CV.time() !== 0 ){ SC_DL_CV.reverse(SC_DL_CV.time()) }
		else{ SC_DL_CV.reverse() }
		return;
	}
	if( Rev == false ){
		SC_DL_Stars.pause();
		SC_DL_Flow.pause();
		SC_DL_Download.pause();
		SC_DL_Resume.pause();
		SC_DL_CV.pause();
		return;
	}
	if( Rev == "reset" ){
		SC_DL_Stars.restart().pause();
		SC_DL_Flow.restart().pause();
		SC_DL_Download.restart().pause();
		SC_DL_Resume.restart().pause();
		SC_DL_CV.restart().pause();
		return;
	}
	SC_DL_Stars.play();
	SC_DL_Flow.play();
	SC_DL_Download.play();
	SC_DL_Resume.play();
	SC_DL_CV.play();
}
function ToggleRequest(Rev){
	if( Rev == true ){
		if( SC_RQ_Stars.time() !== 0 ){ SC_RQ_Stars.reverse(SC_RQ_Stars.time()) }
		else{ SC_RQ_Stars.reverse() }
		if( SC_RQ_Flow.time() !== 0 ){ SC_RQ_Flow.reverse(SC_RQ_Flow.time()) }
		else{ SC_RQ_Flow.reverse() }
		if( SC_RQ_Plus.time() !== 0 ){ SC_RQ_Plus.reverse(SC_RQ_Plus.time()) }
		else{ SC_RQ_Plus.reverse() }
		if( SC_RQ_CodeProject.time() !== 0 ){ SC_RQ_CodeProject.reverse(SC_RQ_CodeProject.time()) }
		else{ SC_RQ_CodeProject.reverse() }
		if( SC_RQ_DesignProject.time() !== 0 ){ SC_RQ_DesignProject.reverse(SC_RQ_DesignProject.time()) }
		else{ SC_RQ_DesignProject.reverse() }
		return;
	}
	if( Rev == false ){
		SC_RQ_Stars.pause();
		SC_RQ_Flow.pause();
		SC_RQ_Plus.pause();
		SC_RQ_CodeProject.pause();
		SC_RQ_DesignProject.pause();
		return;
	}
	if( Rev == "reset" ){
		SC_RQ_Stars.restart().pause();
		SC_RQ_Flow.restart().pause();
		SC_RQ_Plus.restart().pause();
		SC_RQ_CodeProject.restart().pause();
		SC_RQ_DesignProject.restart().pause();
		return;
	}
	SC_RQ_Stars.play();
	SC_RQ_Flow.play();
	SC_RQ_Plus.play();
	SC_RQ_CodeProject.play();
	SC_RQ_DesignProject.play();
}
function ToggleConnect(Rev){
	if( Rev == true ){
		if( SC_CN_Stars.time() !== 0 ){ SC_CN_Stars.reverse(SC_CN_Stars.time()) }
		else{ SC_CN_Stars.reverse() }
		if( SC_CN_Flow.time() !== 0 ){ SC_CN_Flow.reverse(SC_CN_Flow.time()) }
		else{ SC_CN_Flow.reverse() }
		if( SC_CN_Wifi.time() !== 0 ){ SC_CN_Wifi.reverse(SC_CN_Wifi.time()) }
		else{ SC_CN_Wifi.reverse() }
		if( SC_CN_Phone.time() !== 0 ){ SC_CN_Phone.reverse(SC_CN_Phone.time()) }
		else{ SC_CN_Phone.reverse() }
		if( SC_CN_Envelope.time() !== 0 ){ SC_CN_Envelope.reverse(SC_CN_Envelope.time()) }
		else{ SC_CN_Envelope.reverse() }
		return;
	}
	if( Rev == false ){
		SC_CN_Stars.pause();
		SC_CN_Flow.pause();
		SC_CN_Wifi.pause();
		SC_CN_Phone.pause();
		SC_CN_Envelope.pause();
		return;
	}
	if( Rev == "reset" ){
		SC_CN_Stars.restart().pause();
		SC_CN_Flow.restart().pause();
		SC_CN_Wifi.restart().pause();
		SC_CN_Phone.restart().pause();
		SC_CN_Envelope.restart().pause();
		return;
	}
	SC_CN_Stars.play();
	SC_CN_Flow.play();
	SC_CN_Wifi.play();
	SC_CN_Phone.play();
	SC_CN_Envelope.play();
}

// DivisionExpress
function ExpressTheDivision(This){
	if(
		typeof(ExpressSequence) == "undefined" ||
		(!ExpressSequence.isActive() && ExpressSequence.progress() !== 1)
	){
		HintWiggle = new TimelineMax();
		HintWiggle
			.to(This.find(".Hint"), .05, {
				x: 10
			}).to(This.find(".Hint"), .05, {
				x: -10
			}).to(This.find(".Hint"), .05, {
				x: 0
			});
		ExpressSequence = new TimelineMax({paused: true});
		ExpressSequence.add(
			TweenMax.to([This.find(".Hint"),This.find(".SwitchBeam")], .3, {
				autoAlpha: 1,
				y: This.find(".Content").innerHeight(),
				ease:  Power1. easeOut
			}), 0
		).add(
			TweenMax.staggerTo(This.find(".Content"), .3, {
				autoAlpha: 1,
				y: 0,
				ease:  Power1. easeOut
			}, .1), 0
		);
	}
	if( UpperBeam.isActive() ){
		This.find(".Hint").html("CLOSE");
		TweenMax.set(This, {autoAlpha: 1});
		UpperBeam.pause();
		ExpressSequence.play();
		HintWiggle.play();
	}else{
		This.find(".Hint").html("READ!");
		This.attr("style","");
		UpperBeam.play();
		ExpressSequence.reverse();
		HintWiggle.reverse();
	}
}
// Pathfinder
function Pathfinder(){
	Last_tprint = (typeof(tprint) !== "undefined") ? tprint : false;
	Path = "#Path"; Busted = false;
	ctt = false;
	// Preventing pathfinder to rewrite similar paths
	if( ( typeof(tpath) !== "undefined" ) &&
		( tpath.parent.attr("id") == ActiveDivision.parent().attr("id") &&
		( tpath.parent.attr("id") !== "Trilogies" || tprint.parent == null ) )
		 ){
			Busted = true;
	}
	tpath = {
		self: ActiveDivision,
		parent: ActiveDivision.parent()
	};
	tprint = {
		pre: null,
		parent: null,
		self: [],
		final: ""
	};

	if( tpath.parent.attr("id") === "Trilogies" ){
		$("#Trilogies").children("div").each(function(i){
			id = $(this).attr("id");
			if( tpath.self.attr("id") == id ){
				tprint.pre = true;
				if( id === "Temporary" ){
					id = null;
				}
				tprint.self = id;
			}
		});
	}else{
		// Setting the new print values
		tprint.pre = true;
		tprint.parent = Active.Dimension+" Dimension";
		tpath.parent.children("div").each(function(i){
			DimensionDOMS = $(this).parent().children("div");
			// Making sure trpint.self is only getting the siblings that are behind the current division
			if( DimensionDOMS.index(this) <= DimensionDOMS.index(tpath.self) ){
				tprint.self[i] = $(this).attr("id");
			}
		});
	}

	// Checking and preventing pathfinder to reset
	if( Last_tprint ){
		I = 0;
		StaticVars = []; // Holder for static vars
		AddVars = []; // Holder for removable vars
		RemVars = []; // Holder for additional vars
		result = Object.keys(tprint).map(function(key) {
			return [tprint[key]];
		});
		// Setting removabale and additional variables
		$.each(Last_tprint, function(key, val){
			// If last print value and current value don't match, We either need to add or remove something
			if ( key !== "final" && val !== result[I][0] ) {
				var II = 1;
				// Collecting values in individual arrays only when value is nested
				if( result[I][0] instanceof Object && result[I][0].length > 1 ){
					$(result[I][0]).each(function () {
						CurrentSelf = this.toString();
						// When last self is an array, we need to check the current self to each of it's arrays
						if( val instanceof Object ) {
							$(val).each(function () {
								// Add a variable only if the current wasn't already added
								if (CurrentSelf !== this.toString()) {
									AddVars.push([key, CurrentSelf]);
								}
							});
						}
						// When it's not, we just simply compare it to the current self
						else{
							// Comparing all current variable to one of the last variables
							if (CurrentSelf !== val.toString()) {
								// If it's a match we add the current variable
								AddVars.push([key, CurrentSelf]);
								II++; // This indicates that this value wasn't the same as the current
							}
							// And if the value isn't the doesn't exist in any of the current values, It must GO.
							if( II ==  result[I][0].length ){
								RemVars.push([key, val]);
							}
						}
					});
				}
				else {
					if( result[I][0] !== null  ) {
						// When the current value isn't empty, It was already added so the excess values will be removed
						$(val).each(function () {
							LastSelf = this.toString();
							// Remove a variable only if the current isn't active
							if (LastSelf !== result[I][0][0]) {
								RemVars.push([key, LastSelf]);
							}
						});
						// Adding new variables
						if ( val == null ) {
							AddVars.push([key, result[I][0]]);
						}
					}
					else{
						// When value is nested we collect them in individual arrays
						if( val instanceof Object && val.length > 1 ){
							$(val).each(function(){
								RemVars.push([key, this]);
							});
						}
						// When not, we simply put it in an array
						else{
							RemVars.push([key, val]);
						}
					}
				}
				}
			I++;
		});
		// Beginning removing process
		if( RemVars.length > 0 ){
			I = 1;
			// Removing without adding
			if( AddVars.length === 0 ){
				var TheContent = [],RemDivider = [],
					TotalLength = 0; var a = '';
				$(RemVars).each(function(N){
					a = $(Path).children("a").eq($(Path).children("a").length-I);
					// Locating added elements by reversing add algorithms
					TheContent.push(a);
					var aSPAN = $(Path).children("span").eq($(Path).children("span").length-I);
					// Fading the dividers
					RemDivider.push(function(){
						return TweenMax.to(aSPAN, 0.2,{
							margin: "0 0 0 -.6em",
							autoAlpha: 0,
							ease:  Back. easeInOut,
							onComplete: function(){
								// Removing the divider span after the animation
								$(this.target[0]).remove();
								if( N+1 == RemVars.length ){
									// Exclusive
									PathCallTo();
								}
							},
							onCompleteParams: ["{self}"]
						}, .1);
					});
					I++;
				});
				if( TheContent.length == 1 ){ TheContent = TheContent[0]; RemDivider = RemDivider[0]; }
				Glitch.durtest(5);
				// Calling Glitch to remove the elements
				// TheContent and RemDivider variables are both arrays containing related path and it's divider in similar orders
				Glitch.on(TheContent, null, RemDivider, true);
				return;
			}
			// Removing by overwrite
			else{
				// Gathering the final print using add variables
				$(AddVars).each(function () {
					// Checking for arrays
					if( typeof(this[1]) !== "object" ){
						// Normal procedure
						tprint.final += ( this[0] == "parent" ) ? "<span>-></span>" : "<span>></span>";
						tprint.final += "<a>" + this[1] + "</a>";
					}else{
						// Repeating the procedure for each of the arrays
						$(this[1]).each(function () {
							tprint.final += ( this[0] == "parent" ) ? "<span>-></span>" : "<span>></span>";
							tprint.final += "<a>" + this + "</a>";
						});
					}
				});
				// Starting search in the previous print to find a match in removable variables
				var TheContent = [],RemDivider = [],
					TotalLength = 0; var a = '';
				$(RemVars).each(function(N){
					a = $(Path).children("a").eq($(Path).children("a").length-I);
					// Locating added elements by reversing add algorithms
					TheContent.push(a);
					var aSPAN = $(Path).children("span").eq($(Path).children("span").length-I);
					// Fading the dividers
					RemDivider.push(function(N){
						TweenMax.to(aSPAN, 0.02,{
							margin: "0 0 0 -.6em",
							autoAlpha: 0,
							ease:  Back. easeInOut,
							onComplete: function(){
								// Removing the divider span after the animation
								$(this.target[0]).remove();
								if( N+1 == RemVars.length ){
									// Speed the process in case the user is already switching divisions before the Glitch is done ( UHAHAHAHAH >=) )
									Glitch.durtest(5);
									Glitch.on(Path, tprint.final, true);
									// Exclusive
									PathCallTo();
								}
							},
							onCompleteParams: ["{self}"]
						}, .1);
					});
					I++;
				});
				if( TheContent.length == 1 ){ TheContent = TheContent[0]; RemDivider = RemDivider[0]; }
				Glitch.durtest(5);
				// Calling Glitch to remove the elements
				Glitch.on(TheContent, null, RemDivider, true);
				return;
			}
		}
		if( AddVars.length > 0 ){
			$(AddVars).each(function () {
				tprint.final += ( this[0] == "parent" ) ? "<span>-></span>" : "<span>></span>";
				tprint.final += "<a>" + this[1] + "</a>";
			});
		}
		Glitch.durtest(5);
		Glitch.on(Path,tprint.final,true,false);
		return;
	}else{
		$.each(tprint, function (key, value) {
			if ( (value !== null && key !== "final") ) {
					if( typeof(value) == "object" ){
						$(tprint.self).each(function(i){
							tprint.final += "<a>" + this + "</a>";
							if( i+1 < tprint.self.length ){
								tprint.final += "<span>></span>";
							}
						});
					}else{
						// If pre value is true, we're in Temporary division
						if (key == "pre" && ( tpath.self.attr("id") == "Temporary" || value == true )){
							tprint.final += "<a>Trilogy</a>";
						}else{
							tprint.final += "<a>" + value + "</a>";
						}
						if (key !== "self" && key !== "pre") {
							tprint.final += "<span>></span>";
						}
					}
				if (key == "pre" && tpath.self.attr("id") !== "Temporary") {tprint.final += "<span>-></span>"; }
			}
		});
	}

	Glitch.durtest(5);
	// Adding the call function
	Glitch.on(Path,tprint.final,false);
}
function PathCallTo(){
	var CurrentA = $("#Path>a").last(),
		Siblings = $(CurrentA).siblings("a"),
		Color = Active.Color;
	// Coloring current value
	TweenMax.to(CurrentA, .01, {color: Color, onComplete: function(){
			// Checking to remove inline styles if it's the default color
			if( Color === PortalColor[PortalColor.length-1] ){
				TweenMax.set(CurrentA, {clearProps: "all"})
			}
		}});
	// Returning other values (if there are any) to the default color
	if( Siblings.length > 0 ){
		if( Active.Dimension === "Trilogies" ){
			// Fading other siblings in "Trilogies" dimension to make current value bolder (cause this dimension has a neutral color)
			TweenMax.to(Siblings, .2, {color: "#fff", opacity: .6});
		}else{
			// Or just reset their colors in other dimensions
			TweenMax.to(Siblings, .2, {color: "#fff", onComplete: function(){
					TweenMax.set(Siblings, {clearProps: "all"})
			}});
		}
	}
	// Animating some space between paths and dividers
	TweenMax.staggerTo($("#Path>span") , .2,{margin: "0 .6em",ease:  Back. easeInOut},.1, function(){
		// Running PocketPath() to fix the pathfinder on the newest values
		PocketPath();
	});
/*	$("#Path>a").each(function(i){
		var CurrentA = $(this);
		DirectFly[i] =
			( i === 0 ) ? $("#Temporary") :
			( i === 1 ) ? null :
			( i-1 === tpath.parent.children().length ) ? tpath.self :
			tpath.parent.children().eq(i-2);
		if( (DirectFly[i] !== null && DirectFly[i].attr("id") !== ActiveDivision.attr("id")) ){
			$(CurrentA).css({color: Active.Color});

			var Divider = $("#Path>span");
			// Animating some space between paths and dividers
			var dividertween = TweenMax.staggerTo(Divider, .2,{margin: "0 .6em",ease:  Back. easeInOut},.1, function(){
				// Running PocketPath() to fix the pathfinder on the newest values
				PocketPath();
			});
			$(this).removeClass("Nope");
		}else{
			$(this).unbind("click").addClass("Nope").css({color: ""});
		}
	})*/
}
// Path slide sequence
function PocketPath(reset){
	var pathfinder = $(".PathFinder"),
		path = pathfinder.find("#Path"),
		formula = path.innerWidth() - pathfinder.innerWidth();
	// Checking if the path overflows it's container
	if( formula > 0 && !reset ){
		// Moving the path to make the newest values visible
		TweenMax.to(path, .5, {
			x: -formula,
			ease: Back. easeInOut
		});
		// Enabling dragging feature
		Draggable.create(path,{
			type: "x",
			dragClickables: true,
			dragResistance: .5,
			bounds: {maxX: pathfinder.innerWidth()*.1, minX: -formula-pathfinder.innerWidth()*.1},
			onDragEndScope: this.target,
			onDragScope: this.target,
			onDragEnd: function(){
				var xvalue = null;
				// Reversing the path to the left side if user is far left
				if( this.x < -formula ){
					xvalue = -formula;
				}
				// Doing the same above to the right side
				if( this.x > 0 ){
					xvalue = 0;
				}
				TweenMax.to(path, .5,
					{
						x: xvalue
					});
			}
		});
	}else{
		if( Draggable.get(path) ){
			// Removing drag feature when path doesn't overflow it's container
			Draggable.get(path).kill();
		}else{
			// If the path wasn't altered, we do nothing
			return;
		}
		// Moving the path back to it's original position if it was altered
		TweenMax.to(path, .5, {
			x: 0,
			ease: Back. easeInOut
		});
	}
}
// SkilloCore
function DelCore(ThisCore){
	TweenMax.set($(ThisCore).parent().parent(), {zIndex: 0});
	TweenMax.set(CoreKeepa, {zIndex: 0,autoAlpha: 1});
	$(ThisCore).parent().remove();
}
function CoreArrived(){
	GlowOnEnter.play();
}
function ApplyCoreSlide(){
	CoreSlider.play();
}
function ApplySlider(){
	TitleSlider.play(); Flicker.play(); Brrr.play();
}
function ReverseCore(All){
	TitleSlider.kill(); Flicker.kill(); Brrr.kill();
	ReverseDur = 1;
	TweenMax.to(OBJ, ReverseDur, {x: "-50%"});
	TweenMax.to(Core.children(), ReverseDur, {autoAlpha: 1,x: 0});
	if( typeof(CoreMove) !== "undefined" && All ){
		CoreGlow.kill();
		CoreMove.reverse();
		AffectedCores = {Core: [], Waya: []};
	}
}
function RemoveCore(Dur){
	if( Dur ){
		CoreGlow.duration(Dur);
		Emginashun.duration(Dur);
	}
	CoreSlider.pause();
	if( CoreGlow.time() !== 0 ){CoreGlow.reverse(CoreGlow.time());}
	else{CoreGlow.reverse();}
	Emginashun.delay(0).reverse().eventCallback("onReverseComplete",ResetCore);
	SkiloBrrr.pause();
	TweenMax.to(CoreSlider._first.target[0], CoreSliderDur/2, {x: "-50%", ease:  SlowMo.ease.config( 0.2, 0.2, false)});
	TweenMax.to(SkiloBrrr._first.target[0], .2, {x: 0});
}
function ResetCore(){
	Emginashun.delay(0).reverse().eventCallback("onReverseComplete",DelCore,[Emginashun._first.target[0]]);
	TweenMax.set(CoreKeepa, {zIndex: 0,autoAlpha: 1});
	CoreMove.reverse();
	// Reactivating Gandalf after the Core is removed
    $("#Skillometer .Glued").data({GandalfActive: true});
    // Reset Gandalf's content
    Glitch.on("#Gandalf", null);
}

// SpaceCyclone
FormEffects = {
	fadeout : function(t){
		// defining the label
		label = t.siblings("label");
		// animating the label
		TweenMax.to(label, .2, {autoAlpha: 0});
	},
	reverse : function(t){
		if( t.val() == null || t.val() == "" ){
			// defining the label
			label = t.siblings("label");
			TweenMax.to(label, .2, {autoAlpha: 1, scale: 1, y: "0%"});
		}
	}
};
function AssetHover(t,reverse){
	if( Cyclone.isActive == false || EnterStorm.isActive() || ( t.children(".Title").hasClass("active") && !reverse ) ){ return; }
	AssetAlpha = (!reverse) ? .3 : 0;
	if( t.hasClass("AlphaAsset") ){
		TweenMax.to($(".Curtain > .Alpha"), .2, {autoAlpha: AssetAlpha});
	}
	if( t.hasClass("BetaAsset") ){
		TweenMax.to($(".Curtain > .Beta"), .2, {autoAlpha: AssetAlpha});
	}
	if( t.parent().parent().hasClass("Download") ){
        TweenMax.to($(".Curtain > .Beta, .Curtain > .Alpha"), .2, {autoAlpha: AssetAlpha});
    }
}
Area69 = {
	enable: null,
	enabled: function(t){
		// Save enable/disable requests
		this.enable = ( t == false ) ? false : true;
	},
	varset: function(t,r){
		// Deny request when disabled
		if( !this.enable ){
			return;
		}
		var	indica = t.siblings().filter(".Indicator"),
			close = t.siblings().filter(".Close"),
			rotation = ( r ) ? 0 : 180,
			alpha0 = ( r ) ? 1 : 0,
			alpha1 = ( r ) ? 0 : 1;
		TweenMax.to( indica, .15, {
			rotation: rotation,
			autoAlpha: alpha0
		} );
		TweenMax.to( close, .15, {
			rotation: rotation,
			autoAlpha: alpha1
		} );
	},
	set: function(t){
		this.varset(t);
		return this;
	},
	reset: function(t){
		this.varset(t,true);
		return this;
	}
};
Form = {
	Arrange: [],
	ActiveDom: null
};
function AssetForm(t,func){
	// Defining required vars
	var Asset = t.parent(),
	Class = t.parent().attr("class"),
	TheForm = t.siblings("form");
	AssetHover(Asset,true);
	if( EnterStorm.isActive() ){ return; }
    // If available, run the second parameter after the animation is reversed (EXCLUSIVE FORM SEQUENCE)
    if( func ){
        Form.Arrange[Class].eventCallback("onReverseComplete", function(){
            // Run the function
            func();
            // Reset call back on the animation
            Form.Arrange[Class].eventCallback("onReverseComplete", null);
        });
    }
	if( Form.ActiveDom !== null && !Asset.hasClass(Form.ActiveDom.parent().attr("class")) ){
		var ActiveClass = Form.ActiveDom.parent().attr("class");
		Deformer(ActiveClass, Form.ActiveDom, true);
	}
	if( typeof(Form.Arrange[Class]) !== "undefined" ) {
		if( Deformer(Class, t) ){ return; }
		// Using the same animation instead of duplicating
		Form.Arrange[Class].duration(Form.Arrange[Class].duration()).restart();
		// Add the active indicator
		t.addClass("active");
		Form.ActiveDom = t;
		return;
	}
	// Toggle the active indicator
	t.toggleClass("active");
	Form.ActiveDom = t;
	// Defining animation and related properties
	var FormEase =  Back.easeInOut.config( 1.7),
		toY = ( ( $("#SpaceCyclone").height() - ( (t.innerHeight() / .6) + TheForm.outerHeight() ) ) / 2 ) - Asset.offset().top ;

	TweenMax.set(TheForm.find(".Submit"), {x: "0%"});
	var SubmitToY = ( ( ( $("#SpaceCyclone").height() * .9 ) - (TheForm.find(".Submit").offset().top + TheForm.find(".Submit").innerHeight()) ) * 100 ) / TheForm.innerHeight(),
		SubmitToX = ( ( $("#SpaceCyclone").width() * .5 ) - (TheForm.find(".Submit").offset().left + TheForm.find(".Submit").innerWidth() / 2) );

	Form.Arrange[Class] = new TimelineMax();
	Form.Arrange[Class]
		.fromTo(Asset, .6, {y: 0,ease: FormEase}, {y: toY,ease: FormEase}, 0)
		.fromTo(t, .6, {scale: 1, transformOrigin: "50% 0%",ease: FormEase}, {scale: .6, transformOrigin: "50% 0%",ease: FormEase}, 0)
		.staggerFromTo(TheForm.children(":not(.Submit)"), .6, {autoAlpha: 0, y: 10,ease: FormEase}, {autoAlpha: 1, y: 0,ease: FormEase}, .1, 0)
		.fromTo(TheForm.find(".Submit"), .6, {autoAlpha: 0, x: SubmitToX, y: 0,ease: FormEase}, {autoAlpha: 1, x: SubmitToX, y: SubmitToY+"%",ease: FormEase}, "-=.6");
}
function Deformer(Class, t, nonstop){
	var Switch = false;
	if (Form.Arrange[Class].isActive()) {
		if (Form.Arrange[Class].reversed()) {
			Form.Arrange[Class].reversed(!Form.Arrange[Class].reversed());
			Switch = "active";
		} else {
			Form.Arrange[Class].duration(Form.Arrange[Class].duration()/1.6).reverse();
			Switch = true;
		}
	} else {
		if (Form.Arrange[Class].progress() !== 0 && Form.Arrange[Class].progress() === Form.Arrange[Class].totalProgress()) {
			// Reversing the active asset
			Form.Arrange[Class].duration(Form.Arrange[Class].duration()/1.6).reverse();
			TweenMax.set($(Form.Arrange[Class]._first.target[0]).find(".Submit"), {x: "0%"});
			Switch = true;
		}
	}
	$(Form.Arrange[Class]._first.target[0]).find(".Title").toggleClass("active");
	if( !nonstop ){
			Form.ActiveDom = ( Switch === true ) ? null : t;
	}
	return Switch;

}
function ExitStorm(t){
	Storm = t;
	// Reset the forms
	if( Form.ActiveDom !== null ){
		AssetForm($("."+(Form.ActiveDom.parent().attr("class")).replace(" ",".")).find(".Title"));
		// Reset active form indicator variable
        Form.ActiveDom = null;
	}
	// Reset the animations played after ritual is completed
    if( !PostRitual.reversed() ){
        PostRitual.reverse( PostRitual.time() );
    }
    // Save the current Ritual animation
    var tmp = Ritual;
    // Reset the Ritual animation
    Ritual = new TimelineMax();
    // Fill the new Ritual animation with updated values
	$(tmp.getChildren()).each(function(i){
	    // Set a variable to unify objects and other types of subjects passed to the Tween
	    var asset = ( typeof(this.target[0]) !== "undefined" ) ? this.target : this.target[0],
            dur = EnterStorm.duration();
		if( $(asset).hasClass("Curtain") ){
            Ritual.to(asset, dur, {autoAlpha: 0,ease: Sine. easeOut});
		}else{
			if( $(asset).parent().hasClass("Resume") ){
                Ritual.to(asset, dur, {rotation: 35,rotationY: 0, y: "-10%", x: "15%", transformOrigin: "15% 35%",ease: Sine. easeOut}, 0);
			}else if( $(asset).parent().hasClass("CV") ){
                Ritual.to(asset, dur, {rotation: 0,rotationY: 0,y: "0%",x: "0%", transformOrigin: "80% 0%",ease: Sine. easeOut}, 0);
			}else{
                Ritual.to(asset, dur, {autoAlpha: 1,opacity: 1,scale: 1,scaleX: 1,x: "0%",y: "0%",rotationY: 0,rotation: 0,ease: Sine. easeOut}, 0);
			}
		}
	});
	// Resetting the storm
	CutTripwire.reverse().eventCallback("onReverseComplete",function(){
		Storm.siblings(".Curtain").attr("class","Curtain");
		if( Storm.hasClass("Download") ){
			ToggleDownload("reset");
		}
		if( Storm.hasClass("Request") ){
			ToggleRequest("reset");
		}
		if( Storm.hasClass("Connect") ){
			ToggleConnect("reset");
		}
		if( SC_Footer.reversed() ){
			SC_Footer.reversed( !SC_Footer.reversed() ).resume();
		}
		// Resetting Gandalf only after exit by direct click
		if( !ActiveFly.isActive() && !ReverseFly.isActive() ){
		    Glitch.on("#Gandalf", null);
        }
	});
	EnterStorm.reverse().eventCallback("onReverseComplete", function(){
        // Re-enable Definer hover/enter/close asset after exit
        TweenMax.set(Storm.find(".Tripwire"), {autoAlpha: 1}, 0);
        // Reactivate cyclone activation indicator
        Cyclone.isActive = false;
    });
	// Reset and disable Definer asset hover reactions
	Area69.reset(Storm.find(".Area69")).enabled(false);
}

// AntiToxins
function DefaultScale(asset){
	if( asset instanceof Object && asset instanceof jQuery ){
		asset = asset.innerWidth();
	}
	return 1 + ( 1 - ( asset / ( ActiveDivision.width() * .1 ) ) );
}
function ParticleActivation(T, e){
	// Cancelling click process on 2 conditions :
	// When clicked on another Particle while entering
	// When the particle's container is clicked and not the particle itself
    // When navigating
	if(
		( Particle.activeObj !== null && !$(Particle.activeObj).hasClass(T.attr("class")) ) ||
		( e !== null && ( $(e.target).hasClass("DevParticle") || $(e.target).hasClass("ArtParticle") ) ) ||
        Particle.Navigated
	){
		return;
	}
	// Unbluring the blur effect given to sibling elements on mouseenter method
	var FadeAssets = T.siblings(".DevStar, .DevParticle, .ArtStar, .ArtParticle");
	TweenMax.to(FadeAssets, .5, {opacity: 1});
    TweenMax.to(".QuickAccess", .5, {y: "100%"});
	// Cancel other Particle's Gandalf reactions
    FadeAssets.data({GandalfActive: false});
	// Cancelling entrance
	if( Particle.isActive ){
		// This var prevents default reset due to user flying to another division while particle was resetting
		var theEvent = ( e === null ) ? true : null;
		// Set opt 1 to display when clicked and switch to opt 0 after click
		T.data({GandalfOpt: 1, PostClickOpt: 0});
		ResetParticle(Asc.parent().parent(), theEvent);
		return;
	}
	// In case EnterParticle animations are built we resume where we left off
	if( typeof(EnterParticle) !== "undefined" && EnterParticle.isActive() && EnterParticle.reversed() ){
		EnterParticle.reversed( !EnterParticle.reversed() );
		ParticleRotation.reversed( !ParticleRotation.reversed() );
		Particle.isActive = T.attr("class");
		Particle.activeObj = T;
		return;
	}
	AntiToxins.invalidate().pause();
    // When Sign is glitching
    if( typeof(SignGlitch) !== "undefined" ){
        // Stop the glitch
        SignGlitch.kill();
    }
    TrackLines.fade();
    // De-activating TrackLines
    TrackLines.disabled = true;

	// Enter a new particle
	EnterParticle = new TimelineMax();
	ParticleRotation = new TimelineMax();
	Particle.isActive = T.attr("class");
	Particle.activeObj = T;
	// Setting fly attributes
	AT_scale = 2;
	AT_HoldMyState = {
		ot : T.offset().top,
		ol : T.offset().left,
		w : T.innerWidth(),
		h : T.innerHeight()
	};
	// Applying SingleParticle entrance effects
	// Siblings animations
	T.siblings(".DevParticle, .ArtParticle").each(function(){
		Asc = $(this).children(".Container");
		AddFly.ParticleEntrance();
		Asc.addClass("NoTouchin");
	});
	T.siblings(".DevStar, .ArtStar").each(function(){
		Asc = $(this).find(".Star");
		AddFly.ParticleEntrance();
	});
	// Current particle animations
	Asc = T.children(".Container");
	AddFly.ParticleEntrance(true);
	Asc = T.children(".Container").children();
	AddFly.ParticleEntrance(false, true);
	// Appearing the single particle panel
	EnterParticle.eventCallback("onComplete",function(){
		Glitch.on("#Gandalf", null);
		TriggerDiamond(Asc.parent().parent());
	});
}
function TriggerDiamond(asset){

	ExpandParticle = new TimelineMax();
	CurrentParticle = asset;
	// Expanding the SingleParticle and it's children
	ExpandParticle.add(
		TweenMax.fromTo($("#AntiToxins #ParticleAura"), .01, {zIndex: 1, autoAlpha: 0}, {zIndex: 1, autoAlpha: 1}), 0
	).add(
		TweenMax.fromTo($("#AntiToxins .SingleParticle"), .3, {zIndex: 1, autoAlpha: 0, scale: 0, transformOrigin: "50% 10%"}, {zIndex: 2, autoAlpha: 1, scale: 1, transformOrigin: "50% 10%"}), 0
	).add(
		TweenMax.staggerFromTo($("#AntiToxins .SingleParticle > *"), .3, { autoAlpha: 0 }, {autoAlpha: 1}, .1), 0
	);
	// Creating the particle's clone
	var clone = CurrentParticle.clone();
	// Emptying the clone's style attributes
	clone.attr("style","");
	clone.children(".Container").attr("style","");
	clone.children(".Container").children().attr("style","");
	// Adding the clone and its new attributes
	$("#AntiToxins .SingleParticle > .Clone").html("");
	$("#AntiToxins .SingleParticle > .Clone").append(clone);
	$("#AntiToxins .SingleParticle > .Clone > div").addClass("CLONED").css({
		width : asset.children(".Container").innerWidth(),
		paddingBottom: asset.children(".Container").innerWidth()
	}).click(function(){
		Glitch.on("#Gandalf", "Closing...");
		if( Particle.isActive ){
			ResetParticle(asset);
			return;
		}
	});
    $("#AntiToxins #ParticleAura").unbind("click").click(function(e){
        Glitch.on("#Gandalf", "Closing...");
        if( Particle.isActive ){
            ResetParticle(asset);
        }
    });
	// Prepping the original particle and the clone for replacement
	TweenMax.set(CurrentParticle, {zIndex: 3});
    ExpandParticle.to(CurrentParticle, .3, {autoAlpha: 0,delay : ExpandParticle.duration()/4}, 0);
    TweenMax.to(".QuickAccess", .5, {y: "100%"}, 0);
	// Calling the function that prepares clone's children using the related particle's database
	PrepClone();
	ExpandParticle.eventCallback("onComplete", function(){
		// Replacing the original particle with the clone
		TweenMax.set($("#AntiToxins .SingleParticle > .Clone > div"), {autoAlpha: 1});
	});
	ExpandParticle.eventCallback("onReverseComplete", function(){
		TweenMax.set(CurrentParticle, {zIndex: ""});
	});
	// Project navigation
	$("#AntiToxins .SingleParticle > .Navigate").children().unbind("click").click(function(){
		var GoToParticle = ( $(this).hasClass("PrevProject") ) ?
			CurrentParticle.prev(".DevParticle, .ArtParticle") :
			CurrentParticle.next(".DevParticle, .ArtParticle") ;
		// Update status on Gandalf
		Gandalfer.set($(this));

		if( GoToParticle.length === 0 ){
			var group = ( CurrentParticle.hasClass("ArtParticle") ) ? "ArtParticle" : "DevParticle" ,
				othergroup = ( group === "DevParticle" ) ? "ArtParticle" : "DevParticle" ;
			if( CurrentParticle.parent().children("."+group).last().hasClass(CurrentParticle.attr("class")) ){
				GoToParticle = CurrentParticle.parent().children("."+othergroup).first();
			}
			if( CurrentParticle.parent().children("."+group).first().hasClass(CurrentParticle.attr("class")) ){
				GoToParticle = CurrentParticle.parent().children("."+othergroup).last();
			}
		}

		ExpandParticle.duration(.2).reverse();

		if( typeof(ParticleNavigation) !== "undefined" ){
			NavRotation.reverse();
		}

		ParticleNavigation = new TimelineMax();
		NavRotation = new TimelineMax();
		NAV_HoldMyState = {
			ot : GoToParticle.offset().top,
			ol : GoToParticle.offset().left,
			w : GoToParticle.innerWidth(),
			h : GoToParticle.innerHeight()
		};

		// Animating siblings and stars
		GoToParticle.siblings(".DevParticle, .ArtParticle").each(function(){
			Asc = $(this).children(".Container");
			// Applying new properties to sibling particles
			if( !CurrentParticle.hasClass($(this).attr("class")) ){
				AddFly.ParticleNavigate();
			}
			// Applying new properties to the current active particles to blend with other inactive particles
			else{
				AddFly.ParticleNavigate(false, true);
				ParticleRotation.reverse();
			}
			// Disables cursor pointer
			Asc.addClass("NoTouchin");
		});
		GoToParticle.siblings(".DevStar, .ArtStar").each(function(){
			Asc = $(this).find(".Star");
			AddFly.ParticleNavigate();
		});
		// Animating the original particle
		TweenMax.set([CurrentParticle, GoToParticle], {zIndex: 3, autoAlpha: 1});
		TweenMax.set("#AntiToxins .SingleParticle > .Clone > *", {autoAlpha: 0});

		Asc = GoToParticle.children();
		AddFly.ParticleNavigate(true);

		ParticleNavigation.eventCallback("onComplete", function(){
			TriggerDiamond(GoToParticle);
			Particle.Navigated = true;
			// Reset Gandalf's content
			Glitch.on("#Gandalf", null);
		});
	});
}
function PrepClone(){
	var singleparticle = $("#AntiToxins .SingleParticle");
	$(Projects).each(function(){
		if( CurrentParticle.hasClass(this.id) ){
			singleparticle.children(".Title").html(this.title);
			singleparticle.find(".Pages > div").html("");
			singleparticle.find(".img").remove();
			$(this.pages).each(function(i){
				PageContainer = singleparticle.find(".Pages > div");
				imgContainer = singleparticle.find(".Preview");

				PageContainer.append("<a></a>");
				imgContainer.append("<div class='img'><img/></div>");

				PageContainer.children().last()
					.addClass("Page")
					.attr("id","No" + ( i + 1 ) )
					.html(this.title.toUpperCase()+" PAGE");
				imgContainer.children(".img").last()
					.attr("id","img_No" + ( i + 1 ) );
				imgContainer.children(".img").last().children("img")
					.attr("src", this.image);

				if( this.active ){
					PageContainer.children().last()
						.addClass("active");
					imgContainer.children(".img").last()
						.addClass("active");
					singleparticle.find(".Preview img:active").attr("src", this.image);
					singleparticle.find(".Cover").unbind("click").click(function(){
						if(
							(typeof(ExpandPreview) !== "undefined" && ExpandPreview.isActive()) ||
							(typeof(Navigation) !== "undefined" && Navigation.isActive())
						){ return; }
						ExpandPreview = new TimelineMax();
						ExpandPreview.to("#AntiToxins .Preview .Cover", .01, {autoAlpha: 0}, 0)
							.to(imgContainer.find(".img.active"), .2, {height: window.innerHeight,width: window.innerWidth,
								top: -imgContainer.find(".img.active").offset().top,
								left: -imgContainer.find(".img.active").offset().left,
								onComplete: function(){
									imgContainer.find(".img.active img").click(function(){
										ExpandPreview.reverse();
									});
								}}, 0);
					});
				}else{
					TweenMax.set(imgContainer.children(".img").last(), {autoAlpha: 0});
				}
				PageContainer.children().last().click(function(){
					Navigation = new TimelineMax();
					if( $(this).hasClass("active") ){ return; }
					var CoverChildren = singleparticle.find(".Preview > .Cover > div");
					Navigation.to(CoverChildren.last(), .1, {autoAlpha: .6}, 0);

					$(this).siblings(".active").removeClass("active");
					$(this).addClass("active");
					imgContainer.children(".active").removeClass("active");
					imgContainer.children("#img_No"+$(this).attr("id").match(/[0-9]+/gi).toString()).addClass("active");

					Navigation.to(imgContainer.find(".img"), .2, {autoAlpha: 0, onComplete: function(){
							TweenMax.to(CoverChildren.last(), .2, {autoAlpha: 1});
							TweenMax.to(imgContainer.find(".img.active"), .2, {autoAlpha: 1});
						}}, 0);
				});
			});
			singleparticle.find(".Detail > .Description").html(this.detail);
			ToolsType = singleparticle.find(".Detail > .BuiltWith > .Navigate > *");

			var tools = this.tools,
				canireset = true;
			singleparticle.find(".ToolBox").each(function(i){
				$(this).children().each(function(ii){
					var THIS = $(this);
					// Removing active class from tools in the ToolBox
					if( THIS.hasClass("active") ){
						THIS.removeClass("active");
					}
					$(tools).each(function(){
						// Checking the database to find a match for a tool and activating it
						if( THIS.hasClass(this.toString()) ){
							THIS.addClass("active");
						}
					});
				});
				// Deactivating ToolBox completely
				if( $(this).children(".active").length === 0 ){
					$(this).removeClass("active").addClass("disable");
					ToolsType.eq(i).removeClass("active").addClass("disable");
				}else{
					$(this).removeClass("disable");
					ToolsType.eq(i).removeClass("disable");
					// Activating only the first available ToolBox completely
					if( $(this).parent().children(".ToolBox.active").length === 0 || canireset ){
						$(this).addClass("active");
						ToolsType.eq(i).addClass("active");
						canireset = false;
					}else{
						$(this).removeClass("active");
						ToolsType.eq(i).removeClass("active");
					}
					// Enabling the user to navigate using the buttons
					ToolsType.eq(i).unbind("click").click(function(){ navclick($(this)) });
				}
			});

			function navclick(T){
				if( T.hasClass("active") ){ return }
				singleparticle.find(".BuiltWith > .Navigate").children().toggleClass("active");
				singleparticle.find(".ToolBox").toggleClass("active");
			}

			singleparticle.find(".State").children(".RealState.active").removeClass("active");
			if( this.state == "completed" ){
				singleparticle.find(".State .RealState").eq(0).addClass("active");
				if( this.website ){
					singleparticle.find(".State .RealState span").fadeIn().children("a").attr("href", this.website)
				}else{
					singleparticle.find(".State .RealState span").fadeOut();
				}
			}else if( this.state == "doing" ){
				singleparticle.find(".State .RealState").eq(1).addClass("active");
			}else if( this.state == "cancelled" ){
				singleparticle.find(".State .RealState").eq(2).addClass("active");
			}
		}
	});

}
function ResetParticle(asset, e){
	Particle.isActive = false;
	// If EnterParticle process is still running, then SingleParticle is not expanded yet
	if( !EnterParticle.isActive() ){
		ExpandParticle.duration(.1).reverse();
	}
    TweenMax.set(asset, {autoAlpha: 1});
	ParticleRotation.reverse();
	// Re-activate Particle's Gandalf reaction
    asset.data({GandalfActive: true});
	function ReverseToDefault(){
		AntiToxins.duration(AntiToxins.duration()).restart();
		TweenMax.to(".QuickAccess", .5, {y: "0%"});
		Particle.Navigated = false;
		// Re-enable cursor pointer
        $("#AntiToxins").find(".NoTouchin").removeClass("NoTouchin");
		// Reset Gandalf after all assets are back to their default position
		Glitch.on("#Gandalf", null);
	}
	if( Particle.Navigated ){
		EnterParticle = new TimelineMax();
		AT_HoldMyState = {
			ot : asset.offset().top,
			ol : asset.offset().left,
			w : asset.innerWidth(),
			h : asset.innerHeight()
		};
		asset.siblings(".ArtParticle, .DevParticle").each(function(){
			Asc = $(this).children(".Container");
			AddFly.ParticleEntrance(false, false, true);
		});
		asset.siblings(".DevStar, .ArtStar").each(function(){
			Asc = $(this).find(".Star");
			AddFly.ParticleEntrance(false, false, true);
		});

		Asc = asset.children();
		AddFly.ParticleEntrance(false, false, true);
		NavRotation.reverse();
		var NavRevFly = EnterParticle;
		EnterParticle.eventCallback("onComplete", function(){
			if( e !== true ){
				ReverseToDefault();
			}
		});
		return;
	}
	EnterParticle.reverse().eventCallback("onReverseComplete", function(){
		if( e !== true ){
			ReverseToDefault();
		}
		// Re-activate other Particles' Gandalf reactions when fully reversed
        asset.siblings(".ArtParticle, .DevParticle").data({GandalfActive: true, GandalfOpt: 0});
		// At this point no Particle is active
        Particle.activeObj = null;
        // Re-activating TrackLines
        TrackLines.disabled = false;
		// Manually reappear NameTag if an asset is hovered after exit
		asset.parent().children(".ArtParticle, .DevParticle").each(function(){
			if( $(this).is(":hover") ){
				NameTag.play($(this));
			}
		});
	});
	if( e !== true ){
        Glitch.on("#Gandalf", "Closing...");
    }
}

// DekcCloud
function CardHoverIn(This){
	var T = This.parent().parent().attr("class"),
		siblings = This.nextAll().toArray().reverse();
	if( (typeof(CardSelect.isActive[T]) !== "undefined" && CardSelect.isActive[T]) || (typeof(CardSelect.mdReset[T]) !== "undefined" && CardSelect.mdReset[T]) ){
		return;
	}
	// Aborting hover sequence when :
	// Decks are currently placing and haven't finished
	// There is no sibling after the current element
	// The hover timeline is currently active and reversing
	if(
		PlaceDeck.isActive() || !siblings.length || (typeof(CardHover.HoverReveal[T]) !== "undefined" && CardHover.HoverReveal[T].reversed() && CardHover.HoverReveal[T].isActive())
	){
		return;
	}
	// Flushes the related timeline when mouseleave orders it
	if( !CardHover.append[T] ){
		CardHover.HoverReveal[T] = new TimelineMax();
	}
	// Declare a new active list only when one already doesn't exist
	if( typeof(CardHover.AlreadyActive[T]) == "undefined" ){
		CardHover.AlreadyActive[T] = [];
	}
	$(siblings).each(function(){
		var TheSibling = $(this),
			prevent = false;
		// Adding new animations for inactive siblings & prevent re-writing animations
		if( CardHover.isActive[T] && CardHover.AlreadyActive[T].length ) {
			$(CardHover.AlreadyActive[T]).each(function () {
				// We'll prevent making new animations when the the current sibling is already active & has a set of tweens dedicated to it in the timeline
				// NOTE : the reason for second part of the condition is identifying siblings that were passed due to the quick movement of the cursor and so they didn't trigger mouseenter method
				if ( TheSibling.hasClass($(this).attr("class")) && CardHover.HoverReveal[T].getTweensOf(TheSibling.children()).length ) {
					prevent = true;
				}
			});
		}
		// If the current sibling was found in the active ones, we prevent re-write
		if( !CardHover.isActive[T] || !prevent ){
			// If not, we create new animations for it
			TweenMax.killTweensOf($(this).children());
			CardHover.HoverReveal[T].add(
				TweenMax.fromTo($(this).children(), .15, {
					scaleY: 1,
					transformOrigin: "50% 100%"
				}, {
					scaleY: .75,
					transformOrigin: "50% 100%"
				}), "-=.075"
			);
			// Adding the added animation's element to the active list
			CardHover.AlreadyActive[T].push($(this));
		}
	});
	CardHover.isActive[T] = This;
}
function CardDeSelect(theT, This, ResetTargets){
	// Reversing all next siblings to their default position
	TweenMax.staggerTo( ResetTargets.children(), .15, {
		scaleY: 1
	}, "-=.075", function(){
		// Resetting all the hover variables except the HoverReveal after the siblings switched back to their place
		CardHover.append[theT] = false;
		CardHover.isActive[theT] = false;
		CardHover.AlreadyActive[theT] = [];
		// Only the front card needs a fully empty timeline
		if( !This.nextAll().length || !$(This).parent().children().filter(function(){ return $(this).is(":hover") }).length ){
			delete CardHover.HoverReveal[theT];
		}
		if( $(This).parent().children().filter(function(){ return $(this).is(":hover") }).length ){
			CardHoverIn(This);
		}
	} );
	// Resetting the card select variables
	CardSelect.isActive[theT] = false;
	CardSelect.isActive[theT] = false;
	CardSelect.object[theT] = false;
	return;
}

// Gandalf setter
Gandalfer = {
	setup: function(GandalfRow){
		$(GandalfRow[0]).click(function(){
			var content = GandalfRow[1];
			// Analyzing the element for deactivation requests
			if( $(this).data().GandalfActive === false ){
				return false;
			}
			var PO = $(this).data().GandalfOpt;
			if( typeof(PO) !== "undefined" ){
				content = GandalfRow[1][PO];
			}
			// Placing Gandalf's content
			Glitch.on("#Gandalf", content);
			// Identifying post-click option change requests
			var GO = $(this).data().PostClickOpt;
			if( typeof(GO) !== "undefined" ){
				$(this).data({ GandalfOpt: GO }).removeData("PostClickOpt");
			}
		});
	},
	set: function(asset){
	    // Attempt to find the requested asset in Gandalf's array
		$.each(Gandalf, function(){
			if( $(this[0]).filter($(asset[0])[0]).length ){
			    // Load Gandalf with the row's content
				var content = this[1];
                // Look for a data requesting selection of a particular array
				var PO = asset.data().GandalfOpt;
				if( typeof(PO) !== "undefined" ){
					content = this[1][PO];
				}
				// Setting gandalf's content
				Glitch.on("#Gandalf", content);
			}
		});
	}
};

// Peek setter
Peeker = {
	setup: function(PeekRow){
		// A variable indicating mouseover is off, so mouseleave would be deactivated as well
		var Deactivate = false;
		$(PeekRow[0]).mouseover(function(){
			var content = PeekRow[1];
			// Prohibiting calling the function for every child hover
			if( Global.PeekActive === PeekRow[0] ){ return false; }
			// Analyzing the element for deactivation requests
			if( $(this).data().PeekActive === false ){
				Deactivate = true;
				return false;
			}
			var PO = $(this).data().PeekOption;
			if( typeof(PO) !== "undefined" ){
				content = PeekRow[1][PO];
			}
			// Setting PeekActive indicator
			Global.PeekActive = PeekRow[0];
			// Placing Peek's content
			Glitch.on("#Peek", content);
		}).mouseleave(function(){
			// Disabling further commands in case mouseover is deactive
			if( Deactivate ){ Deactivate = false; return false; }
			// Resetting the PeekActive indicator
			Global.PeekActive = null;
			// Resetting Peek's content
			Glitch.on("#Peek", null);
		});
	},
	set: function(asset){
		$.each(Peek, function(){
			if( $(asset[0]).filter($(this[0])[0]) ){
				var content = this[1];
				var PO = asset.data().PeekOption;
				if( typeof(PO) !== "undefined" ){
					content = this[1][PO];
				}
				Glitch.on("#Peek", content);
			}
		});
	}
};

// SickNature
Stimer = [];Si = [];Se = [];Sa = [];Rep = [];Subj = [];Mod = []; Sickid = [];
SDuration = [];
Tags = {
	reg: [],
	org: []
};
// acc count : 3
/*
	id: target's id,
	subj: sick text,
	acc: Sicknature's function which is used to prevent unwanted overwrites
	ctt: prevent's overwriting target's current content || can also be a secret number so something would happen after the animation
	remcontainer: Boolean, If true; deletes the target after sick is done
 */
G = {
	id : [],
	interval : [],
	reset: function(GetID,Splice){
		$(G.id).each(function(I){
			if( this == GetID ) {
				clearInterval(G.interval[I]);
				G.id.splice(I, 1);
				G.interval.splice(I, 1);
			}
		});
	}
};
Glitch = {
	duration: 20,
	dur : function(num){
		if( !num ){
			return this.duration;
		}
		if( typeof(num) == "number" ){
			this.duration = num;
			return this.duration;
		}
	},
	durtest : function(num){
		// Speed the process in case the user is already switching divisions before the Glitch is done ( UHAHAHAHAH >=) )
		if( (typeof(ActiveFly) !== "undefined" && ActiveFly.isActive()) || (typeof(ReverseFly) !== "undefined" && ReverseFly.isActive()) ){
			Glitch.dur(num);
		}
	},
	on: function(id, subject, append, remove){
		// Beginning consecutive process if Glitch is called on multiple accounts at once
		if( typeof(id) == "object" && !(id instanceof jQuery) ){
			// Either all accounts have their own results
			if( subject === null || id.length == subject.length ){
				var obj = ( id[0] instanceof jQuery ) ? id[0] : $(id[0]) ,
					TheID = id,
					TheAppend = append,
					TheRemove = remove,
					consecutive = true;
			}
			// Or all have the same results
			else if( subject.length === 1 ){

			}
			// No other way around
			else{
				return;
			}
		}else{
			var obj = ( id instanceof jQuery ) ? id : $(id);
		}
		// Resets the called account if no subject is defined
		Reset = ( typeof(subject) === "undefined" || subject === null ) ? true : false;
		// Resetting intervals and such when the same element is called while it's already running
		if( G.id.length !== 0 ){
			G.reset(id);
		}
		var XI = 1,
			Char = '',
			spliceI = G.id.length,
			SickChar = '',
			duration = this.dur(),
			content = obj.text();
		// reset the duration in case it was altered
		this.dur(20);

		Scramble = ['%','^','&','*','$','#','@','!','~','-','=','+','_','?','>','0','1'];
		// Following codes will not be executed while Glitch is resetting
		if ( Reset === false ) {
			getHTMLtags = /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g;
			// Checking to remove html tags
			if ( subject.match(getHTMLtags) ) {
				// Applied when the goal is to keep the element's current content
				if (append === true) {
					var original = obj.html() + subject;
				}
				// Or just overwrite the content
				else {
					var original = subject;
				}
				subject = subject.replace(getHTMLtags, "");
			} else {
				var original = null;
			}
		}
		// Reset sequence
		if( Reset === true ){
			if( obj.parent().attr("id") === "Path" ){
				// Reversing path to it's original state if it was altered before the timer even begins
				PocketPath(true);
			}
			// Saving the interval variable & current id into arrays so it can be stopped in case the same nod was called again
			G.interval[spliceI] = setInterval(function(){
				// Keep removing characters until nothing's left
				if( XI-1 < content.length ){
					SickChar = Scramble[Math.floor(Math.random() * Scramble.length)];
					Char = content.substr(0,content.length-XI);
					obj.html(Char+SickChar);
				}
				// The last iteration
				else{
					// Removing the nod and the related Glitch variables
					if( remove === true ){
						obj.remove();
						delete obj;
					}
					// Resetting the inner text
					else{
						obj.text("");
					}
					// Applying a function after current process is done
					if( typeof(append) === "object" ){
						append[0](0);
					}
					if( typeof(append) === "function" ){
						append(0);
					}
					G.reset(id);
					if( consecutive ){
						// Removing an array
						if( TheID.length-1 >= 1 ){
							TheID.shift();
							TheAppend.shift();
						}
						TheID = (TheID.length == 1) ? TheID[0] : TheID;
						Glitch.durtest(5);
						Glitch.on(TheID, subject, TheAppend, TheRemove);
					}
				}
				XI++;
			},duration);
			G.id[spliceI] = id;
			return;
		}

		if( append !== true ){ obj.html(""); }
		// Adding a holder for scrambles
		obj.append("<span class='IGNOREME'></span>");
		// Saving the interval variable & current id into arrays so it can be stopped in case the same nod was called again
		G.interval[spliceI] = setInterval(function(){
			// Adding the characters till we place the last character
			if( XI-1 < subject.length ){
				// Sick chars are added till the last character is placed
				SickChar = ( XI+1 < subject.length ) ? Scramble[Math.floor(Math.random() * Scramble.length)] : "";
				Char = subject.substr(XI-1,1);
				// Placing the characters
				obj.find(".IGNOREME").before(Char);
				obj.find(".IGNOREME").html(SickChar);
			}
			// Last iteration
			else{
				// Re-planting the html tags
				if( original !== null ){
					obj.html(original);
					PathCallTo();
				}
				// Removing the scramble holder
				else{
					obj.find(".IGNOREME").remove();
				}
				if( typeof(append) == "function" ){
					append();
				}
				G.reset(id);
			}
			XI++;

		},duration);
		G.id[spliceI] = id;
	}
};