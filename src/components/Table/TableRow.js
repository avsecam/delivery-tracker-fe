import "./TableRow.css";

export default function TableRow(props) {
	let data = props.data;
	return (
		<tr className="TableRow">
			<td className="rowData">{data.dr}</td>
			<td className="rowData">{data.po}</td>
			<td className="rowData outlined">{makeReadable(data.status, "Delivered", "In Transit")}</td>
			<td className="rowData">{data.supplier}</td>
			<td className="rowData">{data.industry}</td>
			<td className="rowData">{data.category}</td>
			<td className="rowData">{data.sku_amt}</td>
			<td className="rowData">{data.qty_delivered}</td>
			<td className="rowData">{data.qty_accepted}</td>
			<td className="rowData">₱{data.amt_delivered}</td>
			<td className="rowData">₱{data.amt_accepted}</td>
			<td className="rowData outlined">{makeReadable(data.type, "Full", "Partial")}</td>
			<td className="rowData">{data.delivery_date}</td>
			<td className="rowData">{data.eta}</td>
			<td className="rowData">{data.creation_date}</td>
			<td className="rowData">{data.point_person_surname}</td>
			<td className="rowData">{data.point_person_firstname}</td>
			<td className="rowData">{data.point_person_username}</td>
			<td className="rowData">{data.point_person_id}</td>
			<td className="rowData" style={{backgroundColor: data.color}}>{data.color}</td>
		</tr>
	);
}

function makeReadable(bool, onTrue, onFalse) {
	if (bool) {
		return onTrue;
	}
	return onFalse;
}