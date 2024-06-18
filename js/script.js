// '🃏'
// '🍒'
// '🍊'
// '🍇'
// '🍓'
// '🍉'


const firstSlotElement = document.getElementById('first-slot');
const secondSlotElement = document.getElementById('second-slot');
const thirdSlotElement = document.getElementById('third-slot');
const message = document.getElementById('message');
const button = document.getElementById('start');
const wrapper = document.querySelector('.wrapper-slot-machine')

function putNumberInCard(element, number) {
    const newSpan = "<span class='bounce'>" + number + "</span>";
    element.innerHTML = newSpan;
    return element;
}

function replaceNumberWithEmoji(element) {
    const numberToEmoji = element.innerHTML;
    if (numberToEmoji.includes('1')) {
        return element.innerHTML = numberToEmoji.replace('1', '🃏');
    } else if (numberToEmoji.includes('2')) {
        return element.innerHTML = numberToEmoji.replace('2', '🍒');
    } else if (numberToEmoji.includes('3')) {
        return element.innerHTML = numberToEmoji.replace('3', '🍊');
    } else if (numberToEmoji.includes('4')) {
        return element.innerHTML = numberToEmoji.replace('4', '🍇');
    } else if (numberToEmoji.includes('5')) {
        return element.innerHTML = numberToEmoji.replace('5', '🍓');
    } else if (numberToEmoji.includes('6')) {
        return element.innerHTML = numberToEmoji.replace('6', '🍉');
    }
}

function checkJolly(element) {
    if (element === '1') {
        return true;
    } else {
        return false;
    }
}

function checkFruits(element1, element2, element3) {
    if (element1 == element2) {
        return true;
    }
    if (element2 == element3) {
        return true;
    }
    if (element1 == element3) {
        return true;
    }
    return false;
}


button.addEventListener('click',
    function () {
        const randomNumber1 = Math.floor(Math.random() * 6 + 1);
        const randomNumber2 = Math.floor(Math.random() * 6 + 1);
        const randomNumber3 = Math.floor(Math.random() * 6 + 1);

        message.innerHTML = '';
        wrapper.classList.remove('flash');

        const firstSlotSpan = putNumberInCard(firstSlotElement, randomNumber1);
        const secondSlotSpan = putNumberInCard(secondSlotElement, randomNumber2);
        const thirdSlotSpan = putNumberInCard(thirdSlotElement, randomNumber3);

        const firstSlotNumber = firstSlotSpan.innerText;
        const secondSlotNumber = secondSlotSpan.innerText;
        const thirdSlotNumber = thirdSlotSpan.innerText;

        const isJolly1 = checkJolly(firstSlotNumber);
        const isJolly2 = checkJolly(secondSlotNumber);
        const isJolly3 = checkJolly(thirdSlotNumber);

        const twoFruitsEqual = (checkFruits(firstSlotNumber, secondSlotNumber, thirdSlotNumber))
        const onlyOneJolly = ((checkJolly(firstSlotNumber) + checkJolly(secondSlotNumber) + checkJolly(thirdSlotNumber)) == 1)

        if ((firstSlotNumber == 1 && secondSlotNumber === thirdSlotNumber) ||
            (secondSlotNumber == 1 && firstSlotNumber === thirdSlotNumber) ||
            (thirdSlotNumber == 1 && secondSlotNumber === firstSlotNumber) ||
            firstSlotNumber === secondSlotNumber && secondSlotNumber === thirdSlotNumber) {
            message.innerHTML = 'You win!';
            wrapper.classList.add('flash');

        } else {
            message.innerHTML = 'You lose!';
        }

        replaceNumberWithEmoji(firstSlotSpan);
        replaceNumberWithEmoji(secondSlotSpan);
        replaceNumberWithEmoji(thirdSlotSpan);

    })