function IFM (){
    var select = document.querySelector('#education');
    var ensino = select.options[select.selectedIndex].value;

    if (ensino == 'infantil'){
        location.href = 'https://pt.wikipedia.org/wiki/Elon_Musk';
    }

    if (ensino == 'ensino-fundamental'){
        location.href = 'https://pt.wikipedia.org/wiki/Bill_Gates';
    }

    if (ensino == 'ensino-medio'){
        location.href = 'https://pt.wikipedia.org/wiki/Steve_Jobs';
        }

}

