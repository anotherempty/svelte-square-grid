interface Span {
	direction: 'row' | 'col' | '';
	amount: number;
}

export function span(node: HTMLElement, { direction, amount }: Span): void {
	if (direction === '') return;
	const spanning = { row: 'grid-row-end', col: 'grid-column-end' }[direction];
	Object.assign(node.style, {
		[spanning]: `span ${amount}`
	});
}
