const createListItem = (task) => {
  return /*html*/ `
    <li>
      <form method="POST" action="/update">
        <input type="hidden" name="id" value="${task.id}">
        <button name="action" value="toggle" aria-label="Toggle complete">
          ${task.complete ? "☑︎" : "☐"}
        </button>
        <span style="${task.complete ? "text-decoration: line-through" : ""}">
          ${task.content}
        </span>
        <button name="action" value="remove">&times;</button>
      </form>
    </li>
  `;
};

module.exports = { createListItem };
