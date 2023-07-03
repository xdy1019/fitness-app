import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];  


  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '25px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '34px', xs: '30px' } }} fontWeight={500} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          This exercise focuses on training your {bodyPart}.{' '}
          It is one of the best exercises to target your {target}. 
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '60px', height: '60px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '35px', height: '35px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '20px', xs: '15px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>      


    </Stack>
  )
}

export default Detail