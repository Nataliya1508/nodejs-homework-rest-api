const fs = require('fs/promises')
const path = require("path");


const contactsPath = path.resolve("db/contacts.json");

const listContacts = async () => {

   const data = await fs.readFile(contactsPath, "utf-8");

        return JSON.parse(data);
}

const getContactById = async (contactId) => {

  const contacts = await listContacts();
            const result = contacts.find(item => item.id === contactId);

            return result || null;
}

const removeContact = async (contactId) => {

   const contacts = await listContacts();
        const index = contacts.filter(({ id }) => id !== contactId);

  if (index === -1) {
    return null;
  }
   const result = contacts.filter(({ id }) => id !== contactId);
        await fs.writeFile(contactsPath, JSON.stringify(result), "utf8");
        
        return result;
}

const addContact = async (body) => {

     const contacts = await listContacts();
        
        contacts.push(body);
        await fs.writeFile(contactsPath, JSON.stringify(contacts));

        return body;
    
}

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null
  }
  contacts[index] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(result), "utf8");
        
        return contacts[index];

}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
