import { getNextColour, colourCell } from '../utilities/colours';
import { sleep } from '../utilities/sleep';

async function sieveOfEratosthenes(n) {
	const integers = new Array(n + 1).fill(true);

	let colour = getNextColour();
	for (let i = 2; i < Math.sqrt(n); i++) {
		if (integers[i]) {
			for (let j = Math.pow(i, 2); j <= n; j += i) {
				await sleep();

				integers[j] = false;

				colourCell(j, colour);
			}
			colour = getNextColour(colour);
		}
	}
}

export {
	sieveOfEratosthenes,
};
