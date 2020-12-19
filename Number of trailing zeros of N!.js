// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

function zeros(n) {
	var numberOfTrailingZeroes = 0;
	for (let i = 5; i <= n; i *= 5) {
		numberOfTrailingZeroes += Math.floor(n / i);
	}
	return numberOfTrailingZeroes;
}