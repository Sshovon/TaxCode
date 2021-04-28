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

btn.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
        const userObj = myFunction();
        const response = await fetch("/admin/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: userObj.name,
                email: userObj.email,
                password: userObj.password,
            }),
        });

        if (response.status === 200) {
            alert('Admin successfully created');
            window.location = '/user/signin';
            
        } else {
            alert('Request failed!');
            location.reload();
            
        }
        
    } catch (err) {
        console.log(err);
    }
});
