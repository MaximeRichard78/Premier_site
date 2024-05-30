<?php require("./header.php") ?>
<h1>Remplisser le pokédex</h1>

<?php

$currentArticle = NULL;
if ($_GET) {
    $currentArticle = $articleController->get($_GET["id"]);     // Récupérer l'article actuel en fonction de l'ID passé en paramètre dans l'URL

}

if ($_POST && $_POST["title"] && $_POST["subtitle"] && $_POST["image"] && $_POST["author"] && $_POST["content"]) {      // Vérifier si des données ont été soumises via la méthode POST et si les champs requis sont remplis

    $newArticle = new Article($_POST);  // Créer une nouvelle instance de la classe Article en utilisant les données du formulaire

    if ($_GET) {
        $newArticle->setId($_GET["id"]);     // Si un ID est présent dans l'URL, mettre à jour l'article existant, sinon ajouter un nouvel article
        $articleController->update($newArticle);
    } else {
        $articleController->add($newArticle);
    }

    echo "<script>window.location.href='index.php'</script>";   // Rediriger vers la page d'accueil après la publication ou la mise à jour de l'article
}

?>

<form class="mx-5" method="POST">

    <label for="title" class="form-label">Titre</label>
    <input type="text" value="<?= $currentArticle ? $currentArticle->getTitle() : "" ?>" name="title" id="title" placeholder="Le titre de l'article" minlength="5" maxlength="120" class="form-control"> <!-- Champ de saisie pour le titre de l'article -->

    <label for="subtitle" class="form-label">Sous-titre</label>
    <input type="text" value="<?= $currentArticle ? $currentArticle->getSubtitle() : "" ?>" name="subtitle" id="subtitle" placeholder="Le sous-titre de l'article" minlength="5" maxlength="120" class="form-control"> <!-- Champ de saisie pour le sous-titre de l'article -->

    <label for="image" class="form-label">Image</label>
    <input type="url" value="<?= $currentArticle ? $currentArticle->getImage() : "" ?>" name="image" id="image" placeholder="L'URL d'image de l'article" minlength="5" maxlength="120" class="form-control"> <!-- Champ de saisie pour l'URL de l'image de l'article -->

    <label for="author" class="form-label">Auteur</label>
    <input type="text" value="<?= $currentArticle ? $currentArticle->getAuthor() : "" ?>" name="author" id="author" placeholder="L'auteur de l'article" minlength="5" maxlength="120" class="form-control"> <!-- Champ de saisie pour l'auteur de l'article -->

    <label for="content" class="form-label">Contenu</label>
    <textarea name="content" id="content" placeholder="Le contenu de l'article" minlength="10" maxlength="1200" class="form-control"><?= $currentArticle ? $currentArticle->getContent() : "" ?></textarea> <!-- Champ de saisie pour le contenu de l'article -->

    <p>Tous les champs de texte doivent être remplis</p> 
    
    <input type="submit" value="Publier" class="btn btn-outline-success mt-2 btn-lg"> <!-- Bouton pour soumettre le formulaire -->

</form>

<?php require("./footer.php") ?>