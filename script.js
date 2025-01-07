 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.")
        return
    }
	let area = Math.PI * Math.pow(radius, 2)
	 area = area.toFixed(2)
	alert(`The area of the circle with radius ${radius} is ${area}`)
           
}
calculateArea();
