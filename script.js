function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let ans="";
	while(num>0){
		if(num>=1000){
			ans+="M";
			num-=1000;
		}
		else if(num>=500){
			ans+="D";
			nums-=500;
		}
		else if(num>=100){
			ans+="C";
			nums-=100;
		}
		else if(num>50){
			ans+="L";
			nums-=50;
	     }
		else if(num>=5){
			ans+="V";
			nums-=5;
		}
		else if(num>=1){
			ans+="I";
			nums-=1;
		}
		
	}
	return ans;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
