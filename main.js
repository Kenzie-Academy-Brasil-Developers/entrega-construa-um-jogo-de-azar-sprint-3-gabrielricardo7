const body = document.querySelector("body");
const button = document.createElement("button");
let answer;
let response;

button.addEventListener("click", asks);
button.innerText = "Pergunta";
body.appendChild(button);

function asks(min, max) {
    min = Math.ceil(1);
    max = Math.ceil(20);
    response = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (response) {
        case 1:
            answer = "It is Certain";
            break;
        case 2:
            answer = "Reply hazy, try again";
            break;
        case 3:
            answer = "As I see it, yes";
            break;
        case 4:
            answer = "Don't count on it";
            break;
        case 5:
            answer = "It is decidedly so";
            break;
        case 6:
            answer = "Ask again later";
            break;
        case 7:
            answer = "Most likely";
            break;
        case 8:
            answer = "My reply is no";
            break;
        case 9:
            answer = "Without a doubt";
            break;
        case 10:
            answer = "Better not tell you now";
            break;
        case 11:
            answer = "Outlook good";
            break;
        case 12:
            answer = "My sources say no";
            break;
        case 13:
            answer = "Yes definitely";
            break;
        case 14:
            answer = "Cannot predict now";
            break;
        case 15:
            answer = "Yes";
            break;
        case 16:
            answer = "Outlook not so good";
            break;
        case 17:
            answer = "You may rely on it";
            break;
        case 18:
            answer = "Concentrate and ask again";
            break;
        case 19:
            answer = "Signs point to yes";
            break;
        case 20:
            answer = "Very doubtful";
            break;
        default:
            answer = "?";
    }
    console.log(answer);
    return answer;
}