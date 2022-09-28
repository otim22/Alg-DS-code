// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function reverse(str) {
	// Method 1
	// return str.split('').reverse().join('')

	// Method 2
	// const arr = str.split('')
	// newArr = []
	// for(let i = arr.length - 1; i >= 0; i--) {
	// 	newArr.push(arr[i])
	// }
	// return newArr.join('')

	// Method 3
	// let res = ""
	// for (let i = 0; i < str.length; i++) {
	// 	const char = str[i];
	// 	res = char + res
	// }
	// return res

	// Method 4
	return str.split('').reduce((output, char) => {
		output = char + output
		return output
	}, "");
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup('bdd');
const { assert } = chai;

describe('String Reversal', () => {
	it('reverse() correctly reverses string', () => {
		assert.equal(reverse('ffaa'), 'aaff');
		assert.equal(reverse('  aaff'), 'ffaa  ');
	});
});

mocha.run();