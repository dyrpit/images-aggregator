import ImageListItem from '@mui/material/ImageListItem';

interface Props {
  img: string;
}

function Image({ img }: Props) {
  return (
    <ImageListItem>
      <img
        src={img}
        alt='animal'
        style={{
          objectFit: 'cover',
          height: 250,
        }}
      />
    </ImageListItem>
  );
}

export default Image;
