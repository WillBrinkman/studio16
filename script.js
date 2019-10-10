// TODO: add code here

function init() {
    const astronauts = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    astronauts.then(function (response) {
        response.json().then(function (json) {
            let div = document.getElementById("container");
            console.log(div);
            console.log(json);

            json.sort(function (a, b) {
                return (b.hoursInSpace - a.hoursInSpace)
            });


            // div.sort(a,b){
            // return a.hoursInSpace < b.hoursInSpace ;
            // }

            function greenTrue(active) {
                if (active === true) {
                    return `<li class="true-green">Active :  ${active}</li>`;
                } else {
                    return `<li>Active :  ${active}</li>`
                }
            }

            div.innerHTML += `<div>Astronaut Count: ${json.length}</div> <br>`;

            for (let i = 0; i < json.length; i++) {

                div.innerHTML += `
        
    <div class="container">
    
        <div class="astronaut">
        <div class="bio">
        
            <h3> ${json[i].firstName} ${json[i].lastName}</h3>
        <ul>

            
            <li>Hours in Space : ${json[i].hoursInSpace}</li>
            ${greenTrue(json[i].active)}
            <li>Skills : ${json[i].skills.join(", ")}</li>
        </ul>
        </div>
            <img class="avatar" src="${json[i].picture}">
        </div>
    </div>
    `;
            }

        })
    });
}

window.onload = init