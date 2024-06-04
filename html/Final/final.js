const storedrace = sessionStorage.getItem("race")

function race() {
    var newElement = document.createElement('div');
    newElement.setAttribute('id', 'myNewElement');
    newElement.classList.add('race');
    if (storedrace === "Dragonborn"){
    var textElement = document.createElement('span');
    textElement.textContent = 'Dragonborn';
    newElement.appendChild(textElement);
    }
    else if (storedrace === "Dwarf") {
    var textElement = document.createElement('span');
    textElement.textContent = 'Dwarf';
    newElement.appendChild(textElement);;
    }
    else if (storedrace === "Elf") {
        var textElement = document.createElement('span');
        textElement.textContent = 'Elf';
        newElement.appendChild(textElement);;
    }
    else if (storedrace === "Half-Elf") {
        var textElement = document.createElement('span');
        textElement.textContent = 'Half-Elf';
        newElement.appendChild(textElement);;
    }
    else if (storedrace === "Human") {
        var textElement = document.createElement('span');
        textElement.textContent = 'Human';
        newElement.appendChild(textElement);;
    }
    var parentElement = document.getElementById('raceContainer');
parentElement.appendChild(newElement);
}

const storedsubrace = sessionStorage.getItem("subrace")

function Subrace() {
    var subraceElement = document.createElement('span');
    subraceElement.setAttribute('id', 'myElement');
    subraceElement.classList.add('subrace')
    if (storedsubrace === "Red"){
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'Red';
    }
    else if (storedsubrace === "Blue") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'Blue';
    }
    else if (storedsubrace === "Mountain") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'Mountain';
    }
    else if (storedsubrace === "Hill") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'Hill';
    }
    else if (storedsubrace === "High") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'High';
    }
    else if (storedsubrace === "Wood") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'Wood';
    }
    else if (storedsubrace === "Blue") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'Blue';
    }
    else if (storedrace === "Half-Elf") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'No subrace';
    }
    else if (storedrace === "Human") {
        var subracetextElement = document.createElement('span');
        subracetextElement.textContent = 'No subrace';
    }
    subraceElement.appendChild(subracetextElement);
    var parentElement = document.getElementById('subraceContainer');
    parentElement.appendChild(subraceElement);
}

const storedlevel = sessionStorage.getItem("level")

function Level() {
    var levelElement = document.createElement('span');
    levelElement.setAttribute('id', 'mylevelElement');
    levelElement.classList.add('level')
    if (storedlevel === 'Level 1'){
        var leveltextElement = document.createElement('span');
        leveltextElement.textContent = 'Level 1';
    }
    else if (storedlevel === 'Level 2'){
        var leveltextElement = document.createElement('span');
        leveltextElement.textContent = 'Level 2';
    }
    else if (storedlevel === 'Level 3'){
        var leveltextElement = document.createElement('span');
        leveltextElement.textContent = 'Level 3';
    }
    else if (storedlevel === 'Level 4'){
        var leveltextElement = document.createElement('span');
        leveltextElement.textContent = 'Level 4';
    }
    else if (storedlevel === 'Level 5'){
        var leveltextElement = document.createElement('span');
        leveltextElement.textContent = 'Level 5';
    }
    levelElement.appendChild(leveltextElement);
    var parentElement = document.getElementById('levelContainer');
    parentElement.appendChild(levelElement);
}

const storedclass = sessionStorage.getItem("class")

function Class() {
    var classElement = document.createElement('span');
    classElement.setAttribute('id', 'myclassElement');
    classElement.classList.add('class')
    if (storedclass === "Barbarian"){
        var classtextElement = document.createElement('span');
        classtextElement.textContent = 'Barbarian';
    }
    else if (storedclass === "Druid"){
        var classtextElement = document.createElement('span');
        classtextElement.textContent = 'Druid';
    }
    else if (storedclass === "Fighter"){
        var classtextElement = document.createElement('span');
        classtextElement.textContent = 'Fighter';
    }
    else if (storedclass === "Wizard"){
        var classtextElement = document.createElement('span');
        classtextElement.textContent = 'Wizard';
    }
    classElement.appendChild(classtextElement);
    var parentElement = document.getElementById('classContainer');
    parentElement.appendChild(classElement);
}

const storedsubclass = sessionStorage.getItem("subclass")

function Subclass() {
    var subclassElement = document.createElement('span');
    subclassElement.setAttribute('id', 'mysubclassElement');
    subclassElement.classList.add('class');
    if (storedsubclass === "Berserker"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Berserker';
    }
    else if (storedsubclass === "Zealot"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Zealot';
    }
    else if (storedsubclass === "Moon"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Moon';
    }
    else if (storedsubclass === "Land"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Land';
    }
    else if (storedsubclass === "Champion"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Champion';
    }
    else if (storedsubclass === "Eldrich knight"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Eldrich knight';
    }
    else if (storedsubclass === "Abjuration"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Abjuration';
    }
    else if (storedsubclass === "Necromancy"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'Necromancy';
    }
    else if (storedclass === "Barbarian" && storedlevel === "Level 1"| storedlevel === "Level 2"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'No subclass';
    }
    else if (storedclass === "Druid" && storedlevel === "Level 1"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'No subclass';
    }
    else if (storedclass === "Fighter" && storedlevel === "Level 1"| storedlevel === "Level 2"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'No subclass';
    }
    else if (storedclass === "Wizard" && storedlevel === "Level 1"){
        var subclasstextElement = document.createElement('span');
        subclasstextElement.textContent = 'No subclass';
    }
    subclassElement.appendChild(subclasstextElement);
    var parentElement = document.getElementById('subclassContainer');
    parentElement.appendChild(subclassElement);
}``