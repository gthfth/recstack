import Airtable from "airtable"
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from "./config"

Airtable.configure({
  apiKey: AIRTABLE_API_KEY,
})

const base = Airtable.base(AIRTABLE_BASE_ID)

export async function createRecord(tableName: string, fields: object) {
  try {
    const createdRecords = await base(tableName).create([{ fields }])
    return createdRecords[0]
  } catch (error) {
    console.error("Error creating Airtable record:", error)
    throw error
  }
}

export async function getRecords(tableName: string, view = "Grid view") {
  try {
    const records = await base(tableName).select({ view: view }).all()
    return records.map((record) => ({ id: record.id, ...record.fields }))
  } catch (error) {
    console.error("Error fetching Airtable records:", error)
    throw error
  }
}

export async function updateRecord(tableName: string, id: string, fields: object) {
  try {
    const updatedRecords = await base(tableName).update([{ id, fields }])
    return updatedRecords[0]
  } catch (error) {
    console.error("Error updating Airtable record:", error)
    throw error
  }
}

export async function deleteRecord(tableName: string, id: string) {
  try {
    const deletedRecords = await base(tableName).destroy([id])
    return deletedRecords[0]
  } catch (error) {
    console.error("Error deleting Airtable record:", error)
    throw error
  }
}

