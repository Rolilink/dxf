export default (dxf) => {
  return dxf.entities.reduce((acc, entity) => {
    const layer = entity.layer

    if (!acc.includes(layer)) {
      acc.push(layer)
    }

    return acc
  }, [])
}
