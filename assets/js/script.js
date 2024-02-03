window.onload = () => {
    main();
}

const defaultValue = 'فرید کرمی';

const main = () => {
    print(defaultValue);
    document.getElementById("input").addEventListener("keyup", function(event) {
        const value = event.target.value || defaultValue;
        print(value);
    });
}

const print = (value) => {
    const items = document.querySelectorAll('[class*="item"]');
    [...items].map(item => {
        item.innerText = value;
    })
}

const convertNumbers2English = (string) => {
    return string.replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
    }).replace(/[\u06f0-\u06f9]/g, function (c) {
       return c.charCodeAt(0) - 0x06f0;
   });
}