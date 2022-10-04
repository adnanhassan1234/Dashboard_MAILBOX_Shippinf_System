// -----------------------------  listing-page

// table


// datatable

$(document).ready(function() {
            
  $('#datatable thead tr').clone(true).addClass("filterRow").css("display", "none").appendTo( '#datatable thead' );
  $('#datatable thead tr:eq(1) th').each( function (i) {
      var title = $(this).text();
      $(this).html( '<input type="text" placeholder="Search '+title+'" />' );

      $( 'input', this ).on( 'keyup change', function () {
          if ( table.column(i).search() !== this.value ) {
              table
                  .column(i)
                  .search( this.value )
                  .draw();
          }
      } );
  } );

  var table = $('#datatable').DataTable( {
      sDom:"input", 
      orderCellsTop: true,
      fixedHeader: true
  } ); 

} );

$("#filter").click(function(){
 
 $(".filterRow").css("display", "contents"); 
  
});

$(".customer").select2({});
$(".services").select2({});
$(".customer-phone").css("display", "none");

function servicePrice( price ){

  var priceValue = price.options[price.selectedIndex].getAttribute('data-price'); 
  var priceCost = price.options[price.selectedIndex].getAttribute('data-cost'); 
  document.getElementById("price").value = priceValue;
  document.getElementById("cost").value = priceCost; 
  if(document.getElementById("price").value !== "" && document.getElementById("quantity").value !== ""){
      
      document.getElementById("amount").value = document.getElementById("price").value * document.getElementById("quantity").value;
      
  }

}  

function changeStage(service){
  
  $.ajax({url: "/include/ajax.php", type: "POST", 
  data: {
      service : service
  }, 
  success: function(result){
      
      document.getElementById("stage-select").innerHTML = "";
      let eachResult = result.split(",");
      for(i = 0; i < eachResult.length; i++){
          
          if(eachResult[i] !== ""){
              
              $("#stage-select").append(eachResult[i]);
              
          }
          
      } 

      
  }});
  
}

document.getElementById("price").oninput = function(){
  
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  if(quantity !== "" && price !== ""){
      
      document.getElementById("amount").value = price * quantity;
      
  }
  
}

document.getElementById("quantity").oninput = function(){
  
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  if(quantity !== "" && price !== ""){
      
      document.getElementById("amount").value = price * quantity;
      
  }
  
} 




AOS.init({
offset: 350,
duration: 1000,

});











// transaction-table

function activateNav() {
  $('ul.nav > li').on('click', function (evt) {
    if ($(evt.currentTarget).hasClass('toggle-nav')) return;
    $(evt.currentTarget).addClass('active').siblings().removeClass('active');
  });
}


var docs = [
  {
    "Type": "excel",
    "Name": "Remaining tasks for this app",
    "Description": "This is a list of all the remaining tasks required to complete this app",
    "Tags": "Responsive, RWD",
    "LastViewed": "an hour ago",
   
  },
  {
    "Type": "ppt",
    "Name": "EVAMs presentation",
    "Description": "This is presentation for the EVAM occuring later this month",
    "Tags": "EVAM",
    "LastViewed": "a day ago",
    "Expiration": "Sep 08, 2015"
  },
  {
    "Type": "word",
    "Name": "Xmas Party list",
    "Description": "List of all the people who will be attending the holiday party",
    "Tags": "Responsive, RWD",
    "LastViewed": "a few mins ago",
    "Expiration": "Dec 25, 2014"
  }
];


function addToggle() {
	$('li.toggle-nav').on('click', function () {
		$(this).find('i').toggleClass('rotate-180-deg');
		$('.navbar-nav.side-nav').toggleClass('hide-link-text');
		$('#wrapper').toggleClass('expanded');
	});
}

function fixHamburgerUl() {
	$('.navbar-toggle').on('click', function () {
		$('.navbar-nav.side-nav').removeClass('hide-link-text');
		$("#wrapper").removeClass('expanded');
		$('i.fa-arrow-left').removeClass('rotate-180-deg');
	});
}

function init() {
  activateNav();
  addToggle();
  fixHamburgerUl();
}

init();








    AOS.init({
      offset: 350,
      duration: 1000,

    });













   
// on scroll navbar background color change


// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".header").css("background" , "rgba(0,0,0,0.8)");
//         }
  
//         else{
//             $(".header").css("background" , "none");  	
//         }
//     })
//   })

// tabs
$("#tab dt a").on("click", function(e){
  e.preventDefault();

  var target = $(this).attr("href");

  $("#tab dt a").removeClass("on");
  $(this).addClass("on");

  $("#tab dd").hide();
  $(target).show();
});





















  
                     





















