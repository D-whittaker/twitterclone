function start(){
	document.getElementById("login").style.display="none ";
	document.getElementById("signup").style.display="none";
	document.getElementById("main").style.display="none";
	document.getElementById("home").style.display="initial";
};

function loginbtn(){// connect to the login page
	document.getElementById("login").style.display="initial";
	document.getElementById("signup").style.display="none";
	document.getElementById("home").style.display="none";
};
function signupbtn(){// connect to the sign page
	document.getElementById("login").style.display="none";
	document.getElementById("signup").style.display="initial";
	document.getElementById("home").style.display="none";
};
function mainbtns(){// connect to the newsfeed page
	document.getElementById("login").style.display="none";
	document.getElementById("signup").style.display="none";
	document.getElementById("main").style.display="initial";
};
function homebtns(){// connect to the home page
	document.getElementById("login").style.display="none";
	document.getElementById("signup").style.display="none";
	document.getElementById("main").style.display="none";
	document.getElementById("home").style.display="initial";
};