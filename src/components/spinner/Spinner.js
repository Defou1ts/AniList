import spinner from './spinner.svg'

const Spinner = () => {
   return (
      <img style={{ margin: '0 auto', background: 'none', display: 'block' }}
         src={spinner}
         alt="Spinner"
         width='200px'
         height='200px' />
   )
}

export default Spinner;