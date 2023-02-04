import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const url = {
  html: `<html><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style>
                  body { margin:0; padding:0;}
                  img {display: block; border:0; margin:0; padding:0;}
                  a {margin:0; padding:0;line-height:0px}
          </style></head><body><table width="700" border="0" cellspacing="0" cellpadding="0" style="margin:0; padding:0;font-size: 0; table-layout: fixed;"><tbody><tr><td><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230112/63bfaf5a43af260001e8f5e7.png"> </td></tr><tr><td><p style="font-size:15px;font-family:맑은 고딕;line-height: 1.8;letter-spacing:-0.5px;color:#25a5ff;margin-bottom: 0px;">(아래 사진을 클릭하시면 바로 학습하실 수 있습니다.) </p></td></tr><tr><td><a href="https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/card/CARD-16cf/cube/CUBE-spm/view/WebPage" target="_blank" style="outline: 0;"><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230112/63bfaf5a43af260001e8f5e8.png"></a> </td></tr><tr><td><a href="https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/card/CARD-16cf/cube/CUBE-spk/view/Video" target="_blank" style="outline: 0;"><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230112/63bfaf5a7f0a8a0001b1067c.png"></a> </td></tr><tr><td><a href="https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/card/CARD-16cf/cube/CUBE-spl/view/Video" target="_blank" style="outline: 0;"><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230112/63bfaf5a7f0a8a0001b1067e.png"></a> </td></tr><tr><td><a href="https://int.mysuni.sk.com/login?contentUrl=/suni-main/lecture/card/CARD-16cf/cube/CUBE-sah/view/Video" target="_blank" style="outline: 0;"><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230112/63bfaf5a7f0a8a0001b1067b.png"></a> </td></tr><tr><td><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230112/63bfaf5a7f0a8a0001b1067d.png"> </td></tr><tr><td><a href="https://int.mysuni.sk.com/login?contentUrl=/suni-community/community/COMMUNITY-4r/home" target="_blank" style="outline: 0;"><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230113/63c0ac6d43af260001e8f608.png"></a> </td></tr><tr><td><img src="https://image.mysuni.sk.com/suni-asset/newsletter/20230113/63c0ac6d7f0a8a0001b10699.png"> </td></tr></tbody></table><p><img src="http://mailsend.skmns.co.kr/tm6/app/response/open/massmail/2263f9b1c1ad9d7bf88400cbfd900709/d90553683cf6b5aa554c2b0dcc75b73ef6b867114f436515898eb5f4fc48a26b" width="0" height="0" style="display:none"></p></body></html>`
};

const AnimatedHeader = Animated.createAnimatedComponent(View);
const AnimatedWebview = Animated.createAnimatedComponent(WebView);

const WebViewList = ({ data }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, 65);
  const translateY = diffClampScrollY.interpolate({
    inputRange: [0, 65],
    outputRange: [0, -65],
    extrapolate: 'clamp'
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={{
          height: 65,
          width: '100%',
          backgroundColor: 'red',
          transform: [{ translateY }],
          position: 'absolute',
          zIndex: 1000
        }}
      />
      <Animated.View
        style={{
          flex: 1,
          paddingTop: 65,
          marginTop: translateY
        }}
      >
        <WebView
          source={{ html: url.html }}
          style={[{ backgroundColor: 'pink', width: '100%', height: 2000 }]}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: false
          })}
          scrollEventThrottle={16}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default WebViewList;
