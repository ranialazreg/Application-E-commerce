import http from "../../http-common";
class ProduitService {
  getAll() {
    return http.get("/getAllProduit");
  }
  AddProduit = (formData) => {

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return http.post(
      "/addProduit",
      formData,
      config
    );
  }
  getProduitWithArticleId(article_id) {
    return http.get("/getProduitWithArticleId",{ params: { article_id } });
  }

  getTwoProduitSocksCategorie() {
    return http.get("/getTwoProduitSocksCategorie");
  }
  getTenTopProduits() {
    return http.get("/getTenTopProduits");
  }
  getVendeurProduits(idVendeur) {
    return http.get(`/getVendeurProduits/${idVendeur}`);
  }
 
  deleteProduit(produitId) {
    return http.delete(`/deleteProduit/${produitId}`);
  }
  updateProduit(produitId,description,prod_name,prix) {
    return http.put(`/updateProduit`,{produitId,description,prod_name,prix});
  }
 
}
export default new ProduitService();
