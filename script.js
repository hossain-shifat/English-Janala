const loadLessons =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json => displayLesson(json.data))
}
const loadLevelWord=(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=> res.json())
    .then(word => displayLavelWord(word.data))
}

const displayLavelWord =(words)=>{
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = ""
    words.forEach(word => {
        const card = document.createElement("div")
        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
                <h1 class="font-bold text-2xl">${word.word}</h1>
                <p class="font-semibold">Meaning/Pronouncition</p>
                <div class="text-2xl font-medium font-[Hind_Siliguri]">${word.meaning}/${word.pronunciation}</div>
                <div class="flex justify-between">
                    <button class="btn text-black text-xl p-1 rounded-[5px] bg-[#1A91FF1A10] hover:bg-[#1A91FF1A80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn text-black text-xl p-1 rounded-[5px] bg-[#1A91FF1A10] hover:bg-[#1A91FF1A80]"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `
        wordContainer.append(card)
    });

}


const displayLesson =(lessons) =>{
    const lavelContainer = document.getElementById("lavel-container")
    lavelContainer.innerHTML = ""

    for(lesson of lessons){
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}</button>
        `
        lavelContainer.append(btnDiv)
    }

}
loadLessons()
