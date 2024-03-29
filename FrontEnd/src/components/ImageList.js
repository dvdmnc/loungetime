import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dialog from '@mui/material/Dialog';
  
  export default function MasonryImageList({data}) {
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleClose = () => setSelectedItem(null);

    const itemData = data.map((image) => {
        return {img: image.url,
        title: image.titre,
      }
    })
    
    return (
      <Box id='Mansonry'>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item,index) => (
            <React.Fragment key={`img${index}`}>
            <ImageListItem>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`Agrandir ${item.title}`}
                onClick={() => setSelectedItem(item)}
              >
                <VisibilityIcon />
              </IconButton>
            }
            />
            </ImageListItem>
           <Dialog onClose={handleClose} open={item.img === selectedItem?.img}>
              <img src={selectedItem?.img} alt={selectedItem?.title}
                loading="lazy" />
            </Dialog>
            </React.Fragment>
          ))}
        </ImageList>
      </Box>
    );
  }