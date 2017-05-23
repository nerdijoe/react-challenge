import React from 'react'
import {Colors, Button} from 'react-foundation';

class addPersonButton extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
			// console.log(Colors)
			return (
				<div className="button-basics-example">
					<Button color={Colors.SUCCESS} onClick={this.props.clickAddPerson}> Add </Button>
				</div>
			)


	}
}

export default addPersonButton