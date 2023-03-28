const COLOURS = ['#deffed', '#defeff', '#ffc7eb', '#fbffc7'];

const DEFAULT = '#ff7070';

function getNextColour(currentColour = COLOURS[0]) {
  return COLOURS[(COLOURS.indexOf(currentColour) + 1) % COLOURS.length];
}

function colourCell(n, colour) {
	const div = document.getElementById(String(n));
	if (div) {
		div.style.backgroundColor = colour;
	}
}

export {
	DEFAULT,
	getNextColour,
	colourCell,
};
