const heart = document.getElementById("heart");

let scale = 1;
const maxScale = 3;

heart.addEventListener("click", () => {
    scale += 0.2;

    heart.style.transform =
        `scale(${scale})`;

    if(scale >= maxScale){
        explode();
    }
});

function explode(){

    const rect = heart.getBoundingClientRect();

    heart.style.display = "none";

    const colors = [
        "#ff3b6b",
        "#ffcc00",
        "#00e5ff",
        "#00ff88",
        "#ffffff",
        "#ff6bff",
        "#ff914d"
    ];

    for(let i=0;i<220;i++){

        const piece = document.createElement("div");
        piece.classList.add("confetti");

        const size = Math.random()*10 + 4;

        piece.style.width = size + "px";
        piece.style.height = size + "px";
        piece.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        piece.style.left =
            rect.left + rect.width/2 + "px";
        piece.style.top =
            rect.top + rect.height/2 + "px";

        document.body.appendChild(piece);

        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random()*400;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        const rotation = Math.random() * 1080;

        piece.animate([
            {
                transform:"translate(0,0) rotate(0deg)",
                opacity:1
            },
            {
                transform:
                `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                opacity:0
            }
        ],{
            duration:1800 + Math.random()*1200,
            easing:"cubic-bezier(.1,.8,.2,1)",
            fill:"forwards"
        });

        setTimeout(()=>{
            piece.remove();
        },3200);
    }

    const text = document.querySelector(".message");
    text.remove();
    setTimeout(() => {
    window.location.href = "identify.html";
    }, 2000);
}