var blogMenus = document.getElementsByName("blog-menu");
drawBlogMenu(blogMenus[0]);
drawBlogMenu(blogMenus[1]);

function drawBlogMenu(menu) {
  var diff = "";
  if(document.URL.includes("index.html") || document.URL == "http://oliver-jk-redding.github.io/") {
    diff = "blog/"
  }
  menu.innerHTML = ""+
  "<li class=\"u-cf\">"+
    "<a style=\"padding-top: 10px;\" href=\"" + diff + "c1-reflection-blog.html\">Shereef's Fireside Chat</a>"+
    "</li>"+
  "<li class=\"u-cf\">"+
    "<a href=\"" + diff + "c1-time-and-habits-blog.html\">Time and Habits</a>"+ 
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "c2-emotional-intelligence.html\">Emotional Intelligence</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "t2-html-css-dom-p1.html\">HTML, CSS & DOM</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "t2-html-css-dom-p2.html\">HTML, CSS & DOM 2</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+
    "<a href=\"" + diff + "t3-design-to-web-blog.html\">Design to Web</a>"+       
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "c3-meditation-process.html\">Meditation Process</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "t4-javascript-basics.html\">Javascript Basics</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "c4-daily-mindfulness.html\">Daily Mindfulness</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "c5-self-confidence.html\">Self Confidence</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "t5-problem-solving.html\">Problem Solving</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff + "t6-testing.html\">Testing</a>"+
  "</li>"+
  "";
}

var projectsMenu = document.getElementsByName("projects-menu");
drawProjectMenu(projectsMenu[0]);

function drawProjectMenu(menu) {
  var diff = "../";
  if(document.URL.includes("index.html")) {
    diff = ""
  }
  menu.innerHTML = ""+
  "<li class=\"u-cf\">"+
    "<a style=\"padding-top: 10px;\" href=\"" + diff + "javascript-racer/index.html\">Javascript Racer</a>"+  
  "</li>"+ 
  "<li class=\"u-cf\">"+
    "<a style=\"padding-top: 10px;\" href=\"" + diff + "udacity-resume/index.html\">Udacity Resume</a>"+  
  "</li>"+
  "";
}