
const textTitle = document.querySelector('#textTitle').value;
const textAuthor = document.querySelector('#textAuthor').value;
const textIsbn = document.querySelector('#textIsbn').value;
const textPrice = document.querySelector('#textPrice').value;
const textPages = document.querySelector('#textPages').value;
const textCountry = document.querySelector('#textCountry').value;
const addbook = document.querySelector('#addbook');
const add = document.querySelector('#add');



addbook.addEventListener('click', addToELibrary);
add.addEventListener('click', addLibrary )


const elibrary = [];

function Book(title, author, isbn, price, pages, country){
    this.title =title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.page = pages;
    this.country = country;
    this.read = 0;
}

function addLibrary(){
    if (validateInput()){
        let title = textTitle.value;
        let author = textAuthor.value;
        let isbn = textIsbn.value;
        let price = textPrice.value;
        let pages = textPages.value;
        let country = textCountry.value;
     

        let book = new Book (title, author, isbn, price, pages, country);

        // elibrary.push(book);
        saveBook(book);
        location.reload();

       
    }else {
        alert("Sorry, all fields are required")

        console.log(addLibrary);
    }

}





function addToELibrary(){
    if (validateInput()){
        let title = textTitle.value;
        let author = textAuthor.value;
        let isbn = textIsbn.value;
        let price = textPrice.value;
        let pages = textPages.value;
        let country = textCountry.value;
     

        let book = new Book (title, author, isbn, price, pages, country);

        // elibrary.push(book);
        saveBook(book);
        location.reload();

       
    }else {
        alert("Sorry, all fields are required")
    }
}

function validateInput(){
    if (textTitle.value == "" || textAuthor.value == "" || textPrice.value == "" || 
    textIsbn.value == "" || textPages.value == "" || textCountry.value == ""){
        return false
    }return true;
}

function render(){
    if(localStorage.getItem('books') != null){
        let booksArray = JSON.parse (localStorage.getItem('books'));

        for (var i = 0; i < booksArray.length; i++){
        bookRow.innerHTML += `<div class="col-md-4">
            <div class="card">
                <div class="book-cover">
                    <img src="${booksArray[i].country}" class="card-img img-fluid">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${booksArray[i].title}</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates, culpa laborum!</p>
                    <span class="btn btn-primary">Read Book</span>
                    <span class="btn btn-primary" onclick="deleteBook(${i})" >Delete Book</span>
                </div>
            </div>
        </div>`;
        }
    }else{
        console.log("No books yet");
    }
}


function saveBook(bookObj){
    let booksArray = [];

    if (localStorage.getItem('books') == null){
        booksArray.push(bookObj);
        localStorage.setItem ('books', JSON.stringify(
            booksArray));
        alert ("New book added to the eLibrary!");
    }else{
        booksArray = JSON.parse(localStorage.getItem("books"));

        booksArray.push(bookObj);
        localStorage.setItem('books', JSON.stringify(
            booksArray));
            
        alert("New book added to the eLibrary")
    }
}


function deleteBook(bookID) {
    if (localStorage.getItem("books") != null)
    booksArray = JSON.parse(localStorage.getItem("books"));
    booksArray.splice(bookID, 1);
    localStorage.setItem('books', JSON.stringify(
        booksArray));
        alert("books deleted");
        location.reload();
    
    
    }


//     $(".add").on("click", function () {
//     var cat = $(this).attr('value')
//     window.location = '/cat/' + cat;
//     console.log(add);
// });
// $('li.dropdown').hover(function () {
//     $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
// }, function () {
//     $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
// });


// $(".bookpage").on("click", function () {
//     var category = $(this).attr('value')
//     window.location = '/category/' + category;
// });




// $(".search-button").on("click", function () {
//     var ele = $('.search').val();
//     window.location = '/search/' + ele;
// });
// $('.store').on('click', function (req, res) {
//     var cartid = $(this).attr('value')
//     var username = $("#username").val();
//     $.ajax({
//         url: '/addbook/' + cartid,
//         type: 'post',
//         datatype: JSON,
//         success: function (msg) {
//             if (msg == 'Do login') {
//                 window.location.replace("/login ");
//             } else if (msg == 'inserted') {
//                 var value = document.querySelector('#counter').innerHTML;
//                 val = parseInt(value) + 1;
//                 document.getElementById("counter").innerText = val;

//             } else if (msg == 'Already in Cart') {
//                 alert('Already in Cart')
//             }
//         }
//     })
// })









// function validateform() {
//     var name = document.myform.name.value;
//     var password = document.myform.password.value;
//     var confirmpassword = document.myform.confirmpassword.value;
//     if (name.length < 2) {
//         document.getElementById('error').innerHTML="Name should be greater than 3 letters"
//         return false;
//     }
//     if(password!=confirmpassword){
//         document.getElementById('error').innerHTML="Password and Confirm password should be same"
//         return false
//     }
// }