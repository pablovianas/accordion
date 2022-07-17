const getQuestionsClick = document.querySelectorAll('.faq-list-item')

getQuestionsClick.forEach((question) =>{
    question.addEventListener('click', function(){
        getQuestionsClick.forEach((element) => {
            const isElementWithClassNameOpen = element.classList.contains('open')
            if (isElementWithClassNameOpen){
                hideQuestion(element)
            }  
        })
        const isQuestionOpened = question.classList.contains('open')

        isQuestionOpened ? hideQuestion(question) : showQuestion(question)
    })
})

function hideQuestion(openAnswer){
    openAnswer.classList.remove('open')
    openAnswer.classList.add('closed')
}
function showQuestion(openAnswer){
    openAnswer.classList.remove('closed')
    openAnswer.classList.add('open')
}


