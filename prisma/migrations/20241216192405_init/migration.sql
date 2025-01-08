-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ruc" INTEGER NOT NULL,
    "direccion" TEXT,
    "telefono" TEXT,
    "email" TEXT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "factura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idVendedor" TEXT NOT NULL,
    "idComprador" TEXT NOT NULL,
    "tipoComprobante" TEXT NOT NULL,
    "nroComprobante" TEXT NOT NULL,
    "timbrado" TEXT NOT NULL,
    "Moneda" TEXT,
    "cotizacion" INTEGER,
    "subtotalGeneral" INTEGER NOT NULL,
    "impuestoGeneral" INTEGER NOT NULL,
    "totalGeneral" INTEGER NOT NULL,
    "descuento" INTEGER NOT NULL,
    "descripcion" TEXT,
    "estado" TEXT NOT NULL,
    "CDC" TEXT,
    "emitidaPor" TEXT,
    "fechaEmision" DATETIME NOT NULL,
    "fechaVencimiento" DATETIME NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "factura_idVendedor_fkey" FOREIGN KEY ("idVendedor") REFERENCES "cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "factura_idComprador_fkey" FOREIGN KEY ("idComprador") REFERENCES "cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idFactura" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "descripcion" TEXT,
    "precioUnitario" INTEGER NOT NULL,
    "impuesto" INTEGER NOT NULL,
    "valorTotal" INTEGER NOT NULL,
    CONSTRAINT "item_idFactura_fkey" FOREIGN KEY ("idFactura") REFERENCES "factura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_ruc_key" ON "cliente"("ruc");

-- CreateIndex
CREATE UNIQUE INDEX "factura_nroComprobante_key" ON "factura"("nroComprobante");
