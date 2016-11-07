/**
 * Created by root on 07/11/16.
 */
function Calcul() {
    var premier_nombre = document.getElementById("premier_nombre").value;
    var deuxieme_nombre = document.getElementById("deuxieme_nombre").value;
    if (premier_nombre == ""){
        alert("Veuillez entrer un Premier nombre !");
        return false;
    }else if (deuxieme_nombre == ""){
        alert("Veuillez entrer un Deuxième nombre !");
        return false;
    }
    premier_nombre = Math.trunc(premier_nombre);
    var resultat = premier_nombre % deuxieme_nombre;
    alert(resultat);
}