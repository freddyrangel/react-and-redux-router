import React   from 'react';
import * as AT from '../../constants.js';

export default function CatImage({ url }) {
  return <img src={ url || AT.CAT_IMAGE_URL } width='200' alt='Cat'/>
}
