//your JS code here. If required.
const output = document.getElementById("output");

function getPromise(){
	return new Promise((response, reject)=>{
		setTimeout(()=>{
			response("Hello, world!")
		}, 1000);
	})
}

getPromise().then(response=>{
	output.textContent = response;
});