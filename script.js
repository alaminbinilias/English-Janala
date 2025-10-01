// console.log("Connected");


const remove=()=>{
    const allBTN=document.querySelectorAll('.AllBtn');
    //console.log(allBTN);
    for(it of allBTN){
        it.classList.remove('Btn');
    }
}

const btnclk=(it)=>{
    const url=`https://openapi.programming-hero.com/api/level/${it}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        const BTNunique= document.getElementById(`BTN-${it}`);
        //console.log(AllBtn);
        remove();
         BTNunique.classList.add('Btn');

        displyWord(data.data);
    }); 
}

const displyWord=(word)=>{
    const CardClear=document.getElementById('card');

    CardClear.innerText='';

    if(word.length==0){

        const dv=document.createElement('div');

        dv.innerHTML=`
        
        <div class="col-span-full">
            <img class="mx-auto col-span-full text-center" src="./assets/alert-error.png" alt="">
            <p class="text-[.9rem] text-[#79716B] mb-2 mt-2 text-center">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <p class="font-medium text-[2.5rem]">নেক্সট Lesson এ যান</p>
        </div>
        `;
        CardClear.append(dv);
    }
    for(it of word){
        const dv= document.createElement('div');
        dv.innerHTML=`
        
        <div class="bg-white rounded-md py-25 poppins">
            <p class="text-3xl font-bold mb-2 -mt-6">${it.word==null ? "Word Not Found" : it.word }</p>
            <p class="text-[1.2rem] font-medium mb-5">Meaning /Pronounciation</p>
            <p class="mb-20 tiro text-3xl font-semibold">${it.meaning==null ? "Meaning Not Found" : it.word} / ${it.pronunciation==null ?"Pronunciation Not Found":it.pronunciation }"</p>
            <div class=" flex justify-between mx-15">
                <button class="bg-[#e8f4ff] px-3 py-2 cursor-pointer rounded-sm"><i class="fa-solid fa-circle-info"></i></button>
                <button class="bg-[#e8f4ff] px-2 py-1 cursor-pointer rounded-sm"><i class="fa-solid fa-volume-low"></i></button>
            </div>
        </div>
        
        `;
        CardClear.appendChild(dv);
    }
}



////Create Button


const url='https://openapi.programming-hero.com/api/levels/all';
fetch(url)
.then(responsive => responsive.json())
.then(data =>create_btn(data.data));


const create_btn=(data)=>{
    const btn=document.getElementById('LessonBtn');
    //console.log(btn);
    btn.innerText='';

    for(it of data){
        // console.log(it.level_no);
        const dv= document.createElement('div');

        dv.innerHTML=`
        
        <button id='BTN-${it.level_no}' onclick='btnclk(${it.level_no})' class="btn AllBtn text-[#422bd6] border-1 border-[#422bd6]"><span><i class="fa-solid fa-book-open-reader"></i></span>Lesson-${it.level_no}</button>
        `;

        btn.append(dv);
    }
}