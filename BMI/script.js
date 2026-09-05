const f = document.querySelector('form')

// const height = document.querySelector('#height').value
// console.log(height)

//The above code doesn't work because "height" is in the form which has not been given input yet so it doesn't return any value



f.addEventListener('submit' , (e) => {

    e.preventDefault()
    const h = parseInt(f.querySelector('#height').value)
    const w = parseInt(f.querySelector('#weight').value)
    const r = f.querySelector('#results')

    if ( h === '' || h < 0 || isNaN(h) )
       r.innerHTML = `<span> The height ${h} is invalid </span>`
    else if (w === '' || w < 0 || isNaN(w))
        r.innerHTML = `<span> The weight ${w} is invalid </span>`
    else {
        r.innerHTML = `<span>${ (w/((h*h)/10000)).toFixed(2) }</span>`
    }
   
    const bmi = parseFloat(f.querySelector('#results').textContent)
    let t 
    if( bmi <= 18.6)
        t = "Underweight"
    else if ( bmi > 18.6 && bmi <= 24.9)
        t = "Normal"
    else 
        t = "Overweight"
    
    const n = document.createElement('p')

    n.innerText = t
    document.body.querySelector('#weight-guide').appendChild(n)
   


})