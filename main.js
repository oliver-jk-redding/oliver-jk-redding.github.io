var blogMenus = document.getElementsByName("blog-menu");
var projectsMenu = document.getElementsByName("projects-menu");
var diff1 = "";
var diff2 = "../";
if(document.URL.includes("index.html") || document.URL == "http://oliver-jk-redding.github.io/") {
  diff1 = "blog/";
  diff2 = "";  
}
else {  
  drawBlogMenu(blogMenus[1]);
}
drawBlogMenu(blogMenus[0]);
drawProjectMenu(projectsMenu[0]);

function drawBlogMenu(menu) {  
  menu.innerHTML = ""+
  "<li class=\"u-cf\">"+
    "<a style=\"padding-top: 10px;\" href=\"" + diff1 + "c1-reflection-blog.html\">Shereef's Fireside Chat</a>"+
    "</li>"+
  "<li class=\"u-cf\">"+
    "<a href=\"" + diff1 + "c1-time-and-habits-blog.html\">Time and Habits</a>"+ 
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "c2-emotional-intelligence.html\">Emotional Intelligence</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "t2-html-css-dom-p1.html\">HTML, CSS & DOM</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "t2-html-css-dom-p2.html\">HTML, CSS & DOM 2</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+
    "<a href=\"" + diff1 + "t3-design-to-web-blog.html\">Design to Web</a>"+       
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "c3-meditation-process.html\">Meditation Process</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "t4-javascript-basics.html\">Javascript Basics</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "c4-daily-mindfulness.html\">Daily Mindfulness</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "c5-self-confidence.html\">Self Confidence</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "t5-problem-solving.html\">Problem Solving</a>"+   
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "t6-testing.html\">Testing</a>"+
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "c6-control.html\">Control</a>"+
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "c7-motivation.html\">Motivation</a>"+
  "</li>"+
  "<li class=\"u-cf\">"+ 
    "<a href=\"" + diff1 + "cognitive-biases.html\">Cognitive Biases</a>"+
  "</li>"+
  "";
}

function drawProjectMenu(menu) {  
  menu.innerHTML = ""+
  "<li class=\"u-cf\">"+
    "<a style=\"padding-top: 10px;\" href=\"" + diff2 + "javascript-racer/index.html\">Javascript Racer</a>"+  
  "</li>"+ 
  "<li class=\"u-cf\">"+
    "<a style=\"padding-top: 10px;\" href=\"" + diff2 + "udacity-resume/index.html\">Udacity Resume</a>"+  
  "</li>"+
  "";
}