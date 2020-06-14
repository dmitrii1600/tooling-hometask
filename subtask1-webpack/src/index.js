import join from "lodash/join"

//for example
function testSubtask() {
    const elementDiv = document.createElement("div");

    elementDiv.innerText = join(['Webpack', 'Project', 'Hometask1'], ' ');

    return elementDiv

}

document.body.appendChild(testSubtask());