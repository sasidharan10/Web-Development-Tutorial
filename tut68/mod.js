console.log("This is module");
function average(arr){
    let sum=0;
    for(element of arr)
    sum+=element;
    let avg = sum/arr.length;
    return avg;
}
// module.exports = average;    // for exporting average()

// module.exports.name = "sasi";  // 'module.exports' itself is a object

module.exports={
    avg : average,
    name : "sasi",
    rno : 101
}