import "./TableHeader.css";

export default function TableHeader() {
	return (
		<thead className="TableHeader">
			<tr className="mainCategory">
				<th colSpan={7}></th>
				<th className="lightBorder" colSpan={2}>Quantity</th>
				<th className="lightBorder" colSpan={2}>Amount</th>
				<th colSpan={4}></th>
				<th className="lightBorder" colSpan={4}>Point Person</th>
				<th></th>
			</tr>
			<tr className="subCategory">
				<th>D.R. Number</th>
				<th>P.O. Number</th>
				<th>Status</th>
				<th>Supplier</th>
				<th>Industry</th>
				<th>Category</th>
				<th>SKU's</th>
				<th className="lightBorderLeft">Delivered</th>
				<th className="lightBorderRight">Accepted</th>
				<th className="lightBorderLeft">Delivered</th>
				<th className="lightBorderRight">Accepted</th>
				<th>Type</th>
				<th>Delivery Date</th>
				<th>ETA</th>
				<th>Date Created</th>
				<th className="lightBorderLeft">Surname</th>
				<th>First Name</th>
				<th>Username</th>
				<th className="lightBorderRight">ID</th>
				<th>Color</th>
			</tr>
			
			
		</thead>
	)
}