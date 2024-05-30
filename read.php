<!DOCTYPE html>
<html lang="fr-FR">
<?php
require("header.php");

$article = $articleController->get($_GET["id"]); // Récupère l'article correspondant à l'ID passé dans les paramètres de l'URL

?>

<img src="<?= $article->getImage() ?>" class="card-img-top" alt="..."> <!--Affiche l'image de l'article-->
<br>
<h1><?= $article->getTitle() ?></h1> <!--Affiche le titre de l'article-->
<br>
<h3><?= $article->getSubtitle() ?></h3> <!--Affiche le sous-titre de l'article-->
<br>
<p><?= $article->getContent() ?></p> <!--Affiche le contenu de l'article-->


<a href="./commentaryForm.php?article_id=<?= $article->getId() ?>" class="btn btn-outline-info">Exprimer vous sur cette article</a> <!--Crée un lien vers le formulaire de commentaire de l'article en utilisant l'ID de l'article-->
<br>
<br>
<hr>
<?php

$commentarys = $commentaryController->getAll($article->getId());    //Récupère tous les commentaires liés à l'article
foreach ($commentarys as $commentary) { ?>
    <div class="commentaries">
        <h6 class="Date"><?= $commentary->getDate() ?></h6> <!--Affiche la date du commentaire-->
        <br>
        <h4 class="Author"><?= $commentary->getAuthor() ?></h4> <!--Affiche l'auteur du commentaire-->
        <br>
        <h2 class="Content"><?= $commentary->getContent() ?></h2>   <!--Affiche le contenu du commentaire-->
    </div>
    <a href="./commentaryForm.php?id=<?= $commentary->getId() ?>" class="btn btn-outline-primary">Modifier</a>  <!--Crée un lien vers le formulaire de modification du commentaire en utilisant l'ID du commentaire-->
    <a href="javascript:;" onclick="commentaryRemove(<?= $commentary->getId() ?>)" class="btn btn-outline-danger">Supprimer</a> <!--Déclenche la fonction commentaryRemove() en passant l'ID du commentaire en tant que paramètre-->
    <hr>

<?php
}  ?>
<?php require("./footer.php") ?>
</div>