function IFM(){
    var selector = document.querySelector('#education');
    var ensino = selector.options[selector.selectedIndex].value;

    if (ensino == 'infantil'){
        location.href = 'file:///E:/Projetos/SIME/documentos_infantil.html#';
    }

    if (ensino == 'ensino-fundamental'){
        location.href = 'file:///E:/Projetos/SIME/documentos_fundamental.html#';
    }

    if (ensino == 'ensino-medio'){
        location.href = 'file:///E:/Projetos/SIME/documentos_medio.html#';
        }

}

