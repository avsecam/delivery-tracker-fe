import "./TableHeader.css";

export default function TableHeader() {
	return (
		<tr className="TableHeader">
			<th className="columnHeader">D.R. Number</th>
			<th className="columnHeader">P.O. Number</th>
			<th className="columnHeader">Status</th>
			<th className="columnHeader">Supplier</th>
			<th className="columnHeader">Industry</th>
			<th className="columnHeader">Category</th>
			<th className="columnHeader">SKU's</th>
			<th className="columnHeader">Quantity Delivered</th>
			<th className="columnHeader">Quantity Accepted</th>
			<th className="columnHeader">Amount Delivered</th>
			<th className="columnHeader">Amount Accepted</th>
			<th className="columnHeader">Type</th>
			<th className="columnHeader">Delivery Date</th>
			<th className="columnHeader">ETA</th>
			<th className="columnHeader">Date Created</th>
			<th className="columnHeader">Point Person Surname</th>
			<th className="columnHeader">Point Person First Name</th>
			<th className="columnHeader">Point Person Username</th>
			<th className="columnHeader">Point Person ID</th>
			<th className="columnHeader">Color</th>
		</tr>
	)
}