var util ={};
module.exports = util ={
    getLocalTime : function(){
        var date = new Date();
        return {time:　zeroPadding(date.getFullYear()) +"/"+ zeroPadding(date.getMonth() + 1) +"/"+ zeroPadding(date.getDay()) + " " +  zeroPadding(date.getHours()) + ":" + zeroPadding(date.getMinutes()) + ":" +  zeroPadding(date.getSeconds())};
    }
}

function zeroPadding(count){
    if(count < 10){
        count = "0" + count;
    }
    return count;
}
