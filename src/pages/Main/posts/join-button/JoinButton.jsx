import { Button } from '@components/Button';
import axios from 'axios';
import React, { useState } from 'react';
import { colors } from '../../../../assets/colors';
import { getToken } from '../../../../utils/Token';
import { LinkButton } from '../link-button/LinkButton';

export function JoinButton({ group, addJoinedMemberNum }) {
  const [loading, setLoading] = useState();
  const [url, setUrl] = useState();

  const user = getToken('user');

  return url != null ? (
    <LinkButton url={url} />
  ) : (
    <Button
      onClick={async () => {
        setLoading(true);
        const { data } = await axios.post(
          'https://hack-dnd.herokuapp.com/match/joined_member/',
          {
            user: `${user.user_id}`,
            group,
          },
        );
        setUrl(data.open_link);
        addJoinedMemberNum();
        setLoading(false);
      }}
      backgroundColor="#0137F3"
      textColor={colors.white}
    >
      참여하기
    </Button>
  );
}
