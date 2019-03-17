//Bio object. This object defines the data fields that will be used to populate the biographical parts of the resume.
//This object contains 4 strings, 1 nested object with four strings, an array of strings, and one function.
var bio =
{
	name: "Timothy Horton",
	role: "Front End Developer",
	contacts: 
	{
		mobile: "334-300-4786",
		email: "zurafuse@gmail.com",
		github: "https://github.com/zurafuse/",
		location: "Wetumpka, AL"
	},
	welcomeMessage: "Software Developer with a focus on forms development, front end web development, and program analysis.",
	skills: 
	[
		"C#",
		"Javascript, jQuery, HTML5 and CSS3",
		"JIRA, Code Deployments, and SDLC",
		"Forms development",
		"Business and program analysis"
	],
	biopic: "images/biopic.jpg",
	display: function()
	{
		$("#header").prepend(HTMLheaderRole.replace("%data%", this.role));	
		$("#header").prepend(HTMLheaderName.replace("%data%", this.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
		$("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", this.biopic));	
		$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));	
		$("#header").append(HTMLskillsStart);
		//display all skills
		for (i = 0; i < this.skills.length; i++)
		{
		$("#skills").append(HTMLskills.replace("%data%", this.skills[i]));			
		}
	}
};
//Education object. This object defines the data fields that will be used to populate the school history section of the resume.
//This object contains 2 arrays containing two objects each, and one function.
var education = 
{
	schools: 
	[
		{
			name: "Faulkner University",
			location: "Montgomery, AL",
			degree: "Information Technology",
			majors: [],
			dates: "August 2000 - May 2002",
			url: "https://www.faulkner.edu/"
		},
		{
			name: "Columbia Southern University",
			location: "Gulf Shores, AL",
			degree: "Business",
			majors: ["Associate of Applied Science in Business"],
			dates: "August 2007 - May 2009",
			url: "http://www.columbiasouthern.edu/"		
		},
		{
			name: "Western Governors University",
			location: "Salt Lake City, UT",
			degree: "Software Development",
			majors: ["Bachelor of Science in Software Development (in progress)"],
			dates: "March 2018 - Present",
			url: "http://www.wgu.edu/"		
		}
	],
	onlineCourses:
	[
		{
			title: "Guidewire Policy Center Technical Certification",
			school: "Guidewire University",
			dates: "August 2014 - September 2014",
			url: "https://www.guidewire.com/products/policycenter"
		},
		{
			title: "Front End Developer Nanodegree",
			school: "Udacity",
			dates: "December 2016 - April 2017",
			url: "https://www.udacity.com/"
		}
	],
	display: function()
	{
		$("#education").append(HTMLschoolStart);		
		for (i = 0; i < this.schools.length; i++)
		{
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", this.schools[i].name).replace("#", this.schools[i].url) + HTMLschoolDegree.replace("%data%", this.schools[i].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", this.schools[i].dates));	
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", this.schools[i].location));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", this.schools[i].url).replace("#", this.schools[i].url).replace("<a", "<a class='no-blue' "));
			for (j = 0; j < education.schools[i].majors.length; j++)
			{
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", this.schools[i].majors[j]));				
			}
		}
		$(".education-entry:last").append(HTMLonlineClasses);			
		for (i = 0; i < this.onlineCourses.length; i++)
		{
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title).replace("#", this.onlineCourses[i].url) + HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", this.onlineCourses[i].url).replace("#", this.onlineCourses[i].url).replace("<a", "<a class='no-blue' "));			
		}
	}
};
//Work object. This object defines the data fields that will be used to populate the work history and experience section of the resume.
//This object contains 1 array containing two objects, and one function.
var work = 
{
	jobs: 
	[
		{
			employer: "ALFA Insurance Companies", 
			url: "http://www.alfains.com",
			title: "Software Engineer/Programmer Analyst", 
			location: "Montgomery, AL", 
			dates: "September 2016 - present",
			description: "Duties include developing forms for the company, performing research and business analysis needed to do so, monitoring the SmartCommunications (Thunderhead) system and database, and writing javascript code to integrate SmartCommunications with other systems. As needed, I write web apps and .NET desktop applications to help the computer operators and the other forms developers perform specific tasks. In 2018, I assisted with the company's implementation of an e-signature solution, DocuSign." 		
		},
		{
			employer: "ALFA Insurance Companies", 
			url: "http://www.alfains.com",
			title: "Forms Developer", 
			location: "Montgomery, AL", 
			dates: "August 2014 - September 2016",
			description: "Required tasks included developing hundreds of documents, research analysis, and writing javascript code to to insert logic into the forms."
		},
		{
			employer: "ALFA Insurance Companies", 
			url: "http://www.alfains.com",
			title: "Computer Operator", 
			location: "Montgomery, AL", 
			dates: "February 2011 - August 2014",
			description: "Responsibilities for this role included running batch jobs, running backups, monitoring ALFA’s IBM mainframe, validating and printing documents, and writing programs that balanced report totals." 		
		},		
		{
			employer: "Rocky Mountain Health Plans", 
			url: "http://www.rmhp.org",
			title: "Computer Operator", 
			location: "Grand Junction, CO", 
			dates: "June 2007 - October 2010",
			description: "Duties included monitoring databases, running .NET programs, performing system backups and generating print." 		
		}
	],
	display: function() 
	{
		$("#workExperience").append(HTMLworkStart);
		for (i = 0; i < work.jobs.length; i++)
		{
		var employerFormatted = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
		employerFormatted = employerFormatted.replace("#", this.jobs[i].url);
		$(".work-entry:last").append(employerFormatted + HTMLworkTitle.replace("%data%", this.jobs[i].title));		
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[i].dates));	
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[i].location));	
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[i].description));			
		}
	}
};
//Projects object. This object defines the data fields that will be used to populate sample projects to show off my work.
//This object contains 1 array holding three objects, and one function for displaying the content.
var projects = 
{
	projects: 
	[
		{
			title: "Flag Survival",
			dates: "March 2016 - July 2016",
			description: "A game developed using javascript. Use arrow keys to move and use space bar to shoot.",
			images: 
			[
				"images/flag_survival1.png",
				"images/flag_survival2.png"
			],
			url: "http://zurafuse.com/flagsurvival/"
		},
		{
			title: "The Amazing Yosef", 
			dates: "December 2016 - February 2017",
			description: "The Amazing Yosef is a two dimensional HTML5 game created with only javascript.",
			images: 
			[
				"images/yosef.png",
				"images/yosef2.png"
			],
			url: "http://zurafuse.com/yosef/"
		},
		{
			title: "Javscript Calculator", 
			dates: "August 2016 - September 2016",
			description: "This is a simple calculator I created using javascript.",
			images: 
			[
				"images/calc.png",
				"images/calc2.png"
			],
			url: "http://zurafuse.com/calculator/"
		}		
	],
	display: function()
	{
		$("#projects").append(HTMLprojectStart);
		for (i = 0; i < this.projects.length; i++)
		{
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[i].title).replace("#", this.projects[i].url));	
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[i].dates));			
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[i].description));
		for (j = 0; j < this.projects[i].images.length; j++)
		{
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[i].images[j]));
		}
		}
	}
};
//The display function of each object will populate the resume with data by appending content to different sections of the HTML.
bio.display();
work.display();
projects.display();
education.display();
//The location data in helper.js is used to communicate with google map's API and display my previous locations on a map.
$("#mapDiv").append(googleMap);
