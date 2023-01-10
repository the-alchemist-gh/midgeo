import React from 'react'
import { createStyles, Button, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({

  button1: {
    height: 200,
  },

  catBtn: {
    backgroundColor: "#ECECEC",
    color: "#000",
    }
}));

export default function CategoryBtn({item}) {
    const { classes } = useStyles();
  return (
        <Button 
            className='catBtn'
            radius={25}
            size="md"
        >
            <p className='px-5'>{item}</p> 
        </Button>
  )
}

