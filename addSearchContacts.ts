interface Contact {
  cName: string;
  phoneNumber: number;
}
let contactList: Contact[] = [];
const contact2: Contact = {
  cName: "mona",
  phoneNumber: 9129129121,
};
const contact: Contact = {
  cName: "mary",
  phoneNumber: 987654321,
};
function addToContact(data: Contact): Contact[] {
  contactList.push(data);
  return contactList;
}
addToContact(contact);
addToContact(contact2);
console.log(contactList);

function search(contactName: string) {
  const foundEl = contactList.find((value) => value.cName === contactName);
  if (foundEl != null) {
    console.log("found");
  } else {
    console.log("not found");
  }
}
search("mara");
