import React from 'react';
import * as style from './style';
import { useLocation } from 'react-router';

function YoutuberHeader({ data }) {
  console.log(data);
  return (
    <style.YoutuberContainer>
      <style.RC_Img src={data.img} alt={data.channelName} title={data.channelName} />;
      <p>{data.channelName}</p>
    </style.YoutuberContainer>
  );
}

export default function Review() {
  const location = useLocation();
  return (
    <>
      <style.GrayBar />
      <style.Contatiner>
        <YoutuberHeader data={location.state} />
      </style.Contatiner>
    </>
  );
}
