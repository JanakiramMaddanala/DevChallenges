const todo = {
  items: [
    {
      todoId: 1,
      name: "ABC"
    },
  ],
  checkedItems: [],
};

const ToDoList = () => {
  const onChange = (e, todoID) => {
    if (e.target.checked) {
      todo.checkedItems.push(todoID);
    } else {
      todo.checkedItems = todo.checkedItems.filter((t) => t !== todoID);
    }
  };
  
  return (
    <>
      {todo.items.map(({ name, todoId }) => {
        return (
          <div>
            {name}
            <input
              type="checkbox"
              checked={todo.checkedItems.indexOf(todoId) !==}
              onchange={(e) => onChange(e, todoId)}
            />
          </div>
        );
      })}
    </>
  );
};
