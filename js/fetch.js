let baseUrl = "https://artistic-melody-default-rtdb.firebaseio.com/";
const ext = '.json';

function checkUser(callback){
    const url=`${baseUrl}users${ext}`;
    fetch(url)
    .then((response) => response.json())
    .then(function(data){
        const userArr = data.filter((user)=>!!user);//finds all
        const user= userArr.find((users)=>users.username===$("#username-L").val());
        const email= userArr.find((user)=>user.email===$("#email-L").val());
            if(!!user & !!email) {// user was found and pull up the user post
                setUser(user);
                mainbtns();
                getPieces(displayPieces)
            } else {//user not found
                alert("User not found");
            }   
        })
    .catch((err)=>console.error(err))
};

function createUser(){
    const url= `${baseUrl}users${ext}`;
    fetch(url)
    .then((response) => response.json())
    .then(function(data){
        const userArr = data.filter((user)=>!!user);//finds all
        const user= userArr.find((users)=>users.username===$("#username-S").val());
            if(user) {// user was found so is not a new user
                alert("Username is used");
            } else {
                const newUserID=userArr.length+1;
                const newUser = {// makes the post object
                    [newUserID]: {
                        email: $("#email-S").val(),
                        name:  `${$("#first-name-S").val()} ${$("#last-name-S").val()}`,
                        username: $("#username-S").val(),
                        following: Math.floor(Math.random() * 100),
                        followers: Math.floor(Math.random() * 1000),
                        id: newUserID
                    }
                };
                const options = {
                    method: 'PATCH',
                    body: JSON.stringify(newUser)
                };
                fetch(url,options)
                    .then( response => response.json())
                    .then(function(data){
                            const userArr = data.filter((user)=>!!user);//finds all
                            const user= userArr.find((users)=>users.username===$("#username-L").val());
                setUser(user);
                mainbtns();
                getPieces(displayPieces)
            })
                    .then(mainbtns())
                    .then(getPieces(displayPieces))
                    .catch((err)=>console.error(err))
            }   
        })
    .catch((err)=>console.error(err))
};

function createPiece(){
    const url=`${baseUrl}posts${ext}`;
    const newId=Math.floor(Math.random() * 1000);
    const newPiece = {// makes the post object
        [newId]: {
            body: $("#new-piece-text").val(),
            date: new Date(),
            userId: currentUser.id,
            likes: Math.floor(Math.random() * 1000),
            comments: Math.floor(Math.random() * 1000),
            id: newId
        }
    };
const options = {
    method: 'PATCH',
    body: JSON.stringify(newPiece)
};
fetch(url,options)
    .then(getPieces(displayPieces))
    .then($("#new-piece-text").val(""))
    .catch((err)=>console.error(err))
};

function getPieces(callback){
    const url=`${baseUrl}posts${ext}`;
    fetch(url)
        .then( response => response.json())
        .then(function(data){
            let list =Object.keys(data);
            let mypieces=list.map( list => data[list] ).filter((piece)=>piece.userId===currentUser.id)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
            callback(mypieces)
        })
        .catch((err)=>console.error(err))
}

function undone(postId) {//deletes a post
    const url=`${baseUrl}posts/${postId}${ext}`;
    const options = {
    method: 'DELETE',
    };
    fetch(url)
        .then(getPosts(displayPosts));//refreshes list with post deleted
        .catch((err)=>console.error(err))
}

function remake(postId, editedText) {
    const url=`${baseUrl}posts${ext}`;
    const remadepiece = {// create object with properties that need to be changed
        body: editedText,
        date: new Date()
    }
    const options = {
    method: 'PATCH',
    body: JSON.stringify(remadepiece)
    };
    fetch(url)
        .then(getPosts(displayPosts));//refreshes list with updated post
        .catch((err)=>console.error(err))
}