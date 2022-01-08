document.getElementById("vinciWebsite").onclick = function(){
    if (window.getComputedStyle(document.getElementById("vinciWebsite")).getPropertyValue("opacity") == 1){
        window.open("https://www.vinci-energies.com/cest-deja-demain/pour-un-monde-connecte/data-center-bienvenue-dans-les-usines-a-donnees/","_blank").focus();
    }
}

document.getElementById("scienceWebsite").onclick = function(){
    if (window.getComputedStyle(document.getElementById("scienceWebsite")).getPropertyValue("opacity") == 1){
        window.open("https://www.sciencesetavenir.fr/high-tech/informatique/numerique-et-ecologie-les-data-centers-des-gouffres-energetiques_121838","_blank").focus();
    }
}

document.getElementById("mapFr").ondblclick = function(){
    window.open("ressources/carte.pdf","_blank")
}

document.getElementById("publishcom").onclick = function(){
    let text = document.getElementById("commentary").value;
    let comMod = document.getElementById("CommentMod").cloneNode(true);
    if(text.replace(/\s/g,'') == ""){
        return;
    }
    comMod.id = "comRan";
    comMod.style.display = "block";
    comMod.querySelector("#comment").innerHTML = text;
    document.getElementById("commentaireL").insertBefore(comMod, document.getElementById("commentaireL").firstChild);
    
    document.getElementById("commentary").value = "";
}