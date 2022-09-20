import { promises as fs } from 'fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile(
        './themes/violet-light.json',
        `${JSON.stringify(
          getTheme({
            style: 'light',
            name: 'Violet Light',
          }),
          null,
          2,
        )}\n`,
      ),
      fs.writeFile(
        './themes/violet-dark.json',
        `${JSON.stringify(
          getTheme({
            style: 'dark',
            name: 'Violet Dark',
          }),
          null,
          2,
        )}\n`,
      ),
    ]),
  )
  .catch(() => process.exit(1))
