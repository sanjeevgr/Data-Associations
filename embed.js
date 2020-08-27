var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {
	useNewUrlParser: true, 
	useUnifiedTopology: true
});

//POST SCHEMA/MODEL - TITLE, CONTENT
var postSchema = new mongoose.Schema({
	title: String, 
	content: String
});

var Post = mongoose.model("Post", postSchema);

//USER SCHEMA/MODEL - EMAIL - NAME
var userSchema = new mongoose.Schema({
	email: String, 
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



// var newUser = new User({
// 	email: "san.gr.nc@gmail.com", 
// 	name: "Sanjeev Ganga Raju"
// });

// newUser.posts.push({
// 	title: "Hello", 
// 	content: "Hello, Version 1.1 Test!"
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Hello", 
// 	content: "Hello, Version 1.1 Test!"
// });
// newPost.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(user);
// 	}
// });

User.findOne({name: "Sanjeev Ganga Raju"}, function(err, user){
	if(err){
		console.log(err);
	}
	else{
		user.posts.push({
			title: "Hello 2",
			content: "Hello, Version 1.2 Test!"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			}
			else{
				console.log(user);
			}
		});
	}
});
