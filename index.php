<?php require("./header.php") ?>

<h1>Pokétalk</h1>

<div class="d-flex flex-wrap">
    <?php
    $articles = $articleController->getAll();  // Récupération de tous les articles à l'aide de ArticleController
    $i = 0;
    foreach ($articles as $article) { ?> <!-- Boucle pour chaque article -->
        <div class="card m-3" style="width: 18rem;"> <!-- Création d'un conteneur de carte pour chaque article -->
            <img src="<?= $article->getImage() ?>" class="card-img-top" alt="..."> <!-- Affichage de l'image de l'article -->
            <div class="card-body">
                <h2 class="card-title"><?= $article->getTitle() ?></h2> <!--Affichage du titre de l'article-->
                <h4 class="card-title"><?= $article->getSubtitle() ?></h4> <!--Affichage du sous-titre de l'article-->
                <p class="card-text"><?= substr($article->getContent(), 0, 0) ?> <?= strlen($article->getContent()) ? "..." : ""; ?></p> <!-- Affichage d'une version tronquée du contenu de l'article-->
                <a href="javascript:;" onclick="deployArticle(<?= htmlspecialchars(json_encode($article->getContent()), ENT_QUOTES); ?>, <?= $i ?>)" class="link-primary">Voir plus</a> <br> <!--Création d'un lien pour afficher et lire le contenu complet de l'article-->
                <a href="read.php?id=<?= $article->getId() ?>" class="btn btn-outline-info">Lire</a> <!-- Création d'un lien pour lire l'article complet-->
                <a href="./articleForm.php?id=<?= $article->getId() ?>" class="btn btn-outline-primary">Modifier</a> <!-- Création d'un lien pour modifier l'article-->
                <a href="javascript:;" onclick="articleRemove(<?= $article->getId() ?>)" class="btn btn-outline-danger">Supprimer</a> <!-- Création d'un lien pour supprimer l'article-->
            </div>
        </div>
    <?php

        $i++;
    }  ?>
</div>

<?php require("./footer.php") ?>
<script src="./script/script.js"></script>