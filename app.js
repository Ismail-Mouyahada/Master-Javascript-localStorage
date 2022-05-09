 
 
      // Function de cryptage

    function hash(content){
      let storage = [];
      let result = content.split("");
     
      for (letter in result) {
        let item = result[letter]; 
        storage.push(item.charCodeAt());
      }
     return storage; 
    }

     // Function de décryptage
      
    function unhash(stored, submited){
      const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

      const a = stored;
      const b = submited;

     return equals(a, b); // true
      
      
    }


    let hashedPass = hash('salut');
    let unhashedPass = unhash(hashedPass,hashedPass);
     
    console.log(hashedPass   ); 
    console.log(unhashedPass ); 
     
  

      // Insertion des données

      let DeleteBtn = document.querySelector('#supprimer');
      DeleteBtn.addEventListener('click', function() {
        localStorage.clear();
      })

      let SubmitBtn = document.querySelector("#ajouter");
      SubmitBtn.addEventListener('click', function() {

        let insert = document.querySelector('#titre').value;
        localStorage.setItem(localStorage.length+1, insert);
      }, false);

      // Recuperation des données

      for (let a = 0; a < localStorage.length; a++) {

        let cont = document.querySelector('#tableContent');
        let child = document.createElement('tr');
        let date = new Date("2015-3-25");
        let subId = document.createElement('td');
        subId.textContent = a+1;
        let subTitle = document.createElement('td');
        subTitle.textContent = localStorage[a+1];
        let subDescription = document.createElement('td');
        subDescription.textContent = date.toLocaleDateString("en-US");
        let subOption = document.createElement('td');
        subOption.innerHTML = `
        <form >
           
          <!-- This is a button toggling the modal -->
          <button class="uk-button uk-button-danger uk-margin-small-right" type="button" uk-toggle="target: #modal-example_${a+1}">Effacer</button>
          <!-- This is the modal -->
          <div id="modal-example_${a+1}" uk-modal>
              <div class="uk-modal-dialog uk-modal-body">
                  <h2 class="uk-modal-title">Confirmation</h2>
                  <p>Est ce que vous sûre de vouloir supprimer cette element !</p>
                  <p class="uk-text-right">
                      <button type="submit" class="uk-margin-left uk-button uk-button-danger" onClick="localStorage.removeItem(${a+1});window.location.reload();" >Supprimer </button>
                      <button class="uk-button uk-button-default uk-modal-close" type="button">Annuler</button>
                  </p>
              </div>
          </div>
          <a class="uk-button uk-button-secondary" onClick="document.querySelector('#changer').value = localStorage.getItem(${a+1});  " href="#modal-center-${a+1}" uk-toggle>Modifier</a>
          <div id="modal-center-${a+1}" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <div class="uk-margin uk-flex-center">
            <input class="uk-input uk-text-center" type="text" placeholder="nouvelle valeur" id="changer" />
          </div>
          <button type="submit" class="uk-margin-left uk-button uk-button-primary" onClick="localStorage.setItem(${a+1},document.querySelector('#changer').value); window.location.reload();" >Enregistrer les modifications </button>
          <button class="uk-button uk-button-default uk-modal-close" type="button">Annuler</button>
          </div>
          </div>
          <a class="uk-button uk-button-primary" onClick="document.querySelector('#lire').textContent = localStorage.getItem(${a+1});  " href="#modal-center--${a+1}" uk-toggle>voir</a>
          <div id="modal-center--${a+1}" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <div class="uk-margin uk-flex-center">
           
            <p id="lire"> </p>
          </div>
          <button class="uk-button uk-button-default uk-modal-close" type="button">Fermer</button>
          </div>
          </div>
        </form>`;

        // créer les cases 

        child.appendChild(subId);
        child.appendChild(subTitle);
        child.appendChild(subDescription);
        child.appendChild(subOption);
        cont.appendChild(child);

   }
      
