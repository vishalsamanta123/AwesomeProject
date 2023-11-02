import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// const {width, height} = Dimensions.get('window');
const TrendingMovies = ({data}) => {
  return (
    <View style={styles.mainView}>
      <Text>Trending</Text>
      <Carousel 
         data={data}
         renderItems={({item})=> <Movie item={item}/>}
         itemWidth={400}
         firstItem={1}
         sliderWidth={600}
         inactiveSlideOpacity={0.60}
         slideStyle={styles.carouselView}
      />
    </View>
  )
}

const Movie = ({item}) =>{
  return(
    <TouchableWithoutFeedback>
         <Image style={{width: 600, height: 400}} source={require('../assets/images/moviePoster1.png')}/>
    </TouchableWithoutFeedback>
  )
};



const styles = StyleSheet.create({
    mainView : {

    },
    carouselView : {
        flex:1,
        alignItems: 'center'
    }
})

export default TrendingMovies;