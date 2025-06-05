import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import * as WebBrowser from 'expo-web-browser';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

const openBrowser = async () => {
  try {
    // TODO: Insert your web address below
    const result = await WebBrowser.openBrowserAsync('https://staxpayments.com');
    console.log(result);
  } catch (error) {
    console.error('Error opening browser:', error);
  }
};

export default function BrowserTabScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#B93BE4', dark: '#4C3B8B' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#F5F7FA"
          name="network"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">In-App Browser</ThemedText>
      </ThemedView>
      {Platform.select({
        ios: (
          <ThemedText>
            Click the button below to open an In-App &nbsp;
            <ThemedText type="defaultSemiBold">SFSafariWebViewController</ThemedText>{' '}
          </ThemedText>
        ),
        android: (
          <ThemedText>
            Click the button below to open an In-App{' '}
            <ThemedText type="defaultSemiBold">ChromeCustomTab</ThemedText>{' '}
          </ThemedText>
        )
      })}
      
      <TouchableOpacity
        style={styles.button}
        onPress={openBrowser}
        activeOpacity={0.8}
      >
        <ThemedText style={styles.buttonText}>Open Web Browser</ThemedText>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#116AC5',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});