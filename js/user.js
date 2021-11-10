let currentUser;

class NewUser {
// creates a user object given a firstname,
// lastname and username and email
    constructor(firstName, lastName, userName, email,userID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = userName;
    	this.email = email;
    }
    fullName(){
    	return `${this.firstName} ${this.lastName}`;
    }
};

function displayUser(user, postId) {
//displays the  user full name and username on a post
    $(`#fullname${postId}`).html(user.name);
    $(`#username${postId}`).html(`@${user.username}`);
};

function setUser(user) {// makes the current user into user
    currentUser = user;
};
function displayPieces(pieces){
	const myArt=document.querySelector(".pieces");
	myArt.innerHTML = "";
	pieces.forEach( piece => myArt.innerHTML+=
	`<div class="post">
  		<section class="Artist_img"></section>
  		<section class="Artist">
  			<p id="fullname${currentUser.id}">${currentUser.name}</p>
  			<p id="username${currentUser.id}">${currentUser.username}</p>
  		</section>
  		<section class="circle">
  			<section class="scircle"></section>
  			<section class="scircle"onclick="remake()"></section>
  			<section class="scircle"onclick="undone()"></section>
		</section>
		<section class="this-piece">
		<p style="font-size: 110%;">${piece.body}</p>
  		<p>${prettyDate(piece.date)}</p>
		</section>
	</div>`)
}