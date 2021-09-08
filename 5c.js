// Buat program untuk menampilkan Buah, yang harganya kurang dari 10.000 yang rasanya Manis

let products = [
    {
        nama: "Jeruk",
        harga: 5000,
        rasa: "Asam",
    },
    {
        nama: "Mangga",
        harga: 20000,
        rasa: "Manis",
    },
    {
        nama: "Apel",
        harga: 5000,
        rasa: "Manis",
    },
    {
        nama: "Durian",
        harga: 50000,
        rasa: "Manis",
    },
    {
        nama: "Duku",
        harga: 10000,
        rasa: "Asam",
    },
    {
        nama: "Nanas",
        harga: 5000,
        rasa: "Asam",
    },
];

let filtered = products.filter(v => v.harga < 10000 && v.rasa === 'Manis')

console.log(filtered)

