const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loader = document.getElementById("loader")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan nama saya panpan bot, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa ya?`,
        `Waw sama dong aku juga hobi ${data?.hobi}, btw punya pacar enggak?`,
        `Ohhhh ${data?.pacar}, ya udah kalo gitu, udahan ya`
    ]
}

pertanyaan.innerHTML = botSay({})[0]

let userData = {}

function botStart() {
    if (jawaban.value.length < 1) return alert("Silahkan Isi jawaban dulu")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loader.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loader.style.display = "none"
        container[0].style.filter = "none"
    }, 1000)
    Object.assign(userData, jawabanUser)
    jawaban.value = ""
}

function botEnd() {
    alert(`Terimakasih ${userData.nama} terimakasih sudah berkunjung, anda akan diarahkan ke tampilan awal.`)
    window.location.reload()
}
