let transSumEl= document.getElementById('currency')
let mountEl= document.getElementById('mount')
let sumEl= document.getElementById('sum')
let resultEl= document.getElementById('result')
let body = document.getElementById('card-body')
let setBtn = document.getElementById('setbtn')
// let image='URL(https://cdn-icons-png.flaticon.com/512/3133/3133621.png)'





const sumCurrent=()=>{
    let transSum = parseFloat(transSumEl.value)
    let mount = parseFloat(mountEl.value)
    let res = transSum * mount
    // resultEl.innerHTML = 'summa' + res
   resultEl.innerHTML=`<div class="card1" style="width: 18rem;">${res}
   
    </div>`

}


sumEl.addEventListener('click',sumCurrent)
// const addbtn =()=>{
// }
// setBtn.addEventListener('click',addbtn)

