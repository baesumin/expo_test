import { View, StyleSheet, ScrollView, Animated, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';

export default function WebviewScreen() {
  const [headerHeight, setHeaderHeight] = useState(500);
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, headerHeight);
  const headerY = diffClampScrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp'
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ backgroundColor: 'pink' }}
        style={{ backgroundColor: 'pink' }}
      >
        <Animated.View
          style={{
            // position: 'absolute',
            height: 300,
            backgroundColor: 'green'
          }}
        />
        <WebView
          nestedScrollEnabled
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: false
          })}
          style={{ flex: 1, height: 500 }}
          // containerStyle={{ flex: 1, height: 500 }}
          source={{
            html:
              `
            <style>
            body {
              padding-top:50px;
            }
            </style>
          ` +
              `
          <Html>    
          <Head>  
          <title>  
          Example of Paragraph tag  
          </title>  
          </Head>  
          <Body>   
          <p> <!-- It is a Paragraph tag for creating the paragraph -->  
          <b> HTML </b> stands for <i> <u> Hyper Text Markup Language. </u> </i> It is used to create a web pages and applications. This language   
          is easily understandable by the user and also be modifiable. It is actually a Markup language, hence it provides a flexible way for designing the  
          web pages along with the text.   
          </p>  
          HTML file is made up of different elements. <b> An element </b> is a collection of <i> start tag, end tag, attributes and the text between them</i>.   
          </p>

          <p> <!-- It is a Paragraph tag for creating the paragraph -->  
          <b> HTML </b> stands for <i> <u> Hyper Text Markup Language. </u> </i> It is used to create a web pages and applications. This language   
          is easily understandable by the user and also be modifiable. It is actually a Markup language, hence it provides a flexible way for designing the  
          web pages along with the text.   
          </p>  
          HTML file is made up of different elements. <b> An element </b> is a collection of <i> start tag, end tag, attributes and the text between them</i>.   
          </p>
          <img src="https://kinsta.com/wp-content/uploads/2021/11/learn-html.png" alt="Italian Trulli">
          <p> <!-- It is a Paragraph tag for creating the paragraph -->  
          <b> HTML </b> stands for <i> <u> Hyper Text Markup Language. </u> </i> It is used to create a web pages and applications. This language   
          is easily understandable by the user and also be modifiable. It is actually a Markup language, hence it provides a flexible way for designing the  
          web pages along with the text.   
          </p>  
          HTML file is made up of different elements. <b> An element </b> is a collection of <i> start tag, end tag, attributes and the text between them</i>.   
          </p>
          <p> <!-- It is a Paragraph tag for creating the paragraph -->  
          <b> HTML </b> stands for <i> <u> Hyper Text Markup Language. </u> </i> It is used to create a web pages and applications. This language   
          is easily understandable by the user and also be modifiable. It is actually a Markup language, hence it provides a flexible way for designing the  
          web pages along with the text.   
          </p>  
          HTML file is made up of different elements. <b> An element </b> is a collection of <i> start tag, end tag, attributes and the text between them</i>.   
          </p>
          <img src="https://kinsta.com/wp-content/uploads/2021/11/learn-html.png" alt="Italian Trulli">
          <img src="https://kinsta.com/wp-content/uploads/2021/11/learn-html.png" alt="Italian Trulli">
          <img src="https://kinsta.com/wp-content/uploads/2021/11/learn-html.png" alt="Italian Trulli">
          <img src="https://kinsta.com/wp-content/uploads/2021/11/learn-html.png" alt="Italian Trulli">
          </Body>  
          </Html>  
        `
          }}
        />
        <Animated.View
          style={{
            // position: 'absolute',
            height: 300,
            backgroundColor: 'green',
            left: 0,
            right: 0,
            top: 0,
            paddingTop: 15,
            zIndex: 1000,
            elevation: 1000
            // transform: [{ translateY: headerY }]
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  }
});
