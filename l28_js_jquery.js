console.log($(".jq_ul li")[0]);
console.log(document.querySelectorAll(".jq_ul li")[0]);
$(".jq_ul li")
  .mouseenter(function(e) {
    e.target.style.backgroundColor = "red";
    e.target.style.color="white";
    e.target.style = "background-color: red; color: white;";
    $(e.target).css("backgroundColor","red").css("color","white");
    $(e.target).css({backgroundColor: "red", color: "white"});
  })
  .mouseleave(function(){
    $(this).css({backgroundColor : "white", color : "black"});
  })
  .click(function(){
    $(this).toggleClass('active');
  })


// document.querySelectorAll('.jq_ul li').forEach( (li)=>{
//   li.onmouseenter = function(){
//     this.style.backgroundColor = 'red';
//     this.style.color = 'white';
//   }
//   li.onmouseleave = function(){
//     this.style.backgroundColor = 'white';
//     this.style.color = 'black';
//   }
// })

  