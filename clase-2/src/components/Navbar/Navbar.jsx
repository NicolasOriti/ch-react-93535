const categories = ['Cafe en grano', 'Cafe molido', 'Capsulas', 'Cafeteras', 'Accesorios'];

function Navbar() {
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <a href='#'>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
