const getTheTitles = function(books) {
    let arr = [];
    for(let i=0;i<books.length;i++){
        arr.push(books[i].title);
    }
    return arr;
};

const books = [
    {
        title: 'Metamorphosis',
        author: 'Franz Kafka'
    },
    {
        title: 'A Song of Ice and Fire',
        author: 'George R. R. Martin'
    }
]

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
