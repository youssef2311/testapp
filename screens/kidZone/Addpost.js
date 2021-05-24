import  React, { useState, useEffect }  from 'react'
import { SafeAreaView , View, Button, TextInput,Text, Image, Platform, LinearGradient } from 'react-native';
import { connect } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';

export default class Addpost extends React.Component {
    // function ImagePickerExample() {
    //     const [image, setImage] = useState(null);
      
    //     useEffect(() => {
    //       (async () => {
    //         if (Platform.OS !== 'web') {
    //           const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //           if (status !== 'granted') {
    //             alert('Sorry, we need camera roll permissions to make this work!');
    //           }
    //         }
    //       })();
    //     }, []);
      
    //     const pickImage = async () => {
    //       let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //       });
      
    //       console.log(result);
      
    //       if (!result.cancelled) {
    //         setImage(result.uri);
    //       }
    //     };
    constructor()

    {
        super();
        this.state = {
            title : ' ',
            description : ' ',     
            tag : '# '  ,                                    
        }
    }
    
submit()
{
    console.log(this.state)
} 

    render () {
        

return (
    <SafeAreaView style={{
        borderWidth: 5,
    borderColor: "black",
    borderRadius: 50,
        marginTop: 20,
     padding: 25,
     backgroundColor: "beige"
    }}> 
     {/* <LinearGradient */}
{/* //     // Background Linear Gradient
//     colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
//     style={styles.background}
// /> */}
       <Text style={{fontWeight: 'bold', textAlign:'center'}}> Share your posts with your freinds</Text>
        <TextInput
        placeholder="Enter card name ..."
        onChangeText={(text) => { this.setState({ title : text})}}
        style = {{ borderWidth:2 , borderColor: 'black', margin:20, borderRadius:20}}
        />
          <TextInput
        placeholder="Describe your post ..."
        onChangeText={(text) => { this.setState({ description : text})}}
        style = {{ borderWidth:2 , borderColor: 'black', margin:20, borderRadius:20}}
        />
          <TextInput
        placeholder="Tag ...#"
        onChangeText={(text) => { this.setState({ tag : text})}}
        style = {{ borderWidth:2 , borderColor: 'black', margin:20, borderRadius:20 }}
        />
        <Button color="black"
      title ="Add a new post " onPress={() => this.submit()} />
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View> */}
    </SafeAreaView>
)        
    }
}



const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Addpostt = connect(mapStateToProps)(
    Addpost
)

export { Addpostt };


