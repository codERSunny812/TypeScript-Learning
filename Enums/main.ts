enum Months{
January,
Febuary,
March,
April,
May,
June,
July,
August,
September,
Ocotober,
November,
December
}


function printMonth(month:Months){
let summer:boolean=false;
switch(month){
    case Months.January:
        console.log("yo its January!!");
        break;
    case Months.Febuary:
         console.log("yo its Febuary!!");
        break;
    case Months.March:
         console.log("yo its March!!");
         break;
    case Months.April:
         console.log("yo its April!!");
        break;
    case Months.May:
         console.log("yo its May!!");
        break;
    case Months.June:
         console.log("yo its June!!");
        break;
    case Months.July:
         console.log("yo its July!!");
        break;
    case Months.August:
         console.log("yo its August!!");
        break;
    case Months.September:
         console.log("yo its September!!");
        break;
    case Months.Ocotober:
         console.log("yo its Ocotober!!");
        break;
    case Months.November:
         console.log("yo its November!!");
        break;
    case Months.December:
         console.log("yo its December!!");
        break;

}

}



printMonth(Months.March)