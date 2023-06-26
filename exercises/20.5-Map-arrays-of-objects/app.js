let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];
function calculateAge(birthDate) {
	// Convert the birth date string to a Date object
	const birthDateObj = new Date(birthDate);
  
	// Get the current date
	const currentDate = new Date();
  
	// Get the difference in years between the current year and the birth year
	const ageInYears = currentDate.getFullYear() - birthDateObj.getFullYear();
  
	// Check if the birth month and day have not occurred yet in the current year
	if (
	  currentDate.getMonth() < birthDateObj.getMonth() ||
	  (currentDate.getMonth() === birthDateObj.getMonth() &&
		currentDate.getDate() < birthDateObj.getDate())
	) {
	  // Subtract 1 from the age if the birth month and day have not passed yet
	  return ageInYears - 1;
	}
  
	return ageInYears;
  }
  
  // Example usage
  
  
let simplifier = function(person){
	return `Hello, my name is ${person.name} and I am ${calculateAge(person.birthDate)} years old`;
};

console.log(people.map(simplifier));