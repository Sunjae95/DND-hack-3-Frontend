import { Button } from '@components/Button';
import axios from 'axios';
import React, { useState } from 'react';
import { colors } from '../../../../assets/colors';

export function JoinButton({ group }) {
  const [loading, setLoading] = useState();

  return (
    <>
      <Button
        onClick={async () => {
          setLoading(true);
          await axios.post(
            'https://hack-dnd.herokuapp.com/match/joined_member/',
            {
              user: 'julysein723',
              group,
            },
          );
          setLoading(false);
          toggle();
        }}
        backgroundColor="#0137F3"
        textColor={colors.white}
      >
        참여하기
      </Button>
    </>
  );
}
