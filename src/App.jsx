import React, { useState } from "react";
import ListeProduits from "./components/ListeProduits";
import Panier from "./components/Panier";

const App = () => {
  const [produitsPanier, setProduitsPanier] = useState([]);

  const ajouterAuPanier = (produit, quantite) => {
    const nouveauxProduits = [...produitsPanier];
    const produitIndex = nouveauxProduits.findIndex(
      (p) => p.nom === produit.nom
    );
    if (produitIndex !== -1) {
      nouveauxProduits[produitIndex].quantite += quantite;
    } else {
      nouveauxProduits.push({ ...produit, quantite });
    }
    setProduitsPanier(nouveauxProduits);
  };

  return (
    <div>
      <ListeProduits ajouterAuPanier={ajouterAuPanier} />
      <Panier produits={produitsPanier} setProduits={setProduitsPanier} />
    </div>
  );
};

export default App;
