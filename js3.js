const netflix = ["STRANGER THINGS"];
const prime = ["PANCHAYAT"];
// prime.push(netflix) 
console.log(prime);
console.table(prime)
const series = [...netflix, ...prime]
console.log(series);


