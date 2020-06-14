import join from "lodash/join"
import './css/style.css'
import Icon from './img/smile_icon.svg'
import printMe from "./print"

//for example
function testSubtask() {
    const elementDiv = document.createElement('div');
    const btn = document.createElement('button');

    elementDiv.innerText = join(['Webpack', 'Project', 'Subtask1'], ' ');
    elementDiv.classList.add('title');

    const smileIcon = new Image();
    smileIcon.src = Icon;
    smileIcon.classList.add('icon');
    elementDiv.appendChild(smileIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    btn.classList.add('btn');
    elementDiv.appendChild(btn);

    return elementDiv

}

document.body.appendChild(testSubtask());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module! ');
        printMe();
    })
}