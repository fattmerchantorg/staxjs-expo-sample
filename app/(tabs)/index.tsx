import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Dimensions, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'; // Fixed: Add curly braces

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function WebViewScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#116AC5', dark: '#214457' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#F5F7FA"
          name="filemenu.and.selection"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Embedded WebView</ThemedText>
      </ThemedView>
      <ThemedText>
        Below is an <ThemedText type="defaultSemiBold">embedded WebView</ThemedText>. 
        Use this in the event that you cannot use the Browser plugin.
      </ThemedText>
      <ThemedView style={styles.container}>
        <WebView
          source={{ uri: 'https://staxpayments.com' }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    width: screenWidth,
    height: screenHeight * 0.7,
    marginHorizontal: -32, // Offset padding from ParallaxScrollView
    marginTop: 16,
  },
  webview: {
    width: screenWidth,
    height: screenHeight * 0.7,
  },
});