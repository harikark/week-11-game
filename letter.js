
// seeing whether or not a letter appears as a "_" or as itself on-screen.
//pass in later into function

var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return!(this.appear) ? "_" : this.charac;
	};
};

//export this constructor
module.exports = letter;