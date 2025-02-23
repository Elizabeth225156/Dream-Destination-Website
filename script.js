//use Intersection Observer to determine if objects are within the viewport
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        //add in-view to class for animation
	    entry.target.classList.add('in-view');
		return;
	}
    entry.target.classList.remove('in-view');
	});
});

//get all the elements with the .animate class applied
const allAnimatedElements = document.querySelectorAll('.animate');
	
//add the observer to each of those elements
allAnimatedElements.forEach((element) => observer.observe(element));
