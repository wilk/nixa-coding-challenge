import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Table extends Component {
	constructor(props) {
		super(props);
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];

		this.state = { people: this.people, sortParameter: props.sortParameter };
	}
	componentDidUpdate(prevProps) {
		if (this.props.sortParameter === prevProps.sortParameter) return;
		if (this.props.sortParameter === 'name') this.setState({ people: this.state.people.sort(this.compareNames) });
		else this.setState({ people: this.state.people.sort(this.compareDates) })
	}
	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		const diff = new Date(person1.birth) - new Date(person2.birth)
		if (diff < 0) return -1;
		if (diff > 0) return 1;
		return 0;
	}

	compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
		if (person1.name > person2.name) return 1;
		if (person2.name > person1.name) return -1;
		return 0;
	}

	render() {
		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{this.state.people.map(person => <tr key={person.name}>
							<td>{person.name}</td>
							<td>{person.birth}</td>
						</tr>)}
					</tbody>
				</table>
			</div>
		);

	}
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;
