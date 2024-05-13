const exps = [
    {
        name: "Alphabet Inc",
        dateRange: "2017-2018",
        description: "yadda yadda yadda yadda"

    },
    {
        name: "lol",
        dateRange: "2020-2011",
        description: "lol",
    }
]

const timeline = document.getElementById("experiences");

for (let i = 0; i < exps.length; i++) {

    const expContent = `
    <div class="relative flex-1 pt-2 w-1/2 left-0">
        <div class="text-black bg-white relative border-4 rounded border-white">
            <h2 class="font-black text-4xl pl-3 pt-3">${exps[i].name}</h2>
            <small class="text-gray-800 pl-3">${exps[i].dateRange}</small>
            <p class="pl-3 pb-3">${exps[i].description}</p>
        </div>
    </div>
    `

    timeline.innerHTML += expContent;
}

