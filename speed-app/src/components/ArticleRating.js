import React, { useState } from 'react';
import { Rating, Typography } from '@mui/material';

const ArticleRating = () => {
  const [value, setValue] = useState(2);

  return (
    <div>
      <Typography component="legend">Rate this article</Typography>
      <Rating
        name="article-rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Optionally, make an API call to save the rating
          console.log('New Rating:', newValue);
        }}
      />
    </div>
  );
};

export default ArticleRating;
