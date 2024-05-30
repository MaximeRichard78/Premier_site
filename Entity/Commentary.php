<?php

class Commentary
{

    private int $id;
    private string $author;
    private string $content;
    private string $date;
    private string $article_id;

    public function __construct(array $data)
    {
        $this->hydrate($data);
    }

    public function hydrate(array $data): void
    {
        foreach ($data as $key => $value) {
            $method = 'set' . ucfirst($key);
            if (method_exists($this, $method)) {
                $this->$method($value);
            }
        }
    }
    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
    }
    public function getContent()
    {
        return $this->content;
    }

    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }

    public function getAuthor()
    {
        return $this->author;
    }

    public function setAuthor($author)
    {
        $this->author = $author;
        return $this;
    }

    public function getDate()
    {
        return $this->date;
    } 
    public function setDate($date)
    {
        $this->date = $date;
        return $this;
    } 
    public function getArticle_id()
    {
        return $this->article_id;
    }
    public function setArticle_id($article_id)
    {
        $this->article_id = $article_id;

        return $this;
    }
}
