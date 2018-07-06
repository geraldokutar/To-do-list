//constructor
function Lists(list){
  this.lastName = list;
}
//prototypes
Lists.prototype.addItem = function (){
  return this.lastName;
}
$(document).ready(function(){
  $("form#new-list").submit(function(event){
    event.preventDefault();

    var inputtedList = $("#to-do").val();
    var newList = new Lists(inputtedList);

    $("ul#to-do-list").prepend("<li id='li'>" + "<button id='deleteButton' type='button' class='btn'> Delete</button>" + newList.addItem() + "</li>")
    $("#deleteButton").click(function(){
      $(this).closest("li").remove();
    })

    $("#to-do").val(" ");
  })
})
