const parallax_el =document.querySelectorAll(".parallax");

let xValue, yValue= 0;

    window.addEventListener("mousemove", (e) => {
        xValue= e.clientX - window. innerWidth / 2;
        yValue= e.clientY - window. innerHeight / 2;

        let zValue = 100;

       parallax_el.forEach((el) => {
        let speedx =el.dataset.speedx;
        let speedy =el.dataset.speedy;
        let speedz =el.dataset.speedz;

        let naesquerda = parseFloat (getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el). left)) * naesquerda * 0.1;
 
         el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) translatez(${zValue * speedz}px)`;
        });
    })