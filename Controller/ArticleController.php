<?php

class ArticleController
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
    // Méthode pour ajouter un article à la base de données
    public function add(Article $newArticle)
    {
        $req = $this->db->prepare("INSERT INTO `article` (title, subtitle, content, author, image) VALUES (:title, :subtitle, :content, :author, :image)");
        $req->bindValue(":title", htmlspecialchars($newArticle->getTitle()), PDO::PARAM_STR);
        $req->bindValue("subtitle", htmlspecialchars($newArticle->getSubTitle()), PDO::PARAM_STR);
        $req->bindValue(":content", htmlspecialchars($newArticle->getContent()), PDO::PARAM_STR);
        $req->bindValue(":author", htmlspecialchars($newArticle->getAuthor()), PDO::PARAM_STR);
        $req->bindValue(":image", htmlspecialchars($newArticle->getImage()), PDO::PARAM_STR);

        $req->execute();
    }
    // Méthode pour récupérer un article par son identifiant
    public function get(int $id)
    {
        $req = $this->db->prepare("SELECT * FROM `article` WHERE id = :id");
        $req->bindValue(":id", $id, PDO::PARAM_INT);
        $req->execute();
        $data = $req->fetch();
        $article = new Article($data);
        return $article;
    }
 
    public function getLastId()
    {
        $req = $this->db->query("SELECT id FROM `article` ORDER BY id DESC");
        $data = $req->fetch();
        return $data["id"];
    }
    // Méthode pour récupérer tous les articles
    public function getAll()
    {
        $articles = [];
        $req = $this->db->query("SELECT * FROM `article` ORDER BY title");
        $datas = $req->fetchAll();
        foreach ($datas as $data) {
            $article = new Article($data);
            $articles[] = $article;
        }
        return $articles;
    }
    // Méthode pour mettre à jour un article dans la base de données
    public function update(Article $updatedArticle)
    {
        $req = $this->db->prepare("UPDATE `article` SET title = :title, subtitle = :subtitle, content = :content, author = :author, image = :image WHERE id = :id");

        $req->bindValue(":title", htmlspecialchars($updatedArticle->getTitle()), PDO::PARAM_STR);
        $req->bindValue(":subtitle", htmlspecialchars($updatedArticle->getSubTitle()), PDO::PARAM_STR);
        $req->bindValue(":content", htmlspecialchars($updatedArticle->getContent()), PDO::PARAM_STR);
        $req->bindValue(":author", htmlspecialchars($updatedArticle->getAuthor()), PDO::PARAM_STR);
        $req->bindValue(":image", htmlspecialchars($updatedArticle->getImage()), PDO::PARAM_STR);
        $req->bindValue(":id", htmlspecialchars($updatedArticle->getId()), PDO::PARAM_INT);

        $req->execute();
    }
    // Méthode pour supprimer un article de la base de données
    public function remove(int $id)
    {
        $req = $this->db->prepare("DELETE FROM `article` WHERE id = :id");
        $req->bindValue(":id", $id, PDO::PARAM_INT);
        $req->execute();
    }
}
