import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import data from '../assets/data.json'

import Detail from '../components/Detail';

const PdtDetail = () => {
  const [pdtDetail, setPdtDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchPdtData = async () => {
      const pdtDetailData = data.filter((currVal) => {
        if (currVal.Id === id)
          return currVal;
      });

      setPdtDetail(pdtDetailData);
      setLoading(false)
    }

    fetchPdtData();
  }, [id]);

  const handleCard = () => {
    if (loading) {
      return (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      );
    } else {
      return (
        <Detail pdtDetail={pdtDetail} />
      );
    }
  };

  return (
    <Box>
      {handleCard()}
    </Box>
  )
}

export default PdtDetail