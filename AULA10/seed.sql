-- database: banco.db

CREATE TABLE usuarios (
    id ,
    nome,
    email 
);

INSERT INTO usuarios (id, nome, email) 
VALUES(1, 'Sofia', 'sofia@example.com');

SELECT * FROM usuarios;