import "./TableRow.css";

export default function TableRow(props) {
	let data = props.data;
	return (
		<tr className="TableRow">
			<td>{data.dr}</td>
			<td>{data.po}</td>
			<td className="outlined centered">
				<div style={
					{borderColor: (data.status) ? "lightgreen" : "gold",
					color: (data.status) ? "green" : "darkgoldenrod"}
				}>
					{(data.status) ? "Delivered" : "In Transit"}
				</div>
			</td>
			<td>{data.supplier}</td>
			<td>{data.industry}</td>
			<td>{data.category}</td>
			<td>{data.sku_amt}</td>
			<td>{data.qty_delivered}</td>
			<td>{data.qty_accepted}</td>
			<td>₱{data.amt_delivered}</td>
			<td>₱{data.amt_accepted}</td>
			<td className="outlined centered">
				<div style={
					{borderColor: (data.type) ? "lightgreen" : "gold",
					color: (data.type) ? "green" : "darkgoldenrod"}
				}>
					{(data.type) ? "Full" : "Partial"}
				</div>
			</td>
			<td>{data.delivery_date}</td>
			<td>{data.eta}</td>
			<td>{data.creation_date}</td>
			<td>{data.point_person_surname}</td>
			<td>{data.point_person_firstname}</td>
			<td>{data.point_person_username}</td>
			<td>{data.point_person_id}</td>
			<td style={{backgroundColor: data.color}}>{data.color}</td>
		</tr>
	);
}