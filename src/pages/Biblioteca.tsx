import React from "react";
import styles from "./Biblioteca.module.css";

type Livro = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
};

const livros: Livro[] = [
  { id: 1, titulo: "Livro 1", descricao: "Descrição do Livro 1.", imagem: "/img/livros/img1.webp" },
  { id: 2, titulo: "Livro 2", descricao: "Descrição do Livro 2.", imagem: "/img/livro2.jpg" },
  { id: 3, titulo: "Livro 3", descricao: "Descrição do Livro 3.", imagem: "/img/livro3.jpg" },
  { id: 4, titulo: "Livro 4", descricao: "Descrição do Livro 4.", imagem: "/img/livro4.jpg" },
  { id: 5, titulo: "Livro 5", descricao: "Descrição do Livro 5.", imagem: "/img/livro5.jpg" },
  { id: 6, titulo: "Livro 6", descricao: "Descrição do Livro 6.", imagem: "/img/livro6.jpg" },
  { id: 7, titulo: "Livro 7", descricao: "Descrição do Livro 7.", imagem: "/img/livro7.jpg" },
  { id: 8, titulo: "Livro 8", descricao: "Descrição do Livro 8.", imagem: "/img/livro8.jpg" },
  { id: 9, titulo: "Livro 9", descricao: "Descrição do Livro 9.", imagem: "/img/livro9.jpg" },
  { id: 10, titulo: "Livro 10", descricao: "Descrição do Livro 10.", imagem: "/img/livro10.jpg" },
];

const Biblioteca: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Biblioteca</h1>
      <div className={styles.grid}>
        {livros.map((livro) => (
          <div key={livro.id} className={styles.card}>
            <img src={livro.imagem} alt={livro.titulo} className={styles.image} />
            <div className={styles.overlay}>
              <h2>{livro.titulo}</h2>
              <p>{livro.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biblioteca;
    