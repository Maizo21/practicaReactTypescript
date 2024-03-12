
const TiposBasicos = () => {

  const name: string = 'Fernando';
  const age: number = 35;
  const isActive: boolean = true;
  const powers: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
        <h3>Tipos Basicos</h3>
        <p>{name}</p>
        <p>{age}</p>
        <p>{isActive ? 'Activo' : 'Inactivo'}</p>
        <p>{powers.join(', ')}</p>
        
    </>
  )
}

export default TiposBasicos