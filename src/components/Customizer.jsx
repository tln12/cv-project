function ColorPick({ color, setColor }) {
  return (
    <input
      type='color'
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}

export default function Customizer({ color, setColor }) {
  return (
    <div>
      <ColorPick color={color} setColor={setColor} />
    </div>
  );
}
