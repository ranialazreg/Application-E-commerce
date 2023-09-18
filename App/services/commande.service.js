import http from "../../http-common";
class CommandeService {
  AddCommande(produitId, qty, clientId) {
    return http.post("/addCommande", { produitId, qty, clientId });
  }
  getClientCommandes(clientId) {
    return http.get("/getClientCommandes", { params: { clientId } });
  }
  PriceOfCommande(clientId) {
    return http.get("/PriceOfCommande", { params: { clientId } });
  }
  DeleteProductsFromCommandes(idC) {
    return http.delete("/DeleteProductsFromCommandes", { params: { idC } });
  }

  AllConfirmedCommandeToDelivery() {
    return http.get(`/AllConfirmedCommandeToDelivery`);
  }
  AllConfirmedCommandeForClient(clientId) {
    return http.get(`/AllConfirmedCommandeForClient/${clientId}`);
  }
  AllConfirmedCommandeForVendeur(idVendeur) {
    return http.get(`/AllConfirmedCommandeForVendeur/${idVendeur}`);
  }
  ChiffreAffaireVendeur(idVendeur) {
    return http.get(`/ChiffreAffaireVendeur/${idVendeur}`);
  }

  confirmAllCommandeProduits(clientId) {
    return http.put(`/confirmAllCommandeProduits/${clientId}`);
  }
  Livre(idC) {
    return http.put(`/Livre/${idC}`);
  }
  PresqueLivre(idC) {
    return http.put(`/PresqueLivre/${idC}`);
  }

}
export default new CommandeService();
