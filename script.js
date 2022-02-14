var body = document.body;
var mobilemenu = document.getElementById("mobile-navitems");
var navbar = document.getElementById("navholder");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastscroll = 0;

// Mobile menu
function showMenu(){
    if(!mobilemenu.classList.contains("show")){
        mobilemenu.classList.add("show");
    }
    else{
        mobilemenu.classList.remove("show");
    }
}

window.addEventListener("scroll", () => {
    const currentOffset = window.scrollY;
    if(currentOffset <= 0){
        body.classList.remove(scrollUp);
        return;
    }
    if(currentOffset > lastscroll && !body.classList.contains(scrollDown)){
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    }
    else if(currentOffset < lastscroll && body.classList.contains(scrollDown)){
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastscroll = currentOffset;
});
