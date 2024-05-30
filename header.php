<!DOCTYPE html>
<html lang="fr-FR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="https://image.emojipng.com/867/573867.jpg" rel="icon" type="image/x-icon" />
    <link rel="stylesheet" href="./styles/styles.css">
    <title>Pokétalk</title>
</head>

<body>
    <?php
    function loadClass(string $class): void //Charger automatiquement les classes du contrôleur et de l'entité en fonction de leur nom
    {
        if (str_contains($class, "Controller")) {

            require "./Controller/$class.php";
        } else {
            require "./Entity/$class.php";
        }
    }

    spl_autoload_register("loadClass");


    $articleController = new ArticleController();
    $commentaryController = new CommentaryController();
    ?>

    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="./index.php">Pokétalk</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.php">Pokédex</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./articleForm.php">Remplisser le Pokédex</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">