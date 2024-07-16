const substitutions = {
	"tahẽ̠kana": "ᱛᱟᱦᱮᱸᱠᱟᱱᱟ",
	"mo̠ńj": "ᱢᱚᱸᱡᱽ",
	"ruạṛ": "ᱨᱩᱣᱟᱹᱲ",
	"re̠ń": "ᱨᱤᱱ",
	"iạu": "ᱤᱭᱟᱹᱣ",
	"ea": "ᱮᱭᱟ",
	"Ea": "ᱮᱭᱟ",
	"Ae": "ᱟᱭ",
	"ại": "ᱟᱹᱭ",
	"ai": "ᱟᱭ",
	"Ai": "ᱟᱭ",
	"AI": "ᱟᱭ",
	"Ại": "ᱟᱹᱭ",
	"ẠI": "ᱟᱹᱭ",
	"ạṛ": "ᱟᱹᱲ",
	"ạe": "ᱟᱹᱭ",
	"AE": "ᱟᱭ",
	"Ao": "ᱟᱣ",
	"AO": "ᱟᱣ",
	"ão": "ᱟᱶ",
	"ÃO": "ᱟᱶ",
	"Ão": "ᱟᱶ",
	"ÃU": "ᱟᱶ",
	"Ãu": "ᱟᱶ",
	"ãu": "ᱟᱶ",
	"ạu": "ᱟᱹᱣ",
	"Ạ̃U": "ᱟᱹᱶ",
	"Ạ̃u": "ᱟᱹᱶ",
	"ạ̃u": "ᱟᱹᱶ",
	"au": "ᱟᱣ",
	"AU": "ᱟᱣ",
	"Au": "ᱟᱣ",
	"Bh": "ᱵᱷ",
	"BH": "ᱵᱷ",
	"bh": "ᱵᱷ",
	"c̕a": "ᱡᱼᱟ",
	"c̕e": "ᱡᱼᱮ",
	"ch": "ᱪᱷ",
	"CH": "ᱪᱷ",
	"Da": "ᱫᱟ",
	"De": "ᱫᱮ",
	"Di": "ᱫᱤ",
	"Do": "ᱫᱚ",
	"Do̠": "ᱫᱚ",
	"Du": "ᱫᱩ",
	"ḍh": "ᱰᱷ",
	"dh": "ᱫᱷ",
	"EA": "ᱮᱭᱟ",
	"EI": "ᱮᱭ",
	"ei": "ᱮᱭ",
	"Ei": "ᱮᱭ",
	"EO": "ᱮᱭᱚ",
	"Eo": "ᱮᱭᱚ",
	"eo": "ᱮᱭᱚ",
	"Eu": "ᱮᱣ",
	"eu": "ᱮᱣ",
	"EẠ": "ᱮᱭᱟᱹ",
	"Eạ": "ᱮᱭᱟᱹ",
	"eạ": "ᱮᱭᱟᱹ",
	"EU": "ᱮᱣ",
	"gʼa": "ᱜᱼᱟ",
	"gʼe": "ᱜᱼᱮ",
	"gʼi": "ᱜᱼᱤ",
	"gʼo": "ᱜᱼᱚ",
	"gʼu": "ᱜᱼᱩ",
	"gh": "ᱜᱷ",
	"GH": "ᱜᱷ",
	"ia": "ᱤᱭᱟ",
	"iạ": "ᱤᱭᱟᱹ",
	"IA": "ᱤᱭᱟ",
	"IẠ": "ᱤᱭᱟᱹ",
	"Iạ": "ᱤᱭᱟᱹ",
	"Ia": "ᱤᱭᱟ",
	"Ie": "ᱤᱭᱮ",
	"ie": "ᱤᱭᱮ",
	"IE": "ᱤᱭᱮ",
	"IO": "ᱤᱭᱚ",
	"Io": "ᱤᱭᱚ",
	"io": "ᱤᱭᱚ",
	"iu": "ᱤᱣ",
	"IU": "ᱤᱣ",
	"jʼa": "ᱡᱼᱟ",
	"jʼe": "ᱡᱼᱮ",
	"jʼi": "ᱡᱼᱤ",
	"jʼo": "ᱡᱼᱚ",
	"jʼu": "ᱡᱼᱩ",
	"Jh": "ᱡᱷ",
	"JH": "ᱡᱷ",
	"kʼa": "ᱜᱼᱟ",
	"k'a": "ᱜᱼᱟ",
	"kʼe": "ᱜᱼᱮ",
	"kʼi": "ᱜᱼᱤ",
	"kʼo": "ᱜᱼᱚ",
	"kʼu": "ᱜᱼᱩ",
	"k̕a": "ᱜᱼᱟ",
	"k̕e": "ᱜᱼᱮ",
	"kh": "ᱠᱷ",
	"Oa": "ᱚᱣᱟ",
	"OA": "ᱚᱣᱟ",
	"OẠ": "ᱚᱣᱟᱹ",
	"Oạ": "ᱚᱣᱟᱹ",
	"oạ": "ᱚᱣᱟᱹ",
	"Oe": "ᱚᱭ",
	"OE": "ᱚᱭ",
	"o̠e": "ᱚᱭ",
	"OI": "ᱚᱭᱤ",
	"Oi": "ᱚᱭᱤ",
	"oi": "ᱚᱭᱤ",
	"ou": "ᱚᱣ",
	"OU": "ᱚᱣ",
	"Ou": "ᱚᱣ",
	"pʼa": "ᱵᱼᱟ",
	"pʼe": "ᱵᱼᱮ",
	"pʼi": "ᱵᱼᱤ",
	"pʼo": "ᱵᱼᱚ",
	"pʼu": "ᱵᱼᱩ",
	"ṕa": "ᱵᱼᱟ",
	"ṕe": "ᱵᱼᱮ",
	"ph": "ᱯᱷ",
	"PH": "ᱯᱷ",
	"tʼa": "ᱫᱼᱟ",
	"tʼe": "ᱫᱼᱮ",
	"tʼi": "ᱫᱼᱤ",
	"tʼo": "ᱫᱼᱚ",
	"tʼu": "ᱫᱼᱩ",
	"ťạ": "ᱫᱼᱟ",
	"ťe": "ᱫᱼᱮ",
	"ṭh": "ᱴᱷ",
	"th": "ᱛᱷ",
	"Ua": "ᱩᱣᱟ",
	"UA": "ᱩᱣᱟ",
	"uạ": "ᱩᱣᱟᱹ",
	"UẠ": "ᱩᱣᱟᱹ",
	"Uạ": "ᱩᱣᱟᱹ",
	"Ui": "ᱩᱭ",
	"ui": "ᱩᱭ",
	"UI": "ᱩᱭ",
	"UO": "ᱩᱣᱚ",
	"Uo": "ᱩᱣᱚ",
	"uo": "ᱩᱣᱚ",
	"Zh": "ᱡᱷ",
	"ZH": "ᱡᱷ",
	"f": "ᱯᱷ",
	"V": "ᱵᱷ",
	"ᱚ̠": "ᱚ",
	"A": "ᱟ",
	"a": "ᱟ",
	"Ã": "ᱟᱸ",
	"ã": "ᱟᱸ",
	"Ạ": "ᱟᱹ",
	"ạ": "ᱟᱹ",
	"Ạ̃": "ᱟᱺ",
	"ạ̃": "ᱟᱺ",
	"b": "ᱵ",
	"B": "ᱵ",
	"C": "ᱪ",
	"c": "ᱪ",
	"C̕": "ᱪ",
	"c̕": "ᱪ",
	"ć": "ᱡ",
	"C’": "ᱪ",
	"Cʼ": "ᱡ",
	"c’": "ᱪ",
	"cʼ": "ᱡ",
	"D": "ᱫ",
	"d": "ᱫ",
	"Ḍ": "ᱰ",
	"ḍ": "ᱰ",
	"e": "ᱮ",
	"E": "ᱮ",
	"Ẽ": "ᱮ",
	"ẽ": "ᱮ",
	"Ẹ": "ᱮ",
	"ẹ": "ᱮ",
	"E̱": "ᱮ",
	"e̱": "ᱮ",
	"Ẽ̱": "ᱮ",
	"ẽ̱": "ᱮ",
	"g": "ᱜ",
	"G": "ᱜ",
	"h": "ᱦ",
	"H": "ᱦ",
	"H̕": "ᱦ",
	"h̕": "ᱦ",
	"i": "ᱤ",
	"I": "ᱤ",
	"Ĩ": "ᱤᱸ",
	"ĩ": "ᱤᱸ",
	"J": "ᱡ",
	"j": "ᱡ",
	"K": "ᱠ",
	"k": "ᱠ",
	"K̕": "ᱜ",
	"k̕": "ᱜ",
	"ḱ": "ᱜ",
	"k’": "ᱜ",
	"l": "ᱞ",
	"L": "ᱞ",
	"m": "ᱢ",
	"M": "ᱢ",
	"N": "ᱱ",
	"n": "ᱱ",
	"Ṇ": "ᱬ",
	"ṇ": "ᱬ",
	"Ṅ": "ᱝ",
	"ṅ": "ᱝ",
	"Ń": "ᱧ",
	"ń": "ᱧ",
	"Ñ": "ᱧ",
	"ñ": "ᱧ",
	"O̱": "ᱚ",
	"o̱": "ᱚ",
	"o̠": "ᱚ", //another version of o
	"o": "ᱚ",
	"O": "ᱚ",
	"Õ": "ᱚᱸ",
	"õ": "ᱚᱸ",
	"Ọ": "ᱚ",
	"ọ": "ᱚ",
	"Õ̱": "ᱚᱸ",
	"õ̱": "ᱚᱸ",
	"P": "ᱯ",
	"p": "ᱯ",
	"P̕": "ᱯ",
	"p̕": "ᱯ",
	"Ṕ": "ᱵ",
	"ṕ": "ᱵ",
	"P’": "ᱵ",
	"p’": "ᱵ",
	"Pʼ": "ᱵ",
	"pʼ": "ᱵ",
	"q": "ᱠ",
	"r": "ᱨ",
	"R": "ᱨ",
	"r": "ᱨ",
	"Ṛ": "ᱲ",
	"ṛ": "ᱲ",
	"S": "ᱥ",
	"s": "ᱥ",
	"ṛ": "ᱨ",
	"t": "ᱛ",
	"T": "ᱛ",
	"Ṭ": "ᱴ",
	"ṭ": "ᱴ",
	"T̕": "ᱫ",
	"Ť": "ᱫ",
	"t̕": "ᱫ",
	"t̕": "ᱫ",
	"t́": "ᱫ",
	"T’": "ᱫ",
	"Tʼ": "ᱫ",
	"t’": "ᱫ",
	"tʼ": "ᱫ",
	"u": "ᱩ",
	"U": "ᱩ",
	"Ũ": "ᱩᱸ",
	"ũ": "ᱩᱸ",
	"v": "ᱣ",
	"W": "ᱣ",
	"w": "ᱣ",
	"W̃": "ᱶ",
	"w̃": "ᱶ",
	"X": "ᱠᱥ",
	"x": "ᱠᱥ",
	"Y": "ᱭ",
	"y": "ᱭ",
	"Z": "ᱡ",
	"1": "᱑",
	"2": "᱒",
	"3": "᱓",
	"4": "᱔",
	"5": "᱕",
	"6": "᱖",
	"7": "᱗",
	"8": "᱘",
	"9": "᱙",
	"0": "᱐",
	"\\.": " ᱾",

};


// ********** Brain of the Converter (Transliteration Code) ********************
// https://medium.com/digital-linguistics/transliteration-in-javascript-99d306996752) - code credit for creating this tool goes to this post written by **Daniel W. Hieber.** This code solved the issue of feeding.
// A simple version of the transliterate method which makes replacements
// but does not handle common edge cases.
/**
 * A unidirectional transliteration algorithm which makes a set of substitutions on a string, and handles common edge cases.
 * @param  {String} [string='']        The String to transliterate
 * @param  {Object} [substitutions={}] The set of substitutions to make on the String. Each key should be the character(s) to replace, and its value should be the character(s) to replace it with.
 * @return {String}                    Returns a new String with the substitutions made
*/


const transliterate = (string = '', substitutions = {}) => {

	// save the string to a new variable for readability
	let str = string;

	// make a copy of the substitutions Object so that the original is not affected
	const subs = Object.assign({}, substitutions);

	// create an Object to hold any temporary substitutions
	const temps = {};

	// generates a random character from the geometric shapes block (U+25A0-25FF)
	const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);

	// save the list of inputs in order to check for feeding problems
	const inputs = Object.keys(substitutions);

	// get the list of substitutions
	Object.entries(substitutions)

		// sort the substitutions by longest string (avoids the substring problem)
		.sort(([a], [b]) => b.length - a.length)

		// for each substitution...
		.forEach(([input, replacement]) => {

			// check for feeding problem
			if (inputs.includes(replacement)) {

				// get a character to use as a temporary substitution
				let temp = getRandomCodePoint();

				// if that character has already been used, get another
				while (temp in temps) temp = getRandomCodePoint();

				// add the temporary substitution to the temps Object
				temps[temp] = replacement;

				// swap the original replacement with the temporary one
				subs[input] = temp;

			}

			// create a regular expression that searches globally for the string to replace
			const regexp = new RegExp(input, 'gui');

			// replace all matched instances of the regular expression with the new string
			// at this point, `subs` contains temporary substitutions, so those will be made
			str = str.replace(regexp, subs[input]);

		});

	// undo the temporary substitutions:
	// get the list of temporary substitutions
	Object.entries(temps)

		// for each temporary substitution that was made...
		.forEach(([temp, replacement]) => {

			// create a regular expression that searches globally for the temporary substitution to replace
			const regexp = new RegExp(temp, 'gu');

			// replace all matched instances of the temporary substitution with the original subsitution
			str = str.replace(regexp, replacement);

		});

	// return the string with the substitutions made
	return str;

};

// ********** Brain of the Converter (Transliteration Code) ends ********************

// *********** Working Code ***************
// When somene click the submit button then a function is called out when then takes user
// input and pass it through above converter which after the conversion displays in the output.

out1 = document.getElementById('output1');

document.getElementById("btn1").onclick = function () {

	var txt12 = document.getElementById("tbuser").value;
	ipa = transliterate(txt12, substitutions);
	out1.innerHTML = ipa;

}

// *********** Copy Code ***************

function CopyToClipboard(containerid) {
	// Create a new textarea element and give it id='temp_element'
	const textarea = document.createElement('textarea')
	textarea.id = 'temp_element'
	// Optional step to make less noise on the page, if any!
	textarea.style.height = 0
	// Now append it to your page somewhere, I chose <body>
	document.body.appendChild(textarea)
	// Give our textarea a value of whatever inside the div of id=containerid
	textarea.value = document.getElementById(containerid).innerText
	// Now copy whatever inside the textarea to clipboard
	const selector = document.querySelector('#temp_element')
	selector.select()
	document.execCommand('copy')
	// Remove the textarea
	document.body.removeChild(textarea)
}

// *********** Copy Code ends ***************

// ************ Using Paste function *********************

function jsPaste() {
	// read text form clipboard (Function not supported in Firefox browser)

	navigator.clipboard.readText()

		//put the text into the field

		.then(txt => {
			document.getElementById('tbuser').value = txt;
		})

		//If no access
		.catch(err => {
			alert("No access to clipboard");
		})

}

 // ************ Using Paste function ends *********************
