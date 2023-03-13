// top 
const totalAvailBal = document.querySelector('#tot-balance')
const accruedIncome = document.querySelector('#accrued-income')
const totExpenses = document.querySelector('#tot-expenses')

const dateh = document.querySelector('#dateh')

const form = document.querySelector('form')
const itemDesc = document.querySelector('#item-desc')
const amountDesc = document.querySelector('#item-amount')
const zelect = document.querySelector('#selector')


// Mobile View Buttons 
const addShowIncome = document.querySelector('#add-show-inc')
const addShowExpense = document.querySelector('#add-show-exp')

const incConMob = document.querySelector('#ina')

const incCont = document.querySelector('#income-add-cont')
const expCont = document.querySelector('#expense-add-cont')


let totalIncome = []
let totalExpense = []

let j = 0
let k = 0 

localStorage.setItem('k', k)

const now = new Date()

window.addEventListener('load', (e) => {
    if (now.getMonth() === 0) {
        return (dateh.innerText = `Available Budget in January, ${now.getFullYear()}`)
    } else if (now.getMonth() === 1) {
        return (dateh.innerText = `Available Budget in February, ${now.getFullYear()}`)
    } else if (now.getMonth() === 2) {
        return (dateh.innerText = `Available Budget in March, ${now.getFullYear()}`)
    } else if (now.getMonth() === 3) {
        return (dateh.innerText = `Available Budget in April, ${now.getFullYear()}`)
    } else if (now.getMonth() === 4) {
        return (dateh.innerText = `Available Budget in May, ${now.getFullYear()}`)
    } else if (now.getMonth() === 5) {
        return (dateh.innerText = `Available Budget in June, ${now.getFullYear()}`)
    } else if (now.getMonth() === 6) {
        return (dateh.innerText = `Available Budget in July, ${now.getFullYear()}`)
    } else if (now.getMonth() === 7) {
        return (dateh.innerText = `Available Budget in August, ${now.getFullYear()}`)
    } else if (now.getMonth() === 8) {
        return (dateh.innerText = `Available Budget in September, ${now.getFullYear()}`)
    } else if (now.getMonth() === 9) {
        return (dateh.innerText = `Available Budget in October, ${now.getFullYear()}`)
    } else if (now.getMonth() === 10) {
        return (dateh.innerText = `Available Budget in November, ${now.getFullYear()}`)
    } else if (now.getMonth() === 11) {
        return (dateh.innerText = `Available Budget in December, ${now.getFullYear()}`)
    }
})

class Top{
    constructor(desc, amount){
        this.desc = desc 
        this.amount = amount
    }
    populate() {
        
    }
}

class Lower{
    constructor(desc, amount) {
        this.desc = desc 
        this.amount = amount
    }
    AddItems() {
        if (zelect.value === 'add') {
            
            let totalIncomex = [...totalIncome, ~~amountDesc.value]
            for (let i = 0; i < totalIncomex.length; i++){
                k = k + totalIncomex[i]
            }
            
            totalAvailBal.innerHTML = `<p>${k}</p>`
            
            accruedIncome.innerText = k

            return incCont.innerHTML += `
                <div id='bgi' class="flex justify-between shadow-2xl border mb-4 md:px-3 md:py-2.5 
                md:rounded-lg">
                    <p>${this.desc}</p>
                    <p>${this.amount}</p>
                </div>
            `
        } else {

            let percent = Math.round(this.amount / k * 100)
            
            let totalExp = [...totalExpense, ~~amountDesc.value]
            totalExp.forEach(i => {
                j += i
            })

             if (k === 0 || j > k) {
                return alert('Pls Ensure You Have Income First')
            }
            
            totExpenses.innerHTML = `<p class="text-white text-xl"></p>${j}</p>`

            totalAvailBal.innerHTML = `<p>${j}</p>`
            // accruedIncome.innerText = k

            return expCont.innerHTML += `                
                <div id='bge' class="group flex justify-between shadow-2xl border mb-4 md:px-3 md:py-2.5 
                md:rounded-lg md:bg-white ">
                    <h1 id="item" class="">${this.desc}</h1>
                    <div class="space-x-4 text-red-500 ">
                        <span id='fig'>${this.amount}</span>
                        <span id="percent" class="bg-red-200 ">${percent}%</span>
                        <span class="border border-red-200 px-2 pb-1 rounded-full 
                        hidden group-hover:inline-block cursor-pointer ">X</span>
                    </div>
                </div>        
            `
        }
    }
    // AddTotalIncome() {
    //     return totalAvailBal.innerHTML = `
    //          <p class="text-white text-xl"></p>${k}</p>
    //     `
    // }
}



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const lower1 = new Lower(itemDesc.value, amountDesc.value)
    lower1.AddItems()
    
    itemDesc.value = ''
    amountDesc.value = ''
    // form.reset()
})

expCont.addEventListener('click', (e) => {
    if (e.target.classList.contains('border')) {
        console.log(e.target.parentElement.children[0].innerText)
        j -= e.target.parentElement.children[0].innerText
        totExpenses.innerHTML = `<p class="text-white text-xl"></p>${j}</p>`
        e.target.parentElement.parentElement.remove()

        totalAvailBal.innerHTML = `<p id='total-bal'>+${k - j}</p>`
    }
})

itemDesc.addEventListener('click', () => {
    if (zelect.value === 'add') {
        // itemDesc.classList.add('sizing')
        itemDesc.style.border = '0.1em solid green'
    } else {
        itemDesc.style.border = '0.075em solid red'
    }
})

addShowIncome.addEventListener('click', () => {
    // incConMob.classList.toggle('hidden')
})


// class Top{
//     constructor(name, comm, sch, score) {
//         this.name = name 
//         this.comm = comm 
//         this.sch = sch 
//         this.score = score
//     }
// }

// const top1 = new Top('Francis', 'Buguma', 'KNC', '50')

// console.log(top1)

const nation = localStorage.setItem('country', 'Nigeria')
localStorage.setItem('state', 'Rivers')

console.log(localStorage.getItem('country'))
console.log(localStorage.getItem('state'))

const sista = 'Ominini'
const brother1 = 'Ngoye'
const brother2 = 'Nimi'

// const cityCaps = {
//     rivers: 'ph', 
//     edo: 'benin city'
// }

// localStorage.setItem('capitals', cityCaps)
// console.log(localStorage.getItem('capitals'))
// let cityCapsSerialize = JSON.stringify(cityCaps)


localStorage.setItem('sister', sista)
localStorage.setItem('brother', brother1)
localStorage.setItem('brotha', brother2)

console.log(localStorage)
console.log(localStorage.getItem('brotha'))
console.log('brotha')
// console.log(country)