const Info = ({ ref, infoInView }) => {
  return (
    <div ref={ref} className={`info ${infoInView ? "visible" : ""}`}>
      <ul className="info__list">
        <li className="info__list__item">
          <div className="info__list__item__content">
            <span>1</span>
          </div>
          <span>kitchen</span>
        </li>
        <li className="info__list__item">
          <div className="info__list__item__content">
            <span>11</span>
          </div>
          <span>specialties</span>
        </li>
        <li className="info__list__item">
          <div className="info__list__item__content">
            <span>11</span>
          </div>
          <span>restaurants</span>
        </li>
        <li className="info__list__item">
          <div className="info__list__item__content">
            <span>1</span>
          </div>
          <span>transport costs</span>
        </li>
      </ul>
    </div>
  );
};

export default Info;
