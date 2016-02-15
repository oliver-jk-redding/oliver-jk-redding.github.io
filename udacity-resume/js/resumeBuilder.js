/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Ollie");
 // var awesomeThoughts = "I am Ollie and I am AWESOME!";
 // console.log(awesomeThoughts);
 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // $("#main").append(funThoughts);

 var name = "Ollie Redding";
 var role = "Student";

 var formattedName = HTMLheaderName.replace("%data%", name);

 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedName, formattedRole);

 var bio = {
  "name": "Ollie Redding",
  "role": "Student",
  "contacts": {
    "mobile": "027 309 2299",
    "email": "oliver.jk.redding@gmail.com",
    "github": "oliver-jk-redding",
    "location": "Wellington, New Zealand"
  },
  "welcomeMessage": "Greetings! I am Ollie!",
  "skills": ["nun-chuks", "break dancing", "eating", "stealth assassinations"]
 }

  var work = {
    "jobs": [{
      "employer": "Scots College",
      "title": "Teacher",
      "location": "Wellington, New Zealand",
      "dates": "2012-2015",
      "description": "Secondary school teacher"
    },
    {
      "employer": "Bond n Bond",
      "title": "Sales Assistant",
      "location": "Dunedin, New Zealand",
      "dates": "2008-2011",
      "description": "Retail"
    }]
  }

  var projects = {
    "projects": [{
      "title": "Y7 curriculum coordinator",
      "dates": "2015",
      "description": "Coordinated Y7 Humanities curriculum",
      "images": []
    },
    {
      "title": "Contracts negotiator",
      "dates": "2015",
      "description": "Negotiated staff contracts",
      "images": []
    }]    
  }
  
  var education = {
    "schools": [
      {
        "name": "Otago University",
        "location": "Dunedin, New Zealand",
        "degree": "BTheol",
        "majors": ["CHTH", "BIBS"],
        "dates": "2007-2010",
        "url": "http://www.otago.ac.nz/"
      },
      {
        "name": "Otago University",
        "location": "Dunedin, New Zealand",
        "degree": "GradDip Primary Teaching",
        "majors": ["Primary Teaching"],
        "dates": "2011",
        "url": "http://www.otago.ac.nz/"
      }
    ],  
    "onlineCourses": [
      {
        "title": "Web Development Course",
        "school": "Enspiral Dev Academy",
        "dates": "2015-2016",
        "url": "http://devacademy.co.nz/"
      }
    ]  
  }

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
  }
  var formattedSkill = {};
  for(var i = 0; i < bio.skills.length; i++) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }

  function displayWork() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formattedJobInfo = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
      $(".work-entry:last").append(formattedJobInfo);
    }
  }
  displayWork();

  $(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
  });

  function inName(name) {
    var splitName = name.trim().split(" ");
    console.log(splitName);
    splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    splitName[1] = splitName[1].toUpperCase();
    var wholeName = splitName.join(" ");
    console.log(wholeName);
    return wholeName;
  }
  inName(name);
  $("#main").append(internationalizeButton);

  projects.display = function() {
    for(project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if(projects.projects[project].images.length > 0) {
        for(image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]); 
          $(".project-entry:last").append(formattedImage);
        }     
      } 
    }  
  }
 projects.display();

 $("#mapDiv").append(googleMap);
