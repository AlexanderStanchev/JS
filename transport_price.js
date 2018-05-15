function transportPrice([arg1, arg2]) {

    let kilometre = Number(arg1);
    let time = arg2;

    let taxiTax = 0.7;
    let taxiDay = 0.79;
    let taxiNight = 0.9;

    let busTarif = 0.09;

    let trainTarif = 0.06;

    let price;


    if (kilometre>=1 && kilometre<20 && time=="day") {
        price = (kilometre * taxiDay) + taxiTax;
    } else if (kilometre >= 1 && kilometre<20 && time=="night") {
        price = (kilometre * taxiNight) + taxiTax;
    } else if (kilometre >= 20 && kilometre < 100 && (time == "day" || time == "night")) {
        price= kilometre*0.09;
    } else if (kilometre >= 100 && kilometre <= 5000 && (time == "day" || time == "night")) {
        price = kilometre * 0.06;
    }
    console.log(price.toFixed(2));
}
//Call the function to execute the code inside
transportPrice(["3", "day"]);
