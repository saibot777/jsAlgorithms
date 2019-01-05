function diff_weeks(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
  
 }



dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,15);
console.log(diff_weeks(dt1, dt2));