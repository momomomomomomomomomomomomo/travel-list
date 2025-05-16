export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">Start adding items to your list 🏝️</footer>
    );
  const numItems = items.length;
  const packedItems = items.reduce(
    (pItems, item) => (item.packed ? ++pItems : pItems),
    0
  );
  const packedPercentage = ((packedItems / numItems) * 100).toFixed(1);

  return (
    <footer className="stats">
      {+packedPercentage !== 100
        ? `💼 You have ${numItems} items on your List and You already Packed
      ${packedItems} (${packedPercentage}%)`
        : "You got everything ready to go! ✈️"}
    </footer>
  );
}
