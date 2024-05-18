module.exports = class PromiseExample{

    #delayTime = 2000;

    constructor(time){
        this.delayTime = time;
    }

    noPromise(){
        setTimeout(()=>{
            console.log("loop");
        },this.delayTime);
        console.log("after loop");
    }
    //-------

    havePromise(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log("loop");
                res(true);
            },this.delayTime);
        })
        .then((result)=>{
            if(result)
            console.log("after loop");
        });
        
    }

    async promiseWithAsync(){
        await this.havePromise();
        console.log("after of after loop");
    }
    //-------

    // ตัวอย่างฟังก์ชันเอาไว้เบรค
    async sleep(ms){
        return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },ms);
        });
    }

    async incorrect(){
        let a = [1,2,3];
        //ฟังก์ขัน callback ใน fofEach จะแยกกับ thread หลักจึงไม่รอ 
        a.forEach(async (item)=>{
            
            //สมมุติการท่างานหน่วงเวลาเพราะแต่ละลูปเวลาทํางานไม่เท่ากัน
            let time = Math.random() * 3 * 1000;
            setTimeout(async ()=>{
            //---- work ----
                console.log(item);
            //--------------
            },time);
            //-------------------------------------------------

            await this.sleep(3000); 
        });
    }
    
    async correct(){
        let a= [1,2,3];
        for (let index = 0; index < a.length; index++){

            //สมมุติการท่างานหน่วงเวลาเพราะแต่ละลูปเวลาทํางานไม่เท่ากัน
            let time = Math.random() * 3 * 1000;
            setTimeout(()=>{
            //---- work ----
                console.log(a[index]);
            //--------------
            },time);
            //-------------------------------------------------
            
        await this.sleep(3000);
        };
    }
    
    // ตัวอย่าง advance 1
    async advance1() {

        let a = [1,2,3];
        
        for(let aValue of a){
            
            //สมมุติการท่างานหน่วงเวลาเพราะแต่ละลูปเวลาทํางานไม่เท่ากัน
            let time = Math.floor(Math.random() * 3) * 1000;
            setTimeout(()=>{
            //---- work ----
                console.log(aValue);
            //--------------
            },time);
            //-------------------------------------------------

            await this.sleep(3000);
        }
        
    }  
    // ตัวอย่าง advance 2
    async advance2(){
    
        let a = [1,2,3];
        let b = ['a', 'b', 'c'];
    
        for(let aValue of a){
            for (let bValue of b){

                //สมมุติการท่างานหน่วงเวลาเพราะแต่ละลูปเวลาทํางานไม่เท่ากัน
                let time = Math.floor(Math.random() * 3) * 1000;
                setTimeout(async ()=>{
                //---- work ----
                console.log(`\t ${aValue} | ${bValue} (time=${time})`);
                //--------------
                },time);
                //-------------------------------------------------

                await this.sleep(time);
            }
        }
    }
}
