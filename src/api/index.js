import ky from "ky"; 

const baseUrl = "https://customer-data-service-hs.herokuapp.com/customer"; 

// api object with methods to call everything we need from the endpoints 

const api = {
    index() {
        return ky.get(baseUrl).json();
    }, 

    get(id) {
        return ky.get(`${baseUrl}/${id}`).json();
      },    

    delete(id){
        return ky.delete(`${baseUrl}/${id}`);   
    }, 

    create(payload){
        return ky.post(`${baseUrl}`, {json: payload}).json()
    }, 

    update(payload, id) {
        return ky.put(`${baseUrl}/${id}`, {json: payload});
      },
}
export default api;