let fibonacci_series = function(num){
  if(num === 1){
    return [0, 1];
  }else{
    let series = fibonacci_series(num - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};
console.log(fibonacci_series(15));