import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Contribution from './Contribution';

const ContributionList = ({ contributions }) => (
  <Fragment>
    {contributions.map(
      ({
        id,
        assessmentContent,
        assessmentDecision,
        author,
        content,
        createdAt,
        modifiedAt,
        negRatings,
        number,
        posRatings,
        ref,
      }) => (
        <Contribution
          key={id}
          assessmentContent={assessmentContent}
          assessmentDecision={assessmentDecision}
          author={author}
          content={content}
          createdAt={createdAt}
          id={id}
          modifiedAt={modifiedAt}
          negRatings={negRatings}
          number={number}
          posRatings={posRatings}
          reference={ref}
        />
      ),
    )}
  </Fragment>
);

ContributionList.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.shape(Contribution.propTypes))
    .isRequired,
};

export default ContributionList;
