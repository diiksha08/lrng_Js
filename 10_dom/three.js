<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur Code</title>
</head>
<body style="background-color: black; color: whitesmoke">
    
</body>
<script>
    <!--create a new element-->
    const div=document.createElement('div')
    console.log(div);
    div.className="main"
    div.id="myId"  
    div.id=Math.round(Math.random() * 10 +1)
    div.setAttribute("title", "generated Title")
    div.style.backgroundColor="blue"
    div.style.padding= "12px"
    // div.innerHTML="Chai aur Code"
    const addText=document.createTextNode('Chai Aur Code')
    div.appendChild(addText)

    document.body.appendChild(div)
</script>
</html>