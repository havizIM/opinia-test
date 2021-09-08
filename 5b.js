// Buat program untuk menampilkan Nama Buah yang nama buahnya mengandung Huruf "K"

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

let filtered = products.filter(v => {
    return v.nama.toUpperCase().indexOf('K') > -1
})

console.log(filtered)

