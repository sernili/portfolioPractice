// console.log('Its working') // Zum Testen :)

let theme = localStorage.getItem( 'theme' )

// Damit wird die Farbe im Local Storage gespeichert + siehe Funktion unterste Zeile!
if( theme == null ) {
    setTheme( 'light' )
} else {
    setTheme( theme )
}


let themeDots = document.getElementsByClassName('theme-dot')

for ( var i = 0; themeDots.length > i; i++ ){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Item Clicked:', mode)  // hier Verlinkung mit HTML data- mode=''!!!
        setTheme(mode)
    })
} 

function setTheme ( mode ){
    switch ( mode ) {
        case 'light':
            document.getElementById('theme-style').href = 'default.css'
            break;
        case 'blue':
            document.getElementById('theme-style').href = 'blue.css'
            break;
        case 'green':
            document.getElementById('theme-style').href = 'green.css'
            break;
        case 'purple':
            document.getElementById('theme-style').href = 'purple.css'
            break;
        default:
            document.getElementById('theme-style').href = 'default.css'
            break;
    }

    localStorage.setItem( 'theme', mode )
}