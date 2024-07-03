const CarritoCompra = require("../index")

//describe es un metodo de jest, que recibe un string con la descripion, y un cb
/**
 * En este ejemplo describe es una suit, ya que engloba varios test
 */

describe("constructor", ()=>{
    let carrito;

    const item= {
        nombre: "cepillo de dientes",
        cantidad: 2,
        costo: 20
    }

    const item2= {
        nombre: "pasta de dientes 2",
        cantidad: 1,
        costo: 50
    }
    //antes de cada each, va a ejecutar este codigo
    beforeEach(()=>{
        carrito = new CarritoCompra();
    })

    it("carrito compra sea una clase", ()=>{
        expect(typeof CarritoCompra).toBe("function"); //una clase es una funcion
        expect(carrito instanceof CarritoCompra).toBe(true); //sea una instancia
    })

    it('El constructor debe inicializar con un array vacio', ()=>{
        //primero preguntat que items sea un array
        expect(Array.isArray(carrito.items)).toBe(true);
        //verificar que este vacio
        expect(carrito.items).toEqual([]); 
        //esta es otra forma de checar que este vacio el array
        expect(carrito.items).toHaveLength(0);
    })

    it('recibe un item y lo agrega al carrito', ()=>{
        carrito.agrgearProducto(item)
        expect(carrito.items[0]).toEqual(item);
        expect(carrito.items).toHaveLength(1);
    });

    it('calcular total', ()=>{
        carrito.agrgearProducto(item);
        carrito.agrgearProducto(item2);

        expect(carrito.calcularTotal()).toBe(90);


    })

    it('aplicar descuento', ()=>{

        carrito.agrgearProducto(item);
        carrito.agrgearProducto(item2);
        
        expect(carrito.aplicarDescuento(20)).toBe(72);
        expect(carrito.aplicarDescuento(100)).toBe(0);
    });
});