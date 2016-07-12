/*
 $("#main").append("Claire Morin");
 var firstName = "james"
 var age = 32;
 console.log(firstName);
 var awesomeThoughts = "I am Claire and I am AWESOME !";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 $("#main").append(funThoughts);
 */
var bio = {"name":"Claire Morin",
"role":"Product Owner/Agile Coach",
"contact":{"email":"morin.claire12@gmail.com", 
		"mobile":"+33 6 7805 3811",
		"github":"productscientista",
		"twitter":"@clairemorin",
		"location":"Paris"
	},
"picUrl":"images/claire.jpg" ,
welcomeMessage:"Hello everyone !",
skills:[
	"agile methodologies", 
	"acceptance test driven development", 
	"colaborative specification", 
	"backlog grooming", 
	"design thinking"
	]
};
var formattedContact = HTMLcontactGeneric.replace("%data",bio.contact);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile)
var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github)
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter)
var formattedPicUrl = HTMLbioPic.replace("%data%",bio.picUrl);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage)
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location)

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedTwitter);
//$("#topContacts").prepend(formattedContact);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicUrl);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);


var work = {};
work.position = "Product Owner";
work.employer = "Wakanda";
work.yearsWorked = "2016-07";
work.city = "Le Pecq";
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.position);
var formattedWorkDates = HTMLworkDates.replace("%data%",work.yearsWorked);
var formattedLocation = HTMLworkLocation.replace("%data%", work.city);

var education = {
	"schools"[
	{
		"name": "Université Paris 6",
		"city": "Paris",
		"degree": "Master 2",
		"major": "Innovation Management",
		"minor":"Knowledge Management",
		"graduation year": "2010",
		"online course information":"http://www.upmc.fr/fr/formations/\
		diplomes/sciences_et_technologies2/masters2/\
		master_management_innovation.html"
	},
	{
		"name": "Université Paris Sud",
		"city": "Orsay",
		"degree": "Master 1",
		"major" : "Fondamental Physic",
		"minor": "Chemistry",
		"graduation year" : "2008",
		"online course information":"http://www.magistere-physique.u-psud.fr/"

	}
		]
};

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedTitle);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedLocation);

//$("#education").append(HTMLschoolStart);
//$("#main").append(education.name);
//$("#main").append(work["position"]);


