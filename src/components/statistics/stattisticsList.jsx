import PropTypes from 'prop-types';
import StatisticsItem from "./statisticsItem";
import { StatList, Title } from './statistics.styled';

export default function StatisticsList({ title, stats }) {
    return (
    <section>
        {title && <Title>{title}</Title>}

        <StatList>
            {stats.map(item => (
                <StatisticsItem
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}
                />
           ))} 
            
        </StatList>
    </section>
    );
}

StatisticsList.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  ),
}