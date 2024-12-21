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
    