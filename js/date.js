const events = [
{
    month: "ABRIL",
    days: [19,20,21,22,23],
    active: 2,
    phrase: "Primeras señales ✨"
},
{
    month: "ABRIL",
    days: [23,24,25,26,27],
    active: 2,
    phrase: "Alguien se fijó en los aretes que llevaba en una foto... haciendo bastante zoom XD 🔍"
},
{
    month: "MAYO",
    days: [29,30,1,2,3],
    active: 2,
    phrase: "Una invitación a almorzar... ¿un pastoreo? 🤔"
},
{
    month: "MAYO",
    days: [30,1,2,3,4],
    active: 2,
    phrase: "Alguien fue valiente y eso convirtió el 2 de mayo en el comienzo de nuestra historia ❤️"
},
{
    month: "Desde entonces",
    days: ["","","2","",""],
    active: 2,
    phrase: "han pasado...",
    counter:true
}
];
const month = document.getElementById("month");
const timeline = document.getElementById("timeline");
const phrase = document.getElementById("phrase");
function createCounter(){

    const counter = document.getElementById("counter");

    const finalDays = 564;

    let currentDay = 1;

    counter.innerHTML = `
        <div class="love-counter">
            <div id="days-number">1 días</div>
        </div>
    `;

    const numberElement =
        document.getElementById("days-number");

    const interval = setInterval(() => {

    currentDay += 4;

    if(currentDay >= finalDays){

        currentDay = finalDays;

        numberElement.textContent = currentDay+" días";

        clearInterval(interval);

        setTimeout(() => {

            document.querySelector(".love-counter")
                .insertAdjacentHTML(
                    "beforeend",
                    `<p class="final-message">
                    desde que comenzó nuestra historia ❤️
                    </p>`
                );

        }, 800);

        return;
    }

    numberElement.textContent = currentDay+" días";

}, 10);

}
function render() {

    const event = events[current];

    month.textContent = event.month;
    phrase.textContent = event.phrase;

    timeline.innerHTML = "";

    event.days.forEach((day, index) => {

        const item = document.createElement("div");

        item.className =
            index === event.active
            ? "item active-dot"
            : "item";

        item.innerHTML = `
            <span>${day}</span>
            <div class="dot"></div>
        `;

        timeline.appendChild(item);

    });

    const counter = document.getElementById("counter");

    if(event.counter){

        counter.style.display = "block";

        if(!counter.dataset.started){
            counter.dataset.started = "true";
            createCounter();
        }

    }else{

        counter.style.display = "none";
        counter.innerHTML = "";
        delete counter.dataset.started;

    }

}
let current = 0;

next.addEventListener("click", () => {

    if(current < events.length - 1){
        current++;
        render();
    }

});

prev.addEventListener("click", () => {

    if(current > 0){
        current--;
        render();
    }

});
story.classList.add("fade");
story.classList.add("fade");

setTimeout(() => {

    render();

    story.classList.remove("fade");

}, 600);