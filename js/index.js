const data = {
    "date":"20 03",
    "time":"20 01",
    "bank":"PB",
    "baseCurrency":980,
    "baseCurrencyLit":"UAH",
    "exchangeRate":[
    {"baseCurrency":"UAH","currency":"USD","valuteName":"Долари США","saleRateNB":36.5686000,"purchaseRateNB":36.5686000,"saleRate":38.6000000,"purchaseRate":38.1000000,"flag":'-2px -680px'},
    {"baseCurrency":"UAH","currency":"EUR","valuteName":"Евро","saleRateNB":38.7170000,"purchaseRateNB":38.7170000,"saleRate":40.9000000,"purchaseRate":39.9000000,"flag":'-194px -200px'},
    {"baseCurrency":"UAH","currency":"PLN","valuteName":"Польський злотий","saleRateNB":8.2456000,"purchaseRateNB":8.2456000,"saleRate":8.7300000,"purchaseRate":8.2700000,"flag":'-722px -488px'},
    {"baseCurrency":"UAH","currency":"AUD","valuteName":"Австралійський долар","saleRateNB":24.3090000,"purchaseRateNB":24.3090000,"flag":'-626px -8px'},
    {"baseCurrency":"UAH","currency":"AZN","valuteName":"Азербайджанський манат","saleRateNB":21.5515000,"purchaseRateNB":21.5515000,"flag":'-2px -58px'},
    {"baseCurrency":"UAH","currency":"CAD","valuteName":"Канадський долар","saleRateNB":26.6166000,"purchaseRateNB":26.6166000,"flag":'-193px -104px'},
    {"baseCurrency":"UAH","currency":"CHF","valuteName":"Швейцарський франк","saleRateNB":39.4611000,"purchaseRateNB":39.4611000,"saleRate":41.6000000,"purchaseRate":39.4000000,"flag":'-435px -104px'},
    {"baseCurrency":"UAH","currency":"CNY","valuteName":"Китайський юань","saleRateNB":5.3036000,"purchaseRateNB":5.3036000,"flag":'-674px -104px'},
    {"baseCurrency":"UAH","currency":"CZK","valuteName":"Чеська крона","saleRateNB":1.6134000,"purchaseRateNB":1.6134000,"saleRate":1.7150000,"purchaseRate":1.6250000,"flag":'-290px -152px'},
    {"baseCurrency":"UAH","currency":"DKK","valuteName":"Данська крона","saleRateNB":5.1991000,"purchaseRateNB":5.1991000,"flag":'-432px -152px'},
    {"baseCurrency":"UAH","currency":"GBP","valuteName":"Фунт стерлінгів","saleRateNB":44.1109000,"purchaseRateNB":44.1109000,"saleRate":46.8800000,"purchaseRate":44.4000000,"flag":'-578px -200px'},
    {"baseCurrency":"UAH","currency":"GEL","valuteName":"Грузинський ларі","saleRateNB":13.9965000,"purchaseRateNB":13.9965000,"flag":'-674px -200px'},
    {"baseCurrency":"UAH","currency":"HUF","valuteName":"Угорський форинт","saleRateNB":0.0976670,"purchaseRateNB":0.0976670,"flag":'-2px -296px'},
    {"baseCurrency":"UAH","currency":"ILS","valuteName":"Ізраїльський шекель","saleRateNB":9.9688000,"purchaseRateNB":9.9688000,"flag":'-193px -296px'},
    {"baseCurrency":"UAH","currency":"JPY","valuteName":"Японська єна","saleRateNB":0.2763200,"purchaseRateNB":0.2763200,"flag":'-674px -296px'},
    {"baseCurrency":"UAH","currency":"KZT","valuteName":"Казахстанський теньге","saleRateNB":0.0788100,"purchaseRateNB":0.0788100,"flag":'-432px -344px'},
    {"baseCurrency":"UAH","currency":"MDL","valuteName":"Молдовський лей","saleRateNB":1.9615000,"purchaseRateNB":1.9615000,"flag":'-337px -393px'},
    {"baseCurrency":"UAH","currency":"NOK","valuteName":"Норвезька крона","saleRateNB":3.3942000,"purchaseRateNB":3.3942000,"flag":'-434px -296px'},
    {"baseCurrency":"UAH","currency":"SEK","valuteName":"Шведська крона","saleRateNB":3.4623000,"purchaseRateNB":3.4623000,"flag":'-722px -537px'},
    {"baseCurrency":"UAH","currency":"SGD","valuteName":"Сінгапурський долар","saleRateNB":27.1361000,"purchaseRateNB":27.1361000,"flag":'-2px -584px'},
    {"baseCurrency":"UAH","currency":"TMT","valuteName":"Туркменський манат","saleRateNB":10.4482000,"purchaseRateNB":10.4482000,"flag":'-290px -630px'},
    {"baseCurrency":"UAH","currency":"TRY","valuteName":"Турецька ліра","saleRateNB":1.9244000,"purchaseRateNB":1.9244000,"flag":'-434px -632px'},
    {"baseCurrency":"UAH","currency":"UZS","valuteName":"Узбецький сум","saleRateNB":0.0032259,"purchaseRateNB":0.0032259,"flag":'-100px -680px'},]};
    
    function show(arg){
    
    document.write(
        `<header>	
            <div class='left'>
                <div class='text'>Дата Date</div>
                <div class='colorRed'>${arg.date}</div>
                <div class='text'>Час Time</div>
                <div class='colorRed'>${arg.time}</div>
            </div>
            <div class='title'>
                <h4> курси обміну валют </h4>
                <h5> exchanges rates </h5>
            </div>	
        </header>
        <table>	
            <thead>
                <tr>
                    <th colspan=3></th>
                    <th class='text'> Купівля <br> <span> We buy at </span> </th>
                    <th class='text'> Продаж <br> <span> We sell at </span> </th>
                </tr>
            </thead>
            <tbody>`) 
    
    arg.exchangeRate.forEach(elArray =>
        document.write( 
            `<tr>
                <td ><div class='flag' style='background-position: ${elArray.flag}'></div></td>
                <td class='valuteName'>${elArray.valuteName}</td>
                <td class='positionRight'>${elArray.currency}</td>
                <td class='colorRed'> ${elArray.saleRateNB.toFixed(2)} </td>
                <td class='colorRed'> ${elArray.purchaseRateNB.toFixed(2)} </td>
            </tr>`));
    
    document.write(`</tbody></table>`)
    }
    
    show (data);
    