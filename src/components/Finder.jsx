// eslint-disable-next-line react/prop-types
function Finder({ onChange, value }) {
    return <>
    <label> Buscar:
        <input data-testid="input-finder" placeholder="Buscar..." value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
    </>
}

export default Finder;