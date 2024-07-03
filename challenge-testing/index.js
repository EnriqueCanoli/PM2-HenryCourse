class CarritoCompra {

    constructor(){
        this.items = [];
    }

    agrgearProducto(item){
        this.items.push(item);
    }

    calcularTotal(){
        /**
         * PARAMETROS: acomulador, callback
         * El uso de callbacks permite definir una función que se ejecutará en cada elemento del array mientras se reduce el mismo a un
         * único valor
         */
        return this.items.reduce((total, item) => total + item.costo * item.cantidad , 0);
    }

    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        return total - descuento;
    }
}

  
module.exports = CarritoCompra
