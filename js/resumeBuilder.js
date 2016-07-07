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
 var formattedName = HTMLheaderName.replace("%data%","Claire Morin");
 var formattedRole = HTMLheaderRole.replace("%data%","Product Owner / Agile Coach");
$("#header").append(formattedName);
$("#header").append(formattedRole);