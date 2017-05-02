// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function(){
  console.log('turbolink load is ready');
  var todoInput = $('#todo_name');
  // console.log(todoInput.length);
  todoInput.focus()

  var saveButton = $('.modal-footer .btn-primary')
  saveButton.click(function() {
    // console.log('saving...');
    var editForm = $('.edit_todo')
    editForm.submit();
  });

  // ***************** OLD WAY OF DOING THINGS. LOOK AT EDIT.JS.ERB FOR NEW MAGIC WAY *************************
  // var editTodoLinks = $('.edit-todo-link');
  // editTodoLinks.click(function(evt) {
  // evt.preventDefault();
  // $(".modal").modal();
  // });
});
