const doc = {
    bookBody: document.querySelector("#bookBody")
}

const books = [
    {id:1, title: "A fehér báró", author: "Jókai Mór"},
    {id:2, title: "Mégis mozog a föld", author: "Jókai Mór"},
    {id:3, title: "Fekete arany", author: "Jókai Mór"}
]

books.forEach(book => {
    let tr = document.createElement('tr')
    tr.innerHTML = `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
    `
   doc.bookBody.appendChild(tr) 
})
