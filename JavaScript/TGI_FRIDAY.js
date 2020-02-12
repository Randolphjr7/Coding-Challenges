/* We all love fridays, and even better if it is the last day of 
the month!

In this kata you should write a function that will receive 
2 parameters. Both are years, and indicates a range.

Your work is to return the number of times a month ends 
with a Friday.

If there is only one year provided, return the number of 
times a month ends on Friday on that year. Range bounds 
are inclusive in every case!

For example, between 1901 and 2000, a month ends on 
Friday 171 times. */


function tgiFridays(initialYear, endYear){

  let fridays = 0;
  
  // checks to see if only one argument was passed in
  if(endYear === undefined){
    endYear = initialYear;
  }
  
  for(let year = initialYear; year <= endYear; year++){
  
      for(let month = 1; month <= 12; month++){

        // built in JS object that stores date & time
        // the last argument 0 represents the last day of the month
        let time = new Date(year, month, 0);

           /* 
           console.log(`time is => ${time}`)
           console.log(`time.getDay() is => ${time.getDay()} \n`) 
           */

        // getDay() returns the day of the week for the specified date
        // 0 represents Sunday 5 represents Friday

        if(time.getDay() === 5){
            fridays++;
        }

      }
  }

  return fridays;
}


console.log(tgiFridays(1901,2000));
console.log(tgiFridays(1991));
console.log(tgiFridays(2019));
