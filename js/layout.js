$('li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});
// $(".privacy").on("click", function () {
//     window.location = '/privacy';
// });
// $(".aboutpage").on("click", function () {
//     window.location = '/about';
// });
// $(".terms").on("click", function () {
//     window.location = '/terms';
// });
// $(".contactpage").on("click", function () {
//     window.location = '/contact';
// });
///
$(".bookpage").on("click", function () {
    var category = $(this).attr('value')
    window.location = '/category/' + category;
});
$(".search-button").on("click", function () {
    var ele = $('.search').val();
    window.location = '/search/' + ele;
});
$('.store').on('click', function (req, res) {
    var cartid = $(this).attr('value')
    var username = $("#username").val();
    $.ajax({
        url: '/addbook/' + cartid,
        type: 'post',
        datatype: JSON,
        success: function (msg) {
            if (msg == 'Do login') {
                window.location.replace("/login ");
            } else if (msg == 'inserted') {
                var value = document.querySelector('#counter').innerHTML;
                val = parseInt(value) + 1;
                document.getElementById("counter").innerText = val;

            } else if (msg == 'Already in Cart') {
                alert('Already in Cart')
            }
        }
    })
})
$('.deleteproduct').on('click', function () {
    var deleteitem = $(this).attr('value')
    // var username = $("#username").val();
    $.ajax({
        url: '/deleteproduct/' + deleteitem,
        type: 'put',
        datatype: 'json',
        success: function (msg) {
            if (msg == "deleted") {
                location.reload()
            }
        }
    })
})


$(function() {
    var template = new EJS({
        text: $('#template').html()
    });
    $('#list').html(template.render({list:[
        { status: 'read',   name: 'John', date: 'Today',
            text: 'just got back, how are you doing?' },
        { status: 'unread', name: 'Jenny', date: 'Today',
            text: 'please call me asap' },
        { status: 'read',   name: 'Jack', date: 'Yesterday',
            text: 'where do you want to go today?' },
    ]}));
});

// $('.deleterefresh').on('click', function () {
//     $.ajax({
//         url: '/cart/usercart',
//         type: 'get',
//         datatype: 'json',
//         success: function (msg) {
//             alert(JSON.stringify(msg))
//         }
//     })
// })
// $(document).on("change", ".Bookquantity", function () {
//     var id = $(this).attr("book_qua");
//     // var $this = $(this);
//     var quant = $(this).find(":selected").text();
//     // console.log("val is", quant);
//     $.ajax({
//         url: "/book/" + quant + '/' + id,
//         type: 'put',
//         datatype: "json",
//         success: function (message) {
//             if (message == "Updated") {
//                 //                // window.location.replace("/cart/usercart");
//                 location.reload()
//             }
//         }
//     })
// })
// $('.logout').on('click', function () {
//     var username = $("#username").val();
//     window.location = '/' + username + '/logout';
// })
// $('#updatedata').on('click',function(){
//     var userid = $('#userid').val()
//     var data={
//         name:$("#username").val(),
//         emailid:$("#useremail").val(),
//         username:$("#userpassword").val(),
//         phonenumber:$("#phonenumber").val(),
//     } 
//     $.ajax({
//         url:'/updateprofile',
//         type: 'put',
//         contentType: 'application/json',
//         dataType: 'json',
//         data: JSON.stringify(data),
//         success: function (message) {
//             alert(JSON.stringify(message));
//         }
//     });
// })
// $('#updatedata').on('click', function () {
//     var data = {
//         name: $("#username").val(),
//         emailid: $("#useremail").val(),
//         password: $("#userpassword").val(),
//         phonenumber: $("#usernumber").val(),
//     }
//     var result = JSON.stringify(data)
//     // alert(JSON.stringify(data))
//     $.ajax({
//         url: '/updateprofile/' + result,
//         type: 'post',
//         contentType: 'application/json',
//         dataType: 'json',
//         data: JSON.stringify(data),
//         success: function (message) {
//             if (message == 'updated') {
//                 $('#updatemessage').append('<div class="alert alert-success mt-4 mr-4 ml-4" role="alert">' + "successfully Updated" + "</div>")
//                 location.reload()
//             }
//         }
//     });
// });
// $("#buyproduct").submit(function (e) {
//     e.preventDefault();
//     var presentDate = new Date();
//     var data = {
//         name: $('#name').val(),
//         mobilenumber: $('#number').val(),
//         pincode: $('#pincode').val(),
//         landmark: $('#landmark').val(),
//         town: $('#town').val(),
//         state: $('#state').val(),
//         orderData:presentDate
//     }
//     data = JSON.stringify(data)
//     $.ajax({
//         url: '/buyproduct/' + data,
//         type: 'post',
//         contentType: 'application/json',
//         dataType: 'json',
//         success: function (msg) {
//             location.replace("/userorders")
//         }
//     })
// });
// $("#Feedback").submit(function (e) {
//     e.preventDefault()
//     var data = {
//         name: $('#name').val(),
//         email: $('#email').val(),
//         query: $('#exampleFormControlTextarea1').val()
//     }
//     data = JSON.stringify(data)
//     $.ajax({
//         url: '/contactdata/' + data,
//         type: 'post',
//         contentType: 'application/json',
//         dataType: 'json',
//         success: function (message) {
//             if(message.success){
//                 $('#successMessage').append('<div class="alert alert-success mt-4 mr-4 ml-4" role="alert">' + "Thank you, will contact you" + "</div>")
//                 setTimeout(function() {
//                     location.reload();
//                 }, 1000);
//             } 
//         }
//     })
// });
$('.deleteorderproduct').on('click', function () {
    var deleteitem = $(this).attr('value')
    // var username = $("#username").val();
    $.ajax({
        url: '/deleteorderproduct/' + deleteitem,
        type: 'put',
        datatype: 'json',
        success: function (msg) {
            if (msg == "canceled") {
                location.reload()
            }
        }
    })
})

const slides = document.querySelectorAll("ul li.slide");
let currentSlide = 0;

let interval = setInterval (changeSlide, 8000);

function changeSlide(){
    slides[currentSlide].setAttribute("class", "slide");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].setAttribute("class", "slide active")
}


// elibrary
const addBtn = document.getElementById('addBtn');
const bookModal = document.getElementById('bookModal');
const cancelBtn = document.querySelector('#cancelBtn');

addBtn.addEventListener('click', showModal)
// bookModal.addEventListener('click', hideModal)
cancelBtn.addEventListener('click', hideModal)

  
function showModal(){
    bookModal.style.display = "block";
}

function hideModal(){
    bookModal.style.display = "none";
}

// const elibrary = (function (){
//     let library =[];
//     let bookRow = null;

//     function initialize(HTMLElement){
//         bookRow = document.getElementById(HTMLElement)
//     }
// })();


// get all element of interest
const newBookBtn = document.getElementById('newBookBtn');
const txtTitle = document.getElementById('txtTitle');
const txtPub = document.getElementById('txtPub');
const txtPubYear = document.getElementById('txtPubYear');
const txtPages = document.getElementById('txtPages');
const txtCoverURL = document.getElementById('txtCoverURL');
const bookRow = document.getElementById('bookRow');

newBookBtn.addEventListener('click', addToELibrary);

const elibrary = [];

function Book(title, pub, pages, yearPub, coverImgURL){
    this.title =title;
    this.pub = pub;
    this.pages = pages;
    this.yearPub = yearPub;
    this.coverImgURL = coverImgURL;
    this.read = 0;
}

function addToELibrary(){
    if (validateInput()){
        let title = txtTitle.value;
        let pub = txtPub.value;
        let pages = txtPages.value;
        let coverImgURL = txtCoverURL.value;
        let yearPub = txtPubYear.value;

        let book = new Book (title, pub, pages, yearPub, coverImgURL);

        // elibrary.push(book);
        saveBook(book);
        location.reload();

       
    }else {
        alert("Sorry, all fields are required")
    }
}

function validateInput(){
    if (txtTitle.value == "" || txtPub.value == "" || 
    txtPubYear.value == "" || txtPages.value == ""){
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
                    <img src="${booksArray[i].coverImgURL}" class="card-img img-fluid">
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