gsap.registerPlugin(scrollTrigger)
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
//const container = document.querySelectorAll("meta")
//console.log(container);
//I love mondays 

let tl1= gsap.timeline();
tl1.from(container1, {autoAlpha: 0, duration: 3})
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: container2, 
        start: "top 75%",
        end: "bottom bottom"
    }
});
scrollTrigger; {
    trigger; container2,
start;  "75%",
end; "bottom button"
markers; {
    startcolors; "red",
    endcolor; "green",
    fontsize; "18px",
    fontweight; "bold",
    index; 20,
}
}
tl2.fromTo(
    container2, 
    {
        //from state
        autoAlpha: 0,
    },
    {
        //to state
        
            autoAlpha: 1, 
            duration: 3
            
    }
)