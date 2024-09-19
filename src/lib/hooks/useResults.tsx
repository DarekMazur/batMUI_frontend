import { useEffect, useState } from 'react';
import NoobImg from '../../assets/ranks/noob.jpg';
import AmateurImg from '../../assets/ranks/amateur.jpg';
import NormalImg from '../../assets/ranks/normal.jpg';
import AdvancedImg from '../../assets/ranks/advanced.jpg';
import PerfectImg from '../../assets/ranks/perfect.jpg';
import WayneImg from '../../assets/ranks/wayne.jpg';

type IRankName = 'noob' | 'amateur' | 'normal' | 'advanced' | 'perfect' | 'wayne';

interface IRankTypes {
  rankName: null | IRankName;
  rankImage: null | string;
  rankDescription: string;
}

export const useResults = (score: number) => {
  const initRank: IRankTypes = {
    rankName: null,
    rankImage: null,
    rankDescription: ''
  };

  const [playerRank, setPlayerRank] = useState(initRank);

  let rankName: null | IRankName = null;

  useEffect(() => {
    if (score <= 0) {
      rankName = 'noob';
    } else if (score < 0.25) {
      rankName = 'amateur';
    } else if (score < 0.6) {
      rankName = 'normal';
    } else if (score < 0.8) {
      rankName = 'advanced';
    } else if (score <= 1) {
      rankName = 'perfect';
    } else {
      rankName = 'wayne';
    }

    const resultContent = {
      noob: { rankImage: NoobImg, rankDescription: 'Przepadnij w mrokach Arkham, heretyku!!!' },
      amateur: {
        rankImage: AmateurImg,
        rankDescription: 'Wiesz, że coś takiego, jak Batman jest. I nic ponad to.'
      },
      normal: {
        rankImage: NormalImg,
        rankDescription:
          'Tragedii nie ma, ale mogło być lepiej. Znasz Gacka, ale fanem to Ty nie jesteś...'
      },
      advanced: {
        rankImage: AdvancedImg,
        rankDescription:
          'Niemal perfekcyjnie! Gratuluję, do pełnego sukcesu zabrakło naprawdę niewiele.'
      },
      perfect: {
        rankImage: PerfectImg,
        rankDescription:
          'Miło poznać prawdziwego fana! Jaskinia Nietoperza niemal nie ma przed Tobą tajemnic!'
      },
      wayne: { rankImage: WayneImg, rankDescription: 'W czym mogę służyć, Paniczu Bruce?' }
    };

    setPlayerRank({
      rankName,
      rankImage: resultContent[rankName as IRankName].rankImage,
      rankDescription: resultContent[rankName as IRankName].rankDescription
    });
  }, []);

  return playerRank;
};
