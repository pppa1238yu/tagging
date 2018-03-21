export default class Constants {
    static remoteHost = "http://ecg.calfdata.com";

    //格式化时间(2016-08-20)
    static formatTime(time: Date) {
        let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
        let date = time.getDate() < 10 ? "0" + (time.getDate()) : time.getDate();
        return time.getFullYear() + "-" + month + "-" + date;
    }

    static unique(data: any) {
        let res = [];
        let json = {};
        for (let i = 0; i < data.length; i++) {
            if (!json[data[i]]) {
                res.push(data[i]);
                json[data[i]] = 1;
            }
        }
        return res;
    }

    static distinct<T>(arr: Array<T>, fieldExtract: (T: T) => any): Array<T> {

        let symbols = arr.map(fieldExtract);
        let symbolsUnique = Constants.unique(symbols);
        let indexesUnique = symbolsUnique.map((uniqueEle: T) => {
            return symbols.indexOf(uniqueEle)
        });

        return indexesUnique.map((e: number) => {
            return arr[e]
        });

    }
}