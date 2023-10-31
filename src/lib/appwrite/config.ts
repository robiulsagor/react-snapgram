import { Account, Avatars, Client, Databases, Storage } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const API_ENDPOINT = import.meta.env.VITE_APPWRITE_API_ENDPOINT

export const appwriteConfig = {
    projectId: PROJECT_ID,
    apiEndpoint: API_ENDPOINT
}

const client = new Client();

client
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)
const avatar = new Avatars(client)

export { client, account, databases, storage, avatar }