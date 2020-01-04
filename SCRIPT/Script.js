Portal = ['JourNey','Artery','BigMo'];
PortalColor = ['#00ffff','#ff8f8f','#b3ffb3',"#FFF"];
Gandalf = [
	[
		"#Temporary .Void",
		"Select a dimension"
	],
	[
		".BreathinFragment",
		["*Laughes*","Why you keep poking me?"]
	],
	[
		".Portal.JourNey, .Portal.Artery, .Portal.BigMo",
		["Dimension locked, Fly!","Lock disengaged"]
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
		".SingleParticle .Clone",
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
		id: "DevParticle A",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "DevParticle B",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "DevParticle C",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "DevParticle D",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "DevParticle E",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "DevParticle F",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},

	{
		id: "ArtParticle A",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "ArtParticle B",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "ArtParticle C",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "ArtParticle D",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "ArtParticle E",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	},
	{
		id: "ArtParticle F",
		title: "This is the Title",
		pages: [
			{
				title: "king apr",
				image: "Assets/About.jpg",
				active: false
			},
			{
				title: "index",
				image: "Assets/BuyCourse.jpg",
				active: true
			},
			{
				title: "kaftar",
				image: "Assets/SingleCourse.jpg",
				active: false
			}
		],
		detail: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
		tools: [
			"html",
			"css",
			"js",
			"jq",
			"ai"
		],
		state: "completed",
		website: "#"
	}
];
Personalities = [
	{
		face: "PainKiller",
		particle: "Green A",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feu"
	},
	{
		face: "Curious",
		particle: "Blue B",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, te feu"
	},
	{
		face: "Cheerful",
		particle: "Green B",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, te feu"
	},
	{
		face: "Angry",
		particle: "Purple A",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, te feu"
	},
	{
		face: "Upset",
		particle: "Blue A",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, te feu"
	},
	{
		face: "Confident",
		particle: "Purple B",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, te feu"
	},
	{
		face: "Sarcastic",
		particle: "Yellow A",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, te feu"
	},
	{
		face: "Positive",
		particle: "Yellow B",
		title: "WHY SO SERIOUS ?",
		content: "Lorem ipsum dolor sit amet, te feu"
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
		TweenMax.set($(this).children().children(), {rotation: Angle});
	});
}

function Globe(){
	var   width = window.innerWidth,
		  height = window.innerHeight;
	// Resetting all forms and inputs on page load
	$("input,textarea").val("");
	SetPanel();

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
  Jterrain.set('#Temporary .Artery .Flow', {scale:1, z:0.01});
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
			{rotation: 360, transformOrigin: "50% 87.5%", opacity: 1,ease: Power0.easeNone}
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
	)/*
		.add(
			TweenMax.fromTo($(".DevGlow, .ArtGlow"), .4, {
					autoAlpha: 0,
					ease: Circ. easeOut
				},
				{
					autoAlpha: 1,
					ease: Circ. easeOut
				}, .2), 0
		)*/
/*		.add(
			TweenMax.staggerFromTo($(".DevAura, .DevAuraZ"), 1, {
					autoAlpha: 0,
					ease: Circ. easeOut
				},
				{
					autoAlpha: 1,
					ease: Circ. easeOut
				}, .2), 0
		)
		.add(
			TweenMax.staggerFromTo($(".ArtAura, .ArtAuraZ"), 1, {
					autoAlpha: 0,
					ease: Circ. easeOut
				},
				{
					autoAlpha: 1,
					ease: Circ. easeOut
				}, .2), 0
		)*/
		.add(
			TweenMax.fromTo($(".DevSignBeam, .ArtSignBeam"), .5, {
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
		)
		.add(
			TweenMax.fromTo($(".ArtSign"), 1, {
				autoAlpha: 0
			}, {
				autoAlpha: 1
			}), 0
		)
		.add(
			TweenMax.fromTo($(".DevSign"), 1, {
				autoAlpha: 0
			}, {
				autoAlpha: 1
			}), 0
		);
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

	/*				ArtAura = new TimelineMax({paused: true, repeat: -1});
					ArtAura.add(
						TweenMax.fromTo(".ArtAura.X", 10, {
							rotation: 0,
							ease:  Power0.easeNone
						}, {
							rotation: 720,
							ease:  Power0.easeNone
						}), 0
					).add(
						TweenMax.fromTo(".ArtAura.Y", 5, {
							rotation: 0,
							ease:  Power0.easeNone
						}, {
							rotation: -360,
							ease:  Power0.easeNone
						}), 0
					).add(
						TweenMax.fromTo(".ArtAuraZ", 10, {
							rotation: 0,
							ease:  Power0.easeNone
						}, {
							rotation: -720,
							ease:  Power0.easeNone
						}), 0
					);
					DevAura = new TimelineMax({paused: true, repeat: -1});
					DevAura.add(
						TweenMax.fromTo(".DevAura.X", 10, {
							rotation: 0,
							ease:  Power0.easeNone
						}, {
							rotation: -720,
							ease:  Power0.easeNone
						}), 0
					).add(
						TweenMax.fromTo(".DevAura.Y", 5, {
							rotation: 0,
							ease:  Power0.easeNone
						}, {
							rotation: 360,
							ease:  Power0.easeNone
						}), 0
					).add(
						TweenMax.fromTo(".DevAuraZ", 10, {
							rotation: 0,
							ease:  Power0.easeNone
						}, {
							rotation: 720,
							ease:  Power0.easeNone
						}), 0
					);*/

																// MuFol
/*X = []; Y = [];
$('.MuActive').each(function(i) {
	$(this).mousemove(function(e){
		$(this).find('.Mufol').each(function(i) {
			$(this).css('transition','');
			X[i] = ( ($(this).offset().left)+($(this).width()/2) )-e.clientX;
			Y[i] = ( ($(this).offset().top)+($(this).height()/2) )-e.clientY;
				if($(this).hasClass('MuFollow')){
					N = -1;
				}else{
					N = 1;
				}
					Divide = ($(this).attr('data-divide')) ? $(this).attr('data-divide') : false;
			if(!$(this).hasClass('MufH') && !$(this).hasClass('MufV')){
				if(Divide){
					$(this).css('transform','translate('+(X[i]/Divide)*N+'px,'+(Y[i]/Divide)*N+'px)');
				}else{
					$(this).css('transform','translate('+(X[i]/10)+'px,'+(Y[i]/10)*N+'px)');
				}
			}else if($(this).hasClass('MufV') && !$(this).hasClass('MufH')){
				if(Divide){
					$(this).css('transform','translate(0px,'+(Y[i]/Divide)*N+'px)');
				}else{
					$(this).css('transform','translate(0px,'+(Y[i]/10)*N+'px)');
				}
			}else if($(this).hasClass('MufH') && !$(this).hasClass('MufV')){
				if(Divide){
					$(this).css('transform','translate('+(X[i]/Divide)*N+'px,0px)');
				}else{
					$(this).css('transform','translate('+(X[i]/10)*N+'px,0px)');
				}
			}
		});
	})
	if($(this).hasClass('MuReset')){
		$(this).mouseleave(function(e){
			$(this).find('.Mufol').each(function(i) {
				$(this).css('transition','transform .5s ease 0s');
				$(this).css('transform','translate(0,0)');
			});
		});
	}

});*/
																// MuFol
	/*$(window).scroll(function(e){
	 x = $(window).scrollTop(); Haight = $(window).height();
fixset(true)
										// FixSet


		$(setfix).each(function(i){
			if($(mula[i].parent).length !== 0 && $(mula[i].id).length !== 0 &&
			  	( $(mula[i].parent).parent().hasClass('Dimension Visa') || $(mula[i].parent).parent().parent().hasClass('Dimension Visa') || mula[i].proverb || mula[i].A )
			  ){
				id = mula[i].id;  css = mula[i].css; cssalt = mula[i].cssalt;
				 max = mula[i].max ; min = mula[i].min ; unit = mula[i].unit ;
				  dis = setfix[i].dist; avg = setfix[i].avg;
			if(x < setfix[i].start && mula[i].pre !== false  ){
			 if(!cssalt){
			  if(!mula[i].reverse){
			  	if( !Array.isArray(css) ){
		 			$( id ).css( css, ( min + unit ) );
				}else{
					$(css).each(function(z){
						$( id ).css( css[z],  min[z] + unit[z]  );
					})
				}
			  }else{
			  	if( !Array.isArray(css) ){
		 			$( id ).css( css, ( max + unit ) );
				}else{
					$(css).each(function(z){
						$( id ).css( css[z], max[z] + unit[z]  );
					})
				}
			  }
			 }else{
			  if(!mula[i].reverse){
			  	if( !Array.isArray(css) ){
		 		$( id ).css( css, ( cssalt+'('+ min + unit+')' ) );
				}else{
					$(css).each(function(z){
		 				$( id ).css( css, ( cssalt[z]+'('+ min[z] + unit[z]+')' ) );
					})

				}
			  }else{
			  	if( !Array.isArray(css) ){
		 		$( id ).css( css, ( cssalt+'('+ max + unit+')' ) );
				}else{
					$(css).each(function(z){
		 				$( id ).css( css, ( cssalt[z]+'('+ max[z] + unit[z]+')' ) );
					})
				}
			  }
			 }
			}
		 	if(x >= setfix[i].start && x <= setfix[i].end){
			 if( !mula[i].instant ){
				 if(!cssalt){
				  if(!mula[i].reverse){
					if( !Array.isArray(css) ){
						$( id ).css( css, (   (  ( ( x-setfix[i].start ) * ( avg / dis ) )+min  )  +unit ) );
					}else{
						$(css).each(function(z){
							$( id ).css( css[z], (   (  ( ( x-setfix[i].start ) * ( avg[z] / dis ) )+min[z]  )  +unit[z] ) );
						})
					}
				  }else{
					if( !Array.isArray(css) ){
						$( id ).css( css, ( (  ( ( dis - (x-setfix[i].start) ) * ( avg / dis ) )+min  )  +unit ) );
					}else{
						$(css).each(function(z){
							$( id ).css( css[z], ( (  ( ( dis - (x-setfix[i].start) ) * ( avg[z] / dis ) )+min[z]  )  +unit[z] ) );
						})
					}
				  }
				}else{
				  if(!mula[i].reverse){
					if( !Array.isArray(css) ){
						$( id ).css( css, ( cssalt+'('+(   (  ( ( x-setfix[i].start ) * ( avg / dis ) )+min  )  +unit )+')' ) );
					}else{
						$(css).each(function(z){
							$( id ).css( css[x], ( cssalt[z]+'('+(   (  ( ( x-setfix[i].start ) * ( avg[z] / dis ) )+min[z]  )  +unit[z] )+')' ) );
						})
					}
				  }else{
					if( !Array.isArray(css) ){
						$( id ).css( css, ( cssalt+'('+( (  ( ( dis - (x-setfix[i].start) ) * ( avg / dis ) )+min  )  +unit )+')' ) );
					}else{
						$(css).each(function(z){
							$( id ).css( css[x], ( cssalt[z]+'('+( (  ( ( dis - (x-setfix[i].start) ) * ( avg[z] / dis ) )+min[z]  )  +unit[z] )+')' ) );
						})
					}
				  }
				 }
			}
		 }
			if(x > setfix[i].end){
			 if(!cssalt){
			  if(!mula[i].reverse){
			  	if( !Array.isArray(css) ){
		 			$( id ).css( css, ( max + unit ) );
				}else{
					$(css).each(function(z){
						$( id ).css( css[z], ( max[z] + unit[z] ) );
					})
				}
			  }else{
			  	if( !Array.isArray(css) ){
		 			$( id ).css( css, ( min + unit ) );
				}else{
					$(css).each(function(z){
						$( id ).css( css[z], ( min[z] + unit[z] ) );
					})
				}
			  }
			 }else{
			  if(!mula[i].reverse){
			  	if( !Array.isArray(css) ){
		 		$( id ).css( css, ( cssalt+'('+ max + unit+')' ) );
				}else{
					$(css).each(function(z){
		 		$( id ).css( css, ( cssalt[z]+'('+ max[z] + unit[z]+')' ) );
					})
				}
			  }else{
			  	if( !Array.isArray(css) ){
		 		$( id ).css( css, ( cssalt+'('+ min + unit+')' ) );
				}else{
					$(css).each(function(z){
		 		$( id ).css( css, ( cssalt[z]+'('+ min[z] + unit[z]+')' ) );
					})
				}
			  }
			 }
			}
			}
		})
	})*/


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
	ActiveSection = [OnLoadActive]; SwitchDivisionActive = [false];
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
                console.log(Opt);
            }
        });;
        // Send option change request
        $(this).data({GandalfOpt: Opt});
    });

	  // Defining QuickAccess controlls
    PedalTop = $(".Pedal").position().top;
    PedalBoundary = {Start : 0,
	                 Stop : PedalTop};
	Locked = [false];

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

			if( Reverse.pedal == false ) { XtoPercent = (CurPos == this.minY) ? 0 : 100; }
			else{ XtoPercent = (CurPos == this.minY) ? 100 : 0; }
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
				if( SwitchDivisionActive[0] == false && ActiveSection[0].attr("id") == "Temporary" ){
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
            	if( ActiveSection[0].attr("id") == "Temporary" || ( typeof(Shrinker) !== "undefined" && Shrinker.isActive() ) ){
				Shrinker.duration(Shrinker.duration()-Shrinker.duration()*.9).reverse();
				}
            }
        },
		zIndexBoost: false
    });

    // Reverse sequence
	$(".Reverse > .Handle").click(function(){
		if( (typeof (ReverseFly) == "undefined" || !ReverseFly.isActive()) &&
			(typeof (ActiveFly) == "undefined" || !ActiveFly.isActive()) ){
			ReverseHandle($(this));
		}
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
			Fly(true);
		}
		else{
			PreventFly();
		}
	} );

	// DivisionReactor
		// SpaceCyclone
	Cyclone = {isActive : false};
	$('#SpaceCyclone > .Storm .Tripwire').mouseenter(function(){

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

	$('#SpaceCyclone > .Storm .AlphaAsset,#SpaceCyclone > .Storm .BetaAsset:not(.Phone)').mouseenter(function(){
		AssetHover($(this));
	})
		.mouseleave(function(){
			AssetHover($(this),true);
	});
	$('#SpaceCyclone > .Storm .Tripwire').click(function(){
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
		// Cutting the tripwire
		CutTripwire.add(
			TweenMax.set(Storm.find(".Tripwire"), {autoAlpha: 0}),0
		)
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

		// Finalizing the Ritual
		Ritual.eventCallback("onComplete", function(){
				PostRitual.fromTo(Storm.find(".Definer > .Sub"), .4, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0}, 0)
				.fromTo(Storm.find(".AlphaAsset .Sub, .BetaAsset .Sub"), .4, {autoAlpha: 0, y: -20}, {autoAlpha: 1, y: 0}, 0)
				.to(Storm.find(".Divider"), 1, {autoAlpha: 1}, 0);
			if (Storm.find(".AlphaAsset:hover").length != 0) {
				AssetHover(Storm.find(".AlphaAsset"));
			}
			if (Storm.find(".BetaAsset:hover").length != 0) {
				AssetHover(Storm.find(".BetaAsset"));
			}
		})
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
	$("#SpaceCyclone > .Storm .Definer").click(function(){
		ExitStorm($(this).parent().parent());
	});

		// Skillometer
	CoreClick = [false]; AffectedCores = {Core: [], Waya: []};
	CoreKeepa = [$(".CoreKeepa")];
	SkiloBrrr = new TimelineMax({repeat: -1,paused: true,yoyo: true});
	SkiloBrrr
		.to("#Skillometer .Device", .04, {x: 2})
		.to("#Skillometer .Device", .04, {x: -2});

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
					InfoPanel.on($(CoreMove._first.target[0]).parent());
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
					Dangerous = ( this.power > 70 ) ? true : false;
					$("#Skillometer .Power sup").html(SupPower);

					TweenMax.to($("#Skillometer #Info"), .2, {scaleX: 1});
					TweenMax.to($("#Skillometer #Thunder"), .5, {scaleX: this.power/100});
					if( Dangerous ){
						// TweenMax.to($("#Skillometer .InfoPanel .Danger"), .5, {autoAlpha: 1, ease: ToughEase});
					}
					LitteralPower = ( SupPower < 15 ) ? 0 :
							( SupPower < 18 ) ? 1 :
							( SupPower < 21 ) ? 2 :  3;
					TweenMax.to($("#Skillometer .Measure").children().eq(LitteralPower), .5, {autoAlpha: 1, ease: ToughEase});
					Glitch.on("#Skillometer .Power span:first-child", CorePower);
				}
			});
			InfoPanel.active(true);
		},
		off : function (){
			if( !SkiloBrrr.isActive() && !InfoPanel.active() ){ return; }
			TweenMax.to($("#Skillometer #Info"), .1, {scaleX: 0});
			TweenMax.to($("#Skillometer #Thunder"), .2, {scaleX: 0});
			if( Dangerous ){
				Danga = $("#Skillometer .InfoPanel .Danger");
				TweenMax.set(Danga,  {clearProps: "all"});
				TweenMax.from(Danga, .5, {autoAlpha: 1, ease: ToughEase});
				Dangerous = false;
			}
			LP = $("#Skillometer .Measure").children().eq(LitteralPower);
			TweenMax.set(LP,  {clearProps: "all"});
			TweenMax.from(LP, .2, {autoAlpha: 1});
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

	$("#Skillometer .Core .Strikes").mouseenter(function(){
		CoreElement = $(this).parent().parent().parent();
		if( CoreClick[0] == CoreElement.attr("class") ){return;}
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
		if( CoreClick[0] !== $(this).parent().attr("class") ){ReverseCore();}
	});
	$("#Skillometer .Core .Strikes").click(function(){
		CoreElement = $(this).parent().parent().parent();
		if( CoreClick[0] == CoreElement.attr("class") ){
			ReverseCore(true);
			CoreClick[0] = false;
			SkiloBrrr.kill();
			RemoveCore();
			return;
		}
		ReverseCore(true);
		if( typeof(CoreSlot) !== "undefined" && CoreSlot.children().length > 0 ){
			Emginashun.duration(Emginashun.duration()/14.4).reverse().eventCallback("onReverseComplete",DelCore,[Emginashun._first.target[0]]);
			Laser.pause();
			if( InfoPanel.active() ){ InfoPanel.off(); }
		}
		CoreClick[0] = CoreElement.attr("class");
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
		ActiveCore = CoreSlot.children(":last-child");
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
			onComplete: CorePlaced,
			onCompleteParams: [CoreSlot]
		});
		CoreGlow = new TimelineMax({repeat: -1,paused: true,yoyo: true});
		CoreGlow.to(CoreKeepa[0], .4,{
			autoAlpha: 1, ease:  SlowMo.ease.config( 0.2, 0.2, false)
		},0).to(".InfoPanel .Danger", .4,{
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
		TweenMax.set(CoreKeepa[0], {zIndex: 0,autoAlpha: 1});
		TweenMax.set(ActiveCore.find(".ForReactor"), {autoAlpha: 0});
		Emginashun.delay(GlowOnEnter.duration()).play();
	});
	$(".CoreSlot").click(function(){
		if( Emginashun.reversed() ){ return; }
		if( typeof(CoreSlot) !== "undefined" && CoreSlot.children().length > 0 ){
			Laser.pause();
			InfoPanel.off();
			RemoveCore();
			CoreClick = [false];
			AffectedCores = {Core: [], Waya: []};
		}
	});

	// AntiToxins
	$("#AntiToxins .DevParticle, #AntiToxins .ArtParticle").mouseenter(function(){
		if( Particle.isActive ){ return; }
		// Get and fade the stars and all other particles but the current one
		var FadeAssets = ( $(this).hasClass("DevParticle") ) ? $(this).siblings(".DevParticle, .ArtStar, .ArtParticle") : $(this).siblings(".DevStar, .DevParticle, .ArtParticle");
		TweenMax.to(FadeAssets, .5, {opacity: .8,filter: "blur(10px)"});
	})
		.mouseleave(function(){
			if( Particle.isActive ){ return; }
			// Resetting blurred assets on mouseleave
			var FadeAssets = $(this).siblings(".DevStar, .DevParticle, .ArtStar, .ArtParticle");
			TweenMax.to(FadeAssets, .5, {opacity: 1,filter: "blur(0px)"});
	});
	Particle = {isActive : false, activeObj: null, Navigated: false};
	$("#AntiToxins .DevParticle, #AntiToxins .ArtParticle").click(function(e){
		ParticleActivation($(this), e);
	});
	TrackLines = {
		obj: [],
		isActive : []
	};
	$(".ArtStar, .DevStar").click(function(){
		var Particles = ( $(this).hasClass("DevStar") ) ? $("#AntiToxins .DevParticle:not(.CLONED)") : $("#AntiToxins .ArtParticle:not(.CLONED)"),
			Star = $(this),
			Class = $(this).attr("class");
		if( TrackLines.isActive === null || TrackLines.isActive[Class] ){
			return;
		}
		TrackLines.isActive[Class] = true;

		if( typeof(TrackLines.obj[Class]) === "undefined" ){
			TrackLines.obj[Class] = [];
			$( Particles ).each(function(){
				var Line = Star.append("<div class='Line'></div>").children(".Line").last();
				TrackLines.obj[Class].push(Line);
			});
		}
		$( Particles ).each(function(i){
			var Particle = $(this).children().children();
			var Origin = "right" ,
				SP = {
				X : $(this).children().children().offset().left + ( $(this).width() / 2 ),
				Y : $(this).children().children().offset().top + ( $(this).width() / 2 )
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
					if( i+1 === Particles.length ){
						TweenMax.to(obj, .4, {
							scaleX: 0,
							ease: Sine. easeOut,
							onComplete: function(){
								TrackLines.isActive[Class] = false;
						}
						});
					}else{
						TweenMax.to(obj, .4, {
							scaleX: 0,
							ease: Sine. easeOut
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

	// Analyzer

	Analyzer = { isActive: false, object: false,
		Sequence: function(T){
			// Toggling hover ability for crystal
			$(".Crystal").toggleClass("active")
			// Change Peek's content
			.data({PeekOption: 1});
			// Indicating reverse request
			if( Analyzer.isActive ){
				Analyzer.Reverse(T);
			}
			// Setting & replacing new data
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
			// Reversing other animation groupes
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
/*		if( (typeof(CardSelect.isActive[T]) !== "undefined" && !CardSelect.isActive[T]) && (typeof(CardSelect.mdReset[T]) !== "undefined" && CardSelect.mdReset[T]) ){
			CardSelect.mdReset[T] = false;
			return;
		}*/
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
	DivisionSequence(true);
}

// QuickAccess
PanelSwitch = {
	obj : [],
	Harmonizer: {
		active: false,
		list: []
	}
};
function SetPanel(PrevClass){
	var PrevPanel = false,
		AddToActive = false,
		Class = $(".QuickAccess > .Cells.active").attr("class"),
		len = $(".QuickAccess > .Cells").length;
	if( PrevClass ){
		PrevPanel = PanelSwitch.obj[PrevClass];
	}
	// Checking to make sure the current panel doesn't have it's exclusive animation already set
	if( typeof(PanelSwitch.obj[Class]) === "undefined" ) {
		// Creating the animation set
		PanelSwitch.obj[Class] = new TimelineMax();
		PanelSwitch.obj[Class].add(
			TweenMax.to(".QuickAccess > .active > .E", .4, {
				scale: 1,
				rotation: -38.23,
				ease:  Circ. easeOut
			})
		).add(
			TweenMax.staggerTo(".QuickAccess > .active > .F,.QuickAccess > .active > .D", .3, {
				cycle: {
					rotation: [17.94, -17.94]
				},
				ease:  Circ. easeOut
			}), "-=.2"
		).add(
			TweenMax.staggerTo(".QuickAccess > .active > .C,.QuickAccess > .active > .G", .3, {
				cycle: {
					rotation: [-3.71, 2.65]
				},
				ease:  Circ. easeOut
			}), "-=.2"
		).add(
			TweenMax.staggerTo(".QuickAccess > .active > .B,.QuickAccess > .active > .H", .3, {
				cycle: {
					rotation: [23.66, -23.66]
				},
				ease:  Circ. easeOut
			}), "-=.2"
		).add(
			TweenMax.staggerTo(".QuickAccess > .active > .A,.QuickAccess > .active > .I", .3, {
				cycle: {
					rotation: [58, -61.31]
				},
				ease:  Circ. easeOut
			}), "-=.2"
		);
	}
	// We proceed knowing the animation is already set
	if( !PanelSwitch.obj[Class].isActive() ){
		// Restart the animation Only when the panel isn't already active
		PanelSwitch.obj[Class].restart();
	}else if( PanelSwitch.obj[Class].isActive() && PanelSwitch.obj[Class].reversed() ){
		PanelSwitch.obj[Class].reversed( !PanelSwitch.obj[Class].reversed() );
	}
	if( PanelSwitch.Harmonizer.list.length ){
		PanelSwitch.Harmonizer.list[0].reverse();
		PanelSwitch.Harmonizer.list.splice(0, 1);
	}
	PanelSwitch.Harmonizer.list.push(PanelSwitch.obj[Class]);
}

// Fly sequence
  // Portals activation procedure

function ActiveSequence(t){
	if( Global.RottenStillActive || ( typeof(ActiveFly) !== "undefined" && ActiveFly.isActive() ) ){ return;	}

	for( X = 0 ; X < Portal.length ; X++ ){
		if( t.hasClass(Portal[X]) && !Global.RottenStillActive ){
			Active.Dimension = Portal[X];
			Active.Color = PortalColor[X];
			var ShalliDefine = true,
				PrevPanel = $(".QuickAccess > .Cells.active").attr("class");
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

						Global.RottenStillActive = true;
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

			SetPanel(PrevPanel);

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
				}else {
					Forward.isAvailable = true;
					Forward.isAllowed(true, true);
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
			if( ActiveSection[0].attr("id") == "Temporary" ){target = $("#Temporary");}
			// Switching
			ActiveSection[0] = Section;

			Dimension = $("#" + Portal[X]);
			ChildrenLen = Dimension.children("div").length;
			if ((Reverse.pedal == false &&
				(ChildrenLen > 1 && ActiveSection[0].index() + 1 < ChildrenLen))) {
				Forward.obj = Dimension.children().eq(ActiveSection[0].index() + 1);
			}
			Forward.isAvailable = true;
			Forward.isAllowed(true);
		}
	}
	// Boosting active fly's speed to wrap up faster
	if( typeof(Shrinker) !== "undefined" && Shrinker.isActive() ) {
		Shrinker.duration(2);
		Shrinker.eventCallback("onComplete",LoadSection,[FlyAssociates]);
	}else{
		// Hiding the current section
		TweenMax.to(ActiveSection[0], .5, {autoAlpha: 0,onComplete: LoadSection,onCompleteParams: [FlyAssociates]});
	}
	Locked[0] = true;
	ActivePortal[0] = false;
	// Prepping the spaceship for the next section
	if( Section == false || Manual ){
		Dimension = ActiveSection[0].parent();
		ChildrenLen = Dimension.children("div").length;

		Forward.isAvailable = true;
		Forward.isAllowed(true);
		if( !Manual ) {
			// Keeping the current division in target variable
			target = ActiveSection[0];
			if ((Reverse.pedal == false &&
				(ChildrenLen > 1 && ActiveSection[0].index() + 1 < ChildrenLen))) {
				ActiveSection[0] = Dimension.children().eq(ActiveSection[0].index() + 1);
				if ( ActiveSection[0].index() + 1 < ChildrenLen ) {
					Forward.obj = Dimension.children().eq(ActiveSection[0].index() + 1);
				}else{
					Forward.obj = $("#Temporary");
				}
			} else if ((ActivePortal[0] == false && Reverse.pedal == false)) {
				ActiveSection[0] = Subject = $("#Temporary");
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
					Forward.isAllowed(false);
				}
			} else if (Reverse.pedal == true) {
				ActiveSection[0] = Reverse.obj;
				Subject = ActiveSection[0].find(".Entry");
				Parent = ActiveSection[0];
				// Resetting portals affected assets
				if (DirectRotten[0] !== false && ActiveSection[0].attr("id") == "Temporary") {
					DirectRotten[0].play();
					GetPortal = $(DirectRotten[0].target[0]).parent().parent();
					CheckForToggle(GetPortal);
					// Fly Config
					ActivePortal[0] = GetPortal;
					if (ActiveSection[0].attr("id") == "Temporary") {
						Subject = GetPortal;
					}
				}
			}
			if ( Forward.obj == false && (ChildrenLen > 1 && ActiveSection[0].index() + 1 <= ChildrenLen) ) {
				Forward.obj = Dimension.children().eq(ActiveSection[0].index() + 1);
			}
		}
		else{
			Section = ActiveSection[0];
			ActiveSection[0] = target;
			target = Section;
			DirectFlyActive[0] = false;

			// Resetting portals affected assets
			if ( DirectRotten[0] !== false && ActiveSection[0].attr("id") == "Temporary") {
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
			Forward.isAvailable = false;
			Forward.isAllowed(false);
		}
			Section = ActiveSection[0];
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
}
  // Division sequences
Order = {NO: 0, Definitive: false};

function DivisionSequence(reset,undone){
	DiviSection = ActiveSection[0].attr("id");
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
			TweenMax.to($(".Portalian"), .2, {autoAlpha: 1});
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
			if( SC_Footer.reversed() ){ SC_Footer.reversed(!SC_Footer.reversed()) }
			SC_Footer.resume();
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
				InfoPanel.off();
				RemoveCore(.2);
				CoreClick = [false];
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
				AntiToxins.duration(.5).restart().resume();
			}else{
				Order.NO = 1;
			}
		}else{
			// DO when about to leave
			if( !AntiToxins.reversed() ){
				AntiToxins.duration(.25).reverse();
			}
			if( typeof(EnterParticle) !== "undefined" && EnterParticle.isActive() ){
				ParticleActivation(Particle.activeObj, null);
			}
		}
	}else if( typeof(undone) !== "undefined" && undone.attr("id") == "AntiToxins" ){
		// DO after left the current dimension
		if( !AntiToxins.reversed() ){
			AntiToxins.reversed( !AntiToxins.reversed() );
		}
		AntiToxins.restart().pause();
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
				Order.NO = 2;
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
				Order.NO = 3;
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
	// Mid-fly reverse sequences
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
				ActiveFly.reverse();
				ReverseFly.reverse().eventCallback("onReverseComplete", BackToBus);
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
			}
			function BackToBus(){
				Forward.isAllowed(Forward.memory);
				Reverse.isAllowed(Reverse.memory);
				// Setting the active portal to stop shrinking
				if( ActivePortal[0] !== false && DirectRotten[0] !== false ){
					DirectRotten[0].play();
					CheckForToggle(ActivePortal[0]);
				}
				Reverse.obj.css({zIndex: -1}); ActiveSection[0].css({zIndex: 1});
				ResetVars = PreFlyAssociates.toString()+","+FlyAssociates.toString();
				if( NextDivisionAssociates ){ ResetVars += ","+NextDivisionAssociates.toString(); }
				TweenMax.set(ResetVars, {y: 0, x: 0, scale: 1, rotation: 0, z: 0.01});
			}
		}
		// Return on forward fly while reversed
		else if( ActiveFly.reversed() ){
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
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
	if( Reverse.pedal === true && typeof(ActiveFly) !== "undefined" && ActiveFly.isActive() ||
		( typeof(ReverseFly) !== "undefined" && ReverseFly.isActive() ) ){

		if( typeof(ReverseFly) !== "undefined" && ReverseFly.isActive() ){
				Forward.isAllowed(true);
				Reverse.isAllowed(false);
				ActiveFly.reversed(!ActiveFly.reversed());
				ReverseFly.reversed(!ReverseFly.reversed()).eventCallback("onReverseComplete", BackToBus);
			function BackToBus(){
				Forward.isAllowed(Forward.memory);
				Reverse.isAllowed(Reverse.memory);
				// Reactivating the portal
				if( ActivePortal[0] !== false && DirectRotten[0] !== false && typeof(Shrinker) !== "undefined" ) {
					DirectRotten[0].play();
					CheckForToggle(ActivePortal[0]);
				}
			}
		}
		else{
				Forward.isAllowed(true);
				Reverse.isAllowed(false);
				ActiveFly.reverse().eventCallback("onReverseComplete",BackToBus);
				function BackToBus(){
					Forward.isAllowed(Forward.memory);
					Reverse.isAllowed(Reverse.memory);
					// Reactivating the portal
					if( ActivePortal[0] !== false && DirectRotten[0] !== false && typeof(Shrinker) !== "undefined" ) {
						DirectRotten[0].play();
						CheckForToggle(ActivePortal[0]);
					}
					DiviOrders();
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

	// Allow the current section to continue reversing without having to create another animation
	if( Reverse.pedal === true &&
		(typeof(ReverseFly) !== "undefined" && ReverseFly.isActive()) ){
		if( ReverseFly.reversed() ){ ReverseFly.reversed( !ReverseFly.reversed() ) }
		ReverseFly.resume();
	}
	// Doing the same above for the upcoming section
	else if( typeof(ActiveFly) !== "undefined" && ActiveFly.isActive() ){
		if( ActiveFly.reversed() ){ ActiveFly.reversed( !ActiveFly.reversed() ) }
		ActiveFly.resume();
	}
	// Creating fly animations
	else{
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
			Parent = ActiveSection[0];
		}
		if( Manual ){ Parent = ActiveSection[0]; }
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

        // Gets the spaceship ready for reverse fly
		if( Reverse.pedal === true ){
			Forward.isAllowed(true,Forward.isAllowed());
			Reverse.isAllowed(false,Reverse.isAllowed());
			Reverse.IsOverrided(false);
			TweenMax.set(Reverse.obj,{autoAlpha: 1});
			Reverse.obj.css({zIndex: 1}); ActiveSection[0].css({zIndex: -1});
			ReverseFly = new TimelineMax({paused: true});
			ReverseFly.eventCallback("onReverseComplete",KillReverseFly);
			if( PreFlyAssociates.length > 1 ){
				if( ActiveSection[0].attr("id") !== "Temporary" ){
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
						if( ActiveSection[0].attr("id") !== "Temporary" ) {
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
						if( ActiveSection[0].attr("id") !== "Temporary" ) {
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
					if( this.length == 1 && ActiveSection[0].find(this.toString()).length > 1 ){
						AutoNode.push(this);
					}else{
						Asc = ActiveSection[0].find(this.toString());
						if( ActiveSection[0].attr("id") !== "Temporary" ) {
							AddFly.Switch("ffs");
						}else{
							AddFly.Spin("ffs");
						}
						X++;
					}
				});
				if( AutoNode.length > 0 ) {
				X = 1;
					ActiveSection[0].find(AutoNode.toString()).each(function () {
						Asc = ActiveSection[0].find(this);
						if( ActiveSection[0].attr("id") !== "Temporary" ) {
							AddFly.Switch("ffs");
						}else{
							AddFly.Spin("ffs");
						}
						X++;
					});
				}
			}
			if( ActiveSection[0].attr("id") !== "Temporary" ){ TheDelay = TheDelayNum = 0; }else{ TheDelay = "-=9"; TheDelayNum = 9; }
			ActiveFly
				.fromTo(Reverse.obj, AnimDur-TheDelayNum, {
					autoAlpha: 0,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, {
					autoAlpha: 1,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, TheDelay);
			ReverseFly
				.fromTo(ActiveSection[0], AnimDur-TheDelayNum, {
					autoAlpha: 1,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, {
					autoAlpha: 0,
					ease: CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1")
				}, TheDelay);
		}
		// Gets the spaceship ready for forward fly
		else {
			Forward.isAllowed(false,Forward.isAllowed());
			Reverse.isAllowed(true,Reverse.isAllowed());
			Reverse.IsOverrided(false);
			if( ActiveSection[0].attr("id") == "SpaceCyclone" && NextDivisionAssociates.length > 1 ){
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
						if( ActiveSection[0].attr("id") !== "SpaceCyclone" ) {
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
						if( ActiveSection[0].attr("id") !== "SpaceCyclone" ) {
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
						if( ActiveSection[0].attr("id") !== "SpaceCyclone" ) {
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
						if( ActiveSection[0].attr("id") !== "SpaceCyclone" ) {
							AddFly.Switch();
						}else{
							AddFly.Spin();
						}
						X++;
					});
				}
			}

			// Setting the active portal to shrink

			if( ActiveSection[0].attr("id") === "Temporary" ) {
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

				if( ActiveSection[0].attr("id") !== "SpaceCyclone" ){
					TheDelay = "-=10";
					TheDelayNum = AnimDur - 3;
					ActiveFly
						.fromTo(ActiveSection[0], AnimDur - TheDelayNum, {
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
						.fromTo(ActiveSection[0], AnimDur - TheDelayNum, {
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

	if( ActiveSection[0].attr("id") === "Temporary" && Reverse.pedal === false ) {
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
	if( Active.Dimension === Portal[0] ){
		// Gandalfer(null, "SOON!");
	}
}
  // Reverse Handle
function ReverseHandle(NoChange){
	$(".Reverse").toggleClass("active");
	if( $(".Reverse").hasClass("active") ) {
		Reverse.pedal = true;
		if( NoChange !== false ){ReverseSequence();}
		// Setting the pedal to reverse mode
		TweenMax.to(".Pedal", .2, {y:PedalBoundary.Stop});
	}else{
		Reverse.pedal = false;
		// Resetting the pedal
		TweenMax.to(".Pedal", .2, {y:PedalBoundary.Start});
	}
}
  // Reverse sequence
function ReverseSequence(){
	var revallowed = false ;
	Dimension = ActiveSection[0].parent();
	ChildrenLen = Dimension.children("div").length;
	StartFromZero = ActiveSection[0].index() - (Dimension.children().length - ChildrenLen);
	Reverse.isAllowed(true);
	if (ChildrenLen > 1 &&
		StartFromZero - 1 >= 0) {
		Reverse.obj = Dimension.children().eq(ActiveSection[0].index() - 1);
	} else if ( Active.Dimension !== "Trilogies" ) {
		if (Active.Dimension === Dimension.attr("id")) {
			Reverse.obj = $("#Trilogies > #Temporary");
		} else {
			Reverse.obj = $("#" + Active.Dimension).children("div").last();
		}
		Reverse.obj.parent().css({visibility: "", opacity: ""});
	}else{
		revallowed = true;
	}
	if( !Reverse.obj.length || revallowed ){
		Reverse.obj = false; Reverse.isAllowed(false);
	}
}
// DivisionSequence orders
function DiviOrders(){
	if( Order.NO === 1 ){
		AntiToxins.duration(.5).restart().resume();
	}
	if( Order.NO === 2 ){
		AnalyzerFly.restart().resume();
	}
	if( Order.NO === 3 ){
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
	Global.RottenStillActive = false;
}
function KillActiveFly(){
	Forward.isAllowed(Forward.memory);
	if( Reverse.obj !== false ){Reverse.obj.css({zIndex: -1});}
	ActiveSection[0].css({zIndex: 1});
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
	if( Order.NO == 1 ){ Order.NO = 0;
		TweenMax.to($(".DevAura, .DevAuraZ,.ArtAura, .ArtAuraZ"), .2, {autoAlpha: 1});
	}
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
		TheParent = (ReverseSeq) ? ActiveSection[0].find(Asc) : (Reverse !== false) ? Parent.find(Asc) : Forward.obj.find(Asc);
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
	StormEntrance : function(type1){
		Afrom_y = 0;
		Afrom_x = 0;
		Afrom_scale = 1;
		Afrom_autoAlpha = 1;
		Ato_y = ((ActiveSection[0].height()/2-SC_HoldMyState.ot)-SC_HoldMyState.h/2);
		Ato_x = ((ActiveSection[0].width()/2-SC_HoldMyState.ol)-SC_HoldMyState.w/2);
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
		Ato_y = ( ( ActiveSection[0].height()*.14 - AT_HoldMyState.ot ) - AT_HoldMyState.h / 2 );
		Ato_x = ( ( ActiveSection[0].width()/2 - AT_HoldMyState.ol ) - AT_HoldMyState.w / 2 );
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
		Ato_y = (( ActiveSection[0].height() * .14 - NAV_HoldMyState.ot ) - NAV_HoldMyState.h / 2 );
		Ato_x = (( ActiveSection[0].width() / 2 - NAV_HoldMyState.ol ) - NAV_HoldMyState.w / 2 );
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
		Ato_y = ( ( ( ( ( ActiveSection[0].height() * 8 ) / 100 ) - Asc.offset().top ) ) * 100 ) / Asc.innerHeight();
		Ato_x = ( ( ( ( ActiveSection[0].width() / 2 ) - ( Asc.offset().left + Asc.innerWidth()/2 ) ) ) * 100 ) / Asc.innerWidth();
		AssetRotation = 0;
		AssetX = "0%";
		AssetY = "0%";
		this.Ritual();
	},
	AlphaAsset : function(){
		Ato_y = ( ( ( ( ActiveSection[0].height() / 2 ) - ( Asc.offset().top + Asc.innerHeight()/2 ) ) ) * 100 ) / Asc.innerHeight();
		Ato_x = ( ( ( ( ActiveSection[0].width() * 0.75 ) - ( Asc.offset().left + Asc.innerWidth()/2 ) ) ) * 100 ) / Asc.innerWidth();
		AssetRotation = ( Asc.hasClass("Resume") ) ? 20 : ( Asc.hasClass("CodeProject") ) ? 9 : ( Asc.hasClass("Envelope") ) ? 12 : 0;
		AssetX = ( Asc.hasClass("Resume") ) ? "25%" : ( Asc.hasClass("Envelope") ) ? "-3%" : "0%";
		AssetY = ( Asc.hasClass("Resume") ) ? "-8%" : ( Asc.hasClass("Envelope") ) ? "25%" : "0%";
		this.Ritual();
	},
	BetaAsset : function(){
		Ato_y = ( ( ( ( ActiveSection[0].height() / 2 ) - ( Asc.offset().top + Asc.innerHeight()/2 ) ) ) * 100 ) / Asc.innerHeight();
		Ato_x = ( ( ( ( ActiveSection[0].width() * .25 ) - ( Asc.offset().left + Asc.innerWidth()/2 ) ) ) * 100 ) / Asc.innerWidth();
		AssetRotation = ( Asc.hasClass("CV") ) ? 20 : ( Asc.hasClass("DesignProject") ) ? -20 : 0;
		AssetX = ( Asc.hasClass("CV") ) ? "35%" : "0%";
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
		( tpath.parent.attr("id") == ActiveSection[0].parent().attr("id") &&
		( tpath.parent.attr("id") !== "Trilogies" || tprint.parent == null ) )
		 ){
			Busted = true;
	}
	tpath = {
		self: ActiveSection[0],
		parent: ActiveSection[0].parent()
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
		if( (DirectFly[i] !== null && DirectFly[i].attr("id") !== ActiveSection[0].attr("id")) ){
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
			onDragEndScope: this.target,
			onDragScope: this.target,
			onDrag: function(){
				var gap = pathfinder.innerWidth()*.1;
				// preventing user to drag more or less than the "gap" variable added or substracted from each side
				if( this.x < -formula-gap || this.x > gap ){
					this.endDrag();
				}
			},
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
	TweenMax.set(CoreKeepa[0], {zIndex: 0,autoAlpha: 1});
	$(ThisCore).parent().remove();
}
function CoreArrived(){
	GlowOnEnter.play();
}
function CorePlaced(ThisCore){
	CoreGlow.play(); SkiloBrrr.play(); Laser.play();
	TweenMax.set(ThisCore, {zIndex: 2});
	TweenMax.set(CoreKeepa[0], {zIndex: 2,autoAlpha: 0});
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
	TweenMax.set(CoreKeepa[0], {zIndex: 0,autoAlpha: 1});
	CoreMove.reverse();
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
}
Form = {
	Arrange: [],
	ActiveDom: null
};
function AssetForm(t){
	// Defining required vars
	var Asset = t.parent(),
	Class = t.parent().attr("class"),
	TheForm = t.siblings("form");
	AssetHover(Asset,true);
	if( EnterStorm.isActive() ){ return; }
	if( Form.ActiveDom !== null && !Asset.hasClass(Form.ActiveDom.parent().attr("class")) ){
		var ActiveClass = Form.ActiveDom.parent().attr("class");
		Deformer(ActiveClass, Form.ActiveDom, true);
	}
	if( typeof(Form.Arrange[Class]) !== "undefined" ) {
		if( Deformer(Class, t) ){ return; }
		// Using the same animation instead of duplicating
		Form.Arrange[Class].duration(Form.Arrange[Class].duration()).restart();
		t.toggleClass("active");
		Form.ActiveDom = t;
		return;
	}
	// Tagging the current asset
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
		if( Switch == false ){
			Form.ActiveDom = ( Switch === true ) ? null : t;
		}
	}
	return Switch;

}
function ExitStorm(t){
	Cyclone.isActive = false;
	Storm = t;
	// Resetting the forms
	if( Form.ActiveDom !== null ){
		AssetForm($("."+(Form.ActiveDom.parent().attr("class")).replace(" ",".")).find(".Title"));
	}
	// Resetting the ritual
	PostRitual.reverse();
	$(Ritual.getChildren()).each(function(i){
		if( $(this.target[0]).hasClass("Curtain") ){
			TweenMax.to(this.target[0], this.duration(), {autoAlpha: 0,ease: Sine. easeOut});
		}else{
			if( $(this.target[0]).parent().hasClass("Resume") ){
				TweenMax.to(this.target[0], this.duration(), {rotation: 35,rotationY: 0, y: "-10%", x: "15%", transformOrigin: "15% 35%",ease: Sine. easeOut});
			}else if( $(this.target[0]).parent().hasClass("CV") ){
				TweenMax.to(this.target[0], this.duration(), {rotation: 0,rotationY: 0,y: "0%",x: "0%", transformOrigin: "80% 0%",ease: Sine. easeOut});
			}else{
				TweenMax.to(this.target[0], this.duration(), {autoAlpha: 1,opacity: 1,scale: 1,scaleX: 1,x: "0%",y: "0%",rotationY: 0,rotation: 0,ease: Sine. easeOut});
			}
		}
	});
	//Ritual.reverse();
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
	});
	EnterStorm.reverse();
}

// AntiToxins
function DefaultScale(asset){
	if( asset instanceof Object && asset instanceof jQuery ){
		asset = asset.innerWidth();
	}
	return 1 + ( 1 - ( asset / ( ActiveSection[0].width() * .1 ) ) );
}
function ParticleActivation(T, e){
	// Cancelling click process on 2 conditions :
	// When SingleParticle is active and another particle is clicked mid-process or when active
	// When the particle's container is clicked and not the particle itself
	if(
		( typeof(Particle.isActive) !== "boolean" && !T.hasClass(Particle.isActive) ) ||
		( e !== null && ( $(e.target).hasClass("DevParticle") || $(e.target).hasClass("ArtParticle") ) )
	){
		return;
	}
	// Unbluring the blur effect given to sibling elements on mouseenter method
	var FadeAssets = T.siblings(".DevStar, .DevParticle, .ArtStar, .ArtParticle");
	FadeAssets.children().removeClass("NoTouchin");
	TweenMax.to(FadeAssets, .5, {opacity: 1,filter: "blur(0px)"});
	if( Particle.isActive ){
		// This var prevents default reset due to user flying to another division while particle was resetting
		var theEvent = ( e === null ) ? true : null;
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
	// De-activating TrackLines
	TrackLines.isActive = null;
	AntiToxins.duration(.1).reverse();

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
		Asc = $(this).children();
		AddFly.ParticleEntrance();
		Asc.addClass("NoTouchin");
	});
	T.siblings(".DevStar, .ArtStar").each(function(){
		Asc = $(this).find(".Star");
		AddFly.ParticleEntrance();
	});
	// Current particle animations
	Asc = T.children();
	AddFly.ParticleEntrance(true);
	Asc.removeClass("NoTouchin");
	Asc = T.children().children();
	AddFly.ParticleEntrance(false, true);
	// Appearing the single particle panel
	EnterParticle.eventCallback("onComplete",function(){
		TriggerDiamond(Asc.parent().parent());
	});
}
function TriggerDiamond(asset){
	TweenMax.to(".QuickAccess", .5, {y: "100%"});

	ExpandParticle = new TimelineMax();
	CurrentParticle = asset;
	// Expanding the SingleParticle and it's children
	ExpandParticle.add(
		TweenMax.fromTo($("#AntiToxins .SingleParticle"), .3, {zIndex: 1, autoAlpha: 0, scale: 0, transformOrigin: "50% 10%"}, {zIndex: 2, autoAlpha: 1, scale: 1, transformOrigin: "50% 10%"}), 0
	).add(
		TweenMax.staggerFromTo($("#AntiToxins .SingleParticle > *"), .3, { autoAlpha: 0 }, {autoAlpha: 1}, .1), 0
	);
	// Creating the particle's clone
	var clone = CurrentParticle.clone();
	// Emptying the clone's style attributes
	clone.attr("style","");
	clone.children().attr("style","");
	clone.children().children().attr("style","");
	// Adding the clone and its new attributes
	$("#AntiToxins .SingleParticle > .Clone").html("");
	$("#AntiToxins .SingleParticle > .Clone").append(clone);
	$("#AntiToxins .SingleParticle > .Clone > div").addClass("CLONED").css({
		width : asset.children().innerWidth(),
		paddingBottom: asset.children().innerWidth()
	}).click(function(){
		if( Particle.isActive ){
			ResetParticle(asset);
			return;
		}
	});
	// Prepping the original particle and the clone for replacement
	TweenMax.set(CurrentParticle, {zIndex: 3});
	TweenMax.to(CurrentParticle, .3, {autoAlpha: 0,delay : ExpandParticle.duration()/4});
	// Calling the function that prepares clone's children using the related particle's database
	PrepClone();
	ExpandParticle.eventCallback("onComplete", function(){
		// Replacing the original partile with the clone
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
			Asc = $(this).children();
			// Applying new properties to sibling particles
			if( !CurrentParticle.hasClass($(this).attr("class")) ){
				AddFly.ParticleNavigate();
			}
			// Applying new properties to the current active particles to blend with other inactive particles
			else{
				AddFly.ParticleNavigate(false, true);
				ParticleRotation.reverse();
			}
			// This disables visual hover effects
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
					singleparticle.find(".Preview img").attr("src", this.image);
					singleparticle.find(".Cover").unbind("click").click(function(){
						if(
							(typeof(ExpandPreview) !== "undefined" && ExpandPreview.isActive()) ||
							(typeof(Navigation) !== "undefined" && Navigation.isActive())
						){ return; }
						ExpandPreview = new TimelineMax();
						ExpandPreview.to("#AntiToxins .Preview .Cover", .2, {autoAlpha: 0}, 0)
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
				singleparticle.find(".State").children(".RealState").eq(0).addClass("active").children("a").attr("href", this.website);
			}else if( this.state == "doing" ){
				singleparticle.find(".State").children(".RealState").eq(1).addClass("active");
			}else if( this.state == "canelled" ){
				singleparticle.find(".State").children(".RealState").eq(2).addClass("active");
			}
		}
	});

}
function ResetParticle(asset, e){
	Particle.isActive = false;
	Particle.activeObj = null;
	// If EnterParticle process is still running, then SingleParticle is not expanded yet
	if( !EnterParticle.isActive() ){
		ExpandParticle.duration(.1).reverse();
	}
	TweenMax.set(asset, {autoAlpha: 1});
	ParticleRotation.reverse();
	function ReverseToDefault(){
		// Re-activating TrackLines
		TrackLines.isActive = [];

		AntiToxins.duration(AntiToxins.duration()).restart();
		TweenMax.to(".QuickAccess", .5, {y: "0%"});
		Particle.Navigated = false;
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
			Asc = $(this).children();
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
	});

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
		/*			if( prevent && !CardHover.HoverReveal[T].getTweensOf(TheSibling.children()).length ){
                        prevent = false;
                    }*/
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
/*function Gandalfer(T,manual){
	if( !manual ) {
		var t = T,
		Content = null;
		for (X = 0; X < Gandalf.length; X++) {
			if (t.attr("id") && t.attr("id") === Gandalf[X].id) {
				Content = Gandalf[X].content;
			}
			if (Gandalf[X].class) {
				if (typeof (Gandalf[X].class) == "object") {
					for (XX = 0; XX < Gandalf[X].class.length; XX++) {
						if (t.hasClass(Gandalf[X].class[XX])) {
							Content = Gandalf[X].content;
						}
					}
				} else {
					if (t.hasClass(Gandalf[X].class)) {
						Content = Gandalf[X].content;
					}
				}
			}
		}
	}else{
		var Content = manual;
	}
	Glitch.on("#Gandalf", Content);
}*/
Gandalfer = {
	setup: function(GandalfRow){
		// A variable indicating mouseover is off, so mouseleave would be deactivated as well
		var Deactivate = false;
		$(GandalfRow[0]).click(function(){
			var content = GandalfRow[1];
			// Analyzing the element for deactivation requests
			if( $(this).data().GandalfActive === false ){
				Deactivate = true;
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
			if( $(asset[0]).filter($(this[0])[0]) ){
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