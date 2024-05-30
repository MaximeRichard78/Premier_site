<?php require("./header.php") ?>
<h1>Exprimer vous</h1>

<?php
$currentCommentary = NULL;

if ($_GET && isset($_GET["id"])) {      // Vérifie si un paramètre "id" est présent dans la requête GET
    $currentCommentary = $commentaryController->get($_GET["id"]);    // Récupère le commentaire correspondant à l'id spécifié
}
if ($_POST) {   // Vérifie si des données ont été envoyées en POST
    $newCommentary = new Commentary($_POST);    // Crée un nouvel objet Commentary à partir des données du formulaire ($_POST)
    if ($_GET && isset($_GET["id"])) {    // Vérifie si un paramètre "id" est présent dans la requête GET
        $newCommentary->setId($_GET["id"]);        // Définit l'id du commentaire à mettre à jour
        $commentaryController->update($newCommentary);        // Met à jour le commentaire dans la base de données
    } else {
        $newCommentary->setArticle_id($_GET["article_id"]);        // Définit l'id de l'article auquel est lié le commentaire
        $commentaryController->add($newCommentary);        // Ajoute le nouveau commentaire à la base de données
    }
    echo "<script>window.location.href='index.php?id={$articleController->getLastId()}'</script>";    // Redirige l'utilisateur vers la page de l'article correspondant au dernier id ajouté

}
?>

<form class="mx-5" method="POST">
    <label for="author" class="form-label">Auteur</label>
    <input type="text" value="<?= $currentCommentary ? $currentCommentary->getAuthor() : "" ?>" name="author" id="author" placeholder="L'auteur de l'article" minlength="3" maxlength="120" class="form-control">
    <label for="content" class="form-label">Contenu</label>
    <textarea name="content" id="content" placeholder="Le contenu de l'article" minlength="1" maxlength="1200" class="form-control"><?= $currentCommentary ? $currentCommentary->getContent() : "" ?></textarea>
    <p>Tous les champs de texte doivent être remplis</p>
    <input type="submit" value="Publier" class="btn btn-outline-success mt-2 btn-lg">
</form>

<?php require("./footer.php") ?>