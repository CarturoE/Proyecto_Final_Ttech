// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Celulares Vintage", descripcion: "Celulares convencionales y no inteligentes.", imagen: "imagenes/vintage.jpg" },
    "102" : { codigo: "102",nombre: "Celulares Gama Baja", descripcion: "Celulares con características y especificaciones más básicas, diseñados para usuarios con necesidades de uso menos exigentes y un presupuesto más limitado.", imagen: "imagenes/gama_baja.jpg"  },
    "103" : { codigo: "103",nombre: "Celulares Gama Media", descripcion: "Celulares que ofrecen un buen precio y rendimiento sin el alto costo de los modelos de gama alta. ", imagen: "imagenes/celulares-gama-media.jpg"  },
    "104" : { codigo: "104", nombre: "Celulares Gama Alta", descripcion: "Celulares que se caracterizan por tener las mejores especificaciones técnicas y características premium del mercado.", imagen: "imagenes/gama alta.jpg"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));


// Inicialización de categorías en localStorage

banners ={
    "101" : {codigo: "1018", titulo: "Promocion en Celulares Gama Baja y Vintage", descripcion:"👉 Samsung a 20, hoy con el 10% descuento y envio gratis a todo el pais.", imagen: "imagenes/4.jpg"},
    "102" : {codigo: "1014", titulo: "Promocion en Celulares Gama Media", descripcion:"👉 Samsung Galaxy A11, camara triple, 15% descuento, vidrio templado incluido.", imagen: "imagenes/2.jpg"},
    "103" : {codigo: "1011", titulo: "Promocion en Celulares Gama Alta", descripcion:"👉 IPhone 13 Pro Max, Bateria 95%, iOS 17 y cargador nuevo original.", imagen: "imagenes/3.jpg"}

};

localStorage.setItem("banners", JSON.stringify(banners));


// Inicialización de productos celulares en localStorage


const Celulares = {
  "1011": { 
    codigo: "1011", 
    nombre: "IPhone 13", 
    descripcion: "Celular IPhone 13, perfecto estado, batería 90%.",
    categoria: "104", 
    imagen: "imagenes/ihone_13.jpeg", 
    precio: 1800000, 
    estado: "Estado: Seminuevo", 
    calificacion: 5,
    especificaciones: [
      "Pantalla OLED 6.1 pulgadas",
      "Almacenamiento 128GB",
      "Cámara dual 12MP",
      "Chip A15 Bionic",
      "Face ID",
      "iOS 17"
    ]
  },
  "1012": { 
    codigo: "1012", 
    nombre: "Nokia C3", 
    descripcion: "Celular Nokia C3, Funciona todo, la camara full, incluye cargador.",
    categoria: "101", 
    imagen: "imagenes/Nokia-C3-2.jpeg", 
    precio: 100000, 
    estado: "Estado: Óptimo", 
    calificacion: 4,
    especificaciones: [
      "Pantalla de 2.4 pulgadas",
      "Teclado físico QWERTY",
      "Bluetooth 2.1",
      "Cámara 2 MP",
      "Radio FM",
      "Batería 1320 mAh"
    ]
  },
  "1013": { 
    codigo: "1013", 
    nombre: "Pocco M6", 
    descripcion: "Celular Pocco M6, Bandas abiertas, funcional, con detalles estéticos.",
    categoria: "102", 
    imagen: "imagenes/p6.jpg", 
    precio: 250000, 
    estado: "Estado: Regular", 
    calificacion: 2,
    especificaciones: [
      "Pantalla LCD 6.74 pulgadas 90Hz",
      "Procesador MediaTek Helio G91 Ultra",
      "Memoria RAM 6GB",
      "Almacenamiento 128GB",
      "Batería 5030 mAh",
      "Cámara principal 50MP"
    ]
  },
  "1014": { 
    codigo: "1014", 
    nombre: "Samsung Galaxy A11", 
    descripcion: "Celular Samsung 11, Buen estado, rasguños mínimos en carcasa.",
    categoria: "103", 
    imagen: "imagenes/sam.jpg", 
    precio: 1000000, 
    estado: "Estado: Seminuevo", 
    calificacion: 4,
    especificaciones: [
      "Pantalla PLS TFT 6.4 pulgadas",
      "Procesador Snapdragon 450",
      "Memoria RAM 2GB",
      "Almacenamiento 32GB",
      "Cámara triple 13MP + 5MP + 2MP",
      "Batería 4000 mAh"
    ]
  },
  "1015": { 
    codigo: "1015", 
    nombre: "Samsung Galaxy J7", 
    descripcion: "Celular Samsung Galaxy J7, Buen estado, dual SIM, bloqueado una banda.",
    categoria: "103", 
    imagen: "imagenes/j7.jpg", 
    precio: 400000, 
    estado: "Estado: Solo funciona una red", 
    calificacion: 3,
    especificaciones: [
      "Pantalla Super AMOLED 5.5 pulgadas",
      "Procesador Exynos 7580",
      "Memoria RAM 1.5GB",
      "Almacenamiento 16GB",
      "Cámara trasera 13MP / Frontal 5MP",
      "Batería 3000 mAh"
    ]
  },
  "1016": { 
    codigo: "1016", 
    nombre: "Iphone 16 plus", 
    descripcion: "Celular Iphone 16 plus, Perfecto estado, 3 meses de uso, con todos los accesorios.",
    categoria: "104", 
    imagen: "imagenes/ip16.jpg", 
    precio: 3500000, 
    estado: "Estado: Excelente", 
    calificacion: 5,
    especificaciones: [
      "Pantalla OLED 6.7 pulgadas",
      "Almacenamiento 256GB",
      "Chip A17 Pro",
      "Cámara triple 48MP + 12MP + 12MP",
      "Face ID",
      "iOS 18"
    ]
  },
  "1017": { 
    codigo: "1017", 
    nombre: "Blackberry 8520", 
    descripcion: "Celular Blackberry 8520, Funciona todo, bandas abiertas, incluye cargador.",
    categoria: "101", 
    imagen: "imagenes/bb.jpg", 
    precio: 60000, 
    estado: "Estado: Aceptable", 
    calificacion: 3,
    especificaciones: [
      "Pantalla 2.46 pulgadas",
      "Teclado físico QWERTY",
      "Wi-Fi y Bluetooth",
      "Cámara 2 MP",
      "Memoria expandible hasta 32GB",
      "Sistema BlackBerry OS"
    ]
  },
  "1018": { 
    codigo: "1018", 
    nombre: "Samsung A20", 
    descripcion: "Celular Samsung A20, Bandas abiertas, carcasa nueva, vidrio templado nuevo.",
    categoria: "102", 
    imagen: "imagenes/a20.jpg", 
    precio: 200000, 
    estado: "Estado: Bueno", 
    calificacion: 4,
    especificaciones: [
      "Pantalla Super AMOLED 6.4 pulgadas",
      "Procesador Exynos 7884",
      "Memoria RAM 3GB",
      "Almacenamiento 32GB",
      "Cámara dual 13MP + 5MP",
      "Batería 4000 mAh"
    ]
  },
  "1019": { 
    codigo: "1019", 
    nombre: "Samsung Galaxy S24", 
    descripcion: "Celular Samsung Galaxy S24, Perfecto estado, 2 meses de uso, con todos los accesorios.",
    categoria: "104", 
    imagen: "imagenes/s24.jpg", 
    precio: 3000000, 
    estado: "Estado: Excelente", 
    calificacion: 5,
    especificaciones: [
      "Pantalla Dynamic AMOLED 6.2 pulgadas",
      "Procesador Snapdragon 8 Gen 3",
      "Memoria RAM 8GB",
      "Almacenamiento 256GB",
      "Cámara triple 50MP + 10MP + 12MP",
      "Batería 4000 mAh con carga rápida"
    ]
  }
};

localStorage.setItem("celulares", JSON.stringify(Celulares));
