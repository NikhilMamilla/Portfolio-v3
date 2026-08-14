import { styles } from "../styles";

const StarWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <section
        id={idName}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component {...props} />
      </section>
    );
  };

export default StarWrapper;
