const header = document.getElementById('header')
const menu = document.getElementById('menu-icon')
const UL = document.getElementById('UL')
const codes = document.getElementById('codes')
const small = document.getElementById('small')


//nav toggle
menu.addEventListener('click', () => {
    header.classList.toggle('active')
})

// Array of large Postcodes 

const largePostCodes = [
    'ABC123 XYZ', 'DEF456 UVW', 'GHI789 RST', 'JKL012 MNO', 'PQR345 UVW',
    'XYZ678 DEF', 'MNO901 GHI', 'RST234 ABC', 'UVW567 PQR', 'DEF890 XYZ'
  ];

// Array of small Postcodes
const smallPostCodes =[
    'ABC 123', 'DEF 456', 'GHI 789', 'ABC 123', 'DEF 456', 'GHI 789',
    'MNO 012', 'PQR 345', 'ABC 123', 'DEF 456', 'GHI 789', 'MNO 012',
    'PQR 345', 'ABC 123', 'DEF 456', 'GHI 789', 'ABC 123', 'DEF 456',
    'GHI 789', 'MNO 012', 'PQR 345', 'ABC 123', 'DEF 456', 'GHI 789',
    'ABC 123', 'DEF 456', 'GHI 789', 'MNO 012', 'PQR 345', 'ABC 123',
    'DEF 456', 'GHI 789', 'ABC 123', 'DEF 456', 'GHI 789', 'MNO 012',
    'PQR 345', 'ABC 123', 'DEF 456', 'GHI 789', 'ABC 123', 'DEF 456',
    'GHI 789', 'MNO 012', 'PQR 345', 'ABC 123', 'DEF 456', 'GHI 789',
    'ABC 123', 'DEF 456', 'GHI 789', 'MNO 012', 'PQR 345', 'ABC 123',
    'DEF 456', 'GHI 789', 'ABC 123', 'DEF 456', 'GHI 789', 'MNO 012',
    'PQR 345', 'ABC 123', 'DEF 456', 'GHI 789', 'ABC 123', 'DEF 456',
    'GHI 789', 'MNO 012', 'PQR 345', 'ABC 123', 'DEF 456', 'GHI 789'
  ];


  

codes.innerHTML = largePostCodes.map((itm)=>{
    return `<p class="LargePcodes">${itm}</p>`
}).join("")

small.innerHTML = smallPostCodes.map((itm)=>{
    return `<p class="Pcodes">${itm}</p>`
}).join("")