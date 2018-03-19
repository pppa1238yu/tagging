export default class Constants{
    static remoteHost="http://ecg.calfdata.com";
    //格式化时间(2016-08-20)
    static formatTime(time:Date){
        let month=time.getMonth()+1<10?"0"+(time.getMonth()+1):time.getMonth()+1;
        let date=time.getDate()<10?"0"+(time.getDate()):time.getDate();
        return time.getFullYear()+"-"+month+"-"+date;
    }
}