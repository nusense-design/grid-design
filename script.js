console.log('hello');

const btn = document.querySelector('button[aria-expanded]');
console.log(btn);

function toggle({target}) {
    const expand = target.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded',!expand)
    console.log("toggle -> expand", expand)
    
}

btn.addEventListener('click', toggle);