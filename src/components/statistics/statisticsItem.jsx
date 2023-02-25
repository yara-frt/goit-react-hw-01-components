import PropTypes from 'prop-types';
import { LabelStat, PercentageStat, StatItem } from './statistics.styled';

export default function StatisticsItem({label, percentage}) {
    return (
    <StatItem type={label}>
      <LabelStat>{label}</LabelStat>
      <PercentageStat>{percentage}%</PercentageStat>
    </StatItem>
    )
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}