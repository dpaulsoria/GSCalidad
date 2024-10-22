import * as FileSystem from "expo-file-system";
import { syncWatermelon } from ".";
const data = require("../../assets/data.json");

export const loadInitialData = (): { changes: any; timestamp: number } => {
  try {
    return data;
  } catch (error) {
    console.error("Error loading initial data:", error);
  }
};

export const initializeDatabasefromJson = async (data) => {
  data.timestamp = Math.floor(new Date().getTime() / 1000);
  validateRecords(data.changes);
  await syncWatermelon(data);
  console.log("Database initialized from JSON.");
};

const validateRecords = (changes) => {
  console.log(`Validating`);
  for (const table in changes) {
    const records = changes[table].created || [];
    records.forEach((record) => {
    //   console.log(`record:`, record);
      if (!record.remote_id) {
        console.error(
          `Missing remote_id for record in table ${table}:`,
          record
        );
      }
    });
  }
};
