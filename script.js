let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function displayContacts(data = contacts) {

    let contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    data.forEach((contact, index) => {

        contactList.innerHTML += `
        <div class="card">
            <h3>${contact.name}</h3>
            <p>📞 ${contact.phone}</p>
            <p>📧 ${contact.email}</p>
            <p>Category: ${contact.category}</p>

            <div class="actions">
                <button class="edit" onclick="editContact(${index})">Edit</button>
                <button class="delete" onclick="deleteContact(${index})">Delete</button>
            </div>
        </div>
        `;
    });
}

function addContact() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let category = document.getElementById("category").value;

    if(name==="" || phone===""){
        alert("Please fill all fields");
        return;
    }

    contacts.push({
        name,
        phone,
        email,
        category
    });

    saveContacts();
    displayContacts();

    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
}

function deleteContact(index){

    contacts.splice(index,1);
    saveContacts();
    displayContacts();
}

function editContact(index){

    let newName = prompt("Enter Name", contacts[index].name);
    let newPhone = prompt("Enter Phone", contacts[index].phone);
    let newEmail = prompt("Enter Email", contacts[index].email);

    contacts[index].name = newName;
    contacts[index].phone = newPhone;
    contacts[index].email = newEmail;

    saveContacts();
    displayContacts();
}

document.getElementById("search").addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(value)
    );

    displayContacts(filtered);
});

function filterCategory(category){

    if(category==="All"){
        displayContacts();
    }
    else{
        let filtered = contacts.filter(
            contact => contact.category===category
        );

        displayContacts(filtered);
    }
}

displayContacts();