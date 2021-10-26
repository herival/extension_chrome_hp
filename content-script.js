
    var str=document.location.href;
    var str1 = str.replace('%3D', '=');
    var url = new URL(str1);
    var nom = url.searchParams.get("ma");

    if(nom){

        document.getElementById('IPv4_HostName').setAttribute('value', nom);
        document.getElementById('IPv4_DomainName').setAttribute('value', 'cdn.groupe.credit-du-nord.fr');
        document.getElementById('IPv4_DnsServerId').setAttribute('value', '161.20.7.66');
        document.getElementById('IPv4_Sec_DnsServerId').setAttribute('value', '161.20.7.67');
        
        var bouton = document.getElementById('Apply').click();
        var bouton = document.getElementById('Apply');
        console.log(bouton);
        bouton.click();
    }
    

    

    







