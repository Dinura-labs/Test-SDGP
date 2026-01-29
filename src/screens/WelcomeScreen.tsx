import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { MoveRight } from 'lucide-react-native';

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.content}>
                    {/* Title Section */}
                    <View style={styles.titleWrapper}>
                        <Text style={styles.welcomeText}>Welcome to the</Text>
                        <View style={styles.brandRow}>
                            <Text style={styles.solarText}>Solar </Text>
                            <View style={styles.koalaBadge}>
                                <Text style={styles.koalaText}>Koala</Text>
                            </View>
                        </View>
                        <Text style={styles.groupText}>by Group cs-73</Text>
                    </View>

                    {/* Subtitle */}
                    <Text style={styles.subtitle}>
                        Your intelligent solar partner for a brighter tomorrow ☀️🌿
                    </Text>

                    {/* Main Logo Image */}
                    <Image
                        source={require('../assets/logo.jpg')}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />

                    {/* Footer Section */}
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.getStartedBtn} onPress={onGetStarted}>
                            <Text style={styles.btnText}>Get Started</Text>
                            <MoveRight color="#FFF" size={20} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>

                        <View style={styles.signInWrapper}>
                            <Text style={styles.alreadyAccountText}>Already have an account? </Text>
                            <TouchableOpacity>
                                <Text style={styles.signInText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: 480,
        alignSelf: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        paddingVertical: 40,
    },
    titleWrapper: {
        alignItems: 'center',
        marginTop: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: '700',
        color: '#4A3428',
    },
    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    solarText: {
        fontSize: 32,
        fontWeight: '400',
        color: '#000',
    },
    koalaBadge: {
        backgroundColor: '#000',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
    koalaText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
    },
    groupText: {
        fontSize: 12,
        color: '#999',
        marginTop: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        paddingHorizontal: 10,
        lineHeight: 24,
    },
    logoImage: {
        width: '80%',
        height: undefined,
        aspectRatio: 1,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
    },
    getStartedBtn: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 35,
        borderRadius: 40,
        width: '100%',
    },
    btnText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
    signInWrapper: {
        flexDirection: 'row',
        marginTop: 25,
    },
    alreadyAccountText: {
        color: '#777',
        fontSize: 14,
    },
    signInText: {
        color: '#E67E22',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default WelcomeScreen;