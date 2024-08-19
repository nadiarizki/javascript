/*
let angka1 = 2;
let angka2 = 5;
let operator = '*';
*/

function calculator(angka1, angka2, operator){
	switch (operator){
		case '+':
			console.log(`Hasil penjumlahan: ${angka1+angka2}`);
			break;
		case '-':
			console.log(`Hasil pengurangan: ${angka1-angka2}`);
			break;
		case '*':
			console.log(`Hasil perkalian: ${angka1*angka2}`);
			break;
		case '/':
			console.log(`Hasil pembagian: ${angka1/angka2}`);
			break;
		default:
			console.log('error');
	}
}

calculator(3,2,'+');
calculator(5,7,'-');
calculator(1,6,'*');
calculator(9,4,'/');







