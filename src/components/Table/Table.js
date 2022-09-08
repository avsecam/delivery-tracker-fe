import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table(props) {
	return (
		<table className="Table">
			<TableHeader />
			<TableRow />
		</table>
	);
	//for each row in data, create a TableRow
}