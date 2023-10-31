function ColorPick({ color, setCVColor }) {
  return (
    <input
      type='color'
      value={color}
      onChange={(e) => setCVColor(e.target.value)}
    />
  );
}

export default function Customizer({ color, setCVColor }) {
  return (
    <div>
      <ColorPick color={color} setCVColor={setCVColor} />
    </div>
  );
}
