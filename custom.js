var navMenuTags = document.querySelectorAll('nav a');
console.log(navMenuTags);
for(let button of navMenuTags){
    button.addEventListener('click',function(event){
        console.log(event);
        event.preventDefault();
        var targetID = this.textContent.trim().toLowerCase();
        console.log(targetID);
        var targetSection = document.getElementById(targetID);
        console.log(targetSection);

        var intervalId = setInterval(() => {
            var targetSectionCordinates = targetSection.getBoundingClientRect();
            if(targetSectionCordinates.top < 0){
                clearInterval(intervalId);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
        
    });
}
