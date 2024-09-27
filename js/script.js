console.log("On vas bien manger \n France, Framboise, Biscuit.. \n Soigné les gars ");
function bienvenu() {
    alert("Dis moi , la marchandise, tu l'a ?  ");
    setInterval(
        function() {
        alert("oui ... je l'a ");
    }, 5000);
}

function generer(){
    
    //génération de mot de passe 
    var minuscule = "abcdefghijklmnopqrstuvwxyz";
    var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chiffre = "0123456789";
    var symbole = "%!&*^()#$:";
    // attribue a la variable mon formulaire l'ensembre de ce qui se trouve dans la balise d'id formulaireGenMdp
    var monFormulaire = document.forms.formulaireGenMdp;

    var password="";
    var listecar="";
    
    //vérification des cases cochés et ajout des éléments a la liste de caractères
    if (monFormulaire.elements["minuscule"].checked){
        listecar+=minuscule;
    }
    if (monFormulaire.elements["majuscule"].checked){
        listecar+=majuscule;
    }
    if (monFormulaire.elements["chiffre"].checked){
        listecar+=chiffre;
    }
    if (monFormulaire.elements["symbole"].checked){
        listecar+=symbole;
    }

    for( var i = 1; i<=monFormulaire.nbDeCar.value; i++){
        //math random genere un nb decimale entre 0 et 1, mathrandom * listecarLength genere un nombre entre la 0 et la longeur de listecar , mathfloor arondis a l'entier en dessous 
        var randomNumber = Math.floor(Math.random()* listecar.length); 
        password += listecar.substring(randomNumber, randomNumber +1);
    }

    console.log(password);

    // affiche le formulaire dans la console
    //console.log(monFormulaire);

    // affiche le nombre de caractères choisis
    //console.log("Nombre de caractères : ", monFormulaire.nbDeCar.value);

    // creation d'une nouvelle ligne qui sera ajoutée au tableau
    if (nbDeCar && dateValidite && cat_usage && site_app) {
        var newLine = document.createElement("tr");
        // création de 5 cellules 
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");
        var col5 = document.createElement("td");
        // valeurs par défaut
        col1.textContent = "val1";
        col2.textContent = "val2";
        col3.textContent = "val3";
        col4.textContent = "val4";
        col5.textContent = "val5";

        newLine.append(col1, col2, col3, col4, col5);

        col1.textContent = monFormulaire.nbDeCar.value;
        //col2.textContent = formatDate(new Date());
        col3.textContent = monFormulaire.cat_usage.value;
        col4.textContent = monFormulaire.site_app.value;
        col5.textContent = password;

        var monTableau = document.getElementById("tabMdp");
        monTableau.appendChild(newLine);
    } else {
        alert("Il manque des cases à remplir !");
    }



}

console.log("On vas bien manger \n France, Framboise, Biscuit.. \n Soigné les gars ");
function bienvenu() {
    alert("Dis moi , la marchandise, tu l'a ?  ");
    setInterval(
        function() {
        alert("oui ... je l'a ");
    }, 5000);
}

function generer(){
    
    //génération de mot de passe 
    var minuscule = "abcdefghijklmnopqrstuvwxyz";
    var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chiffre = "0123456789";
    var symbole = "%!&*^()#$:";
    // attribue a la variable mon formulaire l'ensembre de ce qui se trouve dans la balise d'id formulaireGenMdp
    var monFormulaire = document.forms.formulaireGenMdp;

    var password="";
    var listecar="";
    
    //vérification des cases cochés et ajout des éléments a la liste de caractères
    if (monFormulaire.elements["minuscule"].checked){
        listecar+=minuscule;
    }
    if (monFormulaire.elements["majuscule"].checked){
        listecar+=majuscule;
    }
    if (monFormulaire.elements["chiffre"].checked){
        listecar+=chiffre;
    }
    if (monFormulaire.elements["symbole"].checked){
        listecar+=symbole;
    }

    for( var i = 1; i<=monFormulaire.nbDeCar.value; i++){
        //math random genere un nb decimale entre 0 et 1, mathrandom * listecarLength genere un nombre entre la 0 et la longeur de listecar , mathfloor arondis a l'entier en dessous 
        var randomNumber = Math.floor(Math.random()* listecar.length); 
        password += listecar.substring(randomNumber, randomNumber +1);
    }

    console.log(password);

    // affiche le formulaire dans la console
    //console.log(monFormulaire);

    // affiche le nombre de caractères choisis
    //console.log("Nombre de caractères : ", monFormulaire.nbDeCar.value);
    
    // creation d'une nouvelle ligne qui sera ajoutée au tableau
    if ( !monFormulaire.nbDeCar.value || !monFormulaire.dateValidite.value || !monFormulaire.cat_usage.value || !monFormulaire.site_app.value) {
        alert("Il manque des cases à remplir !");
        return;
    } 
        var newLine = document.createElement("tr");
        // création de 5 cellules 
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");
        var col5 = document.createElement("td");
        // valeurs par défaut
        col1.textContent = "val1";
        col2.textContent = "val2";
        col3.textContent = "val3";
        col4.textContent = "val4";
        col5.textContent = "val5";

        newLine.append(col1, col2, col3, col4, col5);

        col1.textContent = monFormulaire.nbDeCar.value;
        col2.textContent = formatDate(new Date());
        col3.textContent = monFormulaire.cat_usage.value;
        col4.textContent = monFormulaire.site_app.value;
        col5.textContent = password;

        var monTableau = document.getElementById("tabMdp");
        monTableau.appendChild(newLine);
    



}

function reset(){
    window.location.reload()
}

//J'ai trouvé cette fonction sur internet, elle permet de transformer les dates en texte 
function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; 
    var year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return day + '/' + month + '/' + year;
}