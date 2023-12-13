function makeid(l) {
  // write your code here
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345789';
	for(let i=0; i<l; i++){
		result+=characters.charAt(Math.floor(Math.random()*characters.length));		
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
