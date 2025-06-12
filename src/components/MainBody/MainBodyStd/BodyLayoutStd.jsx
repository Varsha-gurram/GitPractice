import React from 'react'
import { Box, Grid, Paper, styled } from '@mui/material'
import CardOne from '../../MainBody/MainBodyStd/cardOne'
import { metricsCard1, metricsCard2 } from "./CardData";
import StatCard from '../../MainBody/MainBodyStd/StatCard'
import ClassesStd from './ClassesStd';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.2),
  textAlign: 'left',
  margin: '5px',
  padding: '20px',
  lineHeight: '0.5',
  borderRadius: '8px',
  boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)',
  color: theme.palette.text.secondary,
}))
const BodyLayoutStd = () => {
  return (
   <Grid container spacing={0.5}>
  <Grid size={{ xs: 12, md: 4 }}>
    <Item><CardOne value={52}/></Item>
  </Grid>
  <Grid size={{ xs: 12, md: 4 }}>
     <Item><StatCard data={metricsCard1} /></Item>
  </Grid>
  <Grid size={{ xs: 12, md: 4 }}>
    <Item><StatCard data={metricsCard2} /></Item>
  </Grid>
  <Grid size={{ xs: 12, md: 8 }}>
    <Item><ClassesStd></ClassesStd></Item>
  </Grid>
</Grid>
  );
}

export default BodyLayoutStd;
