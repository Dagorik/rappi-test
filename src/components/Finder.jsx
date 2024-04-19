// eslint-disable-next-line react/prop-types
function Finder({ onChange, value }) {
    return <>
    <label> Buscar:
        <input placeholder="Buscar..." value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
    </>
}

export default Finder;