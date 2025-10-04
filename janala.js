

//ClearSpecificButtonStyle

const ClearAllButtonStyle=()=>{
    const Btn=document.querySelectorAll(".AllLessonBtn");
    //console.log(Btn);

    for(it of Btn){
        // console.log(it);
        it.classList.remove('StyleSpecificButton');
    }
    //Btn.classList.remove('StyleSpecificButton');
}


// For AllGridSection

const cardSection=document.getElementById("wordCardSection");
const LessonClickBtn=(level)=>{
    
    //identify Spesific Button

    const SpecificButton=document.getElementById(`Btn${level}`);
    //console.log(SpecificButton);
    
    ClearAllButtonStyle();
    SpecificButton.classList.add('StyleSpecificButton');
    
    
    cardSection.innerText='';
    const url=`https://openapi.programming-hero.com/api/level/${level}`;
    //console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data=>wordCardSection(data.data));
}

const wordCardSection=(data)=>{


    //ifALessonDoesn't Data

    if(data.length==0){
        cardSection.innerHTML=`

        <div class="text-center bg-[#f7f7f7] py-15 poppins tiro col-span-full">
            <img class="mx-auto" src="./assets/alert-error.png" alt="">
            <p class="font-thin">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <p class="mt-2 font-medium text-[2.5rem]">নেক্সট Lesson এ যান</p>
        </div>
        `;
        return;
    }

    for(it of data){
        const dv=document.createElement('div');
        dv.innerHTML=`
        
        <div class="bg-white rounded-md py-10 text-center h-full grid items-center">
            <p class="font-semibold text-[2rem] mb-4">${it.word==null ?"word Not Found": it.word}</p>
            <p class="-mt-2 mb-4 font-medium text-[1rem]">Meaning /Pronounciation</p>
            <p class="mb-15 text-[2rem] text-[#18181B] tiro font-thin">"${it.meaning==null ?"Meaning Not Found": it.meaning } / ${it.pronunciation==null ?"pronunciation Not Found": it.pronunciation}"</p>
            <div class="flex justify-between w-10/12 mx-auto mb-11">
                <button class="px-3 py-2 bg-gray-300 rounded-sm cursor-pointer"><i class="fa-solid fa-circle-info"></i></button>
                <button class="px-3 py-2 bg-gray-300 rounded-sm cursor-pointer"><i class="fa-solid fa-volume-low"></i></button>
            </div>
        </div>
        `;
        cardSection.appendChild(dv);

    }
}


// LessonButtonSection

const url='https://openapi.programming-hero.com/api/levels/all';

fetch(url)
.then(Response => Response.json())
.then(data=>displayLessonBtn(data.data));


const displayLessonBtn=(data)=>{
    const lessonBtnOption= document.getElementById('lesson_btn');
    for(it of data){

        const dv=document.createElement('div');
        //console.log(dv);
        dv.innerHTML=`

                <button id=Btn${it.level_no} onclick="LessonClickBtn(${it.level_no})" class="btn AllLessonBtn border-1 px-5 py-3 text-[1rem] font-medium border-[#422bd6] text-[#422bd6]"> <span><i class="fa-solid fa-book-open-reader"></i></span>Lesson-${it.level_no}</button>

        `;
        lessonBtnOption.append(dv);
    }
}


//EndOfLessonButton


