const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('Another click');
// });

let i = 0;

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 3) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', e => {
    e.preventDefault();

    console.log(e.target);
}, {once: true});
