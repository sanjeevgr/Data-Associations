var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_R", {
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
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});

var User = mongoose.model("User", userSchema);

// User.create({
// 	email: "sanjeevhhs@gmail.com",
// 	name: "Jeev Raju"
// });

// Post.create({
// 	title: "Hello Pt3", 
// 	content: "HELLOW MFS HAHAHHA"
// }, function(err, post){
// 			User.findOne({email: "sanjeevhhs@gmail.com"}, function(err, user){
// 				if(err){
// 					console.log(err);
// 				}
// 				else{
// 					user.posts.push(post);
// 					user.save(function(err, data){
// 						if(err){
// 							console.log(err);
// 						}
// 						else{
// 							console.log(data);
// 						}
// 					});
// 				}
// 			});
// });

User.findOne({email: "sanjeevhhs@gmail.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	} else{
		console.log(user);
	}
})

