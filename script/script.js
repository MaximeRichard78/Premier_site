function articleRemove(articleId) { // Fonction pour supprimer un article
  if (confirm("Êtes-vous sûr de vouloir supprimer l'article ?")) {  // Affiche une boîte de dialogue de confirmation avec le message "Êtes-vous sûr de vouloir supprimer l'article ?"
    window.location.href = 'removeArticle.php?id=' + articleId; // Redirige vers la page "removeArticle.php" avec l'identifiant de l'article à supprimer ajouté à l'URL
  }
}


function commentaryRemove(commentaryId) { // Définit une fonction nommée "commentaryRemove" avec un paramètre "commentaryId"
  if (confirm("Êtes-vous sûr de vouloir supprimer l'article ?")) {  // Affiche une boîte de dialogue de confirmation avec le message spécifié
    window.location.href = 'removeCommentary.php?id=' + commentaryId; // Redirige vers la page "removeCommentary.php" en ajoutant l'ID du commentaire dans l'URL
  }
}

function deployArticle(articleContent, i) { // Sélectionne tous les boutons ayant la classe 'link-primary'
  let seeMoreButtons = document.querySelectorAll('.link-primary');  // Sélectionne tous les contenus d'articles ayant la classe 'card-text'
  let articleContents = document.querySelectorAll('.card-text');
  
  if (seeMoreButtons[i].innerHTML === 'Voir plus') {  // Vérifie si le bouton "Voir plus" a été cliqué
    seeMoreButtons[i].innerHTML = 'Voir moins'; // Change le texte du bouton en "Voir moins"
    articleContents[i].innerHTML = articleContent;  // Met à jour le contenu de l'article avec le contenu complet
  } else {
    seeMoreButtons[i].innerHTML = 'Voir plus';  // Change le texte du bouton en "Voir plus"
    articleContents[i].innerHTML = '...'; // Réinitialise le contenu de l'article en affichant des points de suspension
  }
}


var photoURLs = [
  "https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png?20141212043325",
  "https://www.pokepedia.fr/images/4/44/Herbizarre-RFVF.png?20220105205222",
  "https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/1160px-Florizarre-RFVF.png?20141016141113",
  "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/795px-Salam%C3%A8che-RFVF.png?20141019213025",
  "https://www.pokepedia.fr/images/6/64/Reptincel-RFVF.png?20200407160524",
  "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/1146px-Dracaufeu-RFVF.png?20141019190201",
  "https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/870px-Carapuce-RFVF.png?20141016142207",
  "https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png?20200407160606",
  "https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/828px-Tortank-RFVF.png?20141019190013",
  "https://www.pokepedia.fr/images/c/c7/Chenipan-RFVF.png?20200407160704",
  "https://www.pokepedia.fr/images/thumb/6/6c/Chrysacier-RFVF.png/375px-Chrysacier-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/375px-Papilusion-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/9b/Aspicot-RFVF.png/375px-Aspicot-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/b6/Coconfort-RFVF.png/375px-Coconfort-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/ee/Dardargnan-RFVF.png/375px-Dardargnan-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/d/dc/Roucoups-RFVF.png/375px-Roucoups-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/d/d8/Roucarnage-RFVF.png/375px-Roucarnage-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/9e/Rattata-RFVF.png/375px-Rattata-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/98/Rattatac-RFVF.png/375px-Rattatac-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/7d/Piafabec-RFVF.png/375px-Piafabec-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/f/f2/Rapasdepic-RFVF.png/375px-Rapasdepic-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/56/Abo-RFVF.png/375px-Abo-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/7f/Arbok-RFVF.png/375px-Arbok-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/375px-Pikachu-DEPS.png",
  "https://www.pokepedia.fr/images/thumb/7/7d/Raichu-RFVF.png/375px-Raichu-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/6/66/Sabelette-RFVF.png/375px-Sabelette-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/a/a1/Sablaireau-RFVF.png/375px-Sablaireau-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/c/ca/Nidoran%E2%99%80-RFVF.png/375px-Nidoran%E2%99%80-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/b5/Nidorina-RFVF.png/375px-Nidorina-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/76/Nidoqueen-RFVF.png/375px-Nidoqueen-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/8e/Nidoran%E2%99%82-RFVF.png/375px-Nidoran%E2%99%82-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/1/1c/Nidorino-RFVF.png/375px-Nidorino-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/5f/Nidoking-RFVF.png/375px-Nidoking-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/4d/M%C3%A9lof%C3%A9e-RFVF.png/375px-M%C3%A9lof%C3%A9e-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/3f/M%C3%A9lodelfe-RFVF.png/375px-M%C3%A9lodelfe-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/f/f6/Goupix-RFVF.png/375px-Goupix-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/0/0c/Feunard-RFVF.png/375px-Feunard-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/c/cd/Rondoudou-RFVF.png/375px-Rondoudou-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/7e/Grodoudou-RFVF.png/375px-Grodoudou-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/2/2b/Nosferapti-RFVF.png/375px-Nosferapti-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/6/64/Nosferalto-RFVF.png/375px-Nosferalto-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/39/Mystherbe-RFVF.png/375px-Mystherbe-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/39/Ortide-RFVF.png/375px-Ortide-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/c/cd/Rafflesia-RFVF.png/375px-Rafflesia-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/52/Paras-RFVF.png/375px-Paras-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/55/Parasect-RFVF.png/375px-Parasect-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/a/a5/Mimitoss-RFVF.png/375px-Mimitoss-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/0/0f/A%C3%A9romite-RFVF.png/375px-A%C3%A9romite-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/a/aa/Taupiqueur-RFVF.png/375px-Taupiqueur-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/85/Triopikeur-RFVF.png/375px-Triopikeur-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/b8/Miaouss-RFVF.png/375px-Miaouss-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/41/Persian-RFVF.png/375px-Persian-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/44/Psykokwak-RFVF.png/375px-Psykokwak-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/6/6e/Akwakwak-RFVF.png/375px-Akwakwak-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/8e/F%C3%A9rosinge-RFVF.png/375px-F%C3%A9rosinge-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/d/df/Colossinge-RFVF.png/375px-Colossinge-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/e2/Caninos-RFVF.png/375px-Caninos-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/7e/Arcanin-RFVF.png/375px-Arcanin-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/4b/Ptitard-RFVF.png/375px-Ptitard-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/54/T%C3%AAtarte-RFVF.png/375px-T%C3%AAtarte-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/38/Tartard-RFVF.png/375px-Tartard-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/36/Abra-RFVF.png/375px-Abra-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/6/6f/Kadabra-RFVF.png/375px-Kadabra-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/6/68/Alakazam-RFVF.png/375px-Alakazam-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/75/Machoc-RFVF.png/375px-Machoc-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/c/cf/Machopeur-RFVF.png/375px-Machopeur-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/ee/Mackogneur-RFVF.png/375px-Mackogneur-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/f/f9/Ch%C3%A9tiflor-RFVF.png/375px-Ch%C3%A9tiflor-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/f/f5/Boustiflor-RFVF.png/375px-Boustiflor-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/41/Empiflor-RFVF.png/375px-Empiflor-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/d/de/Tentacool-RFVF.png/375px-Tentacool-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/1/1c/Tentacruel-RFVF.png/375px-Tentacruel-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/b2/Racaillou-RFVF.png/375px-Racaillou-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/a/a5/Gravalanch-RFVF.png/375px-Gravalanch-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/a/a3/Grolem-RFVF.png/375px-Grolem-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/8f/Ponyta-RFVF.png/375px-Ponyta-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/9c/Galopa-RFVF.png/375px-Galopa-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/5a/Ramoloss-RFVF.png/375px-Ramoloss-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/b4/Flagadoss-RFVF.png/375px-Flagadoss-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/b9/Magn%C3%A9ti-RFVF.png/375px-Magn%C3%A9ti-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/36/Magn%C3%A9ton-RFVF.png/375px-Magn%C3%A9ton-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/0/07/Canarticho-RFVF.png/375px-Canarticho-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/2/2a/Doduo-RFVF.png/375px-Doduo-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/2/2e/Dodrio-RFVF.png/375px-Dodrio-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/31/Otaria-RFVF.png/375px-Otaria-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/93/Lamantine-RFVF.png/375px-Lamantine-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/9c/Tadmorv-RFVF.png/375px-Tadmorv-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/8f/Grotadmorv-RFVF.png/375px-Grotadmorv-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/eb/Kokiyas-RFVF.png/375px-Kokiyas-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/84/Crustabri-RFVF.png/375px-Crustabri-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/9f/Fantominus-RFVF.png/375px-Fantominus-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/0/09/Spectrum-RFVF.png/375px-Spectrum-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/8d/Ectoplasma-RFVF.png/375px-Ectoplasma-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/2/24/Onix-RFVF.png/375px-Onix-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/94/Soporifik-RFVF.png/375px-Soporifik-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/3a/Hypnomade-RFVF.png/375px-Hypnomade-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/ed/Krabby-RFVF.png/375px-Krabby-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/55/Krabboss-RFVF.png/375px-Krabboss-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/59/Voltorbe-RFVF.png/375px-Voltorbe-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/0/03/%C3%89lectrode-RFVF.png/375px-%C3%89lectrode-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/39/Noeunoeuf-RFVF.png/375px-Noeunoeuf-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/1/1f/Noadkoko-RFVF.png/375px-Noadkoko-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/58/Osselait-RFVF.png/375px-Osselait-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/39/Ossatueur-RFVF.png/375px-Ossatueur-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/e7/Kicklee-RFVF.png/375px-Kicklee-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/9c/Tygnon-RFVF.png/375px-Tygnon-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/74/Excelangue-RFVF.png/375px-Excelangue-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/53/Smogo-RFVF.png/375px-Smogo-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/38/Smogogo-RFVF.png/375px-Smogogo-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/a/a1/Rhinocorne-RFVF.png/375px-Rhinocorne-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/80/Rhinof%C3%A9ros-RFVF.png/375px-Rhinof%C3%A9ros-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/b0/Leveinard-DEPS.png/375px-Leveinard-DEPS.png",
  "https://www.pokepedia.fr/images/thumb/d/dc/Saquedeneu-RFVF.png/375px-Saquedeneu-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/7/78/Kangourex-RFVF.png/375px-Kangourex-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/3e/Hypotrempe-RFVF.png/375px-Hypotrempe-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/f/fc/Hypoc%C3%A9an-RFVF.png/375px-Hypoc%C3%A9an-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/1/1f/Poissir%C3%A8ne-RFVF.png/375px-Poissir%C3%A8ne-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/ed/Poissoroy-RFVF.png/375px-Poissoroy-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/34/Stari-RFVF.png/375px-Stari-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/85/Staross-RFVF.png/375px-Staross-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/3b/M._Mime-RFVF.png/375px-M._Mime-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/a/a4/Ins%C3%A9cateur-RFVF.png/375px-Ins%C3%A9cateur-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/44/Lippoutou-RFVF.png/375px-Lippoutou-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/1/18/%C3%89lektek-RFVF.png/375px-%C3%89lektek-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/8d/Magmar-RFVF.png/375px-Magmar-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/9/92/Scarabrute-RFVF.png/375px-Scarabrute-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/48/Tauros-RFVF.png/375px-Tauros-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/0/06/Magicarpe-RFVF.png/375px-Magicarpe-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/f/f2/L%C3%A9viator-RFVF.png/375px-L%C3%A9viator-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/4/4d/Lokhlass-RFVF.png/375px-Lokhlass-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/e/e3/M%C3%A9tamorph-RFVF.png/375px-M%C3%A9tamorph-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/8b/%C3%89voli-RFVF.png/375px-%C3%89voli-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/6/6b/Aquali-RFVF.png/375px-Aquali-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/89/Voltali-RFVF.png/375px-Voltali-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/6/64/Pyroli-RFVF.png/375px-Pyroli-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/0/01/Porygon-RFVF.png/375px-Porygon-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/83/Amonita-RFVF.png/375px-Amonita-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/f/f2/Amonistar-RFVF.png/375px-Amonistar-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/5/57/Kabuto-RFVF.png/375px-Kabuto-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/35/Kabutops-RFVF.png/375px-Kabutops-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/3/34/Pt%C3%A9ra-RFVF.png/375px-Pt%C3%A9ra-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/2/2b/Ronflex-RFVF.png/375px-Ronflex-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/b/bb/Artikodin-RFVF.png/375px-Artikodin-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/81/%C3%89lecthor-RFVF.png/375px-%C3%89lecthor-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/d/db/Sulfura-DEPS.png/375px-Sulfura-DEPS.png",
  "https://www.pokepedia.fr/images/thumb/1/11/Minidraco-RFVF.png/375px-Minidraco-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/d/d1/Draco-RFVF.png/375px-Draco-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/8/87/Dracolosse-RFVF.png/375px-Dracolosse-RFVF.png",
  "https://www.pokepedia.fr/images/thumb/d/d8/Mewtwo-DEPS.png/375px-Mewtwo-DEPS.png",
  "https://www.pokepedia.fr/images/thumb/1/16/Mew-DEPS.png/375px-Mew-DEPS.png",

];

var isPokemonVisible = false; // État initial, l'image de Pikachu est masquée

function showNextPhoto(photo) {
  var nextPhotoContainer = document.getElementById("nextPhotoContainer");

  if (isPokemonVisible) {
    nextPhotoContainer.innerHTML = ""; // Efface l'image précédente
    isPokemonVisible = false; // Met à jour l'état
  } else {
    var randomIndex = Math.floor(Math.random() * photoURLs.length);
    var nextPhotoURL = photoURLs[randomIndex];
    var nextPhoto = document.createElement("img");
    nextPhoto.src = nextPhotoURL;
    nextPhoto.classList.add("next-photo");

    nextPhoto.style.width = "10%"; // Ajuste la taille de l'image à 3% de la largeur de l'écran
    nextPhoto.style.height = "auto";

    nextPhotoContainer.innerHTML = ""; // Efface tout contenu précédent
    nextPhotoContainer.appendChild(nextPhoto); // Affiche l'image au hasard
    isPokemonVisible = true; // Met à jour l'état
  }
}
