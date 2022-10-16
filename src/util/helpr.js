const date = new Date()

const checkDate = function(){
    return date.getDate();
}



const checkMonth=function() {
    return date.getMonth()+1;
}






const checkBatch=function(){
    return "batch lithium, w3d3,the topic for today is Nodejs module system";


}


module.exports.printDate=checkDate;
module.exports.printMonth=checkMonth;
module.exports.getBatchInfo=checkBatch;





