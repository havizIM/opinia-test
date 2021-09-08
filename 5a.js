// Buat program untuk menambahkan buah Pisang yang harganya 5000 dan rasanya manis. ke variabel buah dan tampilkan Nama Buah dengan urutan secara descending


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

products.push({
    nama: "Pisang",
    harga: 5000,
    rasa: "Manis"
})

products.sort((a, b) => {
    if(b.nama < a.nama) {
        return -1
    }

    if(b.nama > a.nama) {
        return 1
    }

    return 0
})

console.log(products)

