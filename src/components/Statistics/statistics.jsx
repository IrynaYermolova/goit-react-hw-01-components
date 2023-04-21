import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        <li className={css.item}>
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className={css.item}>
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className={css.item}>
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className={css.item}>
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
