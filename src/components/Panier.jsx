import React from "react";
import { Table, InputNumber, Button, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Panier = ({ produits, setProduits }) => {
  const supprimerProduit = (index) => {
    const nouveauxProduits = [...produits];
    nouveauxProduits.splice(index, 1);
    setProduits(nouveauxProduits);
  };

  const ajusterQuantite = (index, quantite) => {
    const nouveauxProduits = [...produits];
    nouveauxProduits[index].quantite = quantite;
    setProduits(nouveauxProduits);
  };

  const calculerTotal = () => {
    const total = produits.reduce(
      (acc, produit) => acc + produit.prix * produit.quantite,
      0
    );
    let reduction = 0;
    if (total > 200) {
      reduction = total * 0.1;
    } else if (total > 100) {
      reduction = total * 0.05;
    }
    return { total, reduction, totalAvecReduction: total - reduction };
  };

  const { total, reduction, totalAvecReduction } = calculerTotal();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Votre Panier</h2>
      <Row>
        <Col span={24}>
          <Table
            dataSource={produits}
            columns={[
              {
                title: "Image",
                dataIndex: "image",
                key: "image",
                render: (text) => (
                  <img
                    src={text}
                    alt="Produit"
                    style={{ width: 50, height: 50 }}
                  />
                ),
              },
              {
                title: "Nom",
                dataIndex: "nom",
                key: "nom",
              },
              {
                title: "Prix",
                dataIndex: "prix",
                key: "prix",
                render: (text) => `${text} TND`,
              },
              {
                title: "Quantité",
                dataIndex: "quantite",
                key: "quantite",
                render: (text, record, index) => (
                  <InputNumber
                    min={1}
                    defaultValue={text}
                    onChange={(value) => ajusterQuantite(index, value)}
                  />
                ),
              },
              {
                title: "Action",
                key: "action",
                render: (text, record, index) => (
                  <Button
                    type="danger"
                    icon={<DeleteOutlined />}
                    onClick={() => supprimerProduit(index)}
                  >
                    Supprimer
                  </Button>
                ),
              },
            ]}
            rowKey={(record, index) => index}
            pagination={false}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col span={24} style={{ textAlign: "right" }}>
          <h3>Total: {total} TND</h3>
          <h3>Réduction: {reduction} TND</h3>
          <h3>Total avec Réduction: {totalAvecReduction} TND</h3>
        </Col>
      </Row>
    </div>
  );
};

export default Panier;
