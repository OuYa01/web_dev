let countEl = document.getElementById("counter")
let count = 0
let saveEl = document.getElementById("save-el")

function increment()
{
    count++
    countEl.innerText = count
}

let c = 0
function save()
{
    let str = " " + count
    if (c == 0)
    {
        saveEl.innerText += str
        c++;
    }
    else
    {
        saveEl.innerText += " -" + str
    }
    
    console.log(saveEl.innerText)
}
