const malumotForma = document.getElementById('malumotForma');
const tbody = document.querySelector('#malumotlar tbody');

malumotForma.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(malumotForma);
    const malumotObj = {};
    formData.forEach((value, key) => {
        malumotObj[key] = value;
    });

    qoshish(malumotObj);
    malumotForma.reset();
});

function qoshish(malumot) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${malumot.name}</td>
        <td>${malumot.age}</td>
        <td>${malumot.phone}</td>
        <td>${malumot.address}</td>
    `;
    tbody.appendChild(row);
}
