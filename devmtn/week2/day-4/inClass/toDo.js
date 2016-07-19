$("document").ready(function(){
		var todoApp = $('#todoApp');
		var todoTitle = $('<h1>jQuery Todo App</h1>');
		var todoInput = $('<input placeholder=\'add an item...\'></input>');
		var todoAddItemButton = $('<button>Add</button>');
		var todoClearButton = $('<button>Remove All Done</button>');
		var todoList = $('<ul></ul>');
		var todoItem = $('<li></li>');

		todoApp.append(todoTitle);
		todoApp.append(todoTitle);
		todoApp.append(todoInput);
		todoApp.append(todoAddItemButton);
		todoApp.append(todoClearButton);
		todoApp.append(todoList);

		todoAddItemButton.click(function(){
			var inputText = todoInput.val();
			var todoItem = "<li>" + inputText + "</li>";
			todoList.append(todoItem);
		});
		todoClearButton.click(function(){
			todoList.html("<ul></ul>");
		});
		$(todoList, listItem).click(function(){
			alert("h");
		});
});
