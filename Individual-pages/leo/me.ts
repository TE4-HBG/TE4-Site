let coolMode = false;
const title = document.getElementById("funny-cool");

interface cool {
    className: string;
    classToAdd: string;
}

const cools : cool[] = [
    {
        className: "enable-rainbow-text",
        classToAdd: "rainbow-text",
    }
]

function setCoolMode(state: boolean) {
  
    title.innerText = state ? "KLohger" : "Leo Kordelin Öhlander";


  
  title.classList.toggle("swag-title");
  
}
/*
function nextTitle() {
  setTitle(titleId);
  titleId = (titleId + 1) % names.length;
}
*/
