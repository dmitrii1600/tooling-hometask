import join from "lodash/join"
import './style.css'
import Icon from './smile_icon.svg'

//for example
function testSubtask() {
    const elementDiv = document.createElement("div");

    elementDiv.innerText = join(['Webpack', 'Project', 'Hometask1'], ' ');
    elementDiv.classList.add('title');

    const smileIcon = new Image();
    smileIcon.src = Icon;
    smileIcon.classList.add('icon');
    elementDiv.appendChild(smileIcon);

    return elementDiv

}

document.body.appendChild(testSubtask());