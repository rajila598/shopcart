import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const ImageCarousel: React.FC = () => {
  const [apiImage, setApiImage] = useState([]);

  const flatListRef = useRef();
  useEffect(() => {
    const clientId = 'ZgmfpXtynRnZKSMbvAJmKetcGNlqo_-5B9s4TBXwyN0';
    const page = 1;
    const perPage = 2;
    const url = `https://api.unsplash.com/photos/?client_id=${clientId}&page=${page}`;
    try {
      axios
        .get(url)
        .then(response => {
          if (response.status !== 200) {
            throw new Error(
              'Network response was not ok ' + response.statusText,
            );
          }
          return response.data; // The response data is already parsed as JSON
        })
        .then(data => {
          console.log(data); // Handle the data here

          const imageUrls = data.map(image => ({
            id: image.id,
            url: image.urls.full,
          }));
          setApiImage(imageUrls);
          console.log(imageUrls);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  

  const [activeIndex, setActiveIndex] = useState(0);
  //   const handleIndexChanged = (index: number) => {
  //     setCurrentIndex(index);
  //   };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={{uri: item.url}} style={styles.image} />
      </View>
    );
  };
  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log('====================================');
    console.log(scrollPosition);
    console.log('====================================');
    const index = scrollPosition / 300;
    setActiveIndex(index);
    console.log(index);
  };
  // render Dot indicators
  const renderDotIndicators = () => {
    return apiImage.map((dot, index) => {
      if (activeIndex === index) {
        <View style={styles.imagebg2}></View>;
      }
      return <View style={styles.imagebg}></View>;
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === apiImage.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, apiImage.length]);
  const getItemLayout = (data, index) => ({
    length: 300,
    offset: 300 * index,
    index: index,
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={apiImage}
        keyExtractor={item => item.id}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View style={styles.dotindicator}>{renderDotIndicators()}</View>
      {/* <Carousel data={images} onIndexChanged={handleIndexChanged} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{images[currentIndex].name}</Text>
        <Text style={styles.text}>{images[currentIndex].description}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 4,
  },
  image: {
    width: 300,
    height: 400,
    margin: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imagebg: {
    backgroundColor: 'green',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  imagebg2: {
    backgroundColor: 'red',
    height: 20,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  dotindicator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default ImageCarousel;
