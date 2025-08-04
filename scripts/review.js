document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('reviewPosted') !== null) {
        let counter  = parseInt(localStorage.getItem('reviewPosted'), 10);
        counter += 1;
        localStorage.setItem('reviewPosted', counter.toString());
    } else {
        localStorage.setItem('reviewPosted', '1');
    }
});