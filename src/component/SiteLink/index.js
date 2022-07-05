import React from 'react';
import PropTypes from 'prop-types';
import siteIcon from '../../images/siteIcon.png';

import { SiteIconCustom } from './styled';

function SiteLink({ link }) {
  return (
    <a href={link} target="blank">
      <SiteIconCustom src={siteIcon} alt="icone de site internet" />
    </a>
  );
}
SiteLink.propTypes = {
  link: PropTypes.string.isRequired,
};
export default SiteLink;
