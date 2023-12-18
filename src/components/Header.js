import { LOCALES } from '../i18n/locales'
const Header = props => {
  const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: '日本語', code: LOCALES.JAPANESE },
    { name: 'Français', code: LOCALES.FRENCH },
    { name: 'Deutsche', code: LOCALES.GERMAN }
  ]

  const menu = [
    {
      title: 'About the project',
      path: '#'
    },
    {
      title: 'Contact us',
      path: '#'
    }
  ]

  return (
    <header>
      <div className='container header_content'>
        <div className='brand'>ReactIntl</div>
        <nav>
          <ul>
            {menu.map(({ title, path }) => (
              <li key={title}>
                <a href={path}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='spacer'></div>
        <div className='switcher'>
          {/* Language switch dropdown here */}
          Languages{' '}
          <select onChange={props.handleChange} value={props.currentLocale}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header
