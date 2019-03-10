// INT  	1     2     3     4     5     6     7     8     9     10    50    100   500   1000
// Roman    I    II    III   IV     V     VI   VII   VIII  IX     X     L     C     D      M

// some calculations: 
// Int 23 (10+10+3) Rom XXIII
// Int 36 (10+10+10+5+1) XXXVI
// Int 999 = (1000-100)+(100-10)+(10-1) = (M-C)+(C-X)+(X-I) = CM+XC+IX = CMXCIX

function func(number) {
	// Array
	var int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  	var roman = ['M', 'CM' ,'D' ,'CD' ,'C' ,'XC' ,'L' ,'XL' ,'X' ,'IX' ,'V' ,'IV' ,'I'];
  	var result = '';

}

// This is the result.
document.write(func(36));