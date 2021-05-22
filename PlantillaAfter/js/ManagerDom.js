//Crearemos una clase estatica para poder manipular el dom
export default class ManagerDom{
    //Metodo para cargar un select
   static cargarSelect (data){
        let select = document.getElementById("form-select");
        let miInner ="";
        data.forEach(element => {
            miInner += `<option value="${element.id}">${element.name}</option>`
        });
        select.innerHTML = miInner
    }
    //Metodo para definir el evento(simplificara la asociacion de evento)
    static setEvent(id, event, handler){
        document.getElementById(id).addEventListener(event, handler);
    }
    static cargarProducto(data){
        let producto = document.getElementById("productos");
        let miInner ="";
        data.forEach(element =>  miInner += ManagerDom.getCard(element));
        producto.innerHTML = miInner
    }
static getCard(objeto){
return `
<div class="col">
  <div class="card">
    <img src="${objeto.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${objeto.title}</h5>
      <p class="card-text">Precio: $${objeto.price}</p>
    </div>
  </div>
  </div>
`
}
static setSpinner(id){
document.getElementById(id).innerHTML = ` 
<div class="text-center">
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<h5>cargando...</h5>
</div>`
}
}