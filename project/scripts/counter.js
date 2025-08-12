const count = document.querySelector("#subscriber");


document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('subscriber') !== null) {
        let counter  = parseInt(localStorage.getItem('subscriber'), 10);
        counter += 1;
        localStorage.setItem('subscriber', counter.toString());
    } else {
        localStorage.setItem('subscriber', '1');
    }
    count.innerHTML = localStorage.getItem('subscriber');
});


  
