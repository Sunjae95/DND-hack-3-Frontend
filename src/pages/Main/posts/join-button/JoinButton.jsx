import { Button } from '@components/Button';
import axios from 'axios';
import React, { useState } from 'react';
import { colors } from '../../../../assets/colors';
import { LinkButton } from '../link-button/LinkButton';

export function JoinButton({ group }) {
  const [loading, setLoading] = useState();
  const [url, setUrl] = useState();

  return url != null ? (
    <LinkButton url={url} />
  ) : (
    <Button
      onClick={async () => {
        setLoading(true);
        const { data } = await axios.post(
          'https://hack-dnd.herokuapp.com/match/joined_member/',
          {
            user: 'julysein723',
            group,
          },
        );
        setUrl(data.open_link);
        setLoading(false);
      }}
      backgroundColor="#0137F3"
      textColor={colors.white}
    >
      참여하기
    </Button>
  );
}
