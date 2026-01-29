import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    useWindowDimensions,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Mail, Menu, ArrowLeft, Eye, EyeOff, Check } from 'lucide-react-native';
import SocialButton from '../components/SocialButton';

const MultiSignupScreen = () => {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);

    const { width } = useWindowDimensions();
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
                    onPress={() => setStep(2)}
                />
            </View>
        </View>
    );

    // Step 2: Full Email Signup Form (Updated UI)
    const renderStep2 = () => (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, width: '100%' }}
        >
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: '100%' }}
            contentContainerStyle={[styles.content, { maxWidth: 500, alignSelf: 'center' }]}
        >
            <View style={styles.formHeader}>
                <Text style={styles.headerTitle}>Sign up</Text>
                <View style={styles.loginPrompt}>
                    <Text style={styles.alreadyAccountText}>Already have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signInLink}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#999"
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                    </TouchableOpacity>
                </View>

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirm Password"
                        secureTextEntry={!showConfirmPassword}
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <EyeOff size={20} color="#269396" /> : <Eye size={20} color="#269396" />}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setAgree(!agree)}
                >
                    <View style={[styles.checkbox, agree && styles.checkboxChecked]}>
                        {agree && <Check size={14} color="#FFF" strokeWidth={3} />}
                    </View>
                    <Text style={styles.checkboxLabel}>I agree to terms & conditions</Text>
                </TouchableOpacity>

                <Text style={styles.disclaimerText}>
                    By continuing, I agree to SolarKoala's <Text style={styles.linkText}>Terms of Service</Text>.
                    I also consent to the use of my app usage data to improve SolarKoala. Team CS-73 will never use your journal entries.
                    See our <Text style={styles.linkText}>Privacy Policy</Text> for more information.
                </Text>

                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header, { maxWidth: 500, width: '100%', alignSelf: 'center' }]}>
                <TouchableOpacity onPress={() => step > 1 && setStep(1)}>
                    {step > 1 ? <ArrowLeft color="#333" size={28} /> : <View style={{ width: 28 }} />}
                </TouchableOpacity>
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
    container: { flex: 1, backgroundColor: '#F8FBFF' },
    centerContainer: { flex: 1, alignItems: 'center', width: '100%' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10
    },
    content: { flex: 1, paddingHorizontal: 24, paddingBottom: 30 },
    koalaImage: { marginTop: 20 },
    titleContainer: { alignItems: 'center', marginTop: 30 },
    titleText: { fontSize: 28, color: '#0D1B2A', fontWeight: '400' },
    titleTextBold: { fontSize: 32, color: '#0D1B2A', fontWeight: 'bold' },
    line: { width: 180, height: 2, backgroundColor: '#0D1B2A', marginTop: 5 },
    description: { fontSize: 16, color: '#555', textAlign: 'center', marginTop: 25, lineHeight: 22 },
    buttonWrapper: { width: '100%', marginTop: 40 },

    // Step 2 Styles
    formHeader: { width: '100%', marginTop: 20 },
    headerTitle: { fontSize: 36, fontWeight: 'bold', color: '#0D1B2A' },
    loginPrompt: { flexDirection: 'row', marginTop: 5, marginBottom: 30 },
    alreadyAccountText: { fontSize: 16, color: '#666' },
    signInLink: { fontSize: 16, color: '#269396', fontWeight: 'bold' },
    form: { width: '100%' },
    input: {
        backgroundColor: '#FFF',
        height: 60,
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        elevation: 2,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 60,
        borderRadius: 12,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        elevation: 2,
    },
    passwordInput: { flex: 1, fontSize: 16 },
    checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
    checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: '#269396', marginRight: 10, justifyContent: 'center', alignItems: 'center' },
    checkboxChecked: { backgroundColor: '#269396' },
    checkboxLabel: { fontSize: 15, color: '#0D1B2A', fontWeight: '500' },
    disclaimerText: { fontSize: 12, color: '#777', lineHeight: 18, marginBottom: 30 },
    linkText: { color: '#269396', fontWeight: '600' },
    continueButton: {
        backgroundColor: '#269396',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default MultiSignupScreen;