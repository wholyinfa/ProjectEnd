let Loader, EnterStorm, CoreMove, CoreSlot, ExpandPreview, EnterParticle, ActiveFly, ReverseFly, ParticleNavigation, ExpressSequence, Shrinker, Flicker, SignGlitch, UpperBeam, tprint, tpath, Navigation, Associates,
Portal = ['Journey','Artery','BigMo'],
PortalColor = ['#00ffff','#ff8f8f','#b3ffb3',"#FFF"],
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
	".Portal.Journey, .Portal.Artery, .Portal.BigMo",
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
	".TriggerBox .Tripwire",
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
],
Peek = [
[
	".BreathinFragment",
	"The Breathing Fragment"
],
[
	".Portal.Journey",
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
	".DownloadStorm.Tripwire, .StormDownload.Tripwire",
	"Downloadables"
],
[
	".RequestStorm.Tripwire, .StormDownload.Tripwire",
	"Submit a project request"
],
[
	".ConnectStorm.Tripwire, .StormDownload.Tripwire",
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
],
Projects = [
{
	id: "DevParticle C",
	title: "FOLD (FRONT-END)",
	pages: [
		{
			title: "about",
			image: "ASSETS/AntiToxins/ProjectAssets/HajNabi/About.jpg",
			active: false
		},
		{
			title: "products",
			image: "ASSETS/AntiToxins/ProjectAssets/HajNabi/Products.jpg",
			active: true
		},
		{
			title: "receipt",
			image: "ASSETS/AntiToxins/ProjectAssets/HajNabi/Receipt.jpg",
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
			image: "ASSETS/AntiToxins/ProjectAssets/Vestaak/Interns.jpg",
			active: false
		},
		{
			title: "index",
			image: "ASSETS/AntiToxins/ProjectAssets/Vestaak/HomePage.jpg",
			active: true
		},
		{
			title: "team",
			image: "ASSETS/AntiToxins/ProjectAssets/Vestaak/Team.jpg",
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
			image: "ASSETS/AntiToxins/ProjectAssets/Hamyaad/About.jpg",
			active: false
		},
		{
			title: "single course",
			image: "ASSETS/AntiToxins/ProjectAssets/Hamyaad/SingleCourse.jpg",
			active: true
		},
		{
			title: "buy course",
			image: "ASSETS/AntiToxins/ProjectAssets/Hamyaad/BuyCourse.jpg",
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
			image: "ASSETS/AntiToxins/ProjectAssets/HajNabi/About.jpg",
			active: false
		},
		{
			title: "products",
			image: "ASSETS/AntiToxins/ProjectAssets/HajNabi/Products.jpg",
			active: true
		},
		{
			title: "receipt",
			image: "ASSETS/AntiToxins/ProjectAssets/HajNabi/Receipt.jpg",
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
			image: "ASSETS/AntiToxins/ProjectAssets/Hamyaad/About.jpg",
			active: false
		},
		{
			title: "single course",
			image: "ASSETS/AntiToxins/ProjectAssets/Hamyaad/SingleCourse.jpg",
			active: true
		},
		{
			title: "buy course",
			image: "ASSETS/AntiToxins/ProjectAssets/Hamyaad/BuyCourse.jpg",
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
			image: "ASSETS/AntiToxins/ProjectAssets/GlareLanding.jpg",
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
			image: "ASSETS/AntiToxins/ProjectAssets/Vestaak/Interns.jpg",
			active: false
		},
		{
			title: "index",
			image: "ASSETS/AntiToxins/ProjectAssets/Vestaak/HomePage.jpg",
			active: true
		},
		{
			title: "team",
			image: "ASSETS/AntiToxins/ProjectAssets/Vestaak/Team.jpg",
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
			image: "ASSETS/AntiToxins/ProjectAssets/InBarg/SingleBusiness.jpg",
			active: false
		},
		{
			title: "index",
			image: "ASSETS/AntiToxins/ProjectAssets/InBarg/Index.jpg",
			active: true
		},
		{
			title: "single offer",
			image: "ASSETS/AntiToxins/ProjectAssets/InBarg/SingleOffer.jpg",
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
],
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
],
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
],
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
$(document).ready(function(){
	Globe();Varia();
});
$(window).resize(function(){Varia();});
$(window).bind("load", function() {
    if( Loader ){
        // Pause teh loading animation if it's set
        Loader.delay(0).kill();
    }
    // After shrinking loading line fade the load barier
    TweenMax.to("#LoaderLine", .2, {
        scaleX: 0,
        onComplete: function(){
            TweenMax.to("#NOTREADY", .2, {autoAlpha: 0});
        }
    });
    CardDraggable();
});
function Varia() {
	const
		atda = $("#AntiToxins .DevParticle, #AntiToxins .ArtParticle"),
		anlz = $("#Analyzer"),
		quac = $(".QuickAccess"),
		smip = $("#Skillometer .InfoPanel"),
		smcs = $("#Skillometer .CoreSlot");

	$("#Analyzer .Particles > div").each(function () {
		if (Particle.isActive) {
			return;
		}
		TweenMax.set($(this).children(".dime"), {rotation: DimeRotation($(this))});
	});
	atda.each(function () {
		if (Particle.isActive) {
			return;
		}
		Target = ($(this).hasClass("DevParticle")) ? $("#AntiToxins .DevStar") : $("#AntiToxins .ArtStar");
		SP = {
			X: $(this).offset().left + ($(this).width() / 2),
			Y: $(this).offset().top + ($(this).width() / 2)
		};
		TP = {
			X: Target.offset().left + (Target.width() / 2),
			Y: Target.offset().top + (Target.width() / 2)
		};
		Angle = ($(this).hasClass("DevParticle")) ? Math.atan2(TP.Y - SP.Y, TP.X - SP.X) * 180 / Math.PI :
			Math.atan2(SP.Y - TP.Y, SP.X - TP.X) * 180 / Math.PI;
		TweenMax.set($(this).children(".Container").children(), {rotation: Angle});
	});
		// When loader is allowed and is set, restart the loader on resize
		if ( Loader && Loader.isActive()) {
			Loader.restart();
		}
		// Disable assets not supported in touch devices
		NoTouchList = [
			$("#Peek"),
			$("#Gandalf"),
			$(".Area69"),
			$(".TriggerBox .Tripwire"),
			$("#Skillometer .Strikes"),
			$("#Footer > a"),
			$(".CardSlider > .Card .Content"),
			atda,
		];
		$.each(NoTouchList, function () {
			// Disable touch for most mobile devices (not tablets)
			if (Is.ThisSize(768)) {
				this.data({notouch: true});
			} else {
				this.data({notouch: false});
			}
		});
		// Resize & reposition Storm assets when in a storm
		if ( EnterStorm && !EnterStorm.isActive() && EnterStorm.progress() === 1) {
			ReCap();
		}
		// Handle resize mid-animation
		if ( EnterStorm && EnterStorm.isActive() && !EnterStorm.reversed()) {
			// Pause the animation and set new ones
			ReCap();
			// Manually call post entrance sequences because Ritual won't trigger it's default onComplete Event listener
			PostRitualSequence();
		}

		function ReCap() {
			// Reset assets to their original positions
			EnterStorm.progress(0).pause();
			Ritual.progress(0).pause();
			CutTripwire.progress(0).pause();
			// Run the calculations and re-make the animations
			StormSequence();
			// Set immediately to their final position
			EnterStorm.progress(1);
			Ritual.progress(1);
			CutTripwire.progress(1);
			// Change indicator to close in smaller devices
			if (Is.ThisSize(768)) {
				Area69.set(Storm.find(".Area69"));
			}
		}

		// Set the dimensions and position of TripWire clones identical to the original TripWires
		SetTripWire();

		let FormTL = false;
		// Indicate a form is expanded
		if (Form.ActiveDom) {
			FormTL = Form.Arrange[Form.ActiveDom.parent().attr("class")];
		}
		// When the form's placement sequence is completed but not running:
		if (FormTL && !FormTL.isActive()) {
			// Recalculate the form's attributes
			AssetForm(Form.ActiveDom);
			Form.Arrange[Form.ActiveDom.parent().attr("class")].progress(1);
		}
		// When it's still running and is not reversed
		else if (FormTL && !FormTL.reversed()) {
			// Pause it's animation and...
			Form.Arrange[Form.ActiveDom.parent().attr("class")].pause();
			// Recalculate the form
			AssetForm(Form.ActiveDom);
			Form.Arrange[Form.ActiveDom.parent().attr("class")].progress(1);
		}
		// Set Skillometer's height based on the distance between InfoPanel and QuickAccess
		let DeviHeight = quac[0].offsetTop -
			(smip[0].offsetTop + smip.innerHeight());

		// Check if width is higher than 600px and height is lower than 600px
		if (!Is.ThisSize(600) && Is.ThisSize(null, 600)) {
			// Set it to full screen excluding 2 general assets
			DeviHeight = quac[0].offsetTop -
				$("#Skillometer .DivisionExpress").outerHeight();
		}
		// Check if width is lower than 1000px
		if (Is.ThisSize(1000)) {
			// Set it to 1.5 of the default size
			DeviHeight =
				(
					quac[0].offsetTop -
					(smip[0].offsetTop + smip.innerHeight())
				) / 1.5;
		}
		// Set minimum and maximum values
		DeviHeight = (DeviHeight > 350) ? 350 : (DeviHeight < 200) ? 200 : DeviHeight;
		// Set the final attributes for both Skillometer and it's Glow asset
		TweenMax.set("#Skillometer .Device, #Skillometer .GeloV", {
			// Set width according to the graphical ratio
			width: DeviHeight / 0.9904580152671756,
			height: DeviHeight
		});
		// Set Core attributes according to the Device's attributes
		TweenMax.set("#Skillometer .Cores .Core", {
			width: smcs.width(),
			height: smcs.height(),
			fontSize: smcs.height() * .13
		});
		// Connect the wires to the Skillometer's Core
		$("#Skillometer .Cores .Core").each(function () {
			Waya = $(this).find(".Waya");
			Target = $("#Skillometer .CoreKeepa");
			WayaOffset = Waya.offset().left;
			SP = {
				X: $(this).offset().left + ($(this).width() / 2),
				Y: $(this).offset().top + ($(this).width() / 2)
			};
			TP = {
				X: Target.offset().left + (Target.width() / 2),
				Y: Target.offset().top + (Target.width() / 2)
			};
			Width = Math.sqrt((SP.X - TP.X) * (SP.X - TP.X) + (SP.Y - TP.Y) * (SP.Y - TP.Y));
			Angle = Math.atan2(TP.Y - SP.Y, TP.X - SP.X) * 180 / Math.PI;
			TweenMax.set(Waya, {
				width: Width,
				rotation: Angle
			});
		});
		// When a Core is loaded but not currently loading:
		if ( CoreMove && !CoreMove.isActive()) {
			// Remove recorded attributes to enable position recalculation
			CoreMove.invalidate();
		}
		// When a core is in the process of loading:
		if ( CoreMove && CoreMove.isActive()) {
			// Remove recorded attributes to enable position recalculation
			CoreMove.invalidate();
			// If unloading
			if (CoreMove.reversed()) {
				// Revert to default position
				CoreMove.restart().pause();
			}
			// If loading
			else {
				// Revert to final position
				CoreMove.restart().progress(1);
			}
		}
		// Check if SingleParticle is currently active and showing
		if ( EnterParticle && !EnterParticle.isActive() && EnterParticle.progress() === 1) {
			// Store current active particle's object cause in ResetParticle() method it is removed
			let prtcle = Particle.activeObj,
				// Determine whether preview is open
				preview = ( ExpandPreview && ExpandPreview.progress() === 1);
			Particle.Navigated = false;
			// Reset everything back to their default position
			ResetParticle(Particle.activeObj);
			// Skip the animating and immediately go to starting state
			EnterParticle.progress(0).pause();
			ParticleRotation.progress(0).pause();
			ExpandParticle.progress(0).pause();
			// Recalculate new animations and positions
			ParticleActivation(prtcle, null, true);
			// Skip animating and immediately go to the final state
			EnterParticle.progress(1);
			ParticleRotation.progress(1);
			ExpandParticle.progress(1);
			// When preview is open
			if (preview) {
				ExpandPreview.reverse().progress(0);
				ImgExpand();
				// Skip the animation and go to the final state
				ExpandPreview.progress(1);
			}
		}
		// Or if it's in the entrance process
		if ( EnterParticle && EnterParticle.isActive()) {
			// Indicate reverse state
			let rev = false;
			if (EnterParticle.reversed()) {
				rev = true;
			}
			// Store current active particle's object cause in ResetParticle() method it is removed
			let prtcle = Particle.activeObj;
			// Store progress for each running animation
			let progress = [
				EnterParticle.progress(),
				ParticleRotation.progress()
			];
			// Reset everything back to their default position
			ResetParticle(Particle.activeObj);
			// Skip the animating and immediately go to starting state
			EnterParticle.progress(0).pause();
			ParticleRotation.progress(0).pause();
			// Recalculate new animations and positions
			ParticleActivation(prtcle);
			// Skip animating and immediately go to the final state
			EnterParticle.progress(progress[0]);
			ParticleRotation.progress(progress[1]);
			// Reverse the sequence in case it was reversing before the new animations
			if (rev) {
				ParticleActivation(prtcle);
			}
		}
		if ( ParticleNavigation && ParticleNavigation.isActive()) {
			// Store progress for each running animation
			let progress = [
				ParticleNavigation.progress(),
				NavRotation.progress()
			];
			// Skip the animating and immediately go to starting state
			ParticleNavigation.progress(0).pause();
			NavRotation.progress(0).pause();
			// Since this variable is changed when navigation started, it is reset here with the root particle
			CurrentParticle = prtcle;
			// Recalculate new animations and positions
			ParticleNavigate(Particle.NaviDirection);
			// Start the new animations from where they were stopped
			ParticleNavigation.progress(progress[0]);
			NavRotation.progress(progress[1]);
		}

		if (ActiveDivision.attr("id") === "Analyzer") {
			// Clear overflow commands given by javascript in screens wider than 1024 width and shorter than 600 height
			if (!Is.ThisSize(1024) && Is.ThisSize(null, 600)) {
				TweenMax.set(anlz, {overflowY: ""});
			}
			// Reset scroll position to prevent content overlapping the screen due to hidden overflow
			if (!Is.ThisSize(null, 600) && anlz[0].scrollTop > 0) {
				TweenMax.set(anlz, {scrollTop: 0});
			}
			// Automatically pick a stone for screens bellow 1024 cause Particles are hidden
			if (Is.ThisSize(1024) && !Analyzer.isActive) {
				Analyzer.Sequence($("#Analyzer .Particles .Green.A .hover"));
			}
		}
		// Request reset for probable CardSlider changes
		CardSlider.reset();
		// Apply Draggable to each Card container
		$(".Slider .CardSlider").each(function () {
			// Set the distance between Cards
			let bound = $(this).find(".Card").innerWidth() * .05,
				// Set the maximum horizontal axis based on children count and distance between them
				xbound = bound * ($(this).children(".Card").length - 1),
				// Set horizontal direction
				dir = ($(this).parent().hasClass("Work")) ? 1 : -1,
				// Set minimum & maximum X values
				xrange = ($(this).parent().hasClass("Work")) ? {
					min: 0,
					max: xbound
				} : {
					min: -xbound,
					max: 0
				};
			// Make the container draggable
			Draggable.create(this, {
				type: "X",
				bounds: {
					minX: xrange.min,
					maxX: xrange.max
				},
				onPress: function () {
					// Prevent Sliding when Content (which is draggable) is engaged
					if ($(this.pointerEvent.target).hasClass("Content")) {
						this.endDrag();
					}
				},
				onDrag: function () {
					// Sync the horizontal and vertical attributes
					TweenMax.set(this.target,
						{
							y: dir * this.x
						});
					// Request cards' placement sequence
					CardSlider.placer(this, dir);
				},
				onDragEnd: function () {
					// Prevent displacement when already at minimum or maximum position
					if (this.x === this.maxX || this.x === this.minX) {
						return;
					}
					let stickto = 0;
					// Search for the current level through container's children
					for (i = 0; i < $(this.target).children(".Card").length; i++) {
						// Revert to previous Card's position when placed between it's margin before the next Card
						if ((dir === -1 && this.x >= -(bound * i + 1)) || (dir === 1 && this.x <= (bound * i + 1))) {
							stickto = dir * bound * (i);
							break;
						}
					}
					// Animate the placement
					TweenMax.to(this.target, .2,
						{
							x: stickto,
							y: dir * stickto
						});
					// Request cards' placement sequence
					CardSlider.placer(this, dir);
				}
			});
		});
		CardDraggable();
		// Reset coordinates of the DivisionExpress' content
		DivisionExpress.set.Position();

		if ( ExpressSequence &&
			(
				(!ExpressSequence.isActive() && ExpressSequence.progress() === 1) ||
				ExpressSequence.isActive()
			)
		) {
			// Store DivisionExpress' animations progress when the animation is active
			let progress = ( ExpressSequence.isActive() ) ?
				[
					ExpressSequence.progress(),
					HintWiggle.progress()
				] : [1, 1];
			// Collapse the DivisionExpress and skip animations to the original position
			ExpressTheDivision(ActiveDivision.find(".DivisionExpress"));
			ExpressSequence.progress(0);
			HintWiggle.progress(0);
			// Reset coordinates of the DivisionExpress' content
			DivisionExpress.set.Position(ActiveDivision.find(".DivisionExpress"));
			// Recall the DivisionExpress sequence and skip to the determined progress
			ExpressTheDivision(ActiveDivision.find(".DivisionExpress"));
			ExpressSequence.progress(progress[0]);
			HintWiggle.progress(progress[1]);
		}
	}

function Globe(){
	const
		atda = $("#AntiToxins .DevParticle, #AntiToxins .ArtParticle"),
		qpdl = $(".Pedal"),
		scds = $("#SpaceCyclone .Download.Storm .StarFlow"),
		scdf = $("#SpaceCyclone .Download.Storm .Flow"),
		scda = $("#SpaceCyclone .Download.Storm .CV > .Asset"),
		scrs = $("#SpaceCyclone .Request.Storm .StarFlow"),
		scrf = $("#SpaceCyclone .Request.Storm .Flow"),
		sccp = $("#SpaceCyclone .Request.Storm .CodeProject > .Title > .Asset"),
		sccs = $("#SpaceCyclone .Connect.Storm .StarFlow"),
		sccf = $("#SpaceCyclone .Connect.Storm .Flow"),
		scph = $("#SpaceCyclone .Connect.Storm .Phone > .Asset"),
		spcy = $("#SpaceCyclone"),
		tmpo = $("#Temporary > .Portal"),
		revh = $(".Reverse > .Handle"),
		rebu = $("#Reach"),
		pfpo = $(".PathFinder .Pocket"),
		skme = $("#Skillometer"),
		smgd = $("#Skillometer .GeloV > div"),
		smcs = $("#Skillometer .Core .Strikes"),
		crys = $(".Crystal"),
		anlz = $("#Analyzer"),
		dcca = $("#DeckCloud .Card"),
		decc = $(".Deck:not(.Slider) .Cards .Card");
	let
		IdlePath, DeployNameTag;
	// When loader is allowed run the loading animation
	if( !Loader ){
        Loader = new TimelineMax({repeat: -1});
        TweenMax.to("#LoaderLine", {
			x: "-50%",
			scaleX: 9,
			ease: "back.in(1.7)",
			onComplete: function(){
				Loader.delay(.5).to("#LoaderLine",.75, {
					x: "-50%",
					scaleX: 9,
					ease: "back.in(1.7)"
				}).to("#LoaderLine",.75, {
					x: "-50%",
					scaleX: 1,
					ease: "back.in(1.7)"
				});
			}
		});
    }
	// Resetting all forms and inputs on page load
	$("input,textarea").val("");
	// Form the panels
	Panel.setup();
	// Add Cards from Life & Work Decks to the Slider Deck
    $(".Deck .Cards .Card").each(function(){
        let clone = $(this).clone();
        if( $(this).parent().parent().hasClass("Work") ){
            clone.appendTo($(".Slider .Work.Cards .CardSlider"))
        }else if( $(this).parent().parent().hasClass("Life") ){
            clone.appendTo($(".Slider .Life.Cards .CardSlider"))
        }
    });
    // Add all Storm TripWire clones to TriggerBox
    $("#SpaceCyclone .Storm").each(function(){
        let clone = $(this).find(".Tripwire").clone();
        clone.addClass( ($(this).attr("class")).replace(/\s/g,""));
        $(".TriggerBox").append(clone);
    });

// Pre Requisitions

	// Prepping The Frame
	$(window).scrollTop(0);

	// Animations Setup

	  // Portals Animation

	WolvenEyez = new TimelineMax({repeat: -1, yoyo: true, paused: true});
	WolvenEyez.set('#Temporary .Eyez', {scale:1});
	 WolvenEyez
	  .to('#Temporary .Eyez', 1, {y: '+=5%',scale: 0.95,ease :   Sine. easeInOut})
	  .to('#Temporary .Eyez', 1, {y: '-=3%',scale: 1,ease :   Sine. easeInOut})
	  .to('#Temporary .Eyez', 1, {y: '+=3%',scale: 0.9,ease :   Sine. easeInOut});

	BrokenLaugh = new TimelineMax({repeat: -1, yoyo: true, paused: true});
	BrokenLaugh.set('#Temporary .Laugh', {scale:1});
	 BrokenLaugh
	  .to('#Temporary .Laugh', 1, {y: '-=2.5%',scale: 0.95,ease :   Sine. easeInOut})
	  .to('#Temporary .Laugh', 1, {y: '+=1%',scale: 1,ease :   Sine. easeInOut})
	  .to('#Temporary .Laugh', 1, {y: '+=2.5%',scale: 0.9,ease :   Sine. easeInOut});

  Jflow = new TimelineMax({paused:true , repeat: -1});
  Jflow.set('#Temporary .Journey .Flow', {scale:1});
	Jflow
	.to('#Temporary .Journey .Flow', 0.4, {y: '-5%',scale: 1.05,ease :  Power1.easeOut})
	.to('#Temporary .Journey .Flow', 0.4, {y: '2.5%',scale: 1,ease :  Power1.easeIn})
	.to('#Temporary .Journey .Flow', 0.4, {y: '0%',ease :  Power1.easeInOut});

  Jstarframe = new TimelineMax({paused:true , yoyo: true, repeat: -1});
	Jstarframe
	.to('#Temporary .Journey .StarFrame', 1, {x: '-3%',rotation: 5,transformOrigin: "50% 200%",ease :  Power1.easeInOut})
	.to('#Temporary .Journey .StarFrame', 1, {x: '0%',rotation: -5,transformOrigin: "50% 200%",ease :  Power1.easeInOut});

  Jterrain = new TimelineMax({paused:true , repeat: -1});
	Jterrain
	.to('#Temporary .Journey .Terrain', 0.8, {scale: 1.04,ease : Power1.easeInOut,delay: 0.2})
	.to('#Temporary .Journey .Terrain', 0.8, {scale: 1,ease : Power1.easeInOut});

  Jdeepsea = new TimelineMax({paused:true , repeat: -1});
	Jdeepsea
	.to('#Temporary .Journey .DeepSea', .5, {skewX: 30,transformOrigin: "top left",ease:  Power2.easeInOut })
	.to('#Temporary .Journey .DeepSea', .5, {skewX: 0,transformOrigin: "top left",ease:  Power2.easeInOut });

  Jship = new TimelineMax({paused:true , yoyo: true , repeat: -1});
	Jship
	.to('#Temporary .Journey .Ship', .6, {x: 20,rotation: 10,ease: Power1.easeInOut,transformOrigin: "30% 80%" })
	.to('#Temporary .Journey .Ship', .6, {x: -5,rotation: -10,ease: Power1.easeInOut,transformOrigin: "30% 80%" })
		.to('#Temporary .Journey .Ship', .6, {x: 20,rotation: 10,ease: Power1.easeInOut,transformOrigin: "30% 80%" });



  Hflow = new TimelineMax({paused:true , repeat: -1,repeatDelay: .5});
  Hflow.set('#Temporary .Artery .Flow', {scale:1});
   Hflow
	.to('#Temporary .Artery .Flow', .2, {scale: 1.1,ease: Power1.easeInOut })
	.to('#Temporary .Artery .Flow', .2, {scale: 1,ease: Power1.easeInOut })
	.to('#Temporary .Artery .Flow', .2, {scale: 1.15,ease: Power1.easeInOut })
	.to('#Temporary .Artery .Flow', .2, {scale: 1,ease: Power1.easeInOut });

  Hbloodaura = new TimelineMax({paused:true , repeat: -1});
  Hbloodaura.set('#Temporary .Artery .BloodAura', {scale:1});
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
  Hbarry.set('#Temporary .Artery .Barry', {scale:1});
	Hbarry
	.to('#Temporary .Artery .Barry', .4, {x: '-5%',y: '-5%',scale: 1.4,ease: Bounce. easeInOut });



  Mflow = new TimelineMax({paused:true ,yoyo: true , repeat: -1});
  Mflow.set('#Temporary .BigMo .Flow', {scale:1});
   Mflow
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.03,rotation: 5 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.12,rotation: -5 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.09,rotation: 8 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .4, {scale: 1.14,rotation: -8 ,ease: Power1.easeInOut })
	.to('#Temporary .BigMo .Flow', .2, {scale: 1.05,rotation: 12 ,ease: Power1.easeInOut });

  Walla = new TimelineMax({paused:true ,yoyo: true , repeat: -1});
  Walla.set(['#Temporary .BigMo .Behindmo','#Temporary .BigMo .Frontmo'], {scale:1});
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
  Mjaccuzi.set('#Temporary .BigMo .Jaccuzi', {scale:1});
   Mjaccuzi
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: 10,transformOrigin: '40% 60%',scale : 1.04,opacity: 1 ,ease: SlowMo.ease.config( 0.7, 0.7, false) })
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: -15,transformOrigin: '40% 60%',scale : 1.08,opacity: 1 ,ease: SlowMo.ease.config( 0.9, 0.7, false) })
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: 20,transformOrigin: '40% 60%',scale : 0.9,opacity: 1 ,ease: SlowMo.ease.config( 0.7, 0.7, false) })
	.to('#Temporary .BigMo .Jaccuzi', .5, {rotation: -20,transformOrigin: '40% 60%',scale : 1.1,opacity: 1 ,ease: SlowMo.ease.config( 0.7, 0.9, false) });

	  // QuickAccess animations
  PedalAction = TweenMax.to(qpdl, .5, {rotation: 360, transformOrigin: "50% 35%", ease:  Power0.easeNone, repeat: -1, paused: true});
  PedalPrevent = new TimelineMax({paused:true, repeat: 1});
  PedalPrevent
	  .to(PedalAction.target[0], .025, {x: "3%"})
	  .to(PedalAction.target[0], .05, {x: "-3%"})
	  .to(PedalAction.target[0], .025, {x: "0%"});

		// SpaceCyclone animations
	SC_DL_Stars = new TimelineMax({paused:true, repeat: -1});
	SC_DL_Stars
		.to(scds, .8,
			{autoAlpha: .4, rotation: 2, transformOrigin: "50% 100%", ease: Power0.easeNone}
			)
		.to(scds, .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "50% 100%", ease: Power0.easeNone}
			)
		.to(scds, .8,
			{autoAlpha: .4, rotation: -2, transformOrigin: "50% 100%", ease: Power0.easeNone}
			)
		.to(scds, .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "50% 100%", ease: Power0.easeNone}
			);
	SC_DL_Flow = new TimelineMax({paused:true, repeat: -1});
	SC_DL_Flow
		.to(scdf, .4,
			{autoAlpha: .5, transformOrigin: "55% 100%", ease: Power0.easeNone}
			)
		.to(scdf, .4,
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
	.to(scda, .8,
		{rotation: -30, transformOrigin: "80% 0%",ease: Power1.easeInOut}
		, 0)
	.to(scda, .8,
		{rotation: 0, transformOrigin: "80% 0%",ease: Power1.easeInOut}
		);

	SC_RQ_Stars = new TimelineMax({paused:true, repeat: -1});
	SC_RQ_Stars
		.to(scrs, .8,
			{autoAlpha: .4, rotation: 2, transformOrigin: "100% 60%", ease: Power0.easeNone}
		)
		.to(scrs, .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "100% 60%", ease: Power0.easeNone}
		)
		.to(scrs, .8,
			{autoAlpha: .4, rotation: -2, transformOrigin: "100% 60%", ease: Power0.easeNone}
		)
		.to(scrs, .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "100% 60%", ease: Power0.easeNone}
		);
	SC_RQ_Flow = new TimelineMax({paused:true, repeat: -1});
	SC_RQ_Flow
		.to(scrf, .4,
			{autoAlpha: .5, transformOrigin: "55% 100%", ease: Power0.easeNone}
		)
		.to(scrf, .4,
			{autoAlpha: 1, transformOrigin: "55% 100%", ease: Power0.easeNone}
		);
	SC_RQ_Plus = new TimelineMax({paused:true, repeat: -1, yoyo: true, yoyoEase: Power3.easeOut});
	SC_RQ_Plus
		.to($("#SpaceCyclone .Request.Storm .Definer > .Asset"), .3,
			{scale: .5, opacity: 1,ease: Power3.easeIn}
		);
	SC_RQ_CodeProject = new TimelineMax({paused:true, repeat: -1});
	SC_RQ_CodeProject
		.to(sccp, .8,
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
		.to(sccp, .8,
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
		.to(sccs, .8,
			{autoAlpha: .4, rotation: 2, transformOrigin: "0% 60%", ease: Power0.easeNone}
		)
		.to(sccs, .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "0% 60%", ease: Power0.easeNone}
		)
		.to(sccs, .8,
			{autoAlpha: .4, rotation: -2, transformOrigin: "0% 60%", ease: Power0.easeNone}
		)
		.to(sccs, .8,
			{autoAlpha: 1, rotation: 0, transformOrigin: "0% 60%", ease: Power0.easeNone}
		);
	SC_CN_Flow = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Flow
		.to(sccf, .4,
			{autoAlpha: .5, transformOrigin: "55% 100%", ease: Power0.easeNone}
		)
		.to(sccf, .4,
			{autoAlpha: 1, transformOrigin: "55% 100%", ease: Power0.easeNone}
		);
	SC_CN_Wifi = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Wifi
		.to($("#SpaceCyclone .Connect.Storm .Definer > .Asset"), .3,
			{rotation: 360, transformOrigin: "50% 73.2%", opacity: 1,ease: Power0.easeNone}
		);
	SC_CN_Phone = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Phone
		.to(scph, .13,
			{scale: 1.05, rotation: 25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to(scph, .13,
			{scale: 1.1, rotation: -25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to(scph, .13,
			{scale: 1.15, rotation: 25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to(scph, .13,
			{scale: 1.2, rotation: -25, transformOrigin: "center",ease: Power0.easeNone}
		)
		.to(scph, .2,
			{scale: 1, rotation: 0, transformOrigin: "center",ease: Power0.easeNone}
		);
	SC_CN_Envelope = new TimelineMax({paused:true, repeat: -1});
	SC_CN_Envelope
		.to($("#SpaceCyclone .Connect.Storm .Envelope .Title > .Asset"), .6,
			{scale: 0, rotation: 90, transformOrigin: "100% 50%",ease: Power0.easeNone}
		);
	SC_Footer = new TimelineMax({paused: true});
	SC_Footer.fromTo(spcy.find("#Footer > div"), .2,
		{y: 10,autoAlpha: 0},
		{y: 0,autoAlpha: 1}
	).fromTo(spcy.find("#Footer > a"), .2,
		{y: 10,autoAlpha: 0},
		{y: 0,autoAlpha: 1}, "-=.1"
	);
	AntiToxins = new TimelineMax({paused: true});
	AntiToxins.add(
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
	AnalyzerFly
        .fromTo("#Analyzer .Analyzer .Circle", .1, {
            autoAlpha: 1
        }, {
           autoAlpha: 0
            })
        .add(
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
		TweenMax.fromTo("#DeckCloud .Deck:not(.Slider) .ShuffleFire", .35, {
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
	DeckCloudFly.fromTo("#DeckCloud .Cards .Fader, #DeckCloud .GravityForce, #DeckCloud .GravityForceX", .1, {
			autoAlpha: 0
		}, {
            autoAlpha: 1
		}, 0).fromTo("#DeckCloud .Deck .Sign, #DeckCloud .Deck .ShuffleFire", .1, {
			autoAlpha: 0
		}, {
            autoAlpha: function(i, t){
                // Get the other Deck's class
                let Class = ( Sign.activeObj.hasClass("Work") )? ".Life" : ".Work";
                // Set exclusive values for SliderDeck's ShuffelFires & Signs
				// Check if current Tween is from the other Deck
                if( Sign.activeObj.siblings(Class).find(t).length && $(t).hasClass("ShuffleFire") ){
                    return 0;
                }
				// Check if current Tween is from the active Deck
                if( Sign.activeObj.parent().find(t).length && $(t).hasClass("Sign") && $(t).hasClass(Class.replace(".","")) ){
                    return .4;
                }
                return 1;
        }
		}, 0);
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
	PlaceDeck.add(
		TweenMax.staggerFromTo("#DeckCloud .Work .Cards .Card", .3, {
			y: -50,
			autoAlpha: 0
		}, {
			y: 0,
			autoAlpha: 1
		}, .1), 0
	).add(
		TweenMax.fromTo("#DeckCloud .Work .Sign", .3, {
			scale: 0,
		}, {
			scale: 1,
			ease: Back. easeOut.config( 1.7)
		}, .1), 0
	);
	PlaceDeck.add(
		TweenMax.staggerFromTo("#DeckCloud .Life .Cards .Card, #DeckCloud .Slider .Cards .Card", .3, {
			y: -50,
			autoAlpha: 0
		}, {
			y: 0,
			autoAlpha: 1
		}, .1), 0
	).add(
		TweenMax.fromTo("#DeckCloud .Life .Sign, #DeckCloud .Slider .Sign", .3, {
			scale: 0
		}, {
			scale: 1,
			ease: Back. easeOut.config( 1.7)
		}, .1), 0
	);
	ShuffleFire = new TimelineMax({paused: true, repeat: -1, yoyo: true
	});
	ShuffleFire.staggerFromTo("#DeckCloud .ShuffleFire .Fire", 1, {
        cycle:{scaleY: function(){
                return (Math.random() * .05) + 1;
            }},
		transformOrigin: "50% 100%"
	}, {
		cycle:{scaleY: function(){
				return (Math.random() * .2) + 1.1;
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
	}, .01);
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
	$("#Trilogies header, #Trilogies footer, #BigMo > article, #Artery > article, #Journey > article").css(
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
		if(typeof(set) === "boolean"){
			this.allowed = set;
			if( typeof(memory) === "boolean" ){
				this.memory = memory;
			}
		}
		return this.allowed;
	}};
	NextDivisionAssociates = false;
	DirectFlyActive = [false];
	  // Reverse vars
	Reverse = {pedal: false, obj: false, allowed: false, Override: false, memory: null, isAllowed: function(set,memory){
		if(typeof(set) === "boolean"){
			this.allowed = set;
			if( typeof(memory) === "boolean" ){
				this.memory = memory;
			}
		}else{
			return this.allowed;
		}
	},
		IsOverrided: function(set){
		if(typeof(set) === "boolean"){
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
	tmpo.each(function(i){
		ActiveRotten[i] = TweenMax.to($(this).find(".Rotten"), 1, {
			paused: true,
			rotation: 360,
			repeat: -1,
			ease: Expo.easeInOut
		});
	});
	tmpo.click(function(){
		const
			rebu = $("#Reach"),
			qaca = $(".QuickAccess > .Cells.active"),
			quac = $(".QuickAccess");
		let t = $(this);
		// Forbid Portal activation when Fly animation is running
		if( ActiveFly && ActiveFly.isActive() ){
			return;
		}

		for( X = 0 ; X < Portal.length ; X++ ){
			if( t.hasClass(Portal[X]) ){
				Active.Dimension = Portal[X];
				Active.Color = PortalColor[X];
				let A;
				// QuickAccess
				qaca.toggleClass("active");
				quac.find("."+Portal[X]).toggleClass("active");
				// Peek , Gandalf , Portalian
				if( !t.hasClass("active") ){
					$(".Portalian,#Gandalf,#Peek").css("color",Active.Color);
				}else{
					$(".Portalian,#Gandalf,#Peek").css("color","");
				}

				// ReSet fly clearance
				if( Global.Rotten ){
					for( XX = 0 ; XX < Portal.length ; XX++ ){
						if( ActiveRotten[XX] &&
							$(ActiveRotten[XX].target[0]).parent().parent().hasClass("active") ){

							CheckForToggle($(ActiveRotten[XX].target[0]).parent().parent(),true);

							$('#Temporary > .active').toggleClass("active");
							Global.Rotten = DirectRotten[0] = ActivePortal[0] = false;
							Forward.isAvailable = false;
							Forward.isAllowed(false,false);
							rebu.data({GandalfOpt: 1});

							ActiveRotten[XX].eventCallback("onRepeat",null).eventCallback("onRepeat", function(XX){
								ActiveRotten[XX].pause().eventCallback("onRepeat",null);
							}, [XX]);
							if( $(ActiveRotten[XX].target[0]).parent().parent().hasClass(Portal[X]) ){
								qaca.toggleClass("active");
								quac.find(".Default").toggleClass("active");
								A = true;
								// Changing Gandalf's content
								$("#Temporary .Void").data({GandalfActive: true});
							}
						}
					}
				}

				// Form the panels
				Panel.set();

				if( !A ) {
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
						rebu.data({GandalfOpt: 2});
					}else {
						Forward.isAvailable = true;
						Forward.isAllowed(true, true);
						rebu.data({GandalfOpt: 0});
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
	});

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
        let BR = $(this),
            Opt = $(this),
            OptLength = 0;
        // Find this asset's row in Gandalf's array
        $.each(Gandalf,function(){
            if( $(BR[0]).filter(this[0]).length ){
                let RandList = Global.RandList.BR;
                // Get the overall option length
                OptLength = this[1].length;
                // Randomly select an option
                Opt = Math.floor(OptLength*Math.random());
                // Ensure the selection of all arrays before re-selecting the same option
				for( let i of RandList ){
					// Check whether the option is repetitive
					if( i === Opt ){
						// Run the loop until:
						while(
							// The option is not repetitive
						i === Opt ||
						// Or the current option isn't the same as the previous option
						RandList[RandList.length-1] === Opt ){
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
        });
        // Send option change request
        $(this).data({GandalfOpt: Opt});
    });

    // Add TranslucentWave effect
	$(".QuickAccess .Cells .Cell").click(function(){
		let PrevSiblings = $(this).prevAll(),
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
    PedalTop = qpdl.position().top;
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

			if( Reverse.pedal === false ) {
			    XtoPercent = (CurPos === this.minY) ? 0 : 100;
                Glitch.on("#Gandalf", "Forward launch initiated...");
			}
			else{
			    XtoPercent = (CurPos === this.minY) ? 100 : 0;
                Glitch.on("#Gandalf", "Reverse launch initiated...");
			}
            if( CurPos < PedalBoundary.Stop && CurPos > PedalBoundary.Start ) {
                Region = Math.abs(this.maxY - this.minY);
                XtoPercent = (Reverse.pedal === false) ? ( (CurPos) * 100) / Region : ( Math.abs(CurPos-this.maxY) * 100) / Region;
            }

            Dur = ActiveFly.duration()-((ActiveFly.duration()*.9)*( XtoPercent / 100 ));
            ActiveFly.duration(Dur);
            if( (Reverse.pedal === true && ReverseFly.isActive()) || Reverse.IsOverrided() ){
				Dur = ReverseFly.duration()-((ReverseFly.duration()*.9)*( XtoPercent / 100 ));
				ReverseFly.duration(Dur);
			}else{
				if( SwitchDivisionActive[0] === false && ActiveDivision.attr("id") === "Temporary" ){
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
            Top = (Reverse.pedal === true) ? this.maxY : this.minY;
            // Defining how the pedal's getting re-set
			if( ActivePortal[0] === false ){
				TweenMax.to(this.target, .2, { y:Top , ease: Power3. easeOut});
			}else{
				TweenMax.to(this.target, .2, { y:Top , ease: Power3. easeOut, onComplete: CheckForToggle, onCompleteParams: [ActivePortal[0]]});
			}
            if( Locked[0] === true ){ return; }
            Forward.isAllowed(true);
            ActiveFly.duration(ActiveFly.duration()-ActiveFly.duration()*.9).reverse().eventCallback("onReverseComplete",KillActiveFly);
            if( (Reverse.pedal === true && ReverseFly.isActive()) || Reverse.IsOverrided() ){
				Reverse.isAllowed(true);
				if( !Reverse.IsOverrided() ){
					Forward.isAllowed(false);
				}
				else{
					Reverse.isAllowed(false);
				}
				ReverseFly.duration(ReverseFly.duration()-ReverseFly.duration()*.9).reverse().eventCallback("onReverseComplete",KillReverseFly);
			}else{
            	if( ActiveDivision.attr("id") === "Temporary" || ( Shrinker && Shrinker.isActive() ) ){
				Shrinker.duration(Shrinker.duration()-Shrinker.duration()*.9).reverse();
				}
            }
            Glitch.on("#Gandalf", "Cancelling launch...");
        },
        zIndexBoost: false
    });

    // Set hover reaction
	revh.mouseenter(function(){
		// Allow hover
		$(this).parent().addClass("hover");
	})
	.mouseleave(function(){
		// Forbid hover
		$(this).parent().removeClass("hover");
	});
	// Reverse sequence
	revh.click(function(){
		if( ( !ReverseFly || !ReverseFly.isActive() ) &&
			( !ActiveFly || !ActiveFly.isActive() ) ){
			ReverseHandle($(this));
		}
	});
	// Apply handle effect
	$("#Reach, #Ditch").mousedown(function(){
		// Differentiate buttons attributes.
		let to = ( $(this).attr("id") === "Reach" ) ? "0% 0%" : "100% 0%",
			r = ( $(this).attr("id") === "Reach" ) ? 5 : -5;
		// Apply the animation
		TweenMax.to( $(this), .1, {transformOrigin: to, rotation: r} );
	})
    .on("mouseup mouseout", function(){
		// Reverse to normal
		TweenMax.to( this, .1, {rotation: 0});
	});
	// Fly alternatives
	rebu.click(function(){
		if( DirectFlyActive[0] ){ return; }
		if (Reverse.pedal === true){
			if ( !ReverseFly || !ReverseFly.isActive() ) {
				ReverseHandle();
			} else {
				ReverseHandle(false);
			}
		}
		if( Forward.isAllowed() ) {
		    rebu.data({GandalfOpt: 0});
			Fly(true);
		}
		else{
			PreventFly();
		}
	} );
	$("#Ditch").click(function() {
		if (Reverse.pedal === false){
			if ( !ActiveFly || !ActiveFly.isActive() ) {
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
    pfpo.mousedown(function(){
        // Forbid hover animations
        if( IdlePath ){
            IdlePath.pause();
        }
    });
    pfpo.mouseenter(function(){
        let pathfinder = $(".PathFinder"),
            path = pathfinder.find("#Path"),
            contentgap = path.innerWidth() - pathfinder.innerWidth();
        // Forbid hover reaction when user is dragging
        if(
			( Draggable.get(path) && Draggable.get(path).isDragging ) ||
			( IdlePath && IdlePath.isActive() ) ||
			( path.position().left > 0 || path.position().left < -contentgap )
		){ return; }
        // Check whether #Path overflows it's content
        if( contentgap > 0 ){
            // Create animation Timeline
            IdlePath = new TimelineMax();
            let x = {
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
	$('#SpaceCyclone > .TriggerBox .Tripwire').mouseenter(function(){
	    // Prohibit hover reactions when entering the storm
        if( Cyclone.isActive || Is.NoTouch($(this)) ){return;}

		T = $(this).attr("class");

		if( T.match(/Download/) ){
			ToggleDownload();
		}
		if( T.match(/Request/) ){
			ToggleRequest();
		}
		if( T.match(/Connect/) ){
			ToggleConnect();
		}

	})
		.mouseleave(function(){
			if( Cyclone.isActive || Is.NoTouch($(this)) ){return;}

			T = $(this).attr("class");

            if( T.match(/Download/) ){
                ToggleDownload(true);
            }
            if( T.match(/Request/) ){
                ToggleRequest(true);
            }
            if( T.match(/Connect/) ){
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
	$('#SpaceCyclone .TriggerBox .Tripwire').click(function(){
        let StormID = ($(this).attr("class").match(/Storm(\w*)|\w*Storm/g)[0]).replace("Storm","");
	    // Check if method is in the middle of entering/exiting
		if( EnterStorm && EnterStorm.isActive() ){
		    // Run when entering the storm
		    if( !EnterStorm.reversed() ){
                EnterStorm.reverse().eventCallback("onReverseComplete", function(){
                    // Deactivate cyclone activation indicator
                    Cyclone.isActive = false;
                    // Reappear footer
                    SC_Footer.reversed(!SC_Footer.reversed());
                    // Run hover reactions if a storm is hovered after the storm

                    if( Is.NoTouch($(this)) ) {
                        $(".TriggerBox .Tripwire").each(function () {
                            if ($(this).is(":hover")) {
                                let Class = $(this).attr("class");
                                if (Class.match(/Download/)) {
                                    ToggleDownload();
                                }
                                if (Class.match(/Request/)) {
                                    ToggleRequest();
                                }
                                if (Class.match(/Connect/)) {
                                    ToggleConnect();
                                }
                            }
                        });
                    }
                    // Remove cloned assets
                    Storm.find(".AlphaAsset.clone, .BetaAsset.clone").remove();
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
        Storm = $(".Storm."+StormID);
        Cyclone.isActive = Storm;
        SC_Footer.reverse();

        // Prevent scrolling on SpaceCyclone
		TweenMax.set(spcy, {overflow: "inherit"});

		PostRitual = new TimelineMax();
		// Applying the curtain
		CurClass = ( Storm.hasClass("Request") ) ? "Req" :
			( Storm.hasClass("Download") ) ? "DL" :
				( Storm.hasClass("Connect") ) ? "Con" : "BOZ";
		Storm.siblings(".Curtain").addClass(CurClass);
		// Clone assets inside the AssetContainer so their original state is saved after the resize
        if( Storm.find(".AlphaAsset.clone, .BetaAsset.clone").length === 0 ){
            // Fetch the clones & insert them before the AssetContainer
            Storm.find(".AssetContainer > .AlphaAsset, .AssetContainer > .BetaAsset").clone().addClass("clone").attr("style","").insertBefore(Storm.find(".AssetContainer"));
            // Storm.find(".clone, .clone *").attr("style", "");
            TweenMax.set(Storm.find(".clone"), {autoAlpha: 0});
        }
		// Create new animations for storm entrance assets
		StormSequence();
		// Finalize the Ritual
		Ritual.eventCallback("onComplete", function(){
            PostRitualSequence();
		});
	});
	StormForm = [];
	$("#SpaceCyclone > .Storm .Title").click(function (){
        let storm = $(this).parent(),
            Class = storm.attr("class");
        // Check if another asset is requested while one is expanded
        if( Form.ActiveDom !== null && !storm.hasClass(Form.ActiveDom.parent().attr("class")) ){
            // Collapse the other form
            if( Deformer(Form.ActiveDom, true) ){
                // Open the requested one
                AssetForm($(this));
            }
        }
        else{
            // Collapse the current asset if it's expanded
            if( Form.Arrange[Class] ) {
                if( Deformer($(this)) ){ return; }
            }
            // Expand current asset
            AssetForm($(this));
        }
	});

	$('#SpaceCyclone .Attach').click(function(){
		input = $(this).siblings('input');
		if( input.val() !== "" ){
			input.val("");
			$(this).html("Attach a file");
			return;
		}
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
        let inputs = $(this).find("input:not([type='file']), .TextArea > textarea"),
            regx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            error = 0,
            file = $(this).find("[type='file']"),
            err_container = "#"+$(this).attr("id")+" .Error",
            form = $(this);
        $.each(inputs, function(){
            let efilter = $(this).filter("[name='email']");
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
        let data = {
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
                url: "#",
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
        if( EnterStorm && EnterStorm.isActive() ){
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
    	if( Is.NoTouch($(this)) ){ return false; }
		Area69.set($(this));
    }).mouseleave(function(){
    	if( Is.NoTouch($(this)) ){ return false; }
    	Area69.reset($(this));
    });
	$("#Footer > a").mouseenter(function(){
		if( Is.NoTouch($(this)) ){ return false; }
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
			if( Is.NoTouch($(this)) ){ return false; }
        TweenMax.to($(this).find("img"), .15, {
            scale: 1,
			clearProps: "all",
            ease: Power1.easeOut
        });
        TweenMax.to($(this).find(".Line"), .15, {
            scaleY: 0,
			clearProps: "all",
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
            // Animate 20% of the background relative to it's container
            return $(asset).innerWidth() * .2 + "%"
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
			if(typeof(state) === "boolean"){
				InfoPanelState[0] = state;
			}else{
				return InfoPanelState[0];
			}
		}
	};
	// Variable indicating whether the device is loaded
    LoadedCore = false;

    $("#Skillometer .Glued, #Skillometer .InfoPanel").click(function(){
        if( !DeviceEmpty.isActive() ){
            DeviceEmpty.restart();
        }
    });
	smcs.mouseenter(function(){
		if( Is.NoTouch($(this)) ){ return; }
		let CoreElement = $(this).parent().parent().parent();
		if( CoreClick === CoreElement.attr("class") ){return;}
		OBJ = $(this).siblings(".Title").find(">span");
		Core = CoreElement.find(".Extender");
		Dur = ((OBJ.width()*100)/OBJ.parent().innerWidth())/125;
		if( Flicker && Flicker.isActive() ){
			ReverseCore();
		}
		Flicker = new TimelineMax({yoyo: true,repeat: -1});
		Brrr = new TimelineMax({yoyo: true,repeat: -1});
		Flicker
			.fromTo(Core.children(), .4, {autoAlpha: 1, ease:  SlowMo.ease.config( 0.2, 0.2, false)}, {autoAlpha: .3, ease:  SlowMo.ease.config( 0.2, 0.2, false)});
		Brrr
			.fromTo(Core.children(), .06, {x: 0}, {x: 2})
			.to(Core.children(), .06, {x: -2});
		CoreTitleSlider.pause(OBJ);
	})
		.mouseleave(function(){
		if( Is.NoTouch($(this)) ){ return; }
		if( CoreClick !== $(this).parent().attr("class") ){
			if( Flicker && Flicker.isActive() ){
				ReverseCore();
			}
		}
		CoreTitleSlider.play();
	});
	smcs.click(function(){
		CoreElement = $(this).parent().parent().parent();
		CoreElement.addClass("active");
		// Cancel load when same element is requested
		if( CoreClick === CoreElement.attr("class") ){
			ReverseCore(true);
			CoreClick = false;
			SkiloBrrr.kill();
			RemoveCore();
            LoadedCore = false;
			return;
		}
		ReverseCore(true);
		// Check if any other element is engaging with the device
		if( CoreSlot && CoreSlot.children().length > 0 ){
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
		CoreMove = new TimelineMax({paused: true});
		CoreMove
			.fromTo(Core, Dur, {
			    x: 0,
                y: 0
            }, {
				x: function(){
					return ((skme.find(".CoreKeepa").offset().left+skme.find(".CoreKeepa").innerWidth()/2)-(CoreElement.offset().left+CoreElement.innerWidth()/2));
				},
				y: function(){
					return ((skme.find(".CoreKeepa").offset().top+skme.find(".CoreKeepa").innerWidth()/2)-(CoreElement.offset().top+CoreElement.innerHeight()/2));
				},
				ease:  Back.easeIn.config(2)
			}, 0)
			.fromTo(Core.find(".Waya"), Dur,{
			    scaleX: 1
            }, {
				scaleX: 0,
				ease:  Back.easeIn.config(2)
			}, 0);
		CoreMove.play();
		AffectedCores.Core.push(Core);AffectedCores.Waya.push(Core.find(".Waya"));

		CoreSlot = $(".CoreSlot");
		CoreClone = Core.find(".Strikes,.Title").clone();
		CoreClone.find("*").css("transform","");

		CoreSlot.append("<div class=\"Core\"></div>");
		let ActiveCore = CoreSlot.children(":last-child");
		ActiveCore.append(Core.find(".Board").clone());
		ActiveCore.append("<div class='ForReactor'></div>");
		ActiveCore.find(".ForReactor").html(CoreClone);

		GlowOnEnter = new TimelineMax({paused: true});
		GlowOnEnter.to(smgd, Dur/2,{
			opacity: .6,
			ease:  Power1. easeOut
		}).to(smgd, Dur/2,{
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
		Emginashun.fromTo([ActiveCore.find(".ForReactor"),smgd], .15, {
			autoAlpha: 0
		}, {
			autoAlpha: 1,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),smgd], .15, {
			autoAlpha: 0,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),smgd], .15, {
			autoAlpha: 1,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),smgd], .15, {
			autoAlpha: 0,
			ease:   ToughEase
		}).to([ActiveCore.find(".ForReactor"),smgd], .4, {
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

		TweenMax.to(Slider, CoreSliderDur/2, {x: "0%", ease:  SlowMo.ease.config( 0.2, 0.2, false), onComplete: function (){
					CoreSlider.play();
				}, onCompleteParams: [Slider]});
		TweenMax.set(CoreSlot, {zIndex: 0});
		TweenMax.set(CoreKeepa, {zIndex: 0,autoAlpha: 1});
		TweenMax.set(ActiveCore.find(".ForReactor"), {autoAlpha: 0});
		Emginashun.delay(GlowOnEnter.duration()).play();
	});
	$(".CoreSlot, .InfoPanel").click(function(){
		// Deny request when:
		if(
			// No Core is loaded yet
			!LoadedCore ||
			// Or InfoPanel is clicked in higher size screens
			(
				$(this).hasClass("InfoPanel") &&
				(
                    ( !Is.ThisSize(1000) && !Is.ThisSize(null, 600) )
                )
			)
		){
			return false;
		}
		if( Emginashun.reversed() ){ return; }
		if( CoreSlot && CoreSlot.children().length > 0 ){
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
			let Name = t.find(".Name"),
				NameT = t.find(".NameTag"),
				Divider = t.find(".Divider"),
				Cont = t.find(".Container");
            Name[0].style.display = "";
            let DX = -40, // Divider X
                NTX = -20; // NameTag X
			// Whether current Particle is far to the left half of the page
			if( t.find(".Diamond").offset().left < window.innerWidth / 2 ){
				TweenMax.set( NameT, {left: Cont.width()} );
				TweenMax.set( Divider, {left: 0} );
			}
			// Or it's far to the right half of the page
			else{
				DX = 40;
                NTX = 20;
				TweenMax.set( NameT, {right: Cont.width()} );
				TweenMax.set( Divider, {right: 0} );
			}
			DeployNameTag = new TimelineMax();
			DeployNameTag.fromTo(Divider, .25,{
				autoAlpha: 0,
				x: DX
			},{
				autoAlpha: 1,
				x: 0
			}).fromTo(Name, .25,{
				autoAlpha: 0,
				x: NTX
			},{
				autoAlpha: 1,
				x: -NTX
			}, "-=.1");
		},
		reverse: function(duration){
			let dur = ( typeof(duration) === "number" ) ? duration : null ;
			// Reverse TagName deployment if already not reversed
			if( DeployNameTag && !DeployNameTag.reversed() ){
				if( dur !== null ){ DeployNameTag.duration(dur); }
				DeployNameTag.reverse().eventCallback("onReverseComplete", function(t){
					// Prevent hiding NameTag element when hover is triggered
					if ( !t._last || TweenMax.getTweensOf($(t._last.target[0]).parent().children()).length ) return;
				    t._last.target[0].style.display = "none";
                }, ["{self}"]);
			}
		}
	};
	atda.mouseenter(function(){
		if( Is.NoTouch($(this)) ){ return; }
		// Abort reaction if SingleParticle is open or when entering particle
		if( Particle.isActive || ( EnterParticle && EnterParticle.isActive() ) || Particle.Navigated ){ return; }
		// Get and fade the stars and all other particles but the current one
		TweenMax.staggerTo(
		    ( $(this).hasClass("DevParticle") ) ?
                $(this).parent().parent().find(".DevParticle, .ArtStar, .ArtParticle").not(this) :
                $(this).parent().parent().find(".DevStar, .DevParticle, .ArtParticle").not(this)
            , .25, {opacity: .2, overwrite: true}, .04);
		NameTag.play($(this));
	})
	.mouseleave(function(){
		if( Is.NoTouch($(this)) ){ return; }
		// Abort reaction if SingleParticle is open or when entering particle
		if( Particle.isActive || ( EnterParticle && EnterParticle.isActive() ) || Particle.Navigated ){ return; }
		// Resetting blurred assets on mouseleave
        TweenMax.staggerTo($(this).parent().parent().find(".DevStar, .DevParticle, .ArtStar, .ArtParticle").not(this), .25, {opacity: 1}, .04);
		// Remove NameTag
		NameTag.reverse();
	});
	Particle = {isActive : false, activeObj: null, Navigated: false, NaviDirection: null};
	atda.click(function(e){
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
		let Particles = ( $(this).hasClass("DevStar") ) ? $("#AntiToxins .DevParticle:not(.CLONED)") : $("#AntiToxins .ArtParticle:not(.CLONED)"),
			Star = $(this),
			Class = $(this).attr("class");
		if( TrackLines.disabled === true || TrackLines.isActive[Class] ){
			$(this).data({GandalfActive: false});
			return;
		}
		$(this).data({GandalfActive: true});
		TrackLines.isActive[Class] = true;
		if( !TrackLines.obj[Class] ){
			TrackLines.obj[Class] = [];
			$( Particles ).each(function(){
				TrackLines.obj[Class].push( Star.append("<div class='Line'></div>").children(".Line").last() );
			});
		}
		$( Particles ).find(".Diamond").each(function(i){
			let Particle = $(this),
                Origin = "right" ,
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

			TweenMax.set(TrackLines.obj[Class][i], {
				top: "50%",
				right: "50%",
				width: 1,
				rotation: 0
			});
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
					TweenMax.set(TrackLines.obj[Class][i], {
						width: Width,
						rotation: 180+Angle,
						top: "+="+( ( SP.Y ) - TP.Y ),
						right: "+="+((window.innerWidth - SP.X) - ( window.innerWidth - TP.X ))
					});
                    tween.reverse();
                    if( i+1 === Particles.length ){
                        tween.eventCallback("onReverseComplete", function(){
                            TrackLines.isActive[Class] = false;
                            // Clearing sibling lines so they wont cause responsive problems
                            TweenMax.set($(tween.target[0]).siblings(".Line"), {clearProps: "all"})
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
	    if( SignGlitch && ( EnterParticle && EnterParticle.isActive() ) ){
            SignGlitch.invalidate().pause();
        }
		SignGlitch = new TimelineMax();
		SignGlitch
			.fromTo( [ ( $(this).hasClass("ArtSign") ) ? $(this).siblings(".ArtSignBeam") : $(this).siblings(".DevSignBeam"), $(this) ], .5, {
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
			crys.toggleClass("active")
			// Change Peek's content
			.data({PeekOption: 1});
			// Indicate reverse request
			if( Analyzer.isActive ){
				Analyzer.Reverse(T.parent());
			}
			// Set & replace new data
			Analyzer.isActive = T.parent().attr("class");
			Analyzer.object = T.parent();
			TweenMax.set(T, {autoAlpha: 0});
			DimeEntrance = new TimelineMax();
			FaceAppear = new TimelineMax({paused: true});
			DimeRotate = new TimelineMax({paused : true});
			let MovingPart = T.siblings(".dime"),
				AnalyzerCore = $(".Analyzer .Core");
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
				x: ( AnalyzerCore.offset().left + AnalyzerCore.innerWidth() / 2 ) - ( MovingPart.offset().left + MovingPart.innerWidth() / 2 ),
				y: ( AnalyzerCore.offset().top + AnalyzerCore.innerHeight() / 2 ) - ( MovingPart.offset().top + MovingPart.innerHeight() / 2 ),
				ease: Expo.easeIn,
				// Creating a random rotation for each particle
				rotation:
					( (Math.floor(Math.random() * 2)) ) ?
					- 270 - Math.floor(Math.random() * 360) + 1 :
					270 + Math.floor(Math.random() * 360) + 1,
				// Turning the Analyzer on after the particle reached the core
				onComplete: function(){
					DimeRotate.resume();
					// Searching and matching for the current particle in the database
					$(Personalities).each(function(){
						if( T.parent().hasClass(this.particle) ) {
							let TheFace = $("#" + this.face);
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

							let CurrentActive = $(".Analyzer .Faces > div.active");
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
								Glitch.on("#Analyzer .Cloud", this.title);
                            }
						}
					});
					// Allow scroll after everything is placed
					TweenMax.set(anlz, {overflowY: "auto"});
                    // Reset coordinates of the DivisionExpress' content
                    DivisionExpress.set.Position($("#Analyzer .DivisionExpress"));
				}
			})
		},
		Reverse: function(T, FullReset){
			// Toggling hover ability for crystal
			crys.toggleClass("active")
			// Change Peek's content
			.data({PeekOption: 0});
			Peeker.set(crys);

			// Not allowing the same reversing particle to reverse
			if( T.hasClass(Analyzer.isActive) && DimeEntrance.isActive() ){
				return;
			}
            // Determine scroll reverse duration relative to the distance from the top
            let d = anlz[0].scrollTop / 400,
				dur = ( d > .2 ) ? .2 : d;
            // Reset scroll position
            TweenMax.to(anlz, dur, {scrollTop: 0});
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
			TweenMax.to( Analyzer.object.find(".dime"), .2, {
				autoAlpha: 1,
				rotation: DimeRotation(Analyzer.object),
				scale: 1
			});
			// Reversing other animation groups
			FaceAppear.reverse();
			DimeEntrance.reverse();
			if( AnalyzePlate.reversed() ){
				AnalyzePlate.reversed( !AnalyzePlate.reversed() ).resume().eventCallback("onComplete",function(){
                    // Clear content to prevent overflow issues
                    $("#Analyzer .Plate .Content > div").html("");
                });
			}
			// Re-activating active particle's click & hover ability
			TweenMax.set(Analyzer.object.children(".hover"), {autoAlpha: 1});
			// Resetting variables
			Analyzer.object = false;
			Analyzer.isActive = false;
			if( FullReset ){
				Glitch.on("#Analyzer .Cloud", "SELECT A STONE");
				// Reactivate stone select notice
				$("#PrevFace, #NextFace").data({GandalfActive: true});
				// Determine scroll reverse duration relative to the distance from the top
				let dur = anlz[0].scrollTop / 400;
				dur = ( dur > .2 ) ? .2 : dur;
				// Reset scroll position
				TweenMax.to(anlz, dur, {scrollTop: 0, onComplete: function(){
				    // For screens wider than 1024 width and shorter than 600 height clear overflow commands
					if( !Is.ThisSize(1024) && Is.ThisSize(null, 600) ){
						TweenMax.set(anlz, {overflowY: ""});
						return
					}
					// Disable scroll
                    TweenMax.set(anlz, {overflowY: "hidden"});
					}});
			}
		}
	};

	$("#Analyzer .Particles > div > .hover").click(function(){
		Analyzer.Sequence($(this));
	});
	$("#PrevFace, #NextFace").click(function(){
		let p;
		if( Analyzer.isActive ){
			let NavTo = ( $(this).attr("id") === "PrevFace" ) ? Analyzer.object.prev()  :
				Analyzer.object.next();
			if( NavTo.length !== 0 ){
				Analyzer.Sequence(NavTo.children(".hover"));
			}else{
				p = true;
			}
		}else{
			p = true;
		}
		if( p ){
			PedalPrevent = new TimelineMax({repeat: 1});
			PedalPrevent
				.to($(this), .025, {y: "5%"})
				.to($(this), .05, {y: "-5%"})
				.to($(this), .025, {y: "0%"});
		}
	});
	$(".Analyzer .Crystal").click(function(){
	    // Prohibit unloading when PArticles are hidden
	    if( Is.ThisSize(1024) ){ return; }
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
			TweenMax.staggerFromTo(".Particles > *", .2, {autoAlpha: 1, scale: 1}, {
				autoAlpha: 0,
				scale: 1.5,
				transformOrigin: "center",
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
	decc.mouseenter(function(){
		CardHoverIn( $(this) );
	})
		.mouseleave(function(){
			let T = $(this).parent().parent().attr("class");
		if( CardSelect.isActive[T] || CardSelect.validator[T] ){

			let ishv = CardSelect.validator[T] && !$(this).parent().children(".Card").filter(function() { return $(this).is(":hover"); }).length;
			// Enable hover reactions when:
			if(
				// Mousedown is triggered and cursor leaves the cards area
				( !CardSelect.isActive[T] && ishv ) ||
				// Drag exits the Card area
				( ishv && $(mdevent.target).hasClass("Content") ) ){
				// Resetting mousedown variables
				CardSelect.validator[T] = 0; CardSelect.mdReset[T] = false;
			}else{
				// Hover is disabled when a card is selected and when mousedown is triggered
				return;
			}
		}
		let ActiveHover = $($(this).nextAll(".Card")).filter(function() { return $(this).is(":hover"); }),
			prevsiblings = ActiveHover.prevAll(".Card").toArray().reverse();
		// Resetting the hovered element back to it's original state
		TweenMax.to( ActiveHover.children(), .1, {
			scaleY: 1,
			transformOrigin: "50% 100%"
		} );
		// Checking to see if any of the the next ( active ) siblings are hovered
		if( ActiveHover.length && CardHover.HoverReveal[T] && prevsiblings.length ){
			// var Hm = CardHover.HoverReveal[T].getTweensOf(ActiveHover.children());
			// Removing the targeted tween from the main timeline
			// CardHover.HoverReveal[T].remove( Hm );
			// Removing the targeted element from active elements lists as well
			ii = 0;
			function ResetCard(hit){
				TweenMax.to( hit.children(), .1, {
					scaleY: 1,
					transformOrigin: "50% 100%"
				} );
				// Removing the targeted tween from the main timeline
				CardHover.HoverReveal[T].remove( CardHover.HoverReveal[T].getTweensOf(hit.children()) );
			}
			$(CardHover.AlreadyActive[T]).each(function(){
				let Target = $(this), rem;
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
		let OtherCardsHovered = (CardHover.isActive[T] && CardHover.isActive[T].parent().find(">.Card:hover").length === 1);
		// Aborting reverse sequence when :
		// There's no timeline to reverse yet
		// Decks are currently placing and haven't finished
		// Any other cards are hovered
		if(
			!CardHover.HoverReveal[T] ||
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
	decc.mousedown(function(e){
		let T = $(this).parent().parent().attr("class");
		mdevent = e;
		CardSelect.validator[T] = 1;
		// Making sure a card is selected to run the de-select process
		if( CardSelect.isActive[T] &&
			// Prevent other cards from appearing when content is clicked
			!$(mdevent.target).hasClass("Content") ) {
			// Prepping the handlers so we can read what mouse is hovering on after de-select
			TweenMax.set($(this).siblings(".Card"), {autoAlpha: 1});
		}
		CardSelect.mdReset[T] = $(this);
	});
	decc.mouseup(function(){
		let T = $(this).parent().parent().attr("class"),
			b;
		CardSelect.validator[T] = 0;
		// Declaring account state only when not declared
		if( !CardSelect.isActive[T] ){
			CardSelect.isActive[T] = false;
		}
		if( !CardSelect.mdReset[T] ){
			return;
		}
		// Abort method when content dragging is in process
		if(
			( Draggable.get(CardSelect.mdReset[T].find(".Content")) &&
				Draggable.get(CardSelect.mdReset[T].find(".Content")).timeSinceDrag() < .005) ||
			$(mdevent.target).hasClass("Content") ){
			// Prevent hover reactions on decsending cards
			CardSelect.mdReset[T] = false;
			return;
		}
		let siblings = CardSelect.mdReset[T].nextAll(".Card");
		// De-selecting
		if( CardSelect.isActive[T] || !$(this).hasClass(CardSelect.mdReset[T].attr("class")) || !$(this).hasClass(CardSelect.mdReset[T].attr("class")) ){
			if( CardSelect.mdReset[T] ){
				siblings = CardSelect.mdReset[T].siblings(".Card");
			}
			CardDeSelect( T, $(this), siblings );
			// Exclusive commands for Peek
			CardSelect.mdReset[T].data({PeekOption: 0});
			CardSelect.mdReset[T].siblings().data({PeekOption: 0});
			CardSelect.mdReset[T].siblings(":last-child").data({PeekOption: 1});
			Peeker.set(CardSelect.mdReset[T]);
            // Exclusive commands for Gandalf
            dcca.data({GandalfOpt: 1});

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
		if( CardHover.HoverReveal[T] ){
			CardHover.HoverReveal[T].pause();
		}
		// Hiding siblings's direct children
		siblings = siblings.children().toArray().reverse();
		TweenMax.staggerTo( siblings, .15, {
			scaleY: 0
		}, .075, function(){
			if ( CardSelect.validator[T] ){
				return;
			}
			// Hiding the direct siblings after the animations
			TweenMax.set( $(siblings).parent(), {autoAlpha: 0});

		});
		// Exclusive commands for Peek
		$(this).siblings().data({PeekOption: 2});
        $(this).data({PeekOption: 3});
		Peeker.set($(this));
        // Exclusive commands for Gandalf
        dcca.data({GandalfOpt: 0});
	});
	$("#DeckCloud .Deck:not(.Slider) .Sign").click(function(){
	    // CardWave effect
        TweenMax.staggerFromTo($(this).siblings(".Cards").find(".Card"), .1,{
            y: 0
        },{
            y: "-=20",
            onComplete: function(t){
                // Reverse each tween individually after complete
                if( !t.reversed() ){
                    t.reverse();
                }
            },
            onCompleteParams: ["{self}"]
        }, .05);
    });

    Sign = {
        activeObj: $(".Slider .Life.Sign"),
        activate: function(T, force){
            // Deny request when:
            if(
				// Request is not forced
            	!force &&
				// Target is the active object
				( T !== null && this.activeObj.hasClass(T.attr("class")) )
			){ return; }
			// If target is not set, go with the default
            if( T === null ){
                T = this.activeObj;
            }
			// If it is, store active sign's state
            else{
                this.activeObj = T;
            }
            // Store ids' of both signs
            let type = ( T.hasClass("Work") ) ? ".Work" : ".Life",
                othersign = ( T.hasClass("Work") ) ? T.siblings(".Sign.Life") : T.siblings(".Sign.Work"),
                othertype = ( T.hasClass("Work") ) ? ".Life" : ".Work";
            // Prevent the shuffle effect if requested
            if( force === "noshuffle" ){
                TweenMax.to(T.siblings(type).find(".ShuffleFire"), .2,{
                    scale: 1
                });
                TweenMax.to(othersign.siblings(".Cards"+othertype), .5,{
                    autoAlpha: .35
                });
                TweenMax.to(T.siblings(".Cards"+type), .5,{
                    autoAlpha: 1
                });
                return;
            }
            // Switch visibility
            TweenMax.to([othersign,othersign.siblings(".Cards"+othertype)], .5,{
                autoAlpha: .35
            });
            TweenMax.to([T, T.siblings(".Cards"+type)], .5,{
                autoAlpha: 1
            });
            // Hide ShuffleFires of both decks
            TweenMax.to([T.siblings(type).find(".ShuffleFire"),othersign.siblings(othertype).find(".ShuffleFire")], .2,{
                scale: 0,
                autoAlpha: 1,
                y: 20
            });
            // Hide the target deck
            TweenMax.to(T.siblings(type).find(".CardSlider .Card, .RoyalPillow"), .2, {
                autoAlpha: 0,
                x: function(){
                    return ( type === ".Work" ) ? -50 : 50;
                },
                onComplete: function(){
                    // Switch decks' positions
                    TweenMax.set(othersign.siblings(othertype+".Cards"), {zIndex: -1});
                    TweenMax.set(T.siblings(type+".Cards"), {zIndex: 0});
                    // Shuffle active deck back in
                    TweenMax.staggerTo(T.siblings(type).find(".CardSlider .Card, .RoyalPillow"), .2, {
                        autoAlpha: 1,
                        x: 0
                    },.1);
                    // Light the fires
                    TweenMax.to(T.siblings(type).find(".ShuffleFire"), .2,{
                        scale: 1,
                        y: 0
                    });
                    TweenMax.to(".Deck.Slider .Life.Sign,.Deck.Slider .Work.Sign", .2,{
                        scale: 1
                    });
                }
            });
            // Request reset for probable CardSlider changes
            CardSlider.reset(.5);
        }
    };
	$(".Deck.Slider .Sign").click(function(){
        Sign.activate($(this));
    });

	$(".DivisionExpress").click(function(){
		ExpressTheDivision($(this));
	});

	// Gandalf Markers
	$.each(Gandalf, function() {
		let P = this, D = $(P[0]);

		// Enabling the option to choose between multiple content for one asset in case the second array contains other than text
		if( typeof(P[1]) === "object" ){
			// Default option is the first asset
			D.data({GandalfOpt: 0});
		}
		if (
			// Checking whether this asset contains multiple elements
			D.length > 1){
			if (
				// Identifying whether this asset group needs to be deactive
				P.length > 2 &&
				typeof (P[2]) === "object" &&
				P[2].active === false
			) {
				// Setting a deactive indicator for each individual asset in the group
				D.each(function () {
					$(P).data({GandalfActive: false});
				})
			}
		}
		Gandalfer.setup(this);
	});

	// Peek Markers
	$.each(Peek, function() {
		let P = this, D = $(this[0]);

		// Enabling the option to choose between multiple content for one asset in case the second array contains other than text
		if( typeof(P[1]) === "object" ){
			// Default option is the first asset
			D.data({PeekOption: 0});
		}
		if (
			// Checking whether this asset contains multiple elements
			D.length > 1){
			if (
				// Identifying whether this asset group needs to be deactive
				P.length > 2 &&
				typeof (P[2]) === "object" &&
				P[2].active === false
			) {
				// Setting a deactive indicator for each individual asset in the group
				D.each(function () {
					$(P).data({PeekActive: false});
				})
			}
			// Exclusive commands for DeckCloud Cards
			D.filter(".Card:last-child").data({PeekOption: 1});
		}
		Peeker.setup(P);
	});
	Pathfinder();
	URI();
	DivisionSequence(true);
	if( ActiveDivision.attr("id") === "Temporary" ){
		rebu.data({GandalfOpt: 1});
	}
}

function URI(ForceSet){
	// Obtain the current URL path's name
	let currenturl = (ForceSet) ? ActiveDivision.attr("id") : (document.location.pathname).replace(/\/~Project_END\//, "/"),
		url;
	// Redirect all requests to the root (temporarily)
	if( !ForceSet ){
		window.history.pushState({
			id: DivisionURI[0].name
		}, DivisionURI[0].pagetitle, "./");
		document.title = DivisionURI[0].pagetitle;
		return;
	}
	// Locate the page's URI information if available
	$.each(DivisionURI, function(){
		if( this.name.toLowerCase() === (currenturl.toLowerCase()).replace("/","") || this.url.toLowerCase() === (currenturl.toLowerCase()).replace("/","") ){
			url = ( this.name.toLowerCase() === "temporary" ) ? "./" : this.url ;
			window.history.pushState({
				id: this.name
			}, this.pagetitle, url);
			document.title = this.pagetitle;
		}
	});
	if( currenturl !== "/" && !url ){
		let msg ="404 - Page not found";
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
		const
			qaca = $(".QuickAccess > .Cells.active");
		let Class = ( NEW === true ) ? "Frame"
			: qaca.attr("class"),
			CellGroup = ( NEW === true ) ? $(".QuickAccess > .Cells.Frame")
			: qaca;
		// Deprioritize inactive Cells
		TweenMax.set(".QuickAccess > .Cells:not(.active)", {zIndex: -1});
		// Checking to make sure the current panel doesn't have it's exclusive animation already set
		if( !PanelSwitch.obj[Class] || NEW ) {
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

  // Switch division
function SwitchDivision(target,Manual){
	const
		rebu = $("#Reach");
	Section = false; SwitchDivisionActive[0] = true;
	Forward.obj = false;
	Dur = 2;

	for (X = 0; X < Portal.length; X++) {
		if (target.hasClass(Portal[X])) {
			const
				prtl = $("#" + Portal[X]);
			// Setting .Flow's background color
			TweenMax.to(target.find(".Flow"),.5,{background: Active.Color,autoAlpha: 0});
			// Activating the new section
				Section = prtl.children().first();
			if( ActiveDivision.attr("id") === "Temporary" ){target = $("#Temporary");}
			// Switching
			ActiveDivision = Section;

			Dimension = prtl;
			ChildrenLen = Dimension.children("footer,header,article").length;
			if ((Reverse.pedal === false &&
				(ChildrenLen > 1 && ActiveDivision.index() + 1 < ChildrenLen))) {
				Forward.obj = Dimension.children().eq(ActiveDivision.index() + 1);
			}
			Forward.isAvailable = true;
			Forward.isAllowed(true);
			Glitch.on("#Gandalf", null);
		}
	}
	// Boosting active fly's speed to wrap up faster
	if( Shrinker && Shrinker.isActive() ) {
		Shrinker.duration(2);
		Shrinker.eventCallback("onComplete",LoadSection,[FlyAssociates]);
	}else{
		// Hiding the current section
		TweenMax.to(ActiveDivision, .5, {autoAlpha: 0,onComplete: LoadSection,onCompleteParams: [FlyAssociates]});
	}
	Locked[0] = true;
	ActivePortal[0] = false;
	// Prepping the spaceship for the next section
	if( Section === false || Manual ){
		Dimension = ActiveDivision.parent();
		ChildrenLen = Dimension.children("footer,header,article").length;

		Forward.isAvailable = true;
		Forward.isAllowed(true);
        Glitch.on("#Gandalf", null);
		if( !Manual ) {
			// Keeping the current division in target variable
			target = ActiveDivision;
			// Set upcoming sibling of the last division as current division when:
			if (
                // Last division isn't reversed to this division
				Reverse.pedal === false &&
                // Current division has upcoming siblings
                ( ActiveDivision.index() + 1 < ChildrenLen &&
                // Next division when set, isn't the Temporary division (Current main division)
				Dimension.children().eq(ActiveDivision.index() + 1).attr("id") !== "Temporary" )
			) {
				ActiveDivision = Dimension.children().eq(ActiveDivision.index() + 1);
			} else if ((ActivePortal[0] === false && Reverse.pedal === false)) {
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
				    rebu.data({GandalfOpt: 1});
					Forward.isAllowed(false);
				}
			} else if (Reverse.pedal === true) {
				ActiveDivision = Reverse.obj;
				Subject = ActiveDivision.find(".Entry");
				Parent = ActiveDivision;
				// Resetting portals affected assets
				if (DirectRotten[0] !== false && ActiveDivision.attr("id") === "Temporary") {
					DirectRotten[0].play();
					GetPortal = $(DirectRotten[0].target[0]).parent().parent();
					CheckForToggle(GetPortal);
					// Fly Config
					ActivePortal[0] = GetPortal;
					if (ActiveDivision.attr("id") === "Temporary") {
						Subject = GetPortal;
					}
				}
			}
			// Set the upcoming sibling as next division when current division has followed siblings
			if ( ActiveDivision.index() + 1 < ChildrenLen ) {
				Forward.obj = Dimension.children().eq(ActiveDivision.index() + 1);
			}
			// Or reset to the main division
			else if( ActiveDivision.attr("id") !== "Temporary" ){
				Forward.obj = $("#Temporary");
			}
		}
		else{
			Section = ActiveDivision;
			ActiveDivision = target;
			target = Section;
			DirectFlyActive[0] = false;

			// Resetting portals affected assets
			if ( DirectRotten[0] !== false && ActiveDivision.attr("id") === "Temporary") {
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
		if( !Forward.obj.length && Active.Dimension === Portal[0] ){
		    rebu.data({GandalfOpt: 2});
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
		TweenMax.set(Flyascs.toString(), {y: 0, x: 0, scale: 1, rotation: 0});
		Section.css({zIndex: 1});
		SwitchDivisionActive[0] = false;
	}

	Draggable.get(".Pedal").endDrag();
	ReverseSequence();
	DivisionSequence(true);
	Pathfinder();
    DivisionExpress.set.Beam();
	URI(true);
}
  // Division sequences
Order = {ID: null, Definitive: false};

function DivisionSequence(reset){
	DiviSection = ActiveDivision.attr("id");
	PreFlyIsSet = false; Reactive = false;
	if( reset && Reverse.obj ){
        PreDivision = Reverse.obj.attr("id");
    }else{
		PreDivision = false;
	}
		NextDivision = ( Forward.obj !== false ) ? Forward.obj.attr("id") : null;
	if( ActiveFly && ActiveFly.isActive() && !ActiveFly.reversed() ){
		Reactive = true;
	}

	// Trial Start
	Ascs = [".Portal.Journey",".Portal.BigMo",".Portal.Artery",".BreathinFragment"];
	if( DiviSection === "Temporary" ){
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
	}
	if( PreDivision === "Temporary" && !PreFlyIsSet ){
        PreFlyAssociates = Ascs;
        PreFlyIsSet = true;
    }
	if( NextDivision === "Temporary" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".Entry",".Request",".Download",".Connect"];
	if( DiviSection === "SpaceCyclone" ){
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
	}
	if( PreDivision === "SpaceCyclone" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision === "SpaceCyclone" ){NextDivisionAssociates = Ascs;}
	// Trial Start
    Ascs = [".Entry",".InfoPanel",[".Core"]];
	if( DiviSection === "Skillometer" ){
		FlyAssociates = Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
			CoreTitleSlider.play();
		}else{
			// DO when about to leave
			if( CoreSlot && CoreSlot.children().length > 0 ){
				Laser.pause();
				if( LoadedCore ){ InfoPanel.off(); }
				RemoveCore(.2);
				CoreClick = false;
                LoadedCore = false;
				AffectedCores = {Core: [], Waya: []};
			}
			CoreTitleSlider.pause();
		}
	}
    if( PreDivision === "Skillometer" && !PreFlyIsSet ){
        PreFlyAssociates = Ascs;
        PreFlyIsSet = true;
    }
	if( NextDivision === "Skillometer" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".Entry",".DevStar .Star",".ArtStar .Star",[".DevParticle, .ArtParticle"]];
	if( DiviSection === "AntiToxins" ){
		FlyAssociates =  Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
			if( reset ){
				StarRotation.resume();
				AntiToxins.duration(.5).restart().resume();
			}else{
				Order.ID = DiviSection;
			}
		}else{
			// DO when about to leave
			if( !AntiToxins.reversed() ){
                // When Sign is glitching
                if( SignGlitch ){
                    // Stop the glitch
                    SignGlitch.kill();
                }
				AntiToxins.restart().pause();
			}
			StarRotation.pause();
			TrackLines.fade();
		}
	}
	if( PreDivision === "AntiToxins" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision === "AntiToxins" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".RightWing .Storm",".LeftWing .Storm",".Analyzer .Core",[".Particles > div"]];
	if( DiviSection === "Analyzer" ){
		FlyAssociates =  Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
			if( reset ){
                // Automatically pick a stone for screens bellow 1024 cause Particles are hidden
                if( Is.ThisSize(1024) && !Analyzer.isActive ){
                    Analyzer.Sequence($("#Analyzer .Particles .Green.A .hover"));
                }
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
	}
	if( PreDivision === "Analyzer" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision === "Analyzer" ){NextDivisionAssociates = Ascs;}
	// Trial Start
	Ascs = [".Entry",".RoyalPillow > div"];
	if( DiviSection === "DeckCloud" ){
		FlyAssociates =  Ascs;
		if( Reactive || reset ){
			// DO on entrance or RESTART
			if( reset ){
				DeckCloudFly.invalidate().restart().resume();
				ShuffleFireFly.restart().resume();
				Gravity.restart().resume();
				PlaceDeck.restart().eventCallback("onComplete", function(){
					// Activate a deck in Slider deck
                    Sign.activate(null, "noshuffle");
				});
				ShuffleFire.invalidate().resume();
			}else{
				Order.ID = DiviSection;
			}
		}else{
			// DO when about to leave
			let K = Object.keys(CardSelect.isActive);
			// Checking for active cards
				$(Object.values(CardSelect.isActive)).each(function(i){
					if( this === true ){
						CardSelect.mdReset[K[i]] = false;
						CardSelect.validator[K[i]] = 0;
						TweenMax.set(CardSelect.object[K[i]].nextAll(".Card"), {autoAlpha: 1});
						CardDeSelect( CardSelect.object[K[i]].parent().parent().attr("class"), CardSelect.object[K[i]], CardSelect.object[K[i]].siblings(".Card") );
					}
				});
			if( PlaceDeck.isActive() ){
				PlaceDeck.pause();
			}
			DeckCloudFly.invalidate().reverse();
			Gravity.pause();
		}
	}
	if( PreDivision === "DeckCloud" && !PreFlyIsSet ){
		PreFlyAssociates = Ascs;
		PreFlyIsSet = true;
	}
	if( NextDivision === "DeckCloud" ){NextDivisionAssociates = Ascs;}

	if( Reactive ){
		Order.Definitive= true;
	}else if( reset ){
        // Reset coordinates of the DivisionExpress' content
        DivisionExpress.set.Position();
        TweenMax.to(".DivisionExpress", .2, {
            y: "0%",
            autoAlpha: 1
        });
	}else{
		if( ExpressSequence && ExpressSequence.progress() === 1 ){
			ExpressTheDivision($(ExpressSequence._first._targets[0]).parent());
		}
		TweenMax.to(".DivisionExpress", .2, {
			y: "-200%",
			autoAlpha: 1
		});
        DivisionExpress.set.Beam(true);
	}
}
  // Fly action
function Fly(Reach,Manual){
	const
		rebu = $("#Reach"),
		quac = $(".QuickAccess");
	DivisionSequence();
	// Restart fly associates while shrinker is still running
	if( ( Shrinker && Shrinker.isActive() ) && ( ActiveFly && !ActiveFly.isActive() ) ){
		Shrinker.duration(.1); KillActiveFly();
		TweenMax.to($(DirectRotten[0].target[0]).parent().parent().find(".Flow"),.5,{background: "",autoAlpha: 1});
	}
	// Or just restart active fly associates while reversing to the same division
	if( (Reverse.pedal === true && ( ActiveFly && !ActiveFly.isActive()) ) || ( ReverseFly && !ReverseFly.isActive()) ){
		// Store all available Fly associates
	    ResetVars = ActiveFly.getChildren();
		if( ReverseFly ){ ResetVars = ResetVars.concat(ReverseFly.getChildren()) ;}
		$(ResetVars).each(function(){
		    // Reset all changes affected by Fly
			TweenMax.set(this.target, {y: 0, x: 0, scale: 1, rotation: 0});
		});
	}
	// Return on reverse fly
	if( Reverse.pedal === false && ( ( ReverseFly && ReverseFly.isActive()) ||
		( ActiveFly && ActiveFly.isActive() ) ) ){
		// Return on reverse fly
		if( ReverseFly && ReverseFly.isActive() ){
			if( ActiveFly.reversed() ){
				ActiveFly.reversed(!ActiveFly.reversed());
				ReverseFly.reversed(!ReverseFly.reversed());
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
			}else {
				ActiveFly.reverse().eventCallback("onReverseComplete", function(){
                    if( !Forward.obj.length && Active.Dimension === Portal[0] ){
                        rebu.data({GandalfOpt: 2});
                    }else{
                        rebu.data({GandalfOpt: 1});
                    }
				    Glitch.on("#Gandalf", null);
                });
				ReverseFly.reverse().eventCallback("onReverseComplete",
					function(){
						Forward.isAllowed(Forward.memory);
						Reverse.isAllowed(Reverse.memory);
						// Setting the active portal to stop shrinking
						if( ActivePortal[0] !== false && DirectRotten[0] !== false ){
							DirectRotten[0].play();
							CheckForToggle(ActivePortal[0]);
						}
						Reverse.obj.css({zIndex: -1}); ActiveDivision.css({zIndex: 1});
						// Store all available Fly associates
						ResetVars = ActiveFly.getChildren();
						if( ReverseFly ){ ResetVars = ResetVars.concat(ReverseFly.getChildren()) ;}
						$(ResetVars).each(function(){
							// Reset all changes affected by Fly
							TweenMax.set(this.target, {y: 0, x: 0, scale: 1, rotation: 0});
						});
						// By order of the fookin DivisionSequence
						DiviOrders();
					});
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
				rebu.data({GandalfOpt: 3});
			}
		}
		// Return on forward fly while reversed
		else if( ActiveFly.reversed() ){
				Forward.isAllowed(false);
				Reverse.isAllowed(true);
				rebu.data({GandalfOpt: 0});
				ActiveFly.reversed( !ActiveFly.reversed() );
				// Setting the active portal to shrink
				if( ActivePortal[0] !== false && DirectRotten[0] !== false && ( Shrinker && Shrinker.reversed() ) ) {
					Shrinker.reversed(!Shrinker.reversed());
					DirectRotten[0].reverse();
					CheckForToggle(ActivePortal[0], true);
				}
		}
		return;
	}
    // Return on forward fly
	if( Reverse.pedal === true && ActiveFly && ActiveFly.isActive() ||
		( ReverseFly && ReverseFly.isActive() ) ){
	    // Reverse forwarded reverse fly
		if( ReverseFly && ReverseFly.isActive() ){
		    // Return on Forward fly
            if( ActiveFly.isActive() && !ReverseFly.reversed() ){
                $("#Ditch").data({GandalfOpt: 3});
            }
            Forward.isAllowed(true);
            Reverse.isAllowed(false);
            ActiveFly.reversed(!ActiveFly.reversed());
            ReverseFly.reversed(!ReverseFly.reversed()).eventCallback("onReverseComplete",
				function(){
					Forward.isAllowed(Forward.memory);
					Reverse.isAllowed(Reverse.memory);
					if( !Reverse.obj ){
						$("#Ditch").data({GandalfOpt: 1});
					}else{
						$("#Ditch").data({GandalfOpt: 0});
					}
					Glitch.on("#Gandalf", null);
					// Reactivating the portal
					if( ActivePortal[0] !== false && DirectRotten[0] !== false && Shrinker ) {
						DirectRotten[0].play();
						CheckForToggle(ActivePortal[0]);
					}
					// By order of the fookin DivisionSequence
					DiviOrders();
				});
		}
		// Return on forward fly
		else{
				Forward.isAllowed(true);
				Reverse.isAllowed(false);
				$("#Ditch").data({GandalfOpt: 3});
				ActiveFly.reverse().eventCallback("onReverseComplete",function(){
					Forward.isAllowed(Forward.memory);
					Reverse.isAllowed(Reverse.memory);
					Glitch.on("#Gandalf", null);
					$("#Ditch").data({GandalfOpt: 0});
					// Reactivating the portal
					if( ActivePortal[0] !== false && DirectRotten[0] !== false && Shrinker ) {
						DirectRotten[0].play();
						CheckForToggle(ActivePortal[0]);
					}
					// Reset all attributes of active associates (Important to prevent calculating errors caused by next division's animations being set but never performed)
					KillActiveFly();
				});

		}
		// Preventing the active portal to shrink & reactivating the portal
		if( ActivePortal[0] !== false && DirectRotten[0] !== false && Shrinker && Shrinker.isActive() ) {
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
		if( Reverse.pedal === true ){
			Parent = Reverse.obj;
		}else{
			Parent = ActiveDivision;
		}
		if( Manual ){ Parent = ActiveDivision; }
		if( ActivePortal[0] === false ){
			if( Reverse.pedal === true && Reverse.obj.attr("id") === "Temporary" ){
				Subject = $(DirectRotten[0].target).parent().parent();
			}else{
				Subject = Parent.find(".Entry");
			}
		}else if(Reverse.pedal === true ){
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
        Scale = ( window.innerWidth >= window.innerHeight ) ?
            (window.innerWidth / Subject.innerWidth()) * 2 :
            (window.innerHeight / Subject.innerHeight()) * 2;
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
					hmst = RevHoldMyState = {
						ot : Subject.offset().top,
						ol : Subject.offset().left,
						w : Subject.innerWidth(),
						h : Subject.innerHeight()
					};
				}else{
					hmst = RevHoldMyState = {
						ot : quac.offset().top+200,
						ol : quac.offset().left,
						w : quac.innerWidth(),
						h : quac.innerHeight()
					};
				}
				X = 1; AutoNode = [];
				$(PreFlyAssociates).each(function(){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length === 1 && Parent.find(this.toString()).length > 1 ){
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
				$(FlyAssociates).each(function(){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length === 1 && ActiveDivision.find(this.toString()).length > 1 ){
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
			if( ActiveDivision.attr("id") === "SpaceCyclone" && NextDivisionAssociates.length > 1 ){
				hmst = RevHoldMyState = {
					ot : quac.offset().top+200,
					ol : quac.offset().left,
					w : quac.innerWidth(),
					h : quac.innerHeight()
				};
				ReverseFly = new TimelineMax({paused: true});
				ActiveFly = new TimelineMax({paused: true});
				X = 1; AutoNode = [];
				$(NextDivisionAssociates).each(function(){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length === 1 && Forward.obj.find(this.toString()).length > 1 ){
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
				if( Forward.obj !== false && Forward.obj.attr("id") === "Temporary" ){
					KeepThatShit = $(DirectRotten[0].target[0]).parent().parent();
					hmst = RevHoldMyState = {
						ot : KeepThatShit.offset().top,
						ol : KeepThatShit.offset().left,
						w : KeepThatShit.innerWidth(),
						h : KeepThatShit.innerHeight()
					};
				}else{
					hmst = RevHoldMyState = {
						ot : Subject.offset().top,
						ol : Subject.offset().left,
						w : Subject.innerWidth(),
						h : Subject.innerHeight()
					};
				}
				if( NextDivisionAssociates.length > 1 && Forward.obj !== false ){
					// ReArrange associates based on the focused subject
					Associates = NextDivisionAssociates;
					if( Forward.obj.attr("id") === "Temporary" ){
						let prtl = $(DirectRotten[0].target[0]).parent().parent().attr("class"),
							s;
						Associates = NextDivisionAssociates;
						for( let i of Associates){
							if ( $(i).hasClass(prtl) ) {
								s = Associates.splice(Associates.indexOf(i), 1);
								break;
							}
						}
						Associates.unshift(s);
					}
					X = 1; AutoNode = [];
					$(Associates).each(function(){
						// Creating an array consisting of multiple nodes (if there are any)
						if( this.length === 1 && Forward.obj.find(this.toString()).length > 1 ){
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
				$(FlyAssociates).each(function(){
					// Creating an array consisting of multiple nodes (if there are any)
					if( this.length === 1 && Parent.find(this.toString()).length > 1 ){
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
				Shrinker.set(Subject.find(".Shrinker"), {scale: 1, rotation: 0});
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
	if( Reverse.pedal === true ){
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
	const
		rvrs = $(".Reverse");
	rvrs.toggleClass("active");
	// Prohibit hover interference
	rvrs.removeClass("hover");
	if( rvrs.hasClass("active") ) {
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
	let A;
	Dimension = ActiveDivision.parent();
	ChildrenLen = Dimension.children("footer,header,article").length;
	StartFromZero = ActiveDivision.index() - (Dimension.children().length - ChildrenLen);
	Reverse.isAllowed(true);
	if (ChildrenLen > 1 &&
		StartFromZero - 1 >= 0) {
		Reverse.obj = Dimension.children().eq(ActiveDivision.index() - 1);
	} else if ( Active.Dimension !== "Trilogies" ) {
		if (Active.Dimension === Dimension.attr("id")) {
			Reverse.obj = $("#Trilogies > #Temporary");
		} else {
			Reverse.obj = $("#" + Active.Dimension).children("footer,header,article").last();
		}
        $("#Ditch").data({GandalfOpt: 0});
		Reverse.obj.parent().css({visibility: "", opacity: ""});
	}else{
		A = true;
	}
	if( !Reverse.obj.length || A ){
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
		DeckCloudFly.invalidate().restart().resume();
		ShuffleFireFly.restart().resume();
		TweenMax.set("#DeckCloud .GravityForce, #DeckCloud .GravityForceX", {
			autoAlpha: 0
		});
		Gravity.restart().resume();
	}
	if( Order.Definitive === true ){
		Order.Definitive = false;
        DivisionExpress.set.Beam(false);
        // Reset coordinates of the DivisionExpress' content
        DivisionExpress.set.Position();
        TweenMax.to(".DivisionExpress", .2, {
            y: "0%",
            autoAlpha: 1
        });
	}
}

// Kill functions
function KillActiveFly(){
	Forward.isAllowed(Forward.memory);
	if( Reverse.obj !== false ){Reverse.obj.css({zIndex: -1});}
	ActiveDivision.css({zIndex: 1});
    // Store all available Fly associates
    ResetVars = ActiveFly.getChildren();
    if( ReverseFly ){ ResetVars = ResetVars.concat(ReverseFly.getChildren()) ;}
    $(ResetVars).each(function(){
        // Reset all changes affected by Fly
        TweenMax.set(this.target, {y: 0, x: 0, scale: 1, rotation: 0});
    });
	// Disabling some animations
	if( ActivePortal[0] !== false && DirectRotten[0] !== false ){
		DirectRotten[0].reversed( !DirectRotten[0].reversed() ).resume();
	}

	if( !ActiveFly.isActive() ){
		ActiveFly.kill();
		delete ActiveFly;
	}
	if( ReverseFly && !ReverseFly.isActive() ){
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
    // Store all available Fly associates
    ResetVars = ActiveFly.getChildren();
    if( ReverseFly ){ ResetVars = ResetVars.concat(ReverseFly.getChildren()) ;}
    $(ResetVars).each(function(){
        // Reset all changes affected by Fly
        TweenMax.set(this.target, {y: 0, x: 0, scale: 1, rotation: 0});
    });
	if( !ActiveFly.isActive() ){
		ActiveFly.kill();
		delete ActiveFly;
	}
	if( !ReverseFly.isActive() ){
		ReverseFly.kill();
		delete ReverseFly;
	}
	if( Order.ID === 1 ){ Order.ID = 0;
		TweenMax.to($(".DevAura, .DevAuraZ,.ArtAura, .ArtAuraZ"), .2, {autoAlpha: 1});
	}
	// Resetting Gandalf on launch cancellation
    Glitch.on("#Gandalf", null);
    // By order of the fookin DivisionSequence
	DiviOrders();
}
// Adds fly animations
AddFly = {
	Switch : function(r){
		let s = Asc.attr("class") === Subject.attr("class") && Asc.parent().attr("id") === Subject.parent().attr("id"),
			rx = r === "ffs",
			n = r === "next",
			ya = (r === true) ? ((Reverse.obj.height()/2-hmst.ot)-hmst.h/2) : 0,
			xa = (r === true) ? ((Reverse.obj.width()/2-hmst.ol)-hmst.w/2) : 0,
			sa = (s && r === true) ? Scale : ( n ) ? 0 : (r === true) ? Scale/(1+((X+1)*.5)) : 1,
			ra = (r === true || n) ? Rotation : 0,
			yb = (r === true || rx || n) ? 0 : ((Parent.height()/2-hmst.ot)-hmst.h/2),
			xb = (r === true || rx || n) ? 0 : ((Parent.width()/2-hmst.ol)-hmst.w/2),
			sb = (s && r !== true) ? Scale : (r === true || n) ? 1 : (rx) ? 0 : Scale/(1+((X+1)*.5)),
			rb = (r === true || n) ? 0 : Rotation,
			o = (rx) ? ((RevHoldMyState.ol+RevHoldMyState.w/2)-Asc.offset().left)+"px " : ((hmst.ol+hmst.w/2)-Asc.offset().left)+"px ";
			o += (rx) ? ((RevHoldMyState.ot+RevHoldMyState.h/2)-Asc.offset().top)+"px" : ((hmst.ot+hmst.h/2)-Asc.offset().top)+"px";
		let e = (r === true || rx || n ) ?
			CustomEase.create("custom", "M0,0 C0,0 0.194,0.907 0.514,0.942 0.642,0.972 1,1 1,1") :
			CustomEase.create("custom", "M0,0 C0.003,0 0.369,0.028 0.49,0.046 0.806,0.091 0.948,0.246 0.999,0.999 0.999,0.999 1,1 1,1"),
			TF = (rx) ? ReverseFly : ActiveFly,
			TheDURATION = ( n && !$(AutoNode.toString()).length ) ?
			AnimDur / (1+((Associates.length+$(AutoNode.toString()).length)-X+1)*.5) :
			( n && $(AutoNode.toString()).length) ?
			AnimDur / (1+((Associates.length+$(AutoNode.toString()).length)-X+1)*.1): AnimDur ;

		TF.add(
			TweenMax.fromTo(Asc, TheDURATION, {
				y: ya,
				x: xa,
				scale: sa,
				rotation: ra,
                transformOrigin: o,
                ease: e
			}, {
				y: yb,
				x: xb,
				scale: sb,
				rotation: rb,
                transformOrigin: o,
                ease: e
			}), ( ( n ) ? AnimDur - 3 : 0 )
		);
		// When the target division is Analyzer add an exclusive animation
		if(
			ActiveDivision.attr("id") === "Analyzer" ||
			( Reverse.pedal === true && Reverse.obj.attr("id") === "Analyzer" )
		){
			let r = {
				a: ( Reverse.pedal === true ) ? 760 : 0,
				b: ( Reverse.pedal === true ) ? 0 : 760
			};
			TF.fromTo("#Analyzer .Analyzer .Glitch", TheDURATION, {
				rotation: r.a,
				ease: e
			}, {
				rotation: r.b,
				ease: e
			}, 0);
		}
	},
	Spin : function(r){
		let rx = r === "ffs",
			ra = (r === true) ? -180 : (r === false) ? -180 : 0,
			rb = (r === true) ? 0 : (r === false) ? 0 : 180,
			sa = (r === true) ? 1 : 1,
			sb = (r === true) ? 1 : 1,
			o = ((hmst.ol+hmst.w/2)-Asc.offset().left)+"px ";
			o +=  ((hmst.ot+hmst.h/2)-Asc.offset().top)+"px";
		let e = Back.easeInOut.config(2),
			TF = (rx || r === false) ? ReverseFly : ActiveFly,
			TheParent = (rx) ? ActiveDivision.find(Asc) : (r !== false) ? Parent.find(Asc) : Forward.obj.find(Asc);
		TF.add(
			TweenMax.fromTo(TheParent, AnimDur, {
				rotation: ra,
				scale: sa,
				transformOrigin: o,
				ease: e
			}, {
				rotation: rb,
				scale: sb,
				transformOrigin: o,
				ease: e
			},1), 0
		);
	},
	StormEntrance : function(type1,type2){
		let ya = 0, xa = 0, sa = 1, AB = 1,
			// Add exceptions for one section storms
			yb = ( type2 ) ? ((window.innerHeight-SC_HoldMyState.ot)-SC_HoldMyState.h/2) : ((window.innerHeight/2-SC_HoldMyState.ot)-SC_HoldMyState.h/2),
			xb = ( type2 ) ? ((window.innerWidth-SC_HoldMyState.ol)-SC_HoldMyState.w/2) : ((window.innerWidth/2-SC_HoldMyState.ol)-SC_HoldMyState.w/2),
			sb = SC_scale,
			Ato_autoAlpha = ( type1 ) ? .3 : 0,
			style, o;
		// Reverse to original state when type1 is requested
		if( type1 ){
            style = Asc.attr("style");
            Asc.attr("style", "");
        }
			o = ((SC_HoldMyState.ol+SC_HoldMyState.w/2)-Asc.offset().left)+"px ";
			o += ((SC_HoldMyState.ot+SC_HoldMyState.h/2)-Asc.offset().top)+"px";
		// Return the attributes that was cleared above
		if( type1 ){ Asc.attr("style", style) }
		let	e = Sine. easeOut,
			TF = EnterStorm;
		TF.add(
			TweenMax.fromTo(Asc, 1, {
				y: ya,
				x: xa,
				scale: sa,
				autoAlpha: AB,
				transformOrigin: o,
				ease: e
			}, {
				y: yb,
				x: xb,
				scale: sb,
				autoAlpha: Ato_autoAlpha,
				transformOrigin: o,
				ease: e
			}), 0
		);
		if( type1 ){
			TF.add(
				TweenMax.from(Asc, 1, {
					rotation: Asc[0]._gsTransform.rotation,
					ease: e
				}), 0
			);
		}
	},
	ParticleEntrance : function(type1,type2,type3){
		let e = Sine.easeOut,
			TF = EnterParticle,
			o;
		if( type2 ){
			TF = ParticleRotation;
			TF.add(
				TweenMax.to(Asc, 1, {
					rotation: 0,
					ease: e
				}), 0
			);
			return;
		}
		if( type3 ){
			TF = EnterParticle;
			o = ( ( AT_HoldMyState.ol + AT_HoldMyState.w / 2 ) - Asc.parent().offset().left ) + "px ";
			o += ( ( AT_HoldMyState.ot + AT_HoldMyState.h / 2 ) - Asc.parent().offset().top ) + "px";
			TF.add(
				TweenMax.to(Asc, 1, {
					y: 0,
					x: 0,
					scale: 1,
					autoAlpha: 1,
					transformOrigin: o,
					ease: e
				}), 0
			);
			return;
		}

		let ya = 0,
			xa = 0,
			sa = 1,
			AB = 1,
			yb = (
				(
        	        $("#AntiToxins .SingleParticle")[0].offsetTop
					+ 25
					+ (( (AT_HoldMyState.h * DefaultScale(AT_HoldMyState.w)) - AT_HoldMyState.h ) / 2)
				) - AT_HoldMyState.ot ),
			xb = ( ( ActiveDivision.width()/2 - AT_HoldMyState.ol ) - AT_HoldMyState.w / 2 ),
			sb = ( type1 ) ? DefaultScale(AT_HoldMyState.w) : AT_scale,
			Ato_autoAlpha = ( type1 ) ? 1 : .2;
			o = ( ( AT_HoldMyState.ol + AT_HoldMyState.w / 2 ) - Asc.offset().left ) + "px ";
			o += ( ( AT_HoldMyState.ot + AT_HoldMyState.h / 2 ) - Asc.offset().top ) + "px";
		TF.add(
			TweenMax.fromTo(Asc, 1, {
				y: ya,
				x: xa,
				scale: sa,
				autoAlpha: AB,
				transformOrigin: o,
				ease: e
			}, {
				y: yb,
				x: xb,
				scale: sb,
				autoAlpha: Ato_autoAlpha,
				transformOrigin: o,
				ease: e
			}), 0
		);
		if( type1 ){
			TF.add(
				TweenMax.to(Asc, 1, {
					rotation: 0,
					ease: e
				}), 0
			);
		}
	},
	ParticleNavigate : function(type1, type2){
		let AnimDur = .75,
        	yb = (
            (
                $("#AntiToxins .SingleParticle")[0].offsetTop
                + 25
                + (( (NAV_HoldMyState.h * DefaultScale(NAV_HoldMyState.w)) - NAV_HoldMyState.h ) / 2)
            ) - NAV_HoldMyState.ot ),
			xb = (( ActiveDivision.width() / 2 - NAV_HoldMyState.ol ) - NAV_HoldMyState.w / 2 ),
			Ato_autoAlpha = ( type1 ) ? 1 : .2,
			o = ( ( NAV_HoldMyState.ol + NAV_HoldMyState.w / 2 ) - Asc.parent().offset().left ) + "px ";
			o += ( ( NAV_HoldMyState.ot + NAV_HoldMyState.h / 2 ) - Asc.parent().offset().top ) + "px";
		let e = Sine.easeOut,
			TF = ParticleNavigation;
		TF.add(
			TweenMax.to(Asc, AnimDur, {
				y: yb,
				x: xb,
				autoAlpha: Ato_autoAlpha,
				transformOrigin: o,
				ease: e
			}), 0
		);
		if( type1 ){
			TF.add(
				TweenMax.to(Asc, AnimDur, {
					scale: DefaultScale(Asc.parent()),
					ease: e
				}), 0
			);
			TF = NavRotation;
			TF.add(
				TweenMax.to(Asc.children(), AnimDur, {
					rotation: 0,
					ease: e
				}), 0
			);
		}
		if( type2 ){
			TF.add(
				TweenMax.to(Asc, AnimDur, {
					scale: AT_scale,
					ease: e
				}), 0
			);
		}
	}

};
// Plans SpaceCyclone's post storm entrance sequences
StormRitual = {
	Ritual : function(){
		// Container animation
		e = Sine. easeOut;
		TF = Ritual;
		Origin = "";
		TF.add(
			TweenMax.to(Asc, 1, {
				y: yb+"%",
				x: xb+"%",
				ease: e
			}), 0
		);
		// Containing asset animation
		if( Asc.hasClass("CV") ){
			Origin = "80% 0%";
		}
		TF.add(
			TweenMax.to(Asc.find(".Asset"), 1, {
				y: AssetY,
				x: AssetX,
				scale: 1,
				autoAlpha: 1,
				rotation: AssetRotation,
				rotationY: -360,
				transformOrigin: Origin,
				ease: e
			}), 0
		);
	},
	Definer : function(){
        // Add exceptions for one section storm
        let nthofpagew = .5,
            nthofpageh = .2,
            qa = 0;
        if( Is.ThisSize(null, 600) && !Is.ThisSize(850) ){
            nthofpagew = .1666666666666667;
            nthofpageh = .5;
            qa = $(".QuickAccess").innerHeight()/2;
        }
        if( Is.ThisSize(600) ){
            nthofpagew = .5;
            nthofpageh = .1;
            qa = 0;
        }
        yb =
            (
                (
                    ( ActiveDivision.height() * nthofpageh - qa ) -
                    ( Asc.offset().top + Asc.innerHeight()/2 ) +
                    Math.abs(Asc.find(".Sub").position().top)
                ) * 100
            ) / Asc.innerHeight();
        xb =
            (
                (
                    ( ActiveDivision.width() * nthofpagew ) -
                    ( Asc.offset().left + Asc.innerWidth()/2 )
                ) * 100
            ) / Asc.innerWidth();
		AssetRotation = 0;
		AssetX = "0%";
		AssetY = "0%";
		this.Ritual();
		// Call divider for Storms other than Download Storm for higher than 600px width screens
		if( !Storm.hasClass("Download") && !Is.ThisSize(600) ){
            this.Divider();
        }
		// Reset Divider's height in case entering 600px screen from a higher screen size
		else{
            TweenMax.set(Asc.find(".Divider"), {
                height: 0
            });
        }
	},
	Divider : function(){
		const
			quac = $(".QuickAccess");
        // Add exceptions for one section storm
        let nthofpagew = .3333333333,
            nthofpageh = .2,
            qa = 0;
        if( Is.ThisSize(null, 600) && !Is.ThisSize(850) ){
            nthofpageh = 1.2;
                TweenMax.set(Asc.find(".Divider"), {
                    height: quac.offset().top * nthofpageh,
                    y: (
                        ( quac.offset().top * (1-nthofpageh) ) -
                        ( Asc.offset().top + Asc.innerHeight() )  -
                        (
                            (yb * Asc.innerHeight()) / 100
                        ) -
                        ( quac.offset().top * (1-nthofpageh) ) / 2
                    ),
                    x: (
                        ( window.innerWidth * nthofpagew ) -
                        ( Asc.offset().left + Asc.innerWidth() / 2 )  -
                        (
                            (xb * Asc.innerWidth()) / 100
                        )
                    ),
                    ease: e
                });
        }else {
                TweenMax.set(Asc.find(".Divider"), {
                    y: "",
                    x: "",
                    height: $(".QuickAccess").offset().top -
                        ((ActiveDivision.height() * nthofpageh - qa) + Asc.innerHeight()) +
                        Math.abs(Asc.find(".Sub").position().top),
                    ease: e
                });
        }
	},
	AlphaAsset : function(){
	    // Add exceptions for one section storm
	    let nthofpagew = ( Asc.hasClass("Resume") ) ? .5 : .75,
            nthofpageh = ( Asc.hasClass("Resume") ) ? 1.85 : 2,
            qa = 0;
        if( Is.ThisSize(null, 600) && !Is.ThisSize(850) ) {
            if( !Asc.hasClass("Resume") ){ nthofpagew = .8333333333333335 }
            nthofpageh = 2;
            qa = $(".QuickAccess").innerHeight()/2;
        }
        if( Is.ThisSize(600) ){
            nthofpagew = .5;
            if( !Asc.hasClass("Resume") ){ nthofpageh = 3 }
        }
        yb = (
            (
                (
                    (window.innerHeight / nthofpageh - qa ) -
                    ((Math.abs(Storm.find(".AlphaAsset.clone").position().top) * (window.innerHeight / Storm.innerHeight())) + Storm.find(".AlphaAsset.clone").innerHeight() / 2) -
                    Math.abs(Asc.find(".Sub").position().top-Asc.innerHeight())
                ) * 100
            ) / Storm.find(".AlphaAsset.clone").innerHeight()
        );
        xb = (
            (
                (
                    ( window.innerWidth * nthofpagew ) -
                    (
                        (Math.abs(Storm.find(".AlphaAsset.clone").position().left + Storm.find(".AlphaAsset.clone").innerWidth()) * (window.innerWidth / Storm.innerWidth())) - Storm.find(".AlphaAsset.clone").innerWidth() / 2
                    )
                ) * 100
            ) / Storm.find(".AlphaAsset.clone").innerWidth()
        );
		AssetRotation = ( Asc.hasClass("Resume") ) ? 0 : ( Asc.hasClass("CodeProject") ) ? 9 : ( Asc.hasClass("Envelope") ) ? 12 : 0;
		AssetX = ( Asc.hasClass("Resume") ) ? "5%" : ( Asc.hasClass("Envelope") ) ? "-3%" : "0%";
		AssetY = ( Asc.hasClass("Resume") ) ? "-8%" : ( Asc.hasClass("Envelope") ) ? "25%" : "0%";
		this.Ritual();
	},
	BetaAsset : function(){
        // Add exceptions for one section storm
        let nthofpagew = ( Asc.hasClass("CV") ) ? .5 : .25,
            nthofpageh = ( Asc.hasClass("CV") ) ? 1.85 : 2,
            qa = 0;
        if( Is.ThisSize(null, 600) && !Is.ThisSize(850) ) {
            nthofpagew = .5;
            nthofpageh = 2;
            qa = $(".QuickAccess").innerHeight()/2;
        }
        if( Is.ThisSize(600) ){
            nthofpagew = .5;
            if( !Asc.hasClass("CV") ){ nthofpageh = 1.5 }
        }
        yb = (
            (
                (
                    (window.innerHeight / nthofpageh - qa) -
                    ((Math.abs(Storm.find(".BetaAsset.clone").position().top) * (window.innerHeight / Storm.innerHeight())) + Storm.find(".BetaAsset.clone").innerHeight() / 2) -
                    Math.abs(Asc.find(".Sub").position().top-Asc.innerHeight())
                ) * 100
            ) / Storm.find(".BetaAsset.clone").innerHeight()
        );
        xb = (
            (
                (
                    (window.innerWidth * nthofpagew) +
                    (
                        (Math.abs(Storm.find(".BetaAsset.clone").position().left) * (window.innerWidth / Storm.innerWidth())) - Storm.find(".BetaAsset.clone").innerWidth() / 2
                    )
                ) * 100
            ) / Storm.find(".BetaAsset.clone").innerWidth()
        );
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
	if( Rev === true ){
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
	if( Rev === false ){
		SC_DL_Stars.pause();
		SC_DL_Flow.pause();
		SC_DL_Download.pause();
		SC_DL_Resume.pause();
		SC_DL_CV.pause();
		return;
	}
	if( Rev === "reset" ){
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
	if( Rev === true ){
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
	if( Rev === false ){
		SC_RQ_Stars.pause();
		SC_RQ_Flow.pause();
		SC_RQ_Plus.pause();
		SC_RQ_CodeProject.pause();
		SC_RQ_DesignProject.pause();
		return;
	}
	if( Rev === "reset" ){
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
	if( Rev === true ){
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
	if( Rev === false ){
		SC_CN_Stars.pause();
		SC_CN_Flow.pause();
		SC_CN_Wifi.pause();
		SC_CN_Phone.pause();
		SC_CN_Envelope.pause();
		return;
	}
	if( Rev === "reset" ){
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
DivisionExpress = {
    active: false,
    // Check or Set the target expand state
    isExpanded: function(state){
        if( typeof(state) === "boolean" ){
            this.active = state;
            return state;
        }
        return this.active;
    },
    set: {
        // Set the Beam effect for .Trigger
        Beam: function (pause) {
            // Abort if current division doesn't have a DivisionExpress
            if( !DivisionExpress.CHECK() ){ return this; }
            // Check if pause is requested
            if( typeof(pause) === "boolean" && UpperBeam ){
                if( pause ){
                    UpperBeam.invalidate().pause();
                    return this;
                }else if( pause === false ){
                    UpperBeam.resume();
                    return this;
                }
            }
            // Set the beam
            let b = ActiveDivision.find(".DivisionExpress .Trigger");
            TweenMax.set(b, {autoAlpha: 0});
            UpperBeam = new TimelineMax({paused: false, repeat: -1, repeatDelay: 1});
            UpperBeam.fromTo(b, .25, {
                autoAlpha: .6,
                transformOrigin: "50% 0%"
            }, {
                autoAlpha: 1,
                transformOrigin: "50% 0%"
            }).to(b, .25, {
                autoAlpha: .6,
                transformOrigin: "50% 0%"
            }).to(b, .25, {
                autoAlpha: 1,
                transformOrigin: "50% 0%"
            }).to(b, .25, {
                autoAlpha: .6,
                transformOrigin: "50% 0%"
            });
            return this;
        },
        // Set target position
        Position: function(target){
            function SetTween(This){
                // Reset any possible height changes
                This.find(".Content h2").height("");
                // Get the difference between the space above QuickAccess and the DivisionExpress
                let n = $(".QuickAccess").offset().top -
                    (
                        This.find(".Content").innerHeight() +
                        This.find(".Trigger").innerHeight() +
                        This.find(".Hint").innerHeight()
                    );
                // Apply scroll when the difference is affecting the content's appearance
                if( n < -10 && !Is.ThisSize(null, 350) ){
					This.find(".Content h2").height(This.find(".Content h2").height() - Math.abs(n));
                }
                // Hide this asset with it's content's height
                TweenMax.set([This.find(".Trigger"), This.find(".Content").children()], {
                    y: function(){ return -This.find(".Content").outerHeight(true); }
                });
                TweenMax.set(This.find(".Content"), {visibility: "hidden"});
            }
            // When only one target is requested:
            if( target ){
                SetTween(target);
            }
            // When not:
            else{
                // Get all targets and
                $(".DivisionExpress").each(function(){
                    // Reposition this asset when
                    if (
                        // Page is loaded
						!ExpressSequence ||
                        // Or when an asset is expanded but not this one (exclude the expanded asset)
                        (DivisionExpress.isExpanded() &&
                        ActiveDivision.attr("id") !== $(this).parent().attr("id")) ||
                        // Or when no asset is expanded (so all are included)
                        (!DivisionExpress.isExpanded())
                    ) {
                       SetTween($(this));
                    }
                });
            }
            return this;
        }
    },
    CHECK: function(){
        // Checks the current active division for DivisionExpress element
        if( ActiveDivision.find(".DivisionExpress").length ){
            // Retruns true when the division has DivisionExpress
            return true;
        }
        // And false when it doesn't
        return false;
    }
};
function ExpressTheDivision(This){
    // Create new animations when
	if(
	    // Page is loaded
		!ExpressSequence ||
        // Previous animation is static and is at it's start point
		(!ExpressSequence.isActive() && ExpressSequence.progress() !== 1)
	){
	    // Set .Hint element's wiggle effect
		HintWiggle = new TimelineMax({paused: true});
		HintWiggle
			.to(This.find(".Hint"), .05, {
				x: 10
			}).to(This.find(".Hint"), .05, {
				x: -10
			}).to(This.find(".Hint"), .05, {
				x: 0
			});
		// Set content opening effect
		ExpressSequence = new TimelineMax({paused: true});
		ExpressSequence.add(
			TweenMax.fromTo([This.find(".Trigger"),This.find(".Content").children()], .35, {
				autoAlpha: 1,
                // Set responsive value to be able to reverse back to the correct position after page is resized
				y: function(){ return -This.find(".Content").outerHeight(true); }
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Sine.easeOut
			}), 0
		);
	}
    // Run when DivisionExpress is collapsed or collapsing
	if( !DivisionExpress.isExpanded() ){
		TweenMax.set(This, {autoAlpha: 1});
		UpperBeam.progress(.2).pause();
		// Reset the recorded valuse when static
		if( !ExpressSequence.isActive() ){
		    ExpressSequence.invalidate();
        }
		// Set current state
		DivisionExpress.isExpanded(true);
        TweenMax.set(This.find(".Content"), {visibility: "visible"});
		ExpressSequence.play().eventCallback("onComplete",function(){
            HintWiggle.play();
            This.find(".Hint").html("CLOSE");
        });
	}
    // Run when DivisionExpress is expanded or expanding
	else{
		This.find(".Hint").html("READ!");
		This.attr("style","");
        UpperBeam.play();
        // Reset the recorded valuse when static
        if( !ExpressSequence.isActive() ){
            ExpressSequence.invalidate().progress(1);
        }
        // Set current state
        DivisionExpress.isExpanded(false);
		ExpressSequence.reverse().eventCallback("onReverseComplete",function(){
		    TweenMax.set(This.find(".Content"), {visibility: "hidden"});
            HintWiggle.reverse();
            This.find(".Hint").html("READ!");
        });
	}
}
// Pathfinder
function Pathfinder(){
	Last_tprint = ( tprint ) ? tprint : false;
	Path = "#Path"; Busted = false;
	ctt = false;
	// Preventing pathfinder to rewrite similar paths
	if( tpath &&
		( tpath.parent.attr("id") === ActiveDivision.parent().attr("id") &&
		( tpath.parent.attr("id") !== "Trilogies" ) || tprint.parent === null )
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
		$("#Trilogies").children("footer,header,article").each(function(){
			id = $(this).attr("id");
			if( tpath.self.attr("id") === id ){
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
		tpath.parent.children("footer,header,article").each(function(i){
			DimensionDOMS = $(this).parent().children("footer,header,article");
			// Making sure trpint.self is only getting the siblings that are behind the current division
			if( DimensionDOMS.index(this) <= DimensionDOMS.index(tpath.self) ){
				tprint.self[i] = $(this).attr("id");
			}
		});
	}

	// Checking and preventing pathfinder to reset
	if( Last_tprint ){
		let i = 0,
			add = [],
			rem = [],
			r = Object.keys(tprint).map(function(key) {
				return [tprint[key]];
			});
		// Setting removabale and additional variables
		$.each(Last_tprint, function(key, val){
			// If last print value and current value don't match, We either need to add or remove something
			if ( key !== "final" && val !== r[i][0] ) {
				let n = 1;
				// Collecting values in individual arrays only when value is nested
				if( r[i][0] instanceof Object && r[i][0].length > 1 ){
					$(r[i][0]).each(function () {
						CurrentSelf = this.toString();
						// When last self is an array, we need to check the current self to each of it's arrays
						if( val instanceof Object ) {
							$(val).each(function () {
								// Add a variable only if the current wasn't already added
								if (CurrentSelf !== this.toString()) {
									add.push([key, CurrentSelf]);
								}
							});
						}
						// When it's not, we just simply compare it to the current self
						else{
							// Comparing all current variable to one of the last variables
							if (CurrentSelf !== val.toString()) {
								// If it's a match we add the current variable
								add.push([key, CurrentSelf]);
								n++; // This indicates that this value wasn't the same as the current
							}
							// And if the value isn't the doesn't exist in any of the current values, It must GO.
							if( n === r[i][0].length ){
								rem.push([key, val]);
							}
						}
					});
				}
				else {
					if( r[i][0] !== null  ) {
						// When the current value isn't empty, It was already added so the excess values will be removed
						$(val).each(function () {
							LastSelf = this.toString();
							// Remove a variable only if the current isn't active
							if (LastSelf !== r[i][0][0]) {
								rem.push([key, LastSelf]);
							}
						});
						// Adding new variables
						if ( val === null ) {
							add.push([key, r[i][0]]);
						}
					}
					else{
						// When value is nested we collect them in individual arrays
						if( val instanceof Object && val.length > 1 ){
							$(val).each(function(){
								rem.push([key, this]);
							});
						}
						// When not, we simply put it in an array
						else{
							rem.push([key, val]);
						}
					}
				}
				}
			i++;
		});
		// Beginning removing process
		if( rem.length > 0 ){
			let i = 1;
			// Removing without adding
			if( add.length === 0 ){
				let cntnt = [],divider = [];
				$(rem).each(function(n){
					// Locating added elements by reversing add algorithms
					cntnt.push($(Path).children("a").eq($(Path).children("a").length-i));
					let x = $(Path).children("span").eq($(Path).children("span").length-i);
					// Fading the dividers
					divider.push(function(){
						return TweenMax.to(x , 0.2,{
							margin: "0 0 0 -.6em",
							autoAlpha: 0,
							ease:  Back. easeInOut,
							onComplete: function(){
								// Removing the divider span after the animation
								$(this.target[0]).remove();
								if( n+1 === rem.length ){
									// Exclusive
									PathCallTo();
								}
							},
							onCompleteParams: ["{self}"]
						}, .1);
					});
					i++;
				});
				if( cntnt.length === 1 ){ cntnt = cntnt[0]; divider = divider[0]; }
				Glitch.durtest(5);
				// Calling Glitch to remove the elements
				// cntnt and divider variables are both arrays containing related path and it's divider in similar orders
				Glitch.on(cntnt, null, divider, true);
				return;
			}
			// Removing by overwrite
			else{
				// Gathering the final print using add variables
				$(add).each(function () {
					// Checking for arrays
					if( typeof(this[1]) !== "object" ){
						// Normal procedure
						tprint.final += ( this[0] === "parent" ) ? "<span>-></span>" : "<span>></span>";
						tprint.final += "<a>" + this[1] + "</a>";
					}else{
						// Repeating the procedure for each of the arrays
						$(this[1]).each(function () {
							tprint.final += ( this[0] === "parent" ) ? "<span>-></span>" : "<span>></span>";
							tprint.final += "<a>" + this + "</a>";
						});
					}
				});
				// Starting search in the previous print to find a match in removable variables
				var cntnt = [],divider = [];
				$(rem).each(function(){
					// Locating added elements by reversing add algorithms
					cntnt.push($(Path).children("a").eq($(Path).children("a").length-i));
					// Fading the dividers
					divider.push(function(N){
						TweenMax.to($(Path).children("span").eq($(Path).children("span").length-i), 0.02,{
							margin: "0 0 0 -.6em",
							autoAlpha: 0,
							ease:  Back. easeInOut,
							onComplete: function(){
								// Removing the divider span after the animation
								$(this.target[0]).remove();
								if( N+1 === rem.length ){
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
					i++;
				});
				if( cntnt.length === 1 ){ cntnt = cntnt[0]; divider = divider[0]; }
				Glitch.durtest(5);
				// Calling Glitch to remove the elements
				Glitch.on(cntnt, null, divider, true);
				return;
			}
		}
		if( add.length > 0 ){
			$(add).each(function () {
				tprint.final += ( this[0] === "parent" ) ? "<span>-></span>" : "<span>></span>";
				tprint.final += "<a>" + this[1] + "</a>";
			});
		}
		Glitch.durtest(5);
		Glitch.on(Path,tprint.final,true,false);
		return;
	}else{
		$.each(tprint, function (key, value) {
			if ( (value !== null && key !== "final") ) {
					if( typeof(value) === "object" ){
						$(tprint.self).each(function(i){
							tprint.final += "<a>" + this + "</a>";
							if( i+1 < tprint.self.length ){
								tprint.final += "<span>></span>";
							}
						});
					}else{
						// If pre value is true, we're in Temporary division
						if (key === "pre" && ( tpath.self.attr("id") === "Temporary" || value === true )){
							tprint.final += "<a>Trilogy</a>";
						}else{
							tprint.final += "<a>" + value + "</a>";
						}
						if (key !== "self" && key !== "pre") {
							tprint.final += "<span>></span>";
						}
					}
				if (key === "pre" && tpath.self.attr("id") !== "Temporary") {tprint.final += "<span>-></span>"; }
			}
		});
	}

	Glitch.durtest(5);
	// Adding the call function
	Glitch.on(Path,tprint.final,false);
}
function PathCallTo(){
	let a = $("#Path>a").last(),
		sibl = $(a).siblings("a"),
		c = Active.Color;
	// Coloring current value
	TweenMax.to(a, .01, {color: c, onComplete: function(){
			// Checking to remove inline styles if it's the default color
			if( c === PortalColor[PortalColor.length-1] ){
				TweenMax.set(a, {clearProps: "all"})
			}
		}});
	// Returning other values (if there are any) to the default color
	if( sibl.length > 0 ){
		if( Active.Dimension === "Trilogies" ){
			// Fading other siblings in "Trilogies" dimension to make current value bolder (cause this dimension has a neutral color)
			TweenMax.to(sibl, .2, {color: "#fff", opacity: .6});
		}else{
			// Or just reset their colors in other dimensions
			TweenMax.to(sibl, .2, {color: "#fff", onComplete: function(){
					TweenMax.set(sibl, {clearProps: "all"})
			}});
		}
	}
	// Animating some space between paths and dividers
	TweenMax.staggerTo($("#Path>span") , .2,{margin: "0 .6em",ease:  Back. easeInOut},.1, function(){
		// Running PocketPath() to fix the pathfinder on the newest values
		PocketPath();
	});
}
// Path slide sequence
function PocketPath(reset){
	let pf = $(".PathFinder"),
		p = pf.find("#Path"),
		f = p.innerWidth() - pf.innerWidth();
	// Checking if the path overflows it's container
	if( f > 0 && !reset ){
		// Moving the path to make the newest values visible
		TweenMax.to(p, .5, {
			x: -f,
			ease: Back. easeInOut
		});
		// Enabling dragging feature
		Draggable.create(p, {
			type: "x",
			dragClickables: true,
			dragResistance: .5,
			bounds: {maxX: pf.innerWidth()*.1, minX: -f-pf.innerWidth()*.1},
			onDragEndScope: this.target,
			onDragScope: this.target,
			onDragEnd: function(){
				let x = null;
				// Reversing the path to the left side if user is far left
				if( this.x < -f ){
					x = -f;
				}
				// Doing the same above to the right side
				if( this.x > 0 ){
					x = 0;
				}
				TweenMax.to(p, .5,
					{
						x: x
					});
			},
            zIndexBoost: false
		});
	}else{
		if( Draggable.get(p) ){
			// Removing drag feature when path doesn't overflow it's container
			Draggable.get(p).kill();
		}else{
			// If the path wasn't altered, we do nothing
			return;
		}
		// Moving the path back to it's original position if it was altered
		TweenMax.to(p, .5, {
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
function ReverseCore(All){
	if( !Flicker ){
		if( !CoreMove ){
			return;
		}
	}else {
		Flicker.kill(); Brrr.kill();
	}
	ReverseDur = 1;
	TweenMax.to(Core.children(), ReverseDur, {autoAlpha: 1,x: 0});
	if( CoreMove && All ){
		CoreGlow.kill();
		CoreMove.reverse();
		AffectedCores = {Core: [], Waya: []};
		$("#Skillometer .Cores .Core.active").removeClass("active");
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
	Emginashun.delay(0).reverse().eventCallback("onReverseComplete", function(){
			Emginashun.delay(0).reverse().eventCallback("onReverseComplete",DelCore,[Emginashun._first.target[0]]);
			TweenMax.set(CoreKeepa, {zIndex: 0,autoAlpha: 1});
			CoreMove.reverse();
			// Reactivating Gandalf after the Core is removed
			$("#Skillometer .Glued").data({GandalfActive: true});
			// Reset Gandalf's content
			Glitch.on("#Gandalf", null);
		});
	SkiloBrrr.pause();
	TweenMax.to(CoreSlider._first.target[0], CoreSliderDur/2, {x: "-50%", ease:  SlowMo.ease.config( 0.2, 0.2, false)});
	TweenMax.to(SkiloBrrr._first.target[0], .2, {x: 0});
	$("#Skillometer .Cores .Core.active").removeClass("active");
}
CoreTitleSlider = {
	play: function(){
		$("#Skillometer .Cores .Core .Title").each(function(){
			let span = $(this).find("span"),
				// Set Slider motion duration relative to each slider's width
				dur = ((span.width()*100)/$(this).innerWidth())/150;
			// Animate the Title to starting position
			TweenMax.to(span, dur/2, {x: "0%", ease:  SlowMo.ease.config( 0.2, 0.2, false), onComplete: function(){
				// Then start the slider
				TweenMax.to(span, dur, {x: "-100%", ease:  SlowMo.ease.config( 0.2, 0.2, false), repeat: -1, yoyo:true});
			}});
		});
	},
	pause: function(t){
		let ko = (t) ?
			// If requested, exclude the recieved target
			$("#Skillometer .Cores .Core .Title span").not(t) :
			// If not, get the targets which animations will be stopped
			"#Skillometer .Cores .Core .Title span" ;
		// Stop the animations
		TweenMax.killTweensOf(ko);
		// Revert to original position
		TweenMax.to(ko, .1, {x: "-50%", ease:  SlowMo.ease.config( 0.2, 0.2, false)});
	}
};

// SpaceCyclone
FormEffects = {
	fadeout : function(t){
		// defining the label
		label = t.siblings("label");
		// animating the label
		TweenMax.to(label, .2, {autoAlpha: 0});
	},
	reverse : function(t){
		if( t.val() === null || t.val() === "" ){
			// defining the label
			label = t.siblings("label");
			TweenMax.to(label, .2, {autoAlpha: 1, scale: 1, y: "0%"});
		}
	}
};
function AssetHover(t,reverse){
	if( Cyclone.isActive === false || EnterStorm.isActive() || ( t.children(".Title").hasClass("active") && !reverse ) ){ return; }
	AssetAlpha = (!reverse) ? .3 : 0;
        if( t.parent().parent().parent().hasClass("Download") ){
		TweenMax.to($(".Curtain > .Alpha"), .2, {autoAlpha: AssetAlpha});
		return;
	}
	if( t.hasClass("AlphaAsset") ){
		TweenMax.to($(".Curtain > .Alpha"), .2, {autoAlpha: AssetAlpha});
	}
	if( t.hasClass("BetaAsset") ){
		TweenMax.to($(".Curtain > .Beta"), .2, {autoAlpha: AssetAlpha});
	}
}
Area69 = {
	enable: null,
	enabled: function(t){
		// Save enable/disable requests
		this.enable = t !== false;
	},
	varset: function(t,r){
		// Deny request when disabled
		if( !this.enable ){
			return;
		}
		let	R = ( r ) ? 0 : 180;
		TweenMax.to( t.siblings().filter(".Indicator"), .15, {
			rotation: R,
			autoAlpha: ( r ) ? 1 : 0
		} );
		TweenMax.to( t.siblings().filter(".Close"), .15, {
			y: "-50%",
			rotation: R,
			autoAlpha: ( r ) ? 0 : 1
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
		c = t.parent().attr("class"),
		form = t.siblings("form");
	AssetHover(Asset,true);
	if( EnterStorm.isActive() ){ return; }
    // If available, run the second parameter after the animation is reversed (EXCLUSIVE FORM SEQUENCE)
    if( func ){
        Form.Arrange[c].eventCallback("onReverseComplete", function(){
            // Run the function
            func();
            // Reset call back on the animation
            Form.Arrange[c].eventCallback("onReverseComplete", null);
        });
    }

    // Disable scroll to prevent calculation errors
    Storm.find(".AssetContainer").css({overflowX: "hidden", overflowY: "hidden"});
    // Revert scroll position to zero
    TweenMax.to(Storm.find(".AssetContainer"), .3, {
        scrollTop: 0
    });
    // Set form's attributes
    TweenMax.set(form, {
        scaleY: 1,
        left: "50%",
        x: "-50%",
        paddingBottom: $(".QuickAccess").innerHeight()
    });
	// Toggle the active indicator
	t.toggleClass("active");
	Form.ActiveDom = t;
	// Get the current top offset of the transformed asset related to it's parent
    let truetop =
        (
            (
                Asset[0]._gsTransform.yPercent * Asset.innerHeight()
            ) / 100
        ) + Asset[0].offsetTop,
		e = Back.easeInOut.config( 1.7),
        // Calculate the placement in a way that it's placed in the middle of the page horizontally
		y = - truetop +
                (
                    window.innerHeight -
                    ( (Asset.innerHeight() * .6) + form.outerHeight() )
                ) / 2;
	// Check if the asset will overlap the page
	if( y > 0 || y < -truetop ){
	    // Set the highest point as the top of the page
        y = -truetop + ( 20 /* offset */ );
    }
    // Define animations
	Form.Arrange[c] = new TimelineMax();
	Form.Arrange[c]
		.fromTo(form, .6, {y: 0,ease: e}, {y: y,ease: e}, 0)
		.fromTo(t, .6, {y: 0, scale: 1, transformOrigin: "50% 0%",ease: e}, {y: y, scale: .6, transformOrigin: "50% 0%",ease: e}, 0)
		.staggerFromTo(form.children(":not(.Submit)"), .6, {autoAlpha: 0, y: 10,ease: e}, {autoAlpha: 1, y: 0,ease: e}, .05 , 0)
		.fromTo(form.find(".Submit"), .6, {autoAlpha: 0,ease: e}, {autoAlpha: 1,ease: e}, "-=.6");
	if( Is.ThisSize(600) ){
        TweenMax.to( [ Asset.siblings(), Storm.find(".Definer") ], .4, {
            autoAlpha: 0
        }, 0);
    }else{
        TweenMax.to( [ Storm.find(".AssetContainer").find(".AlphaAsset, .BetaAsset"), Storm.find(".Definer") ], .4, {
            autoAlpha: 1
        }, 0);
    }
    Form.Arrange[c].eventCallback("onReverseComplete", function(){
        // Disappear the form after collapsing
        TweenMax.set(form, {
            scaleY: 0
        });
        TweenMax.to( [ Storm.find(".AssetContainer").find(".AlphaAsset, .BetaAsset"), Storm.find(".Definer") ], .4, {
            autoAlpha: 1
        });
    });
    Form.Arrange[c].eventCallback("onComplete", function(){
        // Enable scroll for overlapping forms
        Storm.find(".AssetContainer").css({overflowX: "hidden", overflowY: "auto"});
    });
}
function Deformer(t, nonstop){
	let s = false,
        c = t.parent().attr("class");
	if (Form.Arrange[c].isActive()) {
		if (Form.Arrange[c].reversed()) {
			Form.Arrange[c].reversed(!Form.Arrange[c].reversed());
			s = "active";
		} else {
			Form.Arrange[c].duration(Form.Arrange[c].duration()/1.6).reverse();
			s = true;
		}
	} else {
		if (Form.Arrange[c].progress() !== 0 && Form.Arrange[c].progress() === Form.Arrange[c].totalProgress()) {
			// Reversing the active asset
			Form.Arrange[c].duration(Form.Arrange[c].duration()/1.6).reverse();
			s = true;
		}
	}
	$(Form.Arrange[c]._first.target[0]).find(".Title").toggleClass("active");
	if( !nonstop ){
			Form.ActiveDom = ( s === true ) ? null : t;
	}
	return s;

}
function ExitStorm(t){
	Storm = t;
	// Reset the forms
	if( Form.ActiveDom !== null ){
		Deformer(Form.ActiveDom);
		// Reset active form indicator variable
        Form.ActiveDom = null;
	}
	// Reset the animations played after ritual is completed
    if( !PostRitual.reversed() ){
        PostRitual.reverse( PostRitual.time() );
    }
    // Save the current Ritual animation
    let tmp = Ritual;
    // Reset the Ritual animation
    Ritual = new TimelineMax();
    // Fill the new Ritual animation with updated values
	$(tmp.getChildren()).each(function(){
	    // Set a variable to unify objects and other types of subjects passed to the Tween
	    let a = ( this.target[0] ) ? this.target : this.target[0],
            d = EnterStorm.duration();
		if( $(a).hasClass("Curtain") ){
            Ritual.to(a, d, {autoAlpha: 0,ease: Sine. easeOut});
		}else{
			if( $(a).parent().hasClass("Resume") ){
                Ritual.to(a, d, {rotation: 35,rotationY: 0, y: "-10%", x: "15%", transformOrigin: "15% 35%",ease: Sine. easeOut}, 0);
			}else if( $(a).parent().hasClass("CV") ){
                Ritual.to(a, d, {rotation: 0,rotationY: 0,y: "0%",x: "0%", transformOrigin: "80% 0%",ease: Sine. easeOut}, 0);
			}else{
                Ritual.to(a, d, {autoAlpha: 1,opacity: 1,scale: 1,scaleX: 1,x: "0%",y: "0%",rotationY: 0,rotation: 0,ease: Sine. easeOut}, 0);
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
		if( ( ActiveFly && ReverseFly ) && !ActiveFly.isActive() && !ReverseFly.isActive() ){
		    Glitch.on("#Gandalf", null);
        }
	});
	EnterStorm.reverse().eventCallback("onReverseComplete", function(){
        // Re-enable Definer hover/enter/close asset after exit
        TweenMax.set(".TriggerBox .Tripwire", {autoAlpha: 1}, 0);
        // Reactivate cyclone activation indicator
        Cyclone.isActive = false;
		// Prevent scrolling on SpaceCyclone
		TweenMax.set($("#SpaceCyclone"), {overflow: ""});
		// Reset storm priorities
		Storm.siblings(".Storm").children().attr("style","");
		// Clear Assets' inline attributes
		Storm.find(".AssetContainer, .AssetContainer > .AlphaAsset, .AssetContainer > .BetaAsset, .Sub, .StarFlow").attr("style","");
		// Remove the clones
		Storm.find(".AlphaAsset.clone, .BetaAsset.clone").remove();
		// Reposition TripWire clones in case browser was resized when a Cyclone was entered
		SetTripWire();
    });
	// Reset and disable Definer asset hover reactions
	Area69.reset(Storm.find(".Area69")).enabled(false);
    // Disable overflowing
    Storm.find(".AssetContainer").css({overflowY: "", overflowX: ""});
}
function StormSequence(){
    // Apply width and height for assets based on their unchanged clones
    Storm.find(".AssetContainer").children(".AlphaAsset, .BetaAsset").each(function(){
        let clone = ( $(this).hasClass("AlphaAsset") ) ? $(this).parent().siblings(".AlphaAsset") : $(this).parent().siblings(".BetaAsset");
        TweenMax.set(this, {
            width: clone.innerWidth(),
            height: clone.innerHeight()
        });
    });
    // Pausing current running animations
    ToggleConnect(false);
    ToggleDownload(false);
    ToggleRequest(false);
    // Set the final attributes for AssetContainer so other animations are calculated based on this
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
	Ritual.add(
		TweenMax.to(Storm.siblings(".Curtain"), 1, {autoAlpha: .7}), 0
	);
	// Cut the tripwire
	CutTripwire
		.add(
			TweenMax.to(Storm.find(".Flow"), 1, {autoAlpha: 0, rotation: 360, scale: 0, transformOrigin: "center"}),0
		);
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
    // Set highest priority for the current storm
	EnterStorm.set(Storm, {zIndex: 2});
	// Apply storm ritual
	Asc = Storm.find(".Definer");
	StormRitual.Definer();
	Asc = Storm.find(".AssetContainer .AlphaAsset");
	StormRitual.AlphaAsset();
	Asc = Storm.find(".AssetContainer .BetaAsset");
	StormRitual.BetaAsset();
    EnterStorm.to(Storm.find(".AssetContainer"), EnterStorm.duration(), {
        width: window.innerWidth,
        height: window.innerHeight,
        top: -Storm.offset().top,
        left: -Storm.offset().left
    }, 0);
}
function PostRitualSequence(){
    PostRitual.fromTo(Storm.find(".Definer > .Sub"), .4, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0}, 0)
        .fromTo([Storm.not(".Download").find(".AlphaAsset .Sub"), Storm.find(".BetaAsset .Sub")], .4, {y: -20}, {autoAlpha: 1, y: 0}, 0)
        .fromTo(Storm.not(".Download").find(".Divider"), .4, {scaleY: 0}, {scaleY: 1}, 0);
    // Set the titles' position fix
    TweenMax.set( Storm.find(".Sub"), {x: "-50%"} );
    // Disable Definer hover/enter/close asset after enter
    TweenMax.set(".TriggerBox .Tripwire", {autoAlpha: 0}, 0);
    if (Storm.find(".AlphaAsset:hover").length !== 0) {
        AssetHover(Storm.find(".AlphaAsset"));
    }
    if (Storm.find(".BetaAsset:hover").length !== 0) {
        AssetHover(Storm.find(".BetaAsset"));
    }
    Glitch.on("#Gandalf", null);
    // Enable Definer asset hover reactions
    Area69.enabled();
    // Perform hover reactions if Definer asset is hovered after entrance
    if( Storm.find(".Area69").is(":hover") ){
        Area69.set(Storm.find(".Area69"));
    }
    // Switch indicator with close in smaller devices
    if( Is.ThisSize(768) ){
        Area69.set(Storm.find(".Area69"));
    }
}
function SetTripWire(){
	if( Cyclone.isActive ){ return; }
	$("#SpaceCyclone .Storm").each(function(i){
		let t = $(this).find(".Tripwire");
		$(".TriggerBox").children().eq(i)
			.css({
				width: t.innerWidth(),
				height: t.innerHeight(),
				top: t.offset().top,
				left: t.offset().left,
			});
	});
}

// AntiToxins
function DefaultScale(asset){
	if( asset instanceof Object && asset instanceof jQuery ){
		asset = asset.innerWidth();
	}
	return 130 / asset;
}
function ParticleActivation(T, e, norebase){
	const
		atpc = $("#AntiToxins .SingleParticle > .Clone"),
		atsc = $("#AntiToxins .SingleContainer");
	// Cancelling click process on 2 conditions :
	// When clicked on another Particle while entering
	// When the particle's container is clicked and not the particle itself
    // When navigating
	if(
		( Particle.activeObj !== null && !$(Particle.activeObj).hasClass(T.attr("class")) ) ||
		( e && e !== null && ( $(e.target).hasClass("DevParticle") || $(e.target).hasClass("ArtParticle") ) ) ||
        Particle.Navigated
	){
		return;
	}
	// Unbluring the blur effect given to sibling elements on mouseenter method
	let f = T.parent().parent().find(".DevStar, .DevParticle, .ArtStar, .ArtParticle").not(T);
	TweenMax.to(f, .5, {opacity: 1});
    TweenMax.to(".QuickAccess", .5, {y: "100%"});
    TweenMax.set("#AntiToxins", {overflow: "inherit"});
	// Cancel other Particle's Gandalf reactions
    f.data({GandalfActive: false});
	// Cancelling entrance
	if( Particle.isActive ){
		// Set opt 1 to display when clicked and switch to opt 0 after click
		T.data({GandalfOpt: 1, PostClickOpt: 0});
		ResetParticle(Asc.parent().parent(),
			// Prevent default reset due to user flying to another division while particle was resetting
			( e === null ) ? true : null);
		return;
	}
	// In case EnterParticle animations are built we resume where we left off
	if( EnterParticle && EnterParticle.isActive() && EnterParticle.reversed() ){
		EnterParticle.reversed( !EnterParticle.reversed() );
		ParticleRotation.reversed( !ParticleRotation.reversed() );
		Particle.isActive = T.attr("class");
		Particle.activeObj = T;
		return;
	}
	AntiToxins.invalidate().pause();
    // When Sign is glitching
    if( SignGlitch ){
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
	// Creating the particle's clone
	CurrentParticle = T;
	let c = T.clone();
	// Emptying the clone's style attributes
	c.attr("style","");
	c.children(".Container").attr("style","");
	c.children(".Container").children().attr("style","");
	// Adding the clone and its new attributes
	atpc.html("");
	atpc.append(c);
	$("#AntiToxins .SingleParticle > .Clone > div").addClass("CLONED").css({
		width : (AT_HoldMyState.w * DefaultScale(AT_HoldMyState.w)),
		paddingBottom: (AT_HoldMyState.h * DefaultScale(AT_HoldMyState.w))
	}).click(function(){
		Glitch.on("#Gandalf", "Closing...");
		if( Particle.isActive ){
			TweenMax.set($("#AntiToxins"), {overflow: ""});
			let d = atsc[0].scrollTop / 400;
				d = ( d > .2 ) ? .2 : d;
			TweenMax.set(atsc, {overflowY: "hidden"});
			TweenMax.to(atsc, d, {scrollTop: 0, onComplete: function(){
					ResetParticle(T);
				}});
		}
	});
	if( !norebase ){
        // Calling the function that prepares clone's children using the related particle's database
        PrepClone();
    }
	if( Is.ThisSize(1024) ){
        TweenMax.set("#AntiToxins .SingleParticle", {x: "0%"});
    }else{
        TweenMax.set("#AntiToxins .SingleParticle", {x: "-50%"});
    }
	if( $("#AntiToxins .SingleParticle").innerHeight() < window.innerHeight ){
		TweenMax.set("#AntiToxins .SingleParticle", {top: "50%",y: "-50%"});
	}else{
        TweenMax.set("#AntiToxins .SingleParticle", {top: "25px",y: "0%"});
    }
	// Applying SingleParticle entrance effects
	// Siblings animations
	T.siblings(".DevParticle, .ArtParticle").each(function(){
		Asc = $(this).children(".Container");
		AddFly.ParticleEntrance();
		Asc.addClass("NoTouchin");
	});
	T.parent().siblings(".DevStar, .ArtStar").each(function(){
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
	const
		atsc = $("#AntiToxins .SingleContainer"),
		atcd = $("#AntiToxins .SingleParticle > .Clone > div");

	ExpandParticle = new TimelineMax();
	CurrentParticle = asset;
	// Expanding the SingleParticle and it's children
	ExpandParticle.add(
		TweenMax.fromTo(atsc, .2, {zIndex: -1, autoAlpha: 0}, {zIndex: 2, autoAlpha: 1}), 0
	).add(
		TweenMax.fromTo($("#AntiToxins .SingleParticle"), .3,{zIndex: 1, autoAlpha: 0, scale: 0, transformOrigin: "50% 10%"}, {zIndex: 2, autoAlpha: 1, scale: 1, transformOrigin: "50% 10%"}), 0
	).add(
		TweenMax.staggerFromTo($("#AntiToxins .SingleParticle > *"), .3, { autoAlpha: 0 }, {autoAlpha: 1}, .1), 0
	);
    atsc.unbind("click").click(function(e){
        if( !( $(e.target).hasClass("SingleContainer") || $(e.target).hasClass("SingleParticle") ) ){ return; }
        Glitch.on("#Gandalf", "Closing...");
        if( Particle.isActive ){
            TweenMax.set($("#AntiToxins"), {overflow: ""});
            let d = atsc[0].scrollTop / 400;
            d = ( d > .2 ) ? .2 : d;
            TweenMax.set(atsc, {overflowY: "hidden"});
            TweenMax.to(atsc, d, {scrollTop: 0, onComplete: function(){
                    ResetParticle(asset);
                }});
        }
    });
    // Remove unnecessary cloned assets
	atcd.find(".NameTag").remove();
	// Prepping the original particle and the clone for replacement
	TweenMax.set(CurrentParticle, {zIndex: 3});
    ExpandParticle.to(CurrentParticle, .3, {autoAlpha: 0,delay : ExpandParticle.duration()/4}, 0);
    TweenMax.to(".QuickAccess", .5, {y: "100%"}, 0);
    // Replacing the original particle with the clone
    TweenMax.set(atcd, {autoAlpha: 1});
	ExpandParticle.eventCallback("onComplete", function(){
        TweenMax.set(atsc, {overflowY: "auto"});
	});
	ExpandParticle.eventCallback("onReverseComplete", function(){
		TweenMax.set(CurrentParticle, {zIndex: ""});
	});
	// Project navigation
	$("#AntiToxins .SingleParticle > .Navigate").children().unbind("click").click(function(){
		let d = atsc[0].scrollTop / 400,
			navi = $(this);
		TweenMax.set($("#AntiToxins"), {overflow: ""});
		d = ( d > .2 ) ? .2 : d;
		TweenMax.set(atsc, {overflowY: "hidden"});
		TweenMax.to(atsc, d, {scrollTop: 0, onComplete: function(){
				ParticleNavigate(navi);
			}});
	});
}
function PrepClone(){
	let sp = $("#AntiToxins .SingleParticle");
	$(Projects).each(function(){
		if( CurrentParticle.hasClass(this.id) ){
		    let Ptitle = this.title;
			sp.children(".Title").html(Ptitle);
			sp.find(".Pages > div").html("");
			sp.find(".img").remove();
			$(this.pages).each(function(i){
				PageContainer = sp.find(".Pages > div");
				imgContainer = sp.find(".Preview");

				PageContainer.append("<a></a>");
				imgContainer.append("<div class='img'><img alt='Sample of "+this.title.toUpperCase()+" page in "+Ptitle+" project'></div>");

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
					sp.find(".Preview img:active").attr("src", this.image);
					sp.find(".Cover").unbind("click").click(function(){
					    ImgExpand($("#AntiToxins .SingleContainer").css("overflow-y"));
					});
				}else{
					TweenMax.set(imgContainer.children(".img").last(), {autoAlpha: 0});
				}
				PageContainer.children().last().click(function(){
					Navigation = new TimelineMax();
					if( $(this).hasClass("active") ){ return; }
					var CoverChildren = sp.find(".Preview > .Cover > div");
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
			sp.find(".Description").html(this.detail);
			ToolsType = sp.find(".BuiltWith > .Navigate > *");

			let tools = this.tools,
				canireset = true;
			sp.find(".ToolBox").each(function(i){
				$(this).children().each(function(){
					let t = $(this);
					// Removing active class from tools in the ToolBox
					if( t.hasClass("active") ){
						t.removeClass("active");
					}
					$(tools).each(function(){
						// Checking the database to find a match for a tool and activating it
						if( t.hasClass(this.toString()) ){
							t.addClass("active");
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
				sp.find(".BuiltWith > .Navigate").children().toggleClass("active");
				sp.find(".ToolBox").toggleClass("active");
			}

			sp.find(".State").find(".RealState.active").removeClass("active");
			if( this.state === "completed" ){
				sp.find(".State .RealState").eq(0).addClass("active");
				if( this.website ){
					sp.find(".State .RealState span").fadeIn().children("a").attr("href", this.website)
				}else{
					sp.find(".State .RealState span").fadeOut();
				}
			}else if( this.state === "doing" ){
				sp.find(".State .RealState").eq(1).addClass("active");
			}else if( this.state === "cancelled" ){
				sp.find(".State .RealState").eq(2).addClass("active");
			}
		}
	});

}
function ImgExpand(s){
	const
		atsc = $("#AntiToxins .SingleContainer");
    if(
        ( ExpandPreview && ExpandPreview.isActive()) ||
        ( Navigation && Navigation.isActive() )
    ){ return; }
    // Disable scrolling on the main container
    TweenMax.set( atsc, {overflowY: "hidden"} );
    activeimg = imgContainer.find(".img.active");
    // Save main container's scroll state
    ExpandPreview = new TimelineMax();
    ExpandPreview.fromTo("#AntiToxins .Preview .Cover", .01, {autoAlpha: 1}, {autoAlpha: 0}, 0)
        .fromTo(activeimg, .2, {
            height: "100%",
            width: "100%",
            top: 0,
            left: 0
        }, {
            height: function(){
                return window.innerHeight;
            },
            width: function(){
                return window.innerWidth;
            },
            top: function(){
                return -activeimg.offset().top;
            },
            left: function(){
                return -activeimg.offset().left;
            }
        }, 0);
    if( s ){
        imgContainer.find(".img.active img").unbind("click").click(function(){
            // Reverse main container's scroll state to their state
            TweenMax.set( atsc, {overflowY: s} );
            ExpandPreview.reverse();
        });
    }

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
		TweenMax.to(".QuickAccess", .5, {y: "0%", clearProps: "all"});
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
			Asc = $(this).find(".Container");
			AddFly.ParticleEntrance(false, false, true);
		});
		asset.parent().siblings(".DevStar, .ArtStar").each(function(){
			Asc = $(this).find(".Star");
			AddFly.ParticleEntrance(false, false, true);
		});

		Asc = asset.children();
		AddFly.ParticleEntrance(false, false, true);
		NavRotation.reverse();
		EnterParticle.eventCallback("onComplete", function(){
			WrapItUp();
		});
		return;
	}
	EnterParticle.reverse().eventCallback("onReverseComplete", function(){
		WrapItUp();
	});
	if( e !== true ){
        Glitch.on("#Gandalf", "Closing...");
    }
	function WrapItUp(){
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
			if( $(this).is(":hover") && !Is.NoTouch($(this)) ){
				NameTag.play($(this));
			}
		});
		// Reset scale to prevent miscalculations on next request
		TweenMax.set($("#AntiToxins .SingleParticle"), {
			scale: 1
		});
	}
}
function ParticleNavigate(T){
	const
		atpc = $("#AntiToxins .SingleParticle > .Clone"),
		atsc = $("#AntiToxins .SingleContainer");

	Particle.NaviDirection = T;
	let GoToParticle = ( T.hasClass("PrevProject") ) ?
		CurrentParticle.prev(".DevParticle, .ArtParticle") :
		CurrentParticle.next(".DevParticle, .ArtParticle") ;
	// Update status on Gandalf
	Gandalfer.set(T);

	if( GoToParticle.length === 0 ){
		let group = ( CurrentParticle.hasClass("ArtParticle") ) ? "ArtParticle" : "DevParticle" ,
			othergroup = ( group === "DevParticle" ) ? "ArtParticle" : "DevParticle" ;
		if( CurrentParticle.parent().children("."+group).last().hasClass(CurrentParticle.attr("class")) ){
			GoToParticle = CurrentParticle.parent().children("."+othergroup).first();
		}
		if( CurrentParticle.parent().children("."+group).first().hasClass(CurrentParticle.attr("class")) ){
			GoToParticle = CurrentParticle.parent().children("."+othergroup).last();
		}
	}

	ExpandParticle.duration(.2).reverse();

	if( ParticleNavigation ){
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
	// Creating the particle's clone
	let c = GoToParticle.clone();
	// Emptying the clone's style attributes
	c.attr("style","");
	c.children(".Container").attr("style","");
	c.children(".Container").children().attr("style","");
	// Adding the clone and its new attributes
	atpc.html("");
	atpc.append(c);
	$("#AntiToxins .SingleParticle > .Clone > div").addClass("CLONED").css({
		width : (NAV_HoldMyState.w * DefaultScale(NAV_HoldMyState.w)),
		paddingBottom: (NAV_HoldMyState.h * DefaultScale(NAV_HoldMyState.w))
	}).click(function(){
		Glitch.on("#Gandalf", "Closing...");
		if( Particle.isActive ){
			TweenMax.set($("#AntiToxins"), {overflow: ""});
			let d = atsc[0].scrollTop / 400;
			d = ( d > .2 ) ? .2 : d;
			TweenMax.set(atsc, {overflowY: "hidden"});
			TweenMax.to(atsc, d, {scrollTop: 0, onComplete: function(){
					ResetParticle(GoToParticle);
				}});
		}
	});
	// Calling the function that prepares clone's children using the related particle's database
	PrepClone();

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
	GoToParticle.parent().siblings(".DevStar, .ArtStar").each(function(){
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
		Particle.NaviDirection = null;
		// Reset Gandalf's content
		Glitch.on("#Gandalf", null);
	});
}

// Analyzer
function DimeRotation(T){
	let Target = $("#Analyzer .Analyzer"),
	SP = {
		X: T.offset().left + (T.width() / 2),
		Y: T.offset().top + (T.width() / 2)
	},
	TP = {
		X: Target.offset().left + (Target.width() / 2),
		Y: Target.offset().top + (Target.width() / 2)
	},
	Angle = Math.atan2(TP.Y - SP.Y, TP.X - SP.X) * 180 / Math.PI;
	return Angle;
}
// DekcCloud
function CardHoverIn(This){
	let T = This.parent().parent().attr("class"),
		siblings = This.nextAll(".Card").toArray().reverse();
	if( CardSelect.isActive[T] || CardSelect.mdReset[T] ){
		return;
	}
	// Aborting hover sequence when :
	// Decks are currently placing and haven't finished
	// There is no sibling after the current element
	// The hover timeline is currently active and reversing
	if(
		PlaceDeck.isActive() || !siblings.length || ( CardHover.HoverReveal[T] && CardHover.HoverReveal[T].reversed() && CardHover.HoverReveal[T].isActive() )
	){
		return;
	}
	// Flushes the related timeline when mouseleave orders it
	if( !CardHover.append[T] ){
		CardHover.HoverReveal[T] = new TimelineMax();
	}
	// Declare a new active list only when one already doesn't exist
	if( !CardHover.AlreadyActive[T] ){
		CardHover.AlreadyActive[T] = [];
	}
	$(siblings).each(function(){
		let t = $(this),
			prevent;
		// Adding new animations for inactive siblings & prevent re-writing animations
		if( CardHover.isActive[T] && CardHover.AlreadyActive[T].length ) {
			$(CardHover.AlreadyActive[T]).each(function () {
				// We'll prevent making new animations when the the current sibling is already active & has a set of tweens dedicated to it in the timeline
				// NOTE : the reason for second part of the condition is identifying siblings that were passed due to the quick movement of the cursor and so they didn't trigger mouseenter method
				if ( t.hasClass($(this).attr("class")) && CardHover.HoverReveal[T].getTweensOf(t.children()).length ) {
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
	let a = ResetTargets.children(),
		b = TweenMax.getTweensOf(a);
	$(b).each(function(){
		this.pause().kill();
	});
	// Reveal the direct siblings after the animations
	TweenMax.set( ResetTargets, {autoAlpha: 1});
	// Reversing all next siblings to their default position
	TweenMax.staggerTo( a, .15, {
		scaleY: 1,
		transformOrigin: "bottom"
	}, "-=.075", function(){
		// Resetting all the hover variables except the HoverReveal after the siblings switched back to their place
		CardHover.append[theT] = false;
		CardHover.isActive[theT] = false;
		CardHover.AlreadyActive[theT] = [];
		// Only the front card needs a fully empty timeline
		if( !This.nextAll(".Card").length || !$(This).parent().children(".Card").filter(function(){ return $(this).is(":hover") }).length ){
			delete CardHover.HoverReveal[theT];
		}
		if( $(This).parent().children(".Card").filter(function(){ return $(this).is(":hover") }).length ){
			CardHoverIn(This);
		}
	} );
	// Resetting the card select variables
	CardSelect.isActive[theT] = false;
	CardSelect.object[theT] = false;
}
function CardDraggable(){
    var container = $("#DeckCloud .Card .Description"),
        content = container.find(".Content");
    $(content).each(function(){
        let f = $(this).innerHeight() - $(this).parent().innerHeight();
        // TweenMax.set($(this).parent(), {overflow: "hidden"});
        // Move the $(this) to the first line
        // Check if the content overflows it's container
        if( f > 0 ){
            // Enable dragging feature
            Draggable.create($(this),{
                type: "y",
                bounds: {minY: -f-20, maxY: 20},
                dragResistance: .5,
                onPress: function(){
                    let t = TweenMax.getTweensOf(this.target);
                    // Kill the running hover indicator
                    if( t.length ){
                        t[0].kill();
                    }
                },
                onDragEnd: function(){
                    let yvalue = null;
                    // Reverse the path to the top side if user is far up
                    if( this.y < -f ){
                        yvalue = -f;
                    }
                    // Do the same above to lower side
                    if( this.y > 0 ){
                        yvalue = 0;
                    }
                    TweenMax.to(this.target, .25,
                        {
                            y: yvalue
                        });
                },
                zIndexBoost: false
            });
        }
        else{
            if( Draggable.get($(this)) ){
                // Remove drag feature when path doesn't overflow it's container
                Draggable.get($(this)).kill();
            }
            // Move1 the path back to it's original position if it was altered
            TweenMax.to($(this), .25, {
                y: 0,
                ease: Back. easeInOut
            });
        }
    });
    // Reset content's position in case it's scrolled
    TweenMax.set(content, {
        y: 0
    });
    content.unbind("mouseenter").mouseenter(function(){
        if( Is.NoTouch($(this)) ){ return }
        let content = $(this);
        // Forbid hover reaction when user is dragging
        if( Draggable.get(content) && Draggable.get(content).isDragging ){ return; }
        // Check whether #content overflows it's content
        if( ( content.innerHeight() - $(this).parent().innerHeight() ) > 0 ){

            let y = {
                a: "-=20",
                b: "+=20"
            };
            // Check if the content is not near the top
            if( content.position().top+20 < 0 ){
                // Reverse animation's direction
                y = {
                    a: "+=20",
                    b: "-=20"
                };
            }
            // Set animations
            let p = new TimelineMax();
            p.to(content, .25, {
                y: y.a,
            }).to(content, .25, {
                y: y.b,
            });
        }
    });
}
CardSlider = {
    last: null,
    placer : function(instance, dir){
    	let reveal = false,
    		conceal = false,
            revealparent = false,
			concealparent = false;
    	// Search for current level through the container's children
        for( i = 1; i < $(instance.target).children(".Card").length; i++ ){
			    // Set the distance between Cards
            let bound = $(instance.target).find(".Card").innerWidth() * .05,
                // Get the visually front Card
				card = $(instance.target).children(".Card").eq($(instance.target).children(".Card").length-i);
            // Reveal all cards when container is at it's starting position
            if( ( dir === -1 && instance.x === instance.maxX ) || ( dir === 1 && instance.x === instance.minX ) ){
				reveal = $(instance.target).find(".Card > div");
				revealparent = $(instance.target).find(".Card");
                break;
            }
			// Reveal only the last card and conceal other Cards when container is at it's final position
            if( ( dir === -1 && instance.x === instance.minX ) || ( dir === 1 && instance.x === instance.maxX ) ){
                card = $(instance.target).find(".Card").first();
                conceal = card.siblings().children();
                concealparent = card.siblings();
                reveal = card.children();
                revealparent = card;
                break;
            }
            // Reveal this Card and conceal Cards in front of it when container is on the margin between the current and the next Card
            if( ( dir === -1 && instance.x > -( bound * i ) ) || ( dir === 1 && instance.x < ( bound * i ) ) ){
				conceal = [card.children(),card.nextAll().children()];
                concealparent = [card,card.nextAll()];
				reveal = card.prevAll().children();
                revealparent = card.prevAll();
                break;
            }
        }
        // Reveal if available
        if( reveal ){
			TweenMax.set(revealparent,
				{
					autoAlpha: 1,
				});
			TweenMax.to(reveal, .2,
				{
					autoAlpha: 1,
					scaleY: 1,
					transformOrigin: "50% 100%"
				});
		}
		// Conceal if available
        if( conceal ){
			TweenMax.set(concealparent,
				{
					autoAlpha: 0,
				});
			TweenMax.to(conceal, .2,
				{
					autoAlpha: 0,
					scaleY: 0,
					transformOrigin: "50% 100%"
				});
		}
        // Store this container as the last used Slider
        this.last = instance.target;
    },
    reset: function(dur){
    	// Check if reset should be animated
        let d = ( dur ) ? dur : 0;
        // Deny reset when no slider is engaged
        if( this.last === null ){ return; }
        // Do the reset
        TweenMax.set($(".Slider .CardSlider .Card"), {
            autoAlpha: 1
        });
        TweenMax.to($(".Slider .CardSlider .Card > div"), d,{
            autoAlpha: 1,
            scaleY: 1,
            x: 0,
            y: 0
        });
        TweenMax.to($(".Slider .CardSlider"), d,{
            x: 0,
            y: 0
        });
        // Reset Slider usage state
        this.last = null;
    }
};

// Gandalf setter
Gandalfer = {
	setup: function(GandalfRow){
		$(GandalfRow[0]).click(function(){
            // Check if touch allowed for touch devices
            if( Is.NoTouch("#Gandalf") ){ return; }
			let content = GandalfRow[1];
			// Analyzing the element for deactivation requests
			if( $(this).data().GandalfActive === false ){
				return false;
			}
			let PO = $(this).data().GandalfOpt;
			if( typeof(PO) !== "undefined" ){
				content = GandalfRow[1][PO];
			}
			// Placing Gandalf's content
			Glitch.on("#Gandalf", content);
			// Identifying post-click option change requests
			let GO = $(this).data().PostClickOpt;
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
				let content = this[1],
                // Look for a data requesting selection of a particular array
					PO = asset.data().GandalfOpt;
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
		let Deactivate = false;
		$(PeekRow[0]).mouseover(function(){
		    // Check if touch allowed for touch devices
		    if( Is.NoTouch("#Peek") ){ return; }
			let content = PeekRow[1];
			// Prohibiting calling the function for every child hover
			if( Global.PeekActive === PeekRow[0] ){ return false; }
			// Analyzing the element for deactivation requests
			if( $(this).data().PeekActive === false ){
				Deactivate = true;
				return false;
			}
			let PO = $(this).data().PeekOption;
			if( typeof(PO) !== "undefined" ){
				content = PeekRow[1][PO];
			}
			// Setting PeekActive indicator
			Global.PeekActive = PeekRow[0];
			// Placing Peek's content
			Glitch.on("#Peek", content);
		}).mouseleave(function(){
            // Check if touch allowed for touch devices
		    if( Is.NoTouch("#Peek") ){ return; }
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
			if( $(asset[0]).filter($(this[0])[0]).length ){
				let content = this[1],
					PO = asset.data().PeekOption;
				if( typeof(PO) !== "undefined" ){
					content = this[1][PO];
				}
				Glitch.on("#Peek", content);
			}
		});
	}
};

// Mobile size identification
Is = {
    ThisSize: function (width, height){
        let w = window.innerWidth,
            h = window.innerHeight;
        // Check which variables are sent
        if( !width ){ width = null; }
        if( !height ){ height = null; }
        // Check if both variables are requested for test
        if( height !== null && width !== null ){
        	// Respond true if both are bellow the requested size
            return ( w <= width && h <= height );
        }
        // Check if at least one variable is set
        if(
			( width !== null && w <= width ) ||
			( height !== null && h <= height )
		){
        	// Respond the result for than variable
            return true;
        }
        // Respond false if no matches found
        return false;
    },
    NoTouch: function(asset){
    	asset = ( typeof(asset) === "string" ) ? $(asset) : ( asset instanceof jQuery ) ? asset : null ;
    	if( asset === null ) return;
		return asset.data("notouch");
    }
};

// Glitch
G = {
	id : [],
	interval : [],
	reset: function(GetID){
		$(G.id).each(function(i){
			if( this == GetID ) {
				clearInterval(G.interval[i]);
				G.id.splice(i, 1);
				G.interval.splice(i, 1);
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
		if( typeof(num) === "number" ){
			this.duration = num;
			return this.duration;
		}
	},
	durtest : function(num){
		// Speed the process in case the user is already switching divisions before the Glitch is done ( UHAHAHAHAH >=) )
		if( ( ActiveFly && ActiveFly.isActive() ) || ( ReverseFly && ReverseFly.isActive()) ){
			Glitch.dur(num);
		}
	},
	on: function(id, subject, append, remove){
		let obj ,
			TheID,
			TheAppend,
			TheRemove,
			consecutive;
		// Beginning consecutive process if Glitch is called on multiple accounts at once
		if( typeof(id) === "object" && !(id instanceof jQuery) ){
			// Either all accounts have their own results
			if( subject === null || id.length === subject.length ){
				obj = ( id[0] instanceof jQuery ) ? id[0] : $(id[0]) ,
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
			obj = ( id instanceof jQuery ) ? id : $(id);
		}
		// Resets the called account if no subject is defined
		Reset = !subject;
		// Resetting intervals and such when the same element is called while it's already running
		if( G.id.length !== 0 ){
			G.reset(id);
		}
		let XI = 1,
			Char = '',
			spliceI = G.id.length,
			SickChar = '',
			duration = this.dur(),
			content = obj.text(),
			original;
		// reset the duration in case it was altered
		this.dur(20);

		Scramble = ['%','^','&','*','$','#','@','!','~','-','=','+','_','?','>','0','1'];
		// Following codes will not be executed while Glitch is resetting
		if ( Reset === false ) {
			getHTMLtags = /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/g;
			// Checking to remove html tags
			if ( subject.match(getHTMLtags) ) {
					original = ( append === true ) ?
					// Applied when the goal is to keep the element's current content
					obj.html() + subject :
					// Or just overwrite the content
					subject;
				subject = subject.replace(getHTMLtags, "");
			} else {
				original = null;
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
						TheID = (TheID.length === 1) ? TheID[0] : TheID;
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
				if( typeof(append) === "function" ){
					append();
				}
				G.reset(id);
			}
			XI++;

		},duration);
		G.id[spliceI] = id;
	}
};