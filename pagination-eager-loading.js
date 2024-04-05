const cities = [
    "Ahmedabad",
    "Alexandria",
    "Atlanta",
    "Baghdad",
    "Bangalore",
    "Bangkok",
    "Barcelona",
    "Beijing",
    "Belo Horizonte",
    "Bogotá",
    "Buenos Aires",
    "Cairo",
    "Chengdu",
    "Chennai",
    "Chicago",
    "Chongqing",
    "Dalian",
    "Dallas",
    "Dar es Salaam",
    "Delhi",
    "Dhaka",
    "Dongguan",
    "Foshan",
    "Fukuoka",
    "Guadalajara",
    "Guangzhou",
    "Hangzhou",
    "Harbin",
    "Ho Chi Minh City",
    "Hong Kong",
    "Houston",
    "Hyderabad",
    "Istanbul",
    "Jakarta",
    "Jinan",
    "Johannesburg",
    "Karachi",
    "Khartoum",
    "Kinshasa",
    "Kolkata",
    "Kuala Lumpur",
    "Lagos",
    "Lahore",
    "Lima",
    "London",
    "Los Angeles",
    "Luanda",
    "Madrid",
    "Manila",
    "Mexico City",
    "Miami",
    "Moscow",
    "Mumbai",
    "Nagoya",
    "Nanjing",
    "New York City",
    "Osaka",
    "Paris",
    "Philadelphia",
    "Pune",
    "Qingdao",
    "Rio de Janeiro",
    "Riyadh",
    "Saint Petersburg",
    "Santiago",
    "São Paulo",
    "Seoul",
    "Shanghai",
    "Shenyang",
    "Shenzhen",
    "Singapore",
    "Surat",
    "Suzhou",
    "Tehran",
    "Tianjin",
    "Tokyo",
    "Toronto",
    "Washington",
    "Wuhan",
    "Xi'an",
    "Yangon"
];

function paginate(dataArray, resultsPerPage, pageNumber) {
    let arrayOfPages =[];
    for (let i = 0; i < dataArray.length; i += resultsPerPage) {
        const chunk = dataArray.slice(i, i + resultsPerPage);
        arrayOfPages.push(chunk);
    }
    if (typeof arrayOfPages[(pageNumber-1)] === 'undefined'){
        console.log([]);
    }else{
        console.log(arrayOfPages[(pageNumber-1)]);
    }
}

paginate(cities, 2, 1); //["Ahmedabad","Alexandria"]
paginate(cities, 2, 6); //["Buenos Aires","Cairo","]
paginate(cities, 4, 6); //[ "Dhaka","Dongguan","Foshan","Fukuoka",]
paginate(cities, 20, 11); //[]
paginate(cities, 20, 3);