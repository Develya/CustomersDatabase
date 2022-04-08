// Création des clients
var customers = [];

customers[0] = {firstName:'Kathryne', lastName:'Rosi', email:'krosi0@nationalgeographic.com', gender:'Female', phone:'438-651-3763'}; 
customers[1] = {firstName:'Ive', lastName:'Perrins', email:'iperrins1@myspace.com', gender:'Male', phone:'514-396-5716'}; 
customers[2] = {firstName:'Whittaker', lastName:'Lillgard', email:'wlillgard2@springer.com', gender:'Male', phone:'514-476-2745'}; 
customers[3] = {firstName:'Forster', lastName:'Abramovitz', email:'fabramovitz3@bing.com', gender:'Male', phone:'438-562-1918'}; 
customers[4] = {firstName:'Jena', lastName:'Shreeves', email:'jshreeves4@bloglines.com', gender:'Female', phone:'514-132-2563'}; 
customers[5] = {firstName:'Vasily', lastName:'Dwerryhouse', email:'vdwerryhouse5@census.gov', gender:'Male', phone:'438-823-6678'}; 
customers[6] = {firstName:'Lucius', lastName:'Redhead', email:'lredhead6@barnesandnoble.com', gender:'Male', phone:'514-363-3914'}; 
customers[7] = {firstName:'Raphael', lastName:'Alsina', email:'ralsina7@state.gov', gender:'Male', phone:'438-522-0501'}; 
customers[8] = {firstName:'Novelia', lastName:'Chettle', email:'nchettle8@usatoday.com', gender:'Female', phone:'514-747-2082'}; 
customers[9] = {firstName:'Hersch', lastName:'Hurdwell', email:'hhurdwell9@archive.org', gender:'Male', phone:'438-733-2794'}; 
customers[10] = {firstName:'Quintana', lastName:'Djokovic', email:'qdjokovica@unesco.org', gender:'Female', phone:'450-742-5217'}; 
customers[11] = {firstName:'Yale', lastName:'Jeckells', email:'yjeckellsb@jalbum.net', gender:'Male', phone:'514-880-0856'}; 
customers[12] = {firstName:'Garey', lastName:'Sandars', email:'gsandarsc@forbes.com', gender:'Male', phone:'514-129-6987'}; 
customers[13] = {firstName:'Dunstan', lastName:'Binyon', email:'dbinyond@last.fm', gender:'Male', phone:'514-850-4647'}; 
customers[14] = {firstName:'Philip', lastName:'Cudde', email:'pcuddee@booking.com', gender:'Male', phone:'450-665-0682'}; 
customers[15] = {firstName:'Oswell', lastName:'Ellar', email:'oellarf@issuu.com', gender:'Male', phone:'450-107-3676'}; 
customers[16] = {firstName:'Winfred', lastName:'Karolewski', email:'wkarolewskig@deliciousdays.com', gender:'Male', phone:'450-721-8205'}; 
customers[17] = {firstName:'Carina', lastName:'Bovaird', email:'cbovairdh@dedecms.com', gender:'Female', phone:'450-767-0261'};

// Fonction pour récupérer le nombre total de clients et le nombre de clients par région pour les inscrire dans la page de statistiques
function findStats() {

      // Récupérer les balises HTML qui vont contenir les statistiques
      let nombreClientsOutput = document.getElementById("nombre-clients");
      let nombreClientsMtlOutput = document.getElementById("nombre-clients-mtl");
      let nombreClientsMonteregieOutput = document.getElementById("nombre-clients-monteregie");

      // Compter le nombre de clients de chaque région en comparant les 3 premiers chiffres du numéro de téléphone
      let nombreClientsMtl = 0;
      let nombreClientsMonteregie = 0;

      for (let c of customers) {
            switch (c.phone.substring(0, 3)) {

                  case "438":
                        nombreClientsMtl++;
                        break;

                  case "514":
                        nombreClientsMtl++;
                        break;

                  case "450":
                        nombreClientsMonteregie++;
                        break;

                  default:
                        break;
            }
      }

      // Inscrire les statistiques dans les balises HTML qui contiennent les statistiques
      nombreClientsOutput.innerText = customers.length;
      nombreClientsMtlOutput.innerText = nombreClientsMtl;
      nombreClientsMonteregieOutput.innerText = nombreClientsMonteregie;
}

// Fonction pour inscire tous les clients dans un tableau HTML dans la page de la liste des clients.
function displayCustomers() {
      // Récupérer le tableau de la liste de clients
      let clientsTable = document.getElementById("clients-list");

      // Boucle pour ajouter une ligne de tableau par client (Crée les éléments d'une ligne de tableau, leur assigne une valeur, puis les ajoute à la liste de clients)
      for (let c of customers) {
            let row = document.createElement("tr");

            let firstName = document.createElement("td");
            firstName.innerText = c.firstName;

            let lastName = document.createElement("td");
            lastName.innerText = c.lastName;

            // Crée un lien "Détails" qui redirige vers la page details.html avec la position du client dans le tableau comme ancre.
            let detailsContainer = document.createElement("td");
            let details = document.createElement("a");
            details.setAttribute("href", "details.html#" + customers.indexOf(c));
            details.innerText = "Détails";
            details.classList.add("details-link");
            detailsContainer.appendChild(details);

            row.appendChild(firstName);
            row.appendChild(lastName);
            row.appendChild(detailsContainer);

            clientsTable.appendChild(row);
      }
}

// Fonction pour récupérer les informations du client qui correspond au numéro inscrit dans l'URL
function getDetails() {
      // Récupérer l'ID de client (sa position dans le tableau "customers") inscrit dans l'URL
      let url = window.location.hash;
      customerID = parseInt(url.substring(1));

      // Vérifier si l'ID est valide
      if (customerID && customerID < customers.length || customerID == 0) {

            // Récupérer les différentes balises HTML qui seront utilisées pour inscrire les informations du client dans la page web
            let title = document.getElementById("title");
            let icon = document.getElementById("icon");
            let customerGender = document.getElementById("customerGender");
            let customerCard = document.getElementById("customerCard");
            let customerName = document.getElementById("customerName");
            let customerMail = document.getElementById("customerMail");
            let customerPhone = document.getElementById("customerPhone");

            // Déterminer le genre du client pour choisir l'image de sa carte
            switch (customers[customerID].gender) {
                  case "Female":
                        // Inscrire les informations du client dans les balises HTML
                        customerName.innerText = customers[customerID].firstName + " " + customers[customerID].lastName;
                        title.innerText = customers[customerID].firstName + " " + customers[customerID].lastName;
                        icon.setAttribute("href", "../media/female.png");
                        customerGender.src = "../media/female.png";
                        customerMail.innerText = customers[customerID].email;
                        customerPhone.innerText = customers[customerID].phone;
                        customerCard.classList.remove("visually-hidden");
                        break;

                  case "Male":
                        // Inscrire les informations du client dans les balises HTML
                        customerName.innerText = customers[customerID].firstName + " " + customers[customerID].lastName;
                        title.innerText = customers[customerID].firstName + " " + customers[customerID].lastName;
                        icon.setAttribute("href", "../media/male.png");
                        customerGender.src = "../media/male.png";
                        customerMail.innerText = customers[customerID].email;
                        customerPhone.innerText = customers[customerID].phone;
                        customerCard.classList.remove("visually-hidden");
                        break;

                  default:
                        break;
            }
      } else {
            // Ce client n'existe pas
            document.getElementById("notfound").classList.remove("visually-hidden");
      }
}

var firstTimeSearching = true; // Variable qui détermine si c'est la première fois qu'une recherche est effectuée ( utilisée dans findCustomers() )
// Fonction pour trouver les clients à partir de leurs noms
function findCustomers() {

      // Pour supprimer les anciens résultats
      // Récupérer les éléments qui ont comme classe "result" et les supprimer de la page web
      let results = document.getElementsByClassName("result");
      if (results) {
            for (r of results) {
                  r.remove();
            }
      }

      // Récupérer la table des résultats et les valeurs saisies dans les champs de recherche
      // Met les valeurs en minuscules pour que les recherches ne soit pas "case sensitive"
      let firstNameInput = document.getElementById("firstName").value.toLowerCase();
      let lastNameInput = document.getElementById("lastName").value.toLowerCase();
      let searchResults = document.getElementById("search-results");
      let resultsContainer = document.getElementById("results-container");

      // Vérifie si c'est la première fois qu'une recherche est effectuée depuis le chargement de la page et enlève la classe CSS qui rend le tableau de résultats invisible si c'est le cas
      if (firstTimeSearching) {
            resultsContainer.classList.remove("visually-hidden");
            firstTimeSearching = false;
      }

      // Variable pour savoir si un résultat est trouvé, si celle-ci reste fausse après une recherche, la recherche retournera "Pas de résultats."
      let resultFound = false;

      if (firstNameInput && lastNameInput) { // Si les deux champs sont utilisés
            // Boucle pour ajouter une ligne de tableau par résultat (Crée les éléments d'une ligne de tableau, leur assigne une valeur, puis les ajoute à la liste de clients)
            for (c of customers) {
                  // Vérifier si le nom du client commence par ou est égal à la recherche du client
                  if (c.firstName.substring(0, firstNameInput.length).toLowerCase() == firstNameInput && c.lastName.substring(0, lastNameInput.length).toLowerCase() == lastNameInput) {
                        resultFound = true;

                        let row = document.createElement("tr");

                        let firstName = document.createElement("td");
                        firstName.innerText = c.firstName;

                        let lastName = document.createElement("td");
                        lastName.innerText = c.lastName;

                        // Crée un lien "Détails" qui redirige vers la page details.html avec la position du client dans le tableau comme ancre.
                        let detailsContainer = document.createElement("td");
                        let details = document.createElement("a");
                        details.setAttribute("href", "details.html#" + customers.indexOf(c));
                        details.innerText = "Détails";
                        details.classList.add("details-link");
                        detailsContainer.appendChild(details);
                        
                        row.appendChild(firstName);
                        row.appendChild(lastName);
                        row.appendChild(detailsContainer);
                        row.classList.add("result"); // Ajoute la classe result utilisée pour supprimer les anciens résultats au début de cette fonction
                        searchResults.appendChild(row);
                  }
            }
            if (!resultFound) { // Si aucun résultat n'est trouvé dans la boucle au dessus
                  let row = document.createElement("tr");
                  let noResults = document.createElement("td");
                  noResults.setAttribute("colspan", 3);
                  noResults.innerText = "Pas de résultats."

                  row.appendChild(noResults);
                  row.classList.add("result"); // Ajoute la classe result utilisée pour supprimer les anciens résultats au début de cette fonction
                  searchResults.appendChild(row);
            }
      } else if (firstNameInput && !lastNameInput) { // Si seulement le champ de prénom est utilisé
            // Boucle pour ajouter une ligne de tableau par résultat (Crée les éléments d'une ligne de tableau, leur assigne une valeur, puis les ajoute à la liste de clients)
            for (c of customers) {
                  // Vérifier si le nom du client commence par ou est égal à la recherche du client
                if (c.firstName.substring(0, firstNameInput.length).toLowerCase() == firstNameInput) {
                    resultFound = true;

                    let row = document.createElement("tr");

                    let firstName = document.createElement("td");
                    firstName.innerText = c.firstName;

                    let lastName = document.createElement("td");
                    lastName.innerText = c.lastName;

                    // Crée un lien "Détails" qui redirige vers la page details.html avec la position du client dans le tableau comme ancre.
                    let detailsContainer = document.createElement("td");
                    let details = document.createElement("a");
                    details.setAttribute("href", "details.html#" + customers.indexOf(c));
                    details.innerText = "Détails";
                    details.classList.add("details-link");
                    detailsContainer.appendChild(details);

                    row.appendChild(firstName);
                    row.appendChild(lastName);
                    row.appendChild(detailsContainer);
                    row.classList.add("result"); // Ajoute la classe result utilisée pour supprimer les anciens résultats au début de cette fonction
                    searchResults.appendChild(row);
                }
            }
            if (!resultFound) { // Si aucun résultat n'est trouvé dans la boucle au dessus
                  let row = document.createElement("tr");
                  let noResults = document.createElement("td");
                  noResults.setAttribute("colspan", 3);
                  noResults.innerText = "Pas de résultats."

                  row.appendChild(noResults);
                  row.classList.add("result"); // Ajoute la classe result utilisée pour supprimer les anciens résultats au début de cette fonction
                  searchResults.appendChild(row);
            }
      } else if (!firstNameInput && lastNameInput) { // Si seulement le champ du nom de famille est utilisé
            // Boucle pour ajouter une ligne de tableau par résultat (Crée les éléments d'une ligne de tableau, leur assigne une valeur, puis les ajoute à la liste de clients)
            for (c of customers) {
                if (c.lastName.substring(0, lastNameInput.length).toLowerCase() == lastNameInput) {
                    resultFound = true;

                    let row = document.createElement("tr");

                    let firstName = document.createElement("td");
                    firstName.innerText = c.firstName;

                    let lastName = document.createElement("td");
                    lastName.innerText = c.lastName;

                    // Crée un lien "Détails" qui redirige vers la page details.html avec la position du client dans le tableau comme ancre.
                    let detailsContainer = document.createElement("td");
                    let details = document.createElement("a");
                    details.setAttribute("href", "details.html#" + customers.indexOf(c));
                    details.innerText = "Détails";
                    details.classList.add("details-button");
                    detailsContainer.appendChild(details);

                    row.appendChild(firstName);
                    row.appendChild(lastName);
                    row.appendChild(detailsContainer);
                    row.classList.add("result"); // Ajoute la classe result utilisée pour supprimer les anciens résultats au début de cette fonction
                    searchResults.appendChild(row);
                }
            }
            if (!resultFound) { // Si aucun résultat n'est trouvé dans la boucle au dessus
                  let row = document.createElement("tr");
                  let noResults = document.createElement("td");
                  noResults.setAttribute("colspan", 3);
                  noResults.innerText = "Pas de résultats."

                  row.appendChild(noResults);
                  row.classList.add("result"); // Ajoute la classe result utilisée pour supprimer les anciens résultats au début de cette fonction
                  searchResults.appendChild(row);
            }
      } else if (!firstNameInput && !lastNameInput) { // Si aucun des champs n'est utilisé
            let row = document.createElement("tr");
            let noResults = document.createElement("td");
            noResults.setAttribute("colspan", 3);
            noResults.innerText = "Pas de résultats."

            row.appendChild(noResults);
            row.classList.add("result"); // Ajoute la classe result utilisée pour supprimer les anciens résultats au début de cette fonction
            searchResults.appendChild(row);
      }
}

// Fonction pour réinitialiser les champs de recherche dans recherche.html
function resetSearchFields() {
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
}