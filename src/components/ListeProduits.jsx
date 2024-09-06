import React from "react";
import { Card, Button, InputNumber, Row, Col } from "antd";
import "./ListeProduits.css";
import montreImg from "../assets/img-commerce/montre.jpg";
import pantalonImg from "../assets/img-commerce/pantalon.jpg";
import tshirtImg from "../assets/img-commerce/t-shirt.jpg";

const { Meta } = Card;

const ListeProduits = ({ ajouterAuPanier }) => {
  const produits = [
    {
      nom: "Pantalon",
      prix: 50,
      quantite: 1,
      image: pantalonImg,
    },
    {
      nom: "T-shirt",
      prix: 75,
      quantite: 1,
      image: tshirtImg,
    },
    {
      nom: "Montre",
      prix: 100,
      quantite: 1,
      image: montreImg,
    },
  ];

  return (
    <div className="liste-produits-container">
      <h2 className="liste-produits-title">Liste des Produits</h2>
      <Row gutter={16}>
        {produits.map((produit) => (
          <Col span={8} key={produit.nom}>
            <Card
              className="produit-card"
              hoverable
              cover={<img alt={produit.nom} src={produit.image} />}
              actions={[
                <InputNumber
                  min={1}
                  defaultValue={1}
                  onChange={(value) => (produit.quantite = value)}
                />,
                <Button
                  className="add-to-cart-button"
                  type="primary"
                  onClick={() => ajouterAuPanier(produit, produit.quantite)}
                >
                  Ajouter au Panier
                </Button>,
              ]}
            >
              <Meta title={produit.nom} description={`${produit.prix} TND`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListeProduits;
