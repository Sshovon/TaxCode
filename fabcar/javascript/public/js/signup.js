const btn = document.querySelector(".btn");
function myFunction() {
    var elements = document.getElementById("myForm").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    return obj;
}

console.log(btn);

btn.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
        const userObj = myFunction();
        const response = await fetch("/user/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: userObj.name,
                email: userObj.email,
                password: userObj.password,
                revenue: userObj.revenue,
                sharemarketvalue: userObj.sharemarketvalue,
                manufacturingorigin: userObj.manufacturingorigin,
                assemblingorigin: userObj.assemblingorigin,
            }),
        });
        if (response.status === 200) {
            alert("Client information successfully stored");
            window.location.assign("/user/signin");  
        } 
    } catch (e) {
        alert("Registration failed!");
        console.log(e);
    }
});



