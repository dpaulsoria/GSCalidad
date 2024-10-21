import { db, rc15Collection } from "@/db";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { faker } from "@faker-js/faker";
import { createMockDescongeladoSalmuera } from "./RC_CC_15.mock";

describe("DescongeladoSalmueraModel CRUD Operations", () => {
  let createdRecord: DescongeladoSalmueraModel;

  // Test Create operation
  it("should create a new record", async () => {
    const mockData = createMockDescongeladoSalmuera();

    await db.write(async () => {
      createdRecord = await rc15Collection.create(
        (record: DescongeladoSalmueraModel) => {
          Object.assign(record, mockData);
        }
      );
    });

    expect(createdRecord).toBeDefined();
    expect(createdRecord.tipo_analisis).toBe(mockData.tipo_analisis);
  });

  // Test Read operation
  it("should fetch the created record", async () => {
    const fetchedRecord = await rc15Collection.find(createdRecord.id);
    expect(fetchedRecord).toBeDefined();
    expect(fetchedRecord?.tipo_analisis).toBe(createdRecord.tipo_analisis);
  });

  // Test Update operation
  it("should update the record", async () => {
    const newPesoNetoFresco = faker.number.float({ min: 0, max: 100 });

    await db.write(async () => {
      await createdRecord.update((record: DescongeladoSalmueraModel) => {
        record.pesoNetoFresco = newPesoNetoFresco;
      });
    });

    const updatedRecord = await rc15Collection.find(createdRecord.id);
    expect(updatedRecord?.pesoNetoFresco).toBe(newPesoNetoFresco);
  });

  // Test Delete operation
  // Test Delete operation
  it("should delete the record", async () => {
    await db.write(async () => {
      await createdRecord.markAsDeleted();
    });

    const deletedRecord = await rc15Collection.find(createdRecord.id);
    expect(deletedRecord?._raw._status).toBe("deleted"); // Verifica el _status en lugar de esperar null
  });
});
