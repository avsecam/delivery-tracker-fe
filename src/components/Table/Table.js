import "./Table.css";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export default function Table(props) {
	let [page, setPage] = useState(0);

	let numberOfPages = Math.floor(props.data.length / ITEMS_PER_PAGE);
	let slicedData = props.data.slice(
		(page) * ITEMS_PER_PAGE,
		(page + 1) * ITEMS_PER_PAGE
	);

	return (
		<div className="Table">
			<table>
					<TableHeader />
					<tbody>
						{slicedData.map((item) => {
							return (<TableRow data={item}/>);
						})}
					</tbody>
			</table>
			<div className="pagination">
				<button className="previousPage">&lt;</button>
				{createPageButtons(numberOfPages)}
				<button className="nextPage">&gt;</button>
			</div>
		</div>
	);
}

function createPageButtons(numberOfPages) {
	let pageButtons = [];
	for (let i = 0; i < numberOfPages; i++) {
		pageButtons.push(
			<button className="pageNumber">{i + 1}</button>
		);
	}
	return pageButtons;
}