import "./Table.css";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table(props) {
	let data = props.data;
	return (
		<table className="Table">
				<TableHeader />
				<tbody>
					{data.map((item) => {
						return (<TableRow data={item}/>);
					})}
				</tbody>
		</table>
	);
}