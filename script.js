// console.log("Connected");

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
        
        <button class="btn text-[#422bd6] border-1 border-[#422bd6]"><span><img src="./assets/fa-book-open.png" alt=""></span>Lesson-${it.level_no}</button>
        `;

        btn.append(dv);
    }
}