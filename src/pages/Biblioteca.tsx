import React from "react";
import styles from "./Biblioteca.module.css";
import Layout from "@theme/Layout";

type Livro = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
};

const livros: Livro[] = [
  { id: 1, titulo: "Livro 1", descricao: "Descrição do Livro 1.", imagem: "./img/img1.webp" },
  { id: 2, titulo: "Livro 2", descricao: "Descrição do Livro 2.", imagem: "./img/img2.webp" },
  { id: 3, titulo: "Livro 3", descricao: "Descrição do Livro 3.", imagem: "./img/img3.webp" },
  { id: 4, titulo: "Livro 4", descricao: "Descrição do Livro 4.", imagem: "./img/img4.webp" },
  { id: 5, titulo: "Livro 5", descricao: "Descrição do Livro 5.", imagem: "./img/img5.webp" },
  { id: 6, titulo: "Livro 6", descricao: "Descrição do Livro 6.", imagem: "./img/img6.webp" },
  { id: 7, titulo: "Livro 7", descricao: "Descrição do Livro 7.", imagem: "./img/img7.webp" },
  { id: 8, titulo: "Livro 8", descricao: "Descrição do Livro 8.", imagem: "./img/img8.webp" },
  { id: 9, titulo: "Livro 9", descricao: "Descrição do Livro 9.", imagem: "./img/img9.webp" },
  { id: 10, titulo: "Livro 10", descricao: "Descrição do Livro 10.", imagem: "./img/img1.webp" },
];

const Biblioteca: React.FC = () => {
  return (
    <Layout>
    <main>  
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
    </main>
    </Layout>
  );
};

export default Biblioteca;
    