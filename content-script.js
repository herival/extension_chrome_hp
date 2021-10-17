

    var str=document.location.href;
    var str1 = str.replace('%3D', '=');
    var url = new URL(str1);
    var nom = url.searchParams.get("ma");

    if(nom){

        document.getElementById('log_ma').setAttribute('value', nom);
        document.getElementById('log_codelog').setAttribute('value', 'Codelog');
        document.getElementById('log_serialnumber').setAttribute('value', 'NUMERO DE SERIE');
        document.getElementById('log_charge').setAttribute('value', 'CHARGE');
        document.getElementById('log_mac').setAttribute('value', 'CHARGE');
        
        document.getElementById('log_submit').click();
    }
    

    

    







