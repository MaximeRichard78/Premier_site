<?php

class CommentaryController
{
    private PDO $db;

    public function __construct()   // Constructeur de la classe

    {
        // Informations de connexion à la base de données
        $dbName = "Pokétalk";
        $port = 3306;
        $host = "localhost";
        $userName = "root";
        $password = "root";

        try {
            // Connexion à la base de données avec PDO
            $this->setDb(new PDO("mysql:host=localhost;dbname=$dbName;port=$port;", $userName, $password));
        } catch (PDOException $e) {
            // Affichage de l'erreur en cas d'échec de la connexion
            echo $e->getMessage();
        }
    }

    // Méthode pour définir la connexion à la base de données
    public function setDb($db)
    {
        $this->db = $db;
        return $this;
    }

    // Méthode pour ajouter un commentaire à la base de données
    public function add(Commentary $newCommentary)
    {
        $req = $this->db->prepare("INSERT INTO `commentary` (content, author, article_id) VALUES (:content, :author, :article_id)");
        $req->bindValue(":content", htmlspecialchars($newCommentary->getContent()), PDO::PARAM_STR);
        $req->bindValue(":author", htmlspecialchars($newCommentary->getAuthor()), PDO::PARAM_STR);
        $req->bindValue(":article_id", htmlspecialchars($newCommentary->getArticle_id()), PDO::PARAM_INT);
        $req->execute();
    } 

    // Méthode pour récupérer un commentaire par son identifiant
    public function get(int $id)
    {
        $req = $this->db->prepare("SELECT * FROM `commentary` WHERE id = :id");
        $req->bindValue(":id", $id, PDO::PARAM_INT);
        $req->execute();
        $data = $req->fetch();
        $commentary = new Commentary($data);
        return $commentary;
    }

    // Méthode pour récupérer tous les commentaires liés à un article
    public function getAll($articleId)
    {
        $commentaries = [];
        $req = $this->db->prepare("SELECT * FROM `commentary` WHERE article_id = :articleId ORDER BY id");
        $req->bindParam(':articleId', $articleId, PDO::PARAM_INT);
        $req->execute();
        $datas = $req->fetchAll();
        foreach ($datas as $data) {
            $commentary = new Commentary($data);
            $commentaries[] = $commentary;
        }
        return $commentaries;
    }

    // Méthode pour mettre à jour un commentaire dans la base de données
    public function update(Commentary $updatedCommentary)
    {
        $req = $this->db->prepare("UPDATE `commentary` SET content = :content, author = :author WHERE id = :id");
        $req->bindValue(":content", htmlspecialchars($updatedCommentary->getContent()), PDO::PARAM_STR);
        $req->bindValue(":author", htmlspecialchars($updatedCommentary->getAuthor()), PDO::PARAM_STR);
        $req->bindValue(":id", htmlspecialchars($updatedCommentary->getId()), PDO::PARAM_INT);
        $req->execute();
    }

    // Méthode pour supprimer un commentaire de la base de données
    public function remove(int $id)
    {
        $req = $this->db->prepare("DELETE FROM `commentary` WHERE id = :id");
        $req->bindValue(":id", $id, PDO::PARAM_INT);
        $req->execute();
    }
}
