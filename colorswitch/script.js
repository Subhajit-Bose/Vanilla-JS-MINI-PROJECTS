const buttons = document.querySelectorAll('.button')
console.log(buttons)

buttons.forEach((i) => {
    i.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)

        switch(i.id)
        {
            case "grey":document.body.style.backgroundColor = i.id
                break;
            case "purple":document.body.style.backgroundColor = i.id
                break;
            case "blue":document.body.style.backgroundColor = i.id
                break;
            case "yellow":document.body.style.backgroundColor = i.id
                break;
            case "green" : document.body.style.backgroundColor = i.id
                break;
            default : document.body.style.backgroundColor = "white"
        }
    })
})