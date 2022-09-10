import "./Table.css";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export default function Table(props) {
	let [currentPage, setPage] = useState(0);

	let numberOfPages = Math.ceil(props.data.length / ITEMS_PER_PAGE);
	
	let slicedData = [];
	for (let page = 0; page < numberOfPages; page++) {
		slicedData.push(props.data.slice(
			(page) * ITEMS_PER_PAGE,
			(page + 1) * ITEMS_PER_PAGE
		));
	}

	function movePage(pageNumber) {
		if (pageNumber < 0 || pageNumber > numberOfPages - 1) return;
		setPage(pageNumber);
	}

	function createPageButtons(numberOfPages) {
		let pageButtons = [];
		for (let i = 0; i < numberOfPages; i++) {
			let buttonClassName = (i === currentPage) ? "pageButton activePage" : "pageButton"; 
			pageButtons.push(
				<button className={buttonClassName} onClick={() => movePage(i)}>{i + 1}</button>
			);
		}
		return pageButtons;
	}
		
	return (
		<div className="Table">
			<table>
					<TableHeader />
					<tbody>
						{slicedData[currentPage].map((item) => {
							return (<TableRow data={item}/>);
						})}
					</tbody>
			</table>
			<div className="pagination">
				<button className="previousPage" onClick={() => movePage(currentPage - 1)}>&lt;</button>
				{createPageButtons(numberOfPages)}
				<button className="nextPage" onClick={() => movePage(currentPage + 1)}>&gt;</button>
			</div>
		</div>
	);
}