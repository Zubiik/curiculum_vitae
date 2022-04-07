import React from 'react';
import siteIcon from '../../images/siteIcon.png';
import { SiteIconCustom } from './styled';

function SiteLink({ link }) {
  return (
    <a href={link} target="blank">
      <SiteIconCustom src={siteIcon} alt="icone de site internet" />
    </a>
  );
}

export default SiteLink;
