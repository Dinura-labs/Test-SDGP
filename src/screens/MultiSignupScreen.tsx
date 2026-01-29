import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { Mail, Menu } from 'lucide-react-native';
import SocialButton from '../components/SocialButton';

const MultiSignupScreen = () => {
    const [step, setStep] = useState(1);
    const { width, height } = useWindowDimensions();
    
    // Constrain image size for larger screens
    const imageSize = Math.min(width * 0.8, 400);

    // Step 1: The Koala Welcome Screen
    const renderStep1 = () => (
        <View style={[styles.content, { maxWidth: 500, width: '100%' }]}>
            <Image
                source={require('../assets/koala1.jpg')}
                style={[styles.koalaImage, { width: imageSize, height: imageSize }]}
                resizeMode="contain"
            />

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>A step Closer to</Text>
                <Text style={styles.titleTextBold}>Smarter days</Text>
                <View style={styles.line} />
            </View>

            <Text style={styles.description}>
                Create an account & take a step toward self care
            </Text>

            <View style={styles.buttonWrapper}>
                <SocialButton
                    title="Sign up with Google"
                    icon={<Image source={require('../assets/Google_Favicon.png')} style={{ width: 20, height: 20 }} />}
                    onPress={() => { }}
                />
                <SocialButton
                    title="Sign up with Email"
                    icon={<Mail color="#000" size={20} />}
                    onPress={() => setStep(2)} // Goes to Step 2
                />
            </View>
        </View>
    );

    // Step 2: Placeholder for the next part of signup
    const renderStep2 = () => (
        <View style={[styles.content, { maxWidth: 500, width: '100%' }]}>
            <Text style={styles.titleTextBold}>Create Account</Text>
            <Text style={styles.description}>Enter your details to get started</Text>
            {/* You can add Input fields here later */}
            <TouchableOpacity style={styles.backBtn} onPress={() => setStep(1)}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header, { maxWidth: 500, width: '100%', alignSelf: 'center' }]}>
                <TouchableOpacity>
                    <Menu color="#333" size={28} />
                </TouchableOpacity>
            </View>

            <View style={styles.centerContainer}>
                 {step === 1 ? renderStep1() : renderStep2()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FEFBF7' },
    centerContainer: { flex: 1, alignItems: 'center', width: '100%' },
    header: { paddingHorizontal: 20, alignItems: 'flex-end', paddingTop: 10 },
    content: { flex: 1, alignItems: 'center', paddingHorizontal: 30 },
    koalaImage: { marginTop: 20 },
    titleContainer: { alignItems: 'center', marginTop: 30 },
    titleText: { fontSize: 28, color: '#0D1B2A', fontWeight: '400' },
    titleTextBold: { fontSize: 32, color: '#0D1B2A', fontWeight: 'bold' },
    line: { width: 180, height: 2, backgroundColor: '#0D1B2A', marginTop: 5 },
    description: { fontSize: 16, color: '#555', textAlign: 'center', marginTop: 25, lineHeight: 22 },
    buttonWrapper: { width: '100%', marginTop: 40 },
    backBtn: { marginTop: 20, padding: 10 }
});

export default MultiSignupScreen;