const loadLessons =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json => displayLesson(json.data))
}
const displayLesson =(lessons) =>{
    const lavelContainer = document.getElementById("lavel-container")
    lavelContainer.innerHTML = ""

    for(lesson of lessons){
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}</button>
        `
        lavelContainer.append(btnDiv)
    }

}
loadLessons()
