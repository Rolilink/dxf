import fs from 'fs'
import { join } from 'path'
import expect from 'expect'

import { parseString } from '../../src'
import getLayers from '../../src/getLayers'

describe('Get Layers', () => {
  it('should get dxf layers', () => {
    const parsed = parseString(
      fs.readFileSync(join(__dirname, '../resources/Ceco.NET-Architecture-Tm-53.dxf'), 'utf-8'))
    const layers = getLayers(parsed);

    expect(layers).toEqual([
      "projection",
      "wall low",
      "wall high",
      "doorswindows",
      "nivel",
      "topography",
      "names",
      "texture",
      "equipment",
      "plants",
      "Ceco.NET 53",
      "0"
    ]);
  })
})
