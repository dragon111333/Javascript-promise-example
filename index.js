
const PromiseExample = require("./promiseExample");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function questionAsync(query) {
    return new Promise(resolve => readline.question(query, (input)=>{
        resolve(input);
    }));
}


// Do it here;
(async ()=>{
    const promiseExample = new PromiseExample(200);
    const methodList = Object.getOwnPropertyNames(PromiseExample.prototype);

    console.info("\n\n-----[Function List]-----");
    methodList.forEach((item,index)=>{
        if(item!="constructor") console.log(`|  ${index}\t|   ${item}\t|`);
    });
    console.info("-------------------------");

    let input = await questionAsync("Enter >\n");


    const menuNumber = parseInt(input);
    console.log(`\n[${menuNumber} : ${methodList[menuNumber]}]\n`);

    switch(menuNumber){
        case 1 : promiseExample.noPromise();
            break;
        case 2 : promiseExample.havePromise();
            break;
        case 3 : promiseExample.promiseWithAsync();
            break;
        case 4 : promiseExample.sleep();
            break;
        case 5 : promiseExample.incorrect();
            break;
        case 6 : promiseExample.correct();
            break;
        case 7 : promiseExample.advance1();
            break;
        case 8 : promiseExample.advance2();
            break;
        default :
            break;
    }

})();