fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json;
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

// fetch mechanism two prts me divide hai; fetch('url', {object})
// web browser/node ki api request handle krne me aur 
// variables, memory me data space reserve krne k liye 
// pehla part runs pehle : on fulfilled [] ->promise ka resolve
//on rejection [] -> promise ka reject, direct value push krna allow nahi hai inn arrays me as 
// out of our range, private field hoti h

//web browser/node: web browser base api / node base api handle krega
// yaha se jaati hai network request-> agar request jaake response mil raha hai toh ye always 
// on fulfilled me jaayega aur request atak gayi ya response nahi mila toh  uss case me rejection ayega

