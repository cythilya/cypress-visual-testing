import PropTypes from 'prop-types';
import './styles.css';
import Cat from './kitty.png';

const App = ({ width, ...props }) => {
  return (
    <div className='App'>
      <div className='container'>
        <div>
          <title>愛看書的貓！</title>
        </div>
        <main>
          <h1 className='title'>愛看書的貓！</h1>
          <div className='grid'>
            <div className='card'>
              <img src={Cat} alt='愛看書的貓！' width={width} />
              <p>愛看書的貓不會變壞</p>
              <p>愛看書的貓不會變壞</p>
              <p>愛看書的貓不會變壞</p>
              <p>愛看書的貓不會變壞</p>
              <p>愛看書的貓不會變壞</p>
              <p>愛看書的貓不會變壞</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const WIDTH = {
  SMALL: '100',
  LARGE: '300',
};

App.propTypes = {
  width: PropTypes.oneOf([WIDTH.SMALL, WIDTH.LARGE]),
};

App.defaultProps = {
  width: WIDTH.SMALL,
};

export default App;
