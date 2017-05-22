import React from 'react'

const Person = (props) => {
	const index = props.match.params.index
	console.log(props)
	// const index = parseInt(props.match.params.index, 10)
	console.log("index = " + index)
	let people = props.getPeople
	console.log(props.getPeople)

	if(people.length === 0) {
		return (
			<div>
				<h3>Loading data from galaxy far away..</h3>
			</div>
		)
	}
	else if (index > people.length) {
			<div>
				<h3>Data Error..</h3>
			</div>
	}
	else {
		return (
			<div>
				<h3> Details for Person {index} </h3>
				<ul>
					<li>Name: {people[index].name}</li>
					<li>Height: {people[index].height}</li>
					<li>Mass: {people[index].mass}</li>
					<li>Hair Color: {people[index].hair_color}</li>
					<li>Skin Color: {people[index].skin_color}</li>
					<li>Eye Color: {people[index].eye_color}</li>
					<li>Birth year: {people[index].birth_year}</li>
					<li>Gender: {people[index].gender}</li>
				</ul>
			</div>
		)		
	}
}


export default Person
