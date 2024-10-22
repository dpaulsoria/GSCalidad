import { faker } from "@faker-js/faker";

export const createMockDescongeladoSalmuera = () => {
  return {
    tipo_analisis: faker.commerce.productName(),
    co_importador: faker.number.int({ min: 1, max: 100 }),
    cabinplant: faker.helpers.arrayElements([
      "Cabinplant 1",
      "Cabinplant 2",
      "Cabinplant 3",
      "Cabinplant 4",
    ]),
    lote: faker.string.uuid(),
    proveedor: faker.company.name(),
    co_talla: faker.number.int({ min: 1, max: 100 }),
    pesoNetoFresco: faker.number.float({ min: 0, max: 100 }),
    peso_bruto: faker.number.float({ min: 0, max: 100 }),
    unidad_medida: faker.helpers.arrayElements(["KG", "LB"]),
    pesoCongelado: faker.number.float({ min: 0, max: 100 }),
    pesoDescongelado: faker.number.float({ min: 0, max: 100 }),
    Cta_PesoNetoFresco: faker.number.float({ min: 0, max: 100 }),
    Cta_PesoCongelado: faker.number.float({ min: 0, max: 100 }),
    Cta_PesoDescongelado: faker.number.float({ min: 0, max: 100 }),
    observaciones: faker.lorem.sentence(),
    UsuCrea: faker.internet.userName(),
    correccion: faker.number.int({ min: 0, max: 1 }),
    foto: faker.number.int({ min: 0, max: 1 }),
    // TODO: Quitar estado
    estado: faker.number.int({ min: 1, max: 100 }),
    state: faker.number.int({ min: 0, max: 1 }),
    planta_id: faker.number.int({ min: 1, max: 18 }),
    remote_id: faker.number.int({ min: 1, max: 100 }),
  };
};
