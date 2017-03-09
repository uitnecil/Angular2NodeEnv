/**
 * Created by liz on 3/9/17.
 */

const getArrayDate = (date) => {
    console.log(date instanceof Date);

    let mD  =  [].push.call([], date.getYear(), date.getDay(), date.getMonth(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    console.log([date.getYear(), date.getDay(), date.getMonth(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]);

    console.log(mD);
    console.log();

  return (date instanceof Date) ? mD  : date;
};


{
    let date = new Date();
    console.log(date.getTimezoneOffset());

    console.log({datedate: date});

    console.log(date.getDate());

    console.log(`date: ${date.toString()}`);

    console.log(date);
    console.log(date.toISOString());

    var utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
    console.log(`UTC Date: ${utcDate.toISOString().toLocaleString()}`);

    let localDate = Date();

    let myDate = new Date (localDate);
    let myDateArray = getArrayDate(myDate);

    for (let i = 0; i <= myDateArray.length; i++) {
        console.log(myDateArray[i]);
    }

    console.log(myDateArray);
}