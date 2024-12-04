const body = document.querySelector("body");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const question = document.createElement("input");
const magic8Ball = document.createElement("button");
const author = document.createElement("p");
let answer;
let response;

h1.innerText = "Magic 8-Ball";
p.innerText = "Ask me what you want to know and click on the Magic 8-Ball…";
question.type = "text";
magic8Ball.addEventListener("click", asks);
magic8Ball.innerText = "8";
author.innerText = "© 2021 Gabriel Ricardo";
body.appendChild(h1);
body.appendChild(p);
body.appendChild(question);
body.appendChild(magic8Ball);
body.appendChild(author);
question.focus();
question.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        magic8Ball.click();
    }
});

function asks(min, max) {
    min = Math.ceil(1);
    max = Math.ceil(20);
    if (question.value.length !== 0) {
        if (magic8Ball.innerText === "8") {
            response = Math.floor(Math.random() * (max - min + 1)) + min;
            switch (response) {
                case 1:
                    answer = "It is\nCertain";
                    break;
                case 2:
                    answer = "Reply\nhazy, try\nagain";
                    break;
                case 3:
                    answer = "As I\nsee it,\nyes";
                    break;
                case 4:
                    answer = "Don't\ncount\non it";
                    break;
                case 5:
                    answer = "It is\ndecidedly\nso";
                    break;
                case 6:
                    answer = "Ask\nagain\nlater";
                    break;
                case 7:
                    answer = "Most\nlikely";
                    break;
                case 8:
                    answer = "My\nreply\nis no";
                    break;
                case 9:
                    answer = "Without\na\ndoubt";
                    break;
                case 10:
                    answer = "Better not\ntell you\nnow";
                    break;
                case 11:
                    answer = "Outlook\ngood";
                    break;
                case 12:
                    answer = "My\nsources\nsay no";
                    break;
                case 13:
                    answer = "Yes\ndefinitely";
                    break;
                case 14:
                    answer = "Cannot\npredict\nnow";
                    break;
                case 15:
                    answer = "Yes";
                    break;
                case 16:
                    answer = "Outlook\nnot so\ngood";
                    break;
                case 17:
                    answer = "You\nmay rely\non it";
                    break;
                case 18:
                    answer = "Concentrate\nand ask\nagain";
                    break;
                case 19:
                    answer = "Signs\npoint\nto yes";
                    break;
                case 20:
                    answer = "Very\ndoubtful";
                    break;
                default:
                    answer = "?";
            }
            magic8Ball.innerText = answer;
            magic8Ball.style = "background-color: #00f;" + "color: #fff;" + "font-size: 1.3rem;"
            question.focus();
        } else {
            magic8Ball.innerText = "8";
            magic8Ball.style = "background-color: #fff;" + "color: #000;" + "font-size: 5.3rem;"
            question.value = "";
            question.focus();
        }
    } else {
        question.focus();
    }
    return answer;
}