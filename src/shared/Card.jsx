import PropTypes from 'prop-types';

function Card({ children, theme }) {
  return (
    <div className={`card ${theme==='dark' && 'reverse'}`}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  theme: 'light'
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string
}

export default Card
