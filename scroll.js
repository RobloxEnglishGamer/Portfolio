const elements = document.querySelectorAll(".preview");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const classList = entry.target.classList;
    const intersecting = entry.isIntersecting;
    if (intersecting){
      classList.add("scroll-animation");
      observer.unobserve(entry.target);
    }
  })
},{
  threshold:0.1,
});

for(let element of elements){
  observer.observe(element);
}